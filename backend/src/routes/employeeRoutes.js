import express from "express";
import {
  login,
  verifyLoginOtp,
  logout,
  forgotPassword,
  verifyOtpController,
  resetPassword,
  me,
  hibernate,
  reauth,
  updateProfile,
  createEmployee,
} from "../controllers/employeeController.js";
import { requireAuth, requireL1OrHOD } from "../middlewares/authMiddleware.js";

export const employeeRoutes = express.Router();

// URLs mirror your Django urls.py
employeeRoutes.post("/login/", login);
employeeRoutes.post("/logout/", logout);
employeeRoutes.post("/forgot-password/", forgotPassword);
employeeRoutes.post("/auth/verify-otp/", verifyLoginOtp); // login OTP verify
employeeRoutes.post("/verify-otp/", verifyOtpController);
employeeRoutes.patch("/update-profile/", requireAuth, updateProfile);
employeeRoutes.post("/reset-password/", resetPassword);
employeeRoutes.get("/me/", requireAuth, me);
employeeRoutes.post("/hibernate/", requireAuth, hibernate);
employeeRoutes.post("/reauth/", reauth);
// create employee (requires L1 or HOD)
employeeRoutes.post("/create/", requireAuth, requireL1OrHOD, createEmployee);

// // backend/src/routes/employee.js
// import express from "express";
// // import * as ctrl from "../controllers/employeeController.js";
// import {
//   amsList,
//   createEmployee,
//   forgotPassword,
//   hibernate,
//   login,
//   logout,
//   me,
//   reauth,
//   resetPassword,
//   verifyOtpController,
// } from "../controllers/employeeController.js";
// import { authMiddleware } from "../middlewares/auth.js";
// import { isAdmin } from "../middlewares/adminMiddleware.js";
// import { protectRoute } from "../middlewares/protectRoute.js";

// export const employeeRoutes = express.Router();

// employeeRoutes.post("/create", protectRoute, isAdmin, createEmployee);
// // employeeRoutes.post("/login", login);
// // employeeRoutes.post("/logout", logout);
// employeeRoutes.post("/forgot-password", forgotPassword);
// employeeRoutes.post("/verify-otp", verifyOtpController);
// employeeRoutes.post("/reset-password", resetPassword);
// employeeRoutes.get("/me", authMiddleware, me);
// employeeRoutes.post("/hibernate", authMiddleware, hibernate);
// employeeRoutes.post("/reauth", reauth);
// employeeRoutes.post(
//   "/update-profile",
//   authMiddleware,
//   isAdmin,
//   async (req, res) => {
//     // implement update profile logic similar to Django serializer update
//     const updates = req.body;
//     if (!req.user) return res.status(401).json({ error: "Unauthorized" });
//     const updated = await prisma.employee.update({
//       where: { id: req.user.id },
//       data: updates,
//     });
//     res.json({ employee: updated });
//   }
// );
// employeeRoutes.get("/ams", authMiddleware, amsList);

// // export default router;
