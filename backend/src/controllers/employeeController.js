// backend/src/controllers/employeeController.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { shortId } from "../utils/generateId.js";
// import { saveOtp, verifyOtp } from "../services/otpService.js";

import { saveOtp, verifyOtp, clearOtp } from "../services/otpServices.js";
import { prisma } from "../db/prisma.js";
const ACCESS_EXPIRES_SECONDS = 60 * 15; // 15 min
const REFRESH_EXPIRES_SECONDS = 60 * 60 * 24 * 30; // 30 days
const JWT_SECRET = process.env.JWT_SECRET || "changeme";
const COOKIE_NAME = "refresh_token";

function signAccessToken(user) {
  return jwt.sign({ id: user.id, publicId: user.publicId }, JWT_SECRET, {
    expiresIn: `${ACCESS_EXPIRES_SECONDS}s`,
  });
}
function signRefreshToken(user) {
  return jwt.sign(
    { id: user.id, publicId: user.publicId, type: "refresh" },
    JWT_SECRET,
    { expiresIn: `${REFRESH_EXPIRES_SECONDS}s` }
  );
}

export const createEmployee = async (req, res) => {
  const { fullName, username, password, gender } = req.body;
  if (!fullName || !username || !password || !gender)
    return res.status(400).json({ error: "Missing fields" });

  const existing = await prisma.employee.findUnique({ where: { username } });
  if (existing) return res.status(400).json({ error: "Username taken" });

  const [firstName, ...rest] = fullName.split(" ");
  const hashed = await bcrypt.hash(password, 10);
  const newUser = await prisma.employee.create({
    data: {
      publicId: shortId(8),
      username,
      password: hashed,
      firstName,
      lastName: rest.join(" "),
      gender,
      profilePic: "",
    },
  });
  return res.status(201).json({
    message: "Employee created",
    employee: { id: newUser.publicId, username: newUser.username },
  });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Missing username/password" });

  const user = await prisma.employee.findUnique({ where: { username } });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ error: "Invalid credentials" });

  // remove old sessions (as Django code did)
  await prisma.employeeSession.deleteMany({ where: { employeeId: user.id } });

  // mark login (update lastLogin)
  await prisma.employee.update({
    where: { id: user.id },
    data: { lastLogin: new Date() },
  });

  const refreshToken = signRefreshToken(user);
  const accessToken = signAccessToken(user);

  // store session
  await prisma.employeeSession.create({
    data: {
      employeeId: user.id,
      refreshToken,
      expiresAt: new Date(Date.now() + REFRESH_EXPIRES_SECONDS * 1000),
      lastActive: new Date(),
      isHibernated: false,
    },
  });

  // set refresh cookie (httpOnly)
  res.cookie(COOKIE_NAME, refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: REFRESH_EXPIRES_SECONDS * 1000,
    secure: process.env.NODE_ENV === "production",
  });

  return res.json({
    id: user.publicId,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
    level: user.level,
    tokens: { access: accessToken, refresh: refreshToken },
  });
};

export const logout = async (req, res) => {
  const { session_id } = req.body;
  const refreshFromBody = req.body.refresh;
  // delete session if id provided and user authenticated
  if (session_id && req.user) {
    await prisma.employeeSession.deleteMany({
      where: { id: session_id, employeeId: req.user.id },
    });
  }
  // delete refresh cookie and remove session by refresh token
  const cookieRefresh = req.cookies[COOKIE_NAME];
  if (cookieRefresh) {
    await prisma.employeeSession.deleteMany({
      where: { refreshToken: cookieRefresh },
    });
    res.clearCookie(COOKIE_NAME);
  }
  if (refreshFromBody) {
    await prisma.employeeSession.deleteMany({
      where: { refreshToken: refreshFromBody },
    });
  }
  // Note: token blacklisting is not implemented (requires store). We remove server session so refresh fails later.
  return res.json({ message: "Logout successful" });
};

export const forgotPassword = async (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: "username required" });
  const user = await prisma.employee.findUnique({ where: { username } });
  if (!user) return res.status(404).json({ error: "User not found" });
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  saveOtp(user.publicId, otp, 300);
  // send OTP via email/sms (not implemented)
  return res.json({ message: "OTP sent", publicId: user.publicId });
};

// export const verifyOtpController = async (req, res) => {
//   const { publicId, otp } = req.body;
//   if (!verifyOtp(publicId, otp))
//     return res.status(400).json({ error: "Invalid or expired OTP" });
//   return res.json({ message: "OTP verified" });
// };

