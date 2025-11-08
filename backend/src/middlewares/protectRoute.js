import jwt from "jsonwebtoken";

export const protectRoute = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: "Not authorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("protectRoute", { decoded });
    req.user = decoded;
    next();
  } catch (err) {
    console.log("error in protectRoute", err);
    res.status(401).json({ error: "Invalid token" });
  }
};
