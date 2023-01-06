import { initTRPC } from "@trpc/server";
import { inferAsyncReturnType } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import superjson from "superjson";

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({});

// type Context = {
//   user?: {
//     id: string;
//   };
// };
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
export const mergeRouters = t.mergeRouters;
