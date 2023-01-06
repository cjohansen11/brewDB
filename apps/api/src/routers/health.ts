import express, { Response, Request } from "express";
import { APIResponseHealth } from "@brewdb/types";

const healthRouter = express.Router();

const getHealth = async (req: Request, res: Response<APIResponseHealth>) => {
  res.status(200).send({ status: "success", message: "Up", data: {} });
};

healthRouter.get("/health", getHealth);

export default healthRouter;
