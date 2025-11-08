import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../db/prisma.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, email, password, confirmPassword, role } =
      req.body;

    if (!fullName || !username || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "password and confirmPassword must be same" });
    }

    const alreadyUsername = await prisma.user.findUnique({
      where: { username },
    });
    if (alreadyUsername) {
      return res.status(400).json({ error: "username Already Exists" });
    }
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing)
      return res.status(400).json({ error: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { fullName, username, email, password: hashedPassword, role },
    });

    res.status(201).json({ message: "User created", user });
  } catch (err) {
    console.log("error in signup", err);
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("token", token, { httpOnly: true, secure: false });
    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
