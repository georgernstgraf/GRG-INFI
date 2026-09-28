// src/prisma.js — EIN PrismaClient für das ganze Projekt.
// Prisma 7 braucht zwingend einen Driver Adapter (kein Rust-Engine-Binary mehr).
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const url = process.env.DATABASE_URL ?? "file:./dev.db";
const adapter = new PrismaBetterSqlite3({ url });

export const prisma = new PrismaClient({ adapter });
