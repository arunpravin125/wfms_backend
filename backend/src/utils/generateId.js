// backend/src/utils/generateId.js
import crypto from "crypto";

export function shortId(length = 8) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
}
