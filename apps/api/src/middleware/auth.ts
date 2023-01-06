import { TRPCError } from "@trpc/server";
import { middleware } from "../utils/createContext";

export const isAuthed = middleware(({ next, ctx }) => {
  if (!ctx) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You are not authorized",
    });
  }

  return next({
    ctx: {},
  });
});
