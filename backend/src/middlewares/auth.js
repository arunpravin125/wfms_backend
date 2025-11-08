// backend/src/middlewares/auth.js
import jwt from "jsonwebtoken";
import { prisma } from "../db/prisma.js";

const JWT_SECRET = process.env.JWT_SECRET || "changeme";

export async function authMiddleware(req, res, next) {
  try {
    // Get token from cookies
    const token = req.cookies?.jwt;

    if (!token) {
      req.user = null;
      res.status(400).json({ error: "error in authMiddleware" });
      return next();
    }

    // Verify token
    const payload = jwt.verify(token, JWT_SECRET);

    // Find user based on token's payload
    const user = await prisma.employee.findUnique({
      where: { id: payload.id },
      select: {
        id: true,
        // Add other fields you need, excluding sensitive ones
        // email: true,
        // name: true,
        // etc.
      },
    });

    if (!user) {
      req.user = null;
      return next();
    }

    // Attach user and jwt payload to request
    req.user = user;
    req.jwt = payload;
    next();
  } catch (err) {
    req.user = null;
    console.log("error in auth", err);
    next();
  }
}
