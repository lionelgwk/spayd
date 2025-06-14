import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const userRouter = router({
  getUsers: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findMany();
  }),

  createUser: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.user.create({
        data: input,
      });
    }),
});
