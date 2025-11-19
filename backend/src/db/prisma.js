// backend/src/db/prisma.js
import { PrismaClient } from "../../generated/prisma/index.js"; // prisma generator output path
export const prisma = new PrismaClient();

// export const prisma = new PrismaClient({
//   adapter: "postgresql",
// });
// import { PrismaClient } from "../../generated/prisma";
// import { createPostgresAdapter } from "@prisma/adapter-postgresql";
// import pkg from "pg";

// const client = new pkg.Client({
//   connectionString: process.env.DATABASE_URL,
// });

// const adapter = createPostgresAdapter(client);

// export const prisma = new PrismaClient({
//   adapter,
// });
