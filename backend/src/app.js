// backend/src/app.js
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import { errorHandler } from "./middlewares/errorHandler.js";
import { employeeRoutes } from "./routes/employeeRoutes.js";
import { superUserRouter } from "./routes/superUserRoutes.js";

dotenv.config();

const app = express();

// ✅ Allow all or restrict specific origins
app.use(
  cors({
    origin: "http://localhost:3000", // Your frontend URL
    credentials: true, // Allow cookies / auth headers
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/superUser", superUserRouter);
app.use("/employee", employeeRoutes);

// Error Handler
app.use(errorHandler);

export default app;
