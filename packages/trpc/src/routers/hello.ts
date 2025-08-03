import { z } from "zod";
import { publicProcedure, router } from "../trpc";
export const helloRouter = router({
  sayHello: publicProcedure
    .input(z.object({ name: z.string().optional() }))
    .mutation(({ input }) => {
      return {
        greeting: `Hello ${input.name ?? "world"}!`,
      };
    }),
});
