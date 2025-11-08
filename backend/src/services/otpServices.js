// backend/src/services/otpService.js
// Simple in-memory OTP store; for production replace with Redis
const otpStore = new Map(); // key => { otp, expiresAt }

export function saveOtp(publicId, otp, ttlSeconds = 300) {
  const expiresAt = Date.now() + ttlSeconds * 1000;
  otpStore.set(publicId, { otp, expiresAt });
}

export function verifyOtp(publicId, otp) {
  const rec = otpStore.get(publicId);
  if (!rec) return false;
  if (Date.now() > rec.expiresAt) {
    otpStore.delete(publicId);
    return false;
  }
  if (rec.otp !== otp) return false;
  otpStore.delete(publicId);
  return true;
}

export function clearOtp(publicId) {
  otpStore.delete(publicId);
}
