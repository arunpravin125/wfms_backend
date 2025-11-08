// backend/src/db/prisma.js
import { PrismaClient } from "../../generated/prisma/index.js"; // prisma generator output path
export const prisma = new PrismaClient();
