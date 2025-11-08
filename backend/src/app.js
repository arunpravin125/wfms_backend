// backend/src/app.js
import express from "express";
import cookieParser from "cookie-parser";
// import employeeRoutes from "./routes/employee.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import dotenv from "dotenv";
import { employeeRoutes } from "./routes/employeeRoutes.js";
import { authRoutes } from "./routes/authRoutes.js";
import { adminRoutes } from "./routes/adminRoutes.js";
import { developerRoutes } from "./routes/developerRoutes.js";
import { superUserRouter } from "./routes/superUserRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/", superUserRouter);
app.use("/api/developer", developerRoutes);
app.use("/employee", employeeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.use(errorHandler);

export default app;
