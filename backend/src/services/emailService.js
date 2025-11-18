// const nodemailer = require("nodemailer");

import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT || 587),
  secure: false,
  auth: {
    user: process.env.EMAIL_HOST_USER,
    pass: process.env.EMAIL_HOST_PASSWORD,
  },
});

export const sendOtpEmail = async (to, otp) => {
  const info = await transporter.sendMail({
    from: process.env.DEFAULT_FROM_EMAIL,
    to,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}. It expires in 10 minutes.`,
  });
  return info;
};

// async function sendOtpEmail(to, otp) {
//   const info = await transporter.sendMail({
//     from: process.env.DEFAULT_FROM_EMAIL,
//     to,
//     subject: "Your OTP Code",
//     text: `Your OTP is ${otp}. It expires in 10 minutes.`,
//   });
//   return info;
// }

// module.exports = { sendOtpEmail };
