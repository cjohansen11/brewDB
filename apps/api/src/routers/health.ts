import express, { Response, Request } from "express";
import { APIResponseHealth, RouteHealth } from "types";

const healthRouter = express.Router();

const getHealth = (req: Request, res: Response<APIResponseHealth>) => {
  res.status(200).send({ status: "success", message: "Server up", data: {} });
};

healthRouter.get(RouteHealth.ROOT, getHealth);

export default healthRouter;
