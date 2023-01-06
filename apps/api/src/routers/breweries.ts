import express, { Response, Request } from "express";
import * as breweriesController from "../controllers/breweriesController";

const breweriesRouter = express.Router();

const listBreweries = async (req: Request, res: Response) => {
  try {
    const breweries = await breweriesController.listBreweries();

    res.status(200).send(breweries);
  } catch (error) {
    res.status(400).send("error");
  }
};

breweriesRouter.get("/breweries", listBreweries);

export default breweriesRouter;
