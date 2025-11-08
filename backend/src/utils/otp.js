// src/utils/otp.js

import crypto from "crypto";

export const generateOtp = (length = 6) => {
  // numeric OTP
  const digits = "0123456789";
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * digits.length)];
  }
  return otp;
};
