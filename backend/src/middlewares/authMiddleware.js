import jwt from "jsonwebtoken";
import { prisma } from "../db/prisma.js";

const accessSecret = process.env.JWT_ACCESS_SECRET || "accesssecret";
const JWT_SECRET = process.env.JWT_SECRET || "changeme";
const COOKIE_NAME = "refresh_token"; // matches your login cookie name

export const requireAuth = async (req, res, next) => {
  try {
    // Try getting token from header (Bearer <token>) or cookie
    const token =
      (req.headers.authorization && req.headers.authorization.split(" ")[1]) ||
      req.cookies[COOKIE_NAME];

    if (!token) {
      return res.status(401).json({ error: "Missing token" });
    }

    // Verify the token
    const payload = jwt.verify(token, JWT_SECRET);

    // Fetch user
    const user = await prisma.employee.findUnique({
      where: { id: Number(payload.id) },
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid token user" });
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (err) {
    console.error("❌ Auth error:", err.message);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

export const requireL1OrHOD = (req, res, next) => {
  const u = req.user;
  if (!u) return res.status(401).json({ error: "Unauthorized" });
  const isL1 = u.level === 1;
  const isHod = !!(u.role && /hod/i.test(u.role));
  if (!isL1 && !isHod)
    return res.status(403).json({ error: "Requires L1 or HOD privileges" });
  next();
};
// export const requireAuth = async (req, res, next) => {
//   try {
//     console.log({ req });
//     // try cookie token first, then Authorization header
//     // const token =
//     //   (req.cookies && req.cookies.token) ||
//     //   (req.headers.authorization && req.headers.authorization.split(" ")[1]);

//     const token = req.cookies.requireAuth.token || req.cookies.token;
//     console.log("requireAuth", { token });
//     if (!token) return res.status(401).json({ error: "Missing token" });

//     const payload = jwt.verify(token, accessSecret);
//     // attach user object fetched from DB
//     const user = await prisma.employee.findUnique({
//       where: { id: Number(payload.sub) },
//     });
//     if (!user) return res.status(401).json({ error: "Invalid token user" });

//     req.user = user;
//     next();
//   } catch (err) {
//     return res.status(401).json({ error: "Invalid or expired token" });
//   }
// };

// const JWT_SECRET = process.env.JWT_SECRET || "changeme";
// export const requireAuth = async (req, res, next) => {
//   try {
//     const COOKIE_NAME = "refresh_token";
//     // Try from cookie (for dev) or from header
//     const token =
//       req.cookies?.COOKIE_NAME ||
//       (req.headers.authorization && req.headers.authorization.split(" ")[1]);
//     console.log("reqCookies", req);
//     if (!token) {
//       return res.status(401).json({ error: "Missing token" });
//     }

//     const payload = jwt.verify(token, JWT_SECRET);
//     const user = await prisma.employee.findUnique({
//       where: { id: Number(payload.id) },
//     });

//     if (!user) return res.status(401).json({ error: "Invalid token user" });

//     req.user = user;
//     next();
//   } catch (err) {
//     console.error("❌ Auth error:", err);
//     return res.status(401).json({ error: "Invalid or expired token" });
//   }
// };
// export const requireL1OrHOD = (req, res, next) => {
//   // L1 has level === 1 OR role contains 'HOD' (case-insensitive)
//   const u = req.user;
//   if (!u) return res.status(401).json({ error: "Unauthorized" });
//   const isL1 = u.level === 1;
//   const isHod = !!(u.role && /hod/i.test(u.role));
//   if (!isL1 && !isHod)
//     return res.status(403).json({ error: "Requires L1 or HOD privileges" });
//   next();
// };
