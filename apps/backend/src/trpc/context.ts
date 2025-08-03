import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import { PrismaClient } from "@spayd/database";
import type { Context } from "@spayd/trpc"; // we make use of the context type defined in @spayd/trpc

// we create a single instance of Prisma Client
const prisma = new PrismaClient();

// this is the function that is used to create the context for the tRPC server for each request
export async function createContext({
  req,
  res,
}: CreateFastifyContextOptions): Promise<Context> {
  return {
    req,
    res,
    prisma,
  };
}
