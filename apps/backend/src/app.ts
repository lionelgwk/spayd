import fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import sensible from "@fastify/sensible";
import prismaPlugin from "./plugins/prisma";
import trpcPlugin from "./plugins/trpc";

export async function createApp(): Promise<FastifyInstance> {
  const app = fastify({ logger: true });

  // NOTE: CORS set to be true for development purposes, change later
  await app.register(cors, { origin: true });
  await app.register(helmet);
  await app.register(sensible);

  await app.register(prismaPlugin);
  await app.register(trpcPlugin);

  app.get("/health", async () => {
    return { status: "ok" };
  });

  return app;
}
