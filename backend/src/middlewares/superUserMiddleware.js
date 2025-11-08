// src/auth.js
// const jwt = require('jsonwebtoken');
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET || "secret";
const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "1h";

export const signSuperuserPayload = (user) => {
  // minimal payload
  const payload = {
    sub: user.id,
    username: user.username,
    isSuperuser: user.isSuperuser,
  };
  return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });
};

function verifyToken(token) {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (err) {
    return null;
  }
}

export const requireSuperuser = (req, res, next) => {
  const token =
    req.cookies?.token || req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Missing token" });
  const payload = verifyToken(token);
  if (!payload || !payload.isSuperuser)
    return res.status(403).json({ error: "Forbidden" });
  req.superuser = payload;
  next();
};

// module.exports = { signSuperuserPayload, verifyToken, requireSuperuser };
