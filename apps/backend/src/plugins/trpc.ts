import fp from "fastify-plugin";
import {
  fastifyTRPCPlugin,
  FastifyTRPCPluginOptions,
} from "@trpc/server/adapters/fastify";
import { createContext } from "../trpc/context";
import { appRouter, type AppRouter } from "@spayd/trpc";

export default fp(async function (fastify) {
  // Add raw request body logging
  fastify.addHook("preHandler", (request, reply, done) => {
    // Log the raw request body
    const rawBody = request.body
      ? JSON.stringify(request.body, null, 2)
      : "No body";
    fastify.log.info(`Raw request body: ${rawBody}`);
    done();
  });

  fastify.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: {
      router: appRouter,
      createContext,
      onError({ path, error }) {
        fastify.log.error(`Error in tRPC path '${path}': ${error.message}`);
      },
    } satisfies FastifyTRPCPluginOptions<AppRouter>["trpcOptions"],
  });
});
