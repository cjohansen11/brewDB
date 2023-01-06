import { Application } from "express";

import healthRouter from "./health";

export default function initializeRoutes(app: Application) {
  app.use(healthRouter);
}

export { healthRouter };
