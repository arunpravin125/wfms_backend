// backend/src/controllers/employeeController.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

import { shortId } from "../utils/generateId.js";
// import { saveOtp, verifyOtp } from "../services/otpService.js";

import { saveOtp, verifyOtp, clearOtp } from "../services/otpServices.js";
import { prisma } from "../db/prisma.js";
import { MOCK_EMPLOYEE_LIST } from "../db/employees.js";

import { sendMail } from "../utils/mailer.js";
const ACCESS_EXPIRES_SECONDS = 60 * 30; // 8 hours
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

export const login = async (req, res) => {
  const { username, password } = req.body;
  console.log("login", username, password);

  try {
    if (!username || !password)
      return res.status(400).json({ error: "Missing username/password" });

    const user = await prisma.employee.findUnique({
      where: { username },
      include: { educations: true, emergencyContacts: true },
    });

    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    // Password check
    // if (password !== user.passwordHash) {
    //   return res.status(401).json({ error: "Invalid credentials" });
    // }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });

    // Remove old sessions
    await prisma.employeeSession.deleteMany({ where: { employeeId: user.id } });

    // Update last login
    await prisma.employee.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    const refreshToken = signRefreshToken(user);
    const accessToken = signAccessToken(user);

    // Create new session
    await prisma.employeeSession.create({
      data: {
        sessionId: uuidv4(),
        employeeId: user.id,
        refreshToken,
        expiresAt: new Date(Date.now() + REFRESH_EXPIRES_SECONDS * 1000),
        lastActive: new Date(),
        isHibernated: false,
      },
    });

    // Set cookies
    res.cookie(COOKIE_NAME, refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: REFRESH_EXPIRES_SECONDS * 1000,
      secure: process.env.NODE_ENV === "production",
    });

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 30 * 60 * 1000,
      secure: process.env.NODE_ENV === "production",
    });

    return res.json({
      user,
      tokens: { access: accessToken, refresh: refreshToken },
    });
  } catch (error) {
    console.log("error in login", error);
    res.status(500).json({ error: "Server error" });
  }
};
// create employee
export const createEmployee = async (req, res) => {
  const currentUser = req?.user;
  try {
    const {
      fullName,
      username,
      password,
      gender,
      email,
      phone,
      dateOfBirth,
      address,
      department,
      role,
      level,
      educations = [],
      emergencyContacts = [],
      profilePic,
      otpNumber,
    } = req.body;

    console.log(
      fullName,
      username,
      password,
      gender,
      email,
      phone,
      dateOfBirth,
      address,
      department,
      role,
      level,
      educations,
      emergencyContacts,
      profilePic,
      otpNumber
    );

    // -----------------------------------
    // 🛑 VALIDATION
    // -----------------------------------
    if (
      !fullName ||
      !username ||
      !password ||
      !gender ||
      !dateOfBirth ||
      !department ||
      !role ||
      !level
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Username check
    const existing = await prisma.employee.findUnique({
      where: { username },
    });

    const existingEmail = await prisma.employee.findUnique({
      where: { email },
    });

    if (existingEmail) {
      return res.status(400).json({ error: "email already have" });
    }

    if (existing) {
      return res.status(400).json({ error: "Username taken" });
    }

    // -----------------------------------
    // 🧩 FIRST NAME / LAST NAME
    // -----------------------------------
    const nameParts = fullName.trim().split(" ");

    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    // -----------------------------------
    // 🔐 PASSWORD HASH
    // -----------------------------------
    const hashedPassword = await bcrypt.hash(password, 10);

    // -----------------------------------
    // 📅 CONVERT DOB → ISO FORMAT
    // -----------------------------------
    const isoDob = dateOfBirth ? new Date(dateOfBirth).toISOString() : null;
    // console.log({ isoDob });
    // -----------------------------------
    let otp = otpNumber;
    const valid = verifyOtp(currentUser.publicId, otp);
    if (!valid)
      return res.status(400).json({ error: "Invalid or expired OTP" });

    // delete used OTP
    clearOtp(currentUser.publicId);
    // 👤 CREATE BASE EMPLOYEE RECORD
    // -----------------------------------
    const newUser = await prisma.employee.create({
      data: {
        publicId: shortId(6),
        username,
        passwordHash: hashedPassword,

        firstName,
        lastName,
        email,
        phone,
        department,
        role,
        level,
        gender,
        dateOfBirth: isoDob,
        address,
        profilePic,
      },
    });

    // -----------------------------------
    // 🎓 EDUCATION INSERT
    // -----------------------------------
    for (const e of educations) {
      if (!e.degree) continue;
      new Date(req.body.dateOfBirth).toISOString();

      const graduationYear = e.graduationYear
        ? parseInt(e.graduationYear, 10)
        : null;
      // /dfdfgdfgdg
      await prisma.education.create({
        data: {
          employeeId: newUser.id,
          degree: e.degree,
          university: e.university || "",
          graduationYear: graduationYear || e.graduationYear,
        },
      });
    }

    // -----------------------------------
    // 🚨 EMERGENCY CONTACTS INSERT
    // -----------------------------------
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

    // -----------------------------------
    // ✅ SUCCESS RESPONSE
    // -----------------------------------
    return res.status(201).json({
      message: "Employee created successfully",
      employee: { publicId: newUser.publicId, username: newUser.username },
    });
  } catch (error) {
    console.log("Error creating employee:", error);
    return res
      .status(500)
      .json({ error: "Server error", details: error.message });
  }
};

// createEmployee OTP verify

export const createEmployeeOTP = async (req, res) => {
  try {
    const adminORLevelUser = req.user;
    // const { username } = req.body;
    console.log("adminORLevelUser:", adminORLevelUser);
    const user = await prisma.employee.findUnique({
      where: { username: adminORLevelUser.username },
    });
    if (!user) return res.status(404).json({ error: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await saveOtp(user.publicId, otp, 300);

    // SEND EMAIL using correct function
    await sendMail({
      to: user.email,
      subject: "Your Add Employee OTP Code",
      text: `Your OTP is ${otp}. It expires in 5 minutes.`,
    });
    res.status(200).json({ otp, message: "OTP sent to email" });
  } catch (error) {
    console.log("error in createEmployeeOTP", error);
    res.status(500).json({ error: "Error in createEmployeeOTP " + error });
  }
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

// forgotPassword with otp sent
export const forgotPassword = async (req, res) => {
  const { username } = req.body;
  try {
    if (!username) return res.status(400).json({ error: "username required" });

    const user = await prisma.employee.findUnique({ where: { username } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await saveOtp(user.publicId, otp, 300);

    // SEND EMAIL using correct function
    await sendMail({
      to: user.email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}. It expires in 5 minutes.`,
    });

    return res.json({
      message: "OTP sent successfully",
      publicId: user.publicId,
    });
  } catch (error) {
    console.log("error in forgotPassword", error);
    res.status(500).json({ error: error.message });
  }
};

export async function resetPassword(req, res) {
  const { publicId, otp, newPassword } = req.body;
  // console.log({ publicId });
  try {
    // if (!verifyOtp(publicId))
    //   return res.status(400).json({ error: "Invalid OTP" });
    const user = await prisma.employee.findUnique({ where: { publicId } });
    if (!user) return res.status(404).json({ error: "User not found" });
    // const hashed = newPassword;
    const hashed = await bcrypt.hash(newPassword, 10);
    await prisma.employee.update({
      where: { publicId: user.publicId },
      data: { passwordHash: hashed },
    });
    return res.json({ message: "Password reset successful" });
  } catch (error) {
    console.log("error in resetPassword", error);
    res.status(500).json({ error: "error in resetPassword" + error });
  }
}

export const me = async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Not authenticated" });
  // hide sensitive fields
  const tokens = req.cookies;
  //  tokens: { access: tokens.access_token, refresh: tokens.refresh_token }
  console.log("me", { tokens });
  const { password, ...rest } = req.user;
  const getCurrentUser = await prisma.employee.findFirst({
    where: { publicId: req.user.publicId },
    include: {
      educations: true,
      emergencyContacts: true,
    },
  });
  const user = getCurrentUser;

  return res.json({
    user,
    tokens: { access: tokens.access_token, refresh: tokens.refresh_token },
  });
};

export const reauth = async (req, res) => {
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
    res.status(500).json({ error: "Server error " + err });
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
    const currentUser = req.user;
    const tokens = req.cookies;
    console.log("updateProfile", currentUser, "tokens", tokens);

    // Allowed simple fields to update
    const allowedFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "gender",
      "username",
      "department",
      "role",
      "level",
      "dateOfBirth",
      "address",
    ];

    const updateData = {};

    // Build simple update object dynamically
    for (let field of allowedFields) {
      if (req.body[field] !== undefined && req.body[field] !== "") {
        // 🔥 Special handling for dateOfBirth
        if (field === "dateOfBirth") {
          updateData.dateOfBirth = new Date(req.body.dateOfBirth).toISOString();
        } else {
          updateData[field] = req.body[field];
        }
      }
    }

    // ---------------------------
    // 📌 HANDLE EDUCATIONS UPDATE
    // ---------------------------
    const educationData = req.body.educations;

    if (educationData && Array.isArray(educationData)) {
      updateData.educations = {
        deleteMany: {},
        create: educationData.map((item) => ({
          degree: item.degree,
          university: item.university,
          graduationYear: item.graduationYear
            ? parseInt(item.graduationYear, 10)
            : null,
        })),
      };
    }

    // ------------------------------------
    // 📌 HANDLE EMERGENCY CONTACTS UPDATE
    // ------------------------------------
    const emergencyContacts = req.body.emergencyContacts;

    if (emergencyContacts && Array.isArray(emergencyContacts)) {
      updateData.emergencyContacts = {
        deleteMany: {}, // remove old
        create: emergencyContacts.map((item) => ({
          name: item.name,
          phone: item.phone,
          address: item.address || null,
        })),
      };
    }

    console.log("Final Update Data:", updateData);

    // ---------------------------
    // 📌 UPDATE IN DATABASE
    // ---------------------------
    const user = await prisma.employee.update({
      where: { publicId: currentUser.publicId },
      data: updateData,
      include: {
        educations: true,
        emergencyContacts: true,
      },
    });

    return res.json({
      message: "Profile updated successfully",
      user,
      tokens: { access: tokens.access_token, refresh: tokens.refresh_token },
    });
  } catch (err) {
    console.error("Profile Update Error:", err);
    return res
      .status(401)
      .json({ error: "Server error in update profile: " + err });
  }
};

// Create or Update Filter Data (Upsert)
export const createFilterData = async (req, res) => {
  try {
    const { filterName, department, roles, level } = req.body;

    // Validation
    if (!filterName) {
      return res.status(400).json({ message: "Filter name is required." });
    }

    if (!department && !roles && !level) {
      return res
        .status(400)
        .json({ message: "At least one field is required." });
    }

    // Check if filter with the same name exists
    const existingFilter = await prisma.filterData.findUnique({
      where: { filterName },
    });

    let filter;

    if (existingFilter) {
      return res.status(400).json({ message: "Already filterName Exists" });
    } else {
      // ✅ Create new record
      filter = await prisma.filterData.create({
        data: {
          filterName,
          department: department || [],
          roles: roles || [],
          level: level || [],
        },
      });
    }

    res.status(201).json({
      message: existingFilter
        ? "Filter data updated successfully"
        : "Filter data created successfully",
      data: filter,
    });
  } catch (error) {
    console.error("❌ error in createFilterData:", error);
    res.status(500).json({ error: "Server error in createFilterData" });
  }
};

// Get Latest or Specific Filter Data
export const getFilteredData = async (req, res) => {
  try {
    const { filterName } = req.query;

    let filterData;
    if (filterName) {
      filterData = await prisma.filterData.findUnique({
        where: { filterName },
      });
    } else {
      filterData = await prisma.filterData.findFirst({
        orderBy: { createdAt: "desc" },
      });
    }

    if (!filterData) {
      return res.status(404).json({ message: "No filter data found." });
    }

    res.status(200).json({ filterData });
  } catch (error) {
    console.error("❌ error in getFilteredData:", error);
    res.status(500).json({ error: "Server error in getFilteredData" });
  }
};

// Edit Existing Filter Data by ID
export const editFilteredData = async (req, res) => {
  try {
    const { id } = req.params;
    let { department = [], roles = [], level = [] } = req.body;

    if (!id) {
      return res.status(400).json({ message: "FilterData ID is required." });
    }

    // 1️⃣ Fetch existing data
    const existingFilter = await prisma.filterData.findUnique({
      where: { id },
    });

    if (!existingFilter) {
      return res.status(404).json({ message: "Filter data not found." });
    }

    // 2️⃣ Remove duplicates (case-insensitive for strings)
    const uniqueDepartment = [
      ...new Set(department.map((d) => d.trim().toUpperCase())),
    ];
    const uniqueRoles = [...new Set(roles.map((r) => r.trim().toUpperCase()))];
    const uniqueLevel = [...new Set(level.map((lvl) => Number(lvl)))];

    // 3️⃣ Compare arrays (check if anything actually changed)
    const isSameArray = (a, b) =>
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, i) => val === b[i]);

    const isSameDepartment = isSameArray(
      existingFilter.department.map((d) => d.toUpperCase()),
      uniqueDepartment
    );
    const isSameRoles = isSameArray(
      existingFilter.roles.map((r) => r.toUpperCase()),
      uniqueRoles
    );
    const isSameLevel = isSameArray(existingFilter.level, uniqueLevel);

    if (isSameDepartment && isSameRoles && isSameLevel) {
      return res.status(400).json({
        message: "No changes detected. Filter data is already up to date.",
      });
    }

    // 4️⃣ Update record only if something changed
    const updatedFilter = await prisma.filterData.update({
      where: { id },
      data: {
        department: uniqueDepartment,
        roles: uniqueRoles,
        level: uniqueLevel,
      },
    });

    res.status(200).json({
      message: "Filter data updated successfully (duplicates removed)",
      updatedFilter,
    });
  } catch (error) {
    console.error("❌ error in editFilteredData:", error);
    res.status(500).json({ error: "Server error in editFilteredData" });
  }
};

// Delete specific values from department, roles, or level arrays
export const deleteFilterData = async (req, res) => {
  try {
    const { id } = req.params;
    let { department, roles, level } = req.body;

    if (!id) {
      return res.status(400).json({ message: "FilterData ID is required." });
    }

    // Normalize all inputs into arrays
    if (department && !Array.isArray(department)) department = [department];
    if (roles && !Array.isArray(roles)) roles = [roles];
    if (level && !Array.isArray(level)) level = [level];

    // Fetch existing data
    const existingFilter = await prisma.filterData.findUnique({
      where: { id },
    });
    if (!existingFilter) {
      return res.status(404).json({ message: "Filter data not found." });
    }

    // Remove only specified values (case-insensitive for strings)
    const updatedData = {
      department: department?.length
        ? existingFilter.department.filter(
            (dpt) =>
              !department.some((d) => d.toLowerCase() === dpt.toLowerCase())
          )
        : existingFilter.department,

      roles: roles?.length
        ? existingFilter.roles.filter(
            (r) => !roles.some((rr) => rr.toLowerCase() === r.toLowerCase())
          )
        : existingFilter.roles,

      level: level?.length
        ? existingFilter.level.filter((lvl) => !level.includes(lvl))
        : existingFilter.level,
    };

    // If all arrays are empty, delete the record completely
    if (
      updatedData.department.length === 0 &&
      updatedData.roles.length === 0 &&
      updatedData.level.length === 0
    ) {
      await prisma.filterData.delete({ where: { id } });
      return res.status(200).json({
        message:
          "All filter values removed — FilterData record deleted successfully",
      });
    }

    // Update record otherwise
    const updatedFilter = await prisma.filterData.update({
      where: { id },
      data: updatedData,
    });

    res.status(200).json({
      message: "Specified filter values removed successfully",
      updatedFilter,
    });
  } catch (error) {
    console.error("❌ error in deleteFilterData:", error);
    res.status(500).json({ error: "Server error in deleteFilterData" });
  }
};

// import employees from "./employees.json"; // or wherever your data is stored
export const addBulkData = async (req, res) => {
  try {
    for (const emp of MOCK_EMPLOYEE_LIST) {
      await prisma.employee.upsert({
        where: { username: emp.username }, // unique field
        update: {}, // no update on conflict

        create: {
          publicId: emp.public_id,
          username: emp.username,
          email: emp.email,
          phone: emp.phone,

          firstName: emp.first_Name,
          lastName: emp.last_Name,

          // ⚠ store hashed password in production
          passwordHash: emp.password,

          role: emp.role,
          department: emp.department,
          level: emp.level,

          dateOfBirth: emp.date_of_birth ? new Date(emp.date_of_birth) : null,
          gender: emp.gender,
          address: emp.address,

          // ====== NESTED EDUCATIONS ======
          educations: {
            create:
              emp.education?.map((e) => ({
                degree: e.degree_name,
                university: e.university_name,
                graduationYear: e.graduation_year
                  ? String(e.graduation_year)
                  : null,
              })) || [],
          },

          // ====== NESTED EMERGENCY CONTACTS ======
          emergencyContacts: {
            create:
              emp.emergency_contacts?.map((c) => ({
                name: c.name,
                phone: c.phone,
                address: c.address,
              })) || [],
          },
        },
      });
    }

    return res.status(200).json({
      message: "Bulk Insert Completed Successfully!",
    });
  } catch (err) {
    console.error("❌ Bulk Insert Error:", err);
    return res.status(500).json({
      error: "Bulk Insert Failed",
      details: err.message,
    });
  } finally {
    await prisma.$disconnect();
  }
};

export const getEmployeesData = async (req, res) => {
  try {
    const getAllEmployee = await prisma.employee.findMany({
      orderBy: {
        id: "asc",
      },
    });

    res.status(200).json(getAllEmployee);
  } catch (error) {
    console.log("error in getEmployeesData", error);
    res
      .status(500)
      .json({ error: "Failed to fetch employees", details: error.message });
  }
};
