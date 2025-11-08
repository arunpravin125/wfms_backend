import express from "express";
import { getAllUsers, deleteUser } from "../controllers/adminController.js";
// import { protect } from "../middleware/authMiddleware.js";
// import { isAdmin } from "../middleware/adminMiddleware.js";
import { protectRoute } from "../middlewares/protectRoute.js";
import { isAdmin } from "../middlewares/adminMiddleware.js";

export const adminRoutes = express.Router();

adminRoutes.get("/users", protectRoute, isAdmin, getAllUsers);
adminRoutes.delete("/users/:id", protectRoute, isAdmin, deleteUser);
