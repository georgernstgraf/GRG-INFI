// src/db.ts — EIN PrismaClient für das ganze Projekt.
// Prisma 7 braucht zwingend einen Driver Adapter (kein Rust-Engine-Binary mehr).
// TypeScript-Client (generator "prisma-client"): echtes ESM/TS, direkt importierbar.
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client.ts";

const url = process.env.DATABASE_URL ?? "file:./dev.db";
const adapter = new PrismaBetterSqlite3({ url });

export const prisma = new PrismaClient({ adapter });