export async function resetPassword(req, res) {
  const { publicId, otp, newPassword } = req.body;
  if (!verifyOtp(publicId, otp))
    return res.status(400).json({ error: "Invalid OTP" });
  const user = await prisma.employee.findUnique({ where: { publicId } });
  if (!user) return res.status(404).json({ error: "User not found" });
  const hashed = await bcrypt.hash(newPassword, 10);
  await prisma.employee.update({
    where: { publicId },
    data: { password: hashed },
  });
  return res.json({ message: "Password reset successful" });
}

export const me = async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Not authenticated" });
  // hide sensitive fields
  const { password, ...rest } = req.user;
  return res.json({ user: rest });
};

export const reauth = async (req, res) => {
  // Reauth using session id & password (like Django's reauth)
  const { session_id, password } = req.body;
  if (!session_id || !password)
    return res.status(400).json({ error: "session_id and password required" });
  const session = await prisma.employeeSession.findUnique({
    where: { id: session_id },
  });
  if (!session) return res.status(400).json({ error: "No active session" });
  const user = await prisma.employee.findUnique({
    where: { id: session.employeeId },
  });
  if (!user) return res.status(400).json({ error: "No user for session" });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ error: "Invalid password" });
  // update refresh token stored in session
  const newRefresh = signRefreshToken(user);
  await prisma.employeeSession.update({
    where: { id: session.id },
    data: {
      refreshToken: newRefresh,
      isHibernated: false,
      lastActive: new Date(),
    },
  });
  res.cookie(COOKIE_NAME, newRefresh, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: REFRESH_EXPIRES_SECONDS * 1000,
    secure: process.env.NODE_ENV === "production",
  });
  return res.json({
    message: "Re-auth successful",
    tokens: { refresh: newRefresh, access: signAccessToken(user) },
  });
};

export const hibernate = async (req, res) => {
  // mark session as hibernated (session_id in body)
  const { session_id } = req.body;
  if (!session_id)
    return res.status(400).json({ error: "session_id required" });
  await prisma.employeeSession.updateMany({
    where: { id: session_id },
    data: { isHibernated: true },
  });
  res.json({ message: "Session hibernated" });
};

export const amsList = async (req, res) => {
  // list all employees excluding level 0 as in Django AMSListView
  const employees = await prisma.employee.findMany({
    where: { NOT: { level: 0 } },
    select: {
      publicId: true,
      username: true,
      firstName: true,
      lastName: true,
      level: true,
      role: true,
      id: true,
    },
  });
  res.json(employees);
};

// ===============================================
// ✅ Add this at the bottom of employeeController.js
// ===============================================

export const verifyLoginOtp = async (req, res) => {
  try {
    const { username, otp } = req.body;
    if (!username || !otp)
      return res.status(400).json({ error: "username and otp required" });

    const user = await prisma.employee.findUnique({ where: { username } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const valid = verifyOtp(user.publicId, otp);
    if (!valid)
      return res.status(400).json({ error: "Invalid or expired OTP" });

    // delete used OTP
    clearOtp(user.publicId);

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);

    await prisma.employeeSession.create({
      data: {
        employeeId: user.id,
        refreshToken,
        expiresAt: new Date(Date.now() + REFRESH_EXPIRES_SECONDS * 1000),
        lastActive: new Date(),
      },
    });

    res.cookie(COOKIE_NAME, refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: REFRESH_EXPIRES_SECONDS * 1000,
      secure: process.env.NODE_ENV === "production",
    });

    return res.json({
      message: "Login successful",
      tokens: { access: accessToken, refresh: refreshToken },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Simple OTP verify (used for /verify-otp/)
export const verifyOtpController = async (req, res) => {
  try {
    const { publicId, otp } = req.body;
    if (!publicId || !otp)
      return res.status(400).json({ error: "publicId and otp required" });

    const valid = verifyOtp(publicId, otp);
    if (!valid)
      return res.status(400).json({ error: "Invalid or expired OTP" });

    clearOtp(publicId);
    return res.json({ message: "OTP verified successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Update profile (used for /update-profile/)
export const updateProfile = async (req, res) => {
  try {
    const user = req.user;
    const { firstName, lastName, email, phone, gender } = req.body;

    const updated = await prisma.employee.update({
      where: { id: user.id },
      data: { firstName, lastName, email, phone, gender },
    });

    return res.json({
      message: "Profile updated successfully",
      employee: {
        publicId: updated.publicId,
        username: updated.username,
        firstName: updated.firstName,
        lastName: updated.lastName,
        email: updated.email,
        phone: updated.phone,
        gender: updated.gender,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
