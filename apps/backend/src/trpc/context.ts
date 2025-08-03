import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import type { Context } from "@spayd/trpc"; // we make use of the context type defined in @spayd/trpc

// this is the function that is used to create the context for the tRPC server for each request
export async function createContext({
  req,
  res,
}: CreateFastifyContextOptions): Promise<Context> {
  return {
    req,
    res,
    prisma: req.server.prisma, // we make use of the prisma client that is already instantiated in the plugin
    // no need to create a new instance every time
  };
}
