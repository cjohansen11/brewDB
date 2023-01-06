import { Application } from "express";

import healthRouter from "./health";
import breweriesRouter from "./breweries";

export default function initializeRoutes(app: Application) {
  app.use(healthRouter);
  app.use(breweriesRouter);
}

export { breweriesRouter, healthRouter };
