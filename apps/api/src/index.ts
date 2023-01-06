import express, { Application } from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext } from "./utils/createContext";
import { appRouter } from "./routers";
import cors from "cors";
import morgan from "morgan";

export type AppRouter = typeof appRouter;

const app: Application = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(morgan("dev"));

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
