import jwt from "jsonwebtoken";
import { prisma } from "../db/prisma.js";

const accessSecret = process.env.JWT_ACCESS_SECRET || "accesssecret";

export const requireAuth = async (req, res, next) => {
  try {
    // try cookie token first, then Authorization header
    const token =
      (req.cookies && req.cookies.token) ||
      (req.headers.authorization && req.headers.authorization.split(" ")[1]);
    if (!token) return res.status(401).json({ error: "Missing token" });

    const payload = jwt.verify(token, accessSecret);
    // attach user object fetched from DB
    const user = await prisma.employee.findUnique({
      where: { id: Number(payload.sub) },
    });
    if (!user) return res.status(401).json({ error: "Invalid token user" });

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

export const requireL1OrHOD = (req, res, next) => {
  // L1 has level === 1 OR role contains 'HOD' (case-insensitive)
  const u = req.user;
  if (!u) return res.status(401).json({ error: "Unauthorized" });
  const isL1 = u.level === 1;
  const isHod = !!(u.role && /hod/i.test(u.role));
  if (!isL1 && !isHod)
    return res.status(403).json({ error: "Requires L1 or HOD privileges" });
  next();
};
