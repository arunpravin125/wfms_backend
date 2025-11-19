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
  createFilterData,
  getFilteredData,
  editFilteredData,
  deleteFilterData,
  addBulkData,
  getEmployeesData,
  createEmployeeOTP,
} from "../controllers/employeeController.js";
import { requireAuth, requireL1OrHOD } from "../middlewares/authMiddleware.js";

export const employeeRoutes = express.Router();

// URLs mirror your Django urls.py
employeeRoutes.post("/login/", login);
employeeRoutes.post("/logout/", logout);
employeeRoutes.post("/forgot-password/", forgotPassword);
employeeRoutes.post("/auth/verify-otp/", verifyLoginOtp); // login OTP verify
// verify otp forgotPassword
employeeRoutes.post("/verify-otp/", verifyOtpController);
employeeRoutes.put("/updateProfile/", requireAuth, updateProfile);
employeeRoutes.post("/resetPassword/", resetPassword);
employeeRoutes.get("/me", requireAuth, me);
employeeRoutes.post("/hibernate/", requireAuth, hibernate);
employeeRoutes.post("/reauth/", reauth);
// create employee (requires L1 or HOD)
employeeRoutes.post(
  "/createEmployee",
  requireAuth,
  requireL1OrHOD,
  createEmployee
);
// create employee OTP
employeeRoutes.post(
  "/createEmployee/OTP",
  requireAuth,
  requireL1OrHOD,
  createEmployeeOTP
);
// filters list
employeeRoutes.post(
  "/createFiltersData",
  requireAuth,
  requireL1OrHOD,
  createFilterData
);
// getFilterData
employeeRoutes.get(
  "/getFiltersData",
  requireAuth,
  requireL1OrHOD,
  getFilteredData
);
// editFilterData
employeeRoutes.put(
  "/EditFiltersData/:id",
  requireAuth,
  requireL1OrHOD,
  editFilteredData
);
// deleteFilterData
employeeRoutes.delete(
  "/deleteFiltersData/:id",
  requireAuth,
  requireL1OrHOD,
  deleteFilterData
);
// add bulk data
employeeRoutes.post("/addBulkdata", requireAuth, requireL1OrHOD, addBulkData);
employeeRoutes.get(
  "/getEmployees",
  requireAuth,
  requireL1OrHOD,
  getEmployeesData
);
