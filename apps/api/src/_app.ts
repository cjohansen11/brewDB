import { publicProcedure, router } from "./utils/createContext";

const appRouter = router({
  greeting: publicProcedure.query(() => "hello world"),
});

export type AppRouter = typeof appRouter;
