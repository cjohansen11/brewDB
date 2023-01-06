import express, { Application } from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext } from "./utils/createContext";
import { appRouter } from "./routers";

export type AppRouter = typeof appRouter;

const app: Application = express();

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(3000, function () {
  console.info("listening on port 3000");
});
