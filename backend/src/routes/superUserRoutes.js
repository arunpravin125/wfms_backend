import express from "express";
import bcrypt from "bcryptjs";
import {
  requireSuperuser,
  signSuperuserPayload,
} from "../middlewares/superUserMiddleware.js";
import { generateOtp } from "../utils/otp.js";
import { prisma } from "../db/prisma.js";
import { sendMail } from "../utils/mailer.js";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import { shortId } from "../utils/generateId.js";
dotenv.config();
export const superUserRouter = express.Router();

// OTP validity in minutes
const OTP_TTL_MINUTES_CREATE_SUPER = 5;
const OTP_TTL_MINUTES_LOGIN = 5;

// helper to clear OTPs for a user
async function clearOtpsForUser(userId) {
  await prisma.loginOTP.deleteMany({ where: { userId } });
}

// ============================================================
// 1️⃣ Create Superuser (inactive) from .env + send OTP
// ============================================================
superUserRouter.get("/setup/SuperUserInit", async (req, res) => {
  try {
    const username = process.env.SUPERUSER_USERNAME;
    const email = process.env.SUPERUSER_EMAIL;
    const password = process.env.SUPERUSER_PASSWORD;

    if (!username || !email || !password) {
      return res.status(400).json({
        error: "SUPERUSER_USERNAME / EMAIL / PASSWORD not set in .env",
      });
    }

    const existing = await prisma.employee.findFirst({
      where: { isSuperuser: true },
    });
    if (existing) {
      return res.status(200).json({
        message: "A superuser already exists. No action taken.",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.employee.create({
      data: {
        publicId: shortId(4),
        username,
        email,
        passwordHash,
        isActive: false,
        isSuperuser: true,
        isStaff: true,
        role: "Admin",
        department: "Management",
        level: 0,
      },
    });

    // create OTP
    await clearOtpsForUser(user.id);
    const otp = generateOtp(6);
    const expiresAt = new Date(
      Date.now() + OTP_TTL_MINUTES_CREATE_SUPER * 60 * 1000
    );

    await prisma.loginOTP.create({
      data: { userId: user.id, otp, expiresAt },
    });

    await sendMail({
      to: user.email,
      subject: "Verify your Superuser Creation (OTP)",
      text: `Your OTP is ${otp}. It expires in ${OTP_TTL_MINUTES_CREATE_SUPER} minutes.`,
    });

    return res.json({
      message: `Superuser created (inactive). OTP sent to ${user.email}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" + err });
  }
});

// ============================================================
// 2️⃣ Verify OTP for superuser activation
// ============================================================
superUserRouter.post("/setup/superuser-verify", async (req, res) => {
  try {
    const { username, otp } = req.body;
    if (!username || !otp)
      return res.status(400).json({ error: "username and otp required" });

    const user = await prisma.employee.findUnique({ where: { username } });
    if (!user || !user.isSuperuser)
      return res.status(404).json({ error: "Superuser not found" });

    const otpRec = await prisma.loginOTP.findFirst({
      where: { userId: user.id, otp },
      orderBy: { createdAt: "desc" },
    });

    if (!otpRec || otpRec.expiresAt < new Date()) {
      if (!user.isActive) {
        await prisma.loginOTP.deleteMany({ where: { userId: user.id } });
        await prisma.employee.delete({ where: { id: user.id } });
      }
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    await prisma.employee.update({
      where: { id: user.id },
      data: { isActive: true },
    });
    await prisma.loginOTP.deleteMany({ where: { userId: user.id } });

    return res.json({ message: "Superuser activated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" + err });
  }
});

// ============================================================
// 3️⃣ Superuser login (password + OTP sent)
// ============================================================
superUserRouter.post("/auth/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ error: "username and password required" });

    const user = await prisma.employee.findUnique({ where: { username } });
    if (!user || !user.isSuperuser)
      return res.status(404).json({ error: "Superuser not found" });
    if (!user.isActive)
      return res.status(403).json({ error: "Superuser not active" });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ error: "Invalid password" });

    await clearOtpsForUser(user.id);
    const otp = generateOtp(6);
    const expiresAt = new Date(Date.now() + OTP_TTL_MINUTES_LOGIN * 60 * 1000);

    await prisma.loginOTP.create({
      data: { userId: user.id, otp, expiresAt },
    });

    await sendMail({
      to: user.email,
      subject: "Your Superuser OTP",
      text: `Hello ${user.username}, your OTP is ${otp}. It expires in ${OTP_TTL_MINUTES_LOGIN} minutes.`,
    });

    return res.json({ message: `OTP sent to ${user.email}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" + err });
  }
});

// ============================================================
// 4️⃣ Verify OTP (superuser login) → issue JWT cookie
// ============================================================
superUserRouter.post("/authSuperUser/verify-otp", async (req, res) => {
  try {
    const { username, otp } = req.body;
    if (!username || !otp)
      return res.status(400).json({ error: "username and otp required" });

    const user = await prisma.employee.findUnique({ where: { username } });
    if (!user || !user.isSuperuser)
      return res.status(404).json({ error: "Superuser not found" });

    const otpRec = await prisma.loginOTP.findFirst({
      where: { userId: user.id, otp },
      orderBy: { createdAt: "desc" },
    });
    if (!otpRec || otpRec.expiresAt < new Date()) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    // Issue JWT
    const token = signSuperuserPayload(user);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60,
    });

    await prisma.loginOTP.deleteMany({ where: { userId: user.id } });

    return res.json({ message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" + err });
  }
});

// ============================================================
// 5️⃣ Create L1 Admin (CEO) — Protected
// ============================================================
superUserRouter.post("/admin/create_L1", requireSuperuser, async (req, res) => {
  try {
    const exists = await prisma.employee.findFirst({
      where: { level: 1, role: "CEO" },
    });
    console.log("create_L1", exists);
    if (exists)
      return res.status(409).json({ error: "L1 Admin (CEO) already exists" });

    const {
      username,
      password,
      confirmPassword,
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      gender,
      address,
      department = "Management",
      role = "CEO",
      level = 1,
      educations = [],
      emergencyContacts = [],
    } = req.body;

    if (!username || !password || !confirmPassword)
      return res.status(400).json({
        error: "username, password, and confirmPassword required",
      });

    if (password !== confirmPassword)
      return res.status(400).json({ error: "Passwords do not match" });

    const existingUser = await prisma.employee.findUnique({
      where: { username },
    });
    if (existingUser)
      return res.status(409).json({ error: "Username already taken" });

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await prisma.employee.create({
      data: {
        publicId: shortId(4),
        username,
        email,
        phone,
        firstName,
        lastName,
        passwordHash,
        isActive: true,
        isSuperuser: false,
        isStaff: true,
        role,
        level,
        department,
        gender,
        address,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
      },
    });

    // Educations
    for (const e of educations) {
      if (!e.degree_name) continue;
      await prisma.education.create({
        data: {
          employeeId: newUser.id,
          degree_name: e.degree_name,
          university_name: e.university_name || "",
          graduation_year: e.graduation_year || "",
        },
      });
    }

    // Emergency Contacts
    for (const ec of emergencyContacts) {
      if (!ec.name || !ec.phone) continue;
      await prisma.emergencyContact.create({
        data: {
          employeeId: newUser.id,
          name: ec.name,
          phone: ec.phone,
          address: ec.address || null,
        },
      });
    }

    return res.json({
      message: "L1 Admin (CEO) created successfully",
      username: newUser.username,
      id: newUser.id,
    });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Server error" + err });
  }
});
