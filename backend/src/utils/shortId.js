// simple short public id generator (8 chars alnum)
export const generateShortId = (length = 8) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let out = "";
  for (let i = 0; i < length; i++)
    out += chars.charAt(Math.floor(Math.random() * chars.length));
  return out;
};
