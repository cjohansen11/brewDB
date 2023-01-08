import {
  APIResponseBreweriesList,
  QueryBreweriesList,
  RouteBreweries,
  APIResponseBreweryGet,
} from "types";
import express, { Request, Response } from "express";
import * as breweriesController from "../controllers/breweriesController";
import { getErrorMessage } from "../utils";

const breweriesRouter = express.Router();

const listBreweries = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    Record<string, unknown>,
    QueryBreweriesList
  >,
  res: Response<APIResponseBreweriesList>
) => {
  try {
    const { query } = req;

    const breweries = await breweriesController.listBreweries(query);

    res.status(200).send({
      status: "success",
      message: "Successfully fetched breweries",
      data: breweries,
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `Failed to fetch breweries: ${getErrorMessage(error)}`,
    });
  }
};

const getBrewery = async (
  req: Request<{ breweryId: string }>,
  res: Response<APIResponseBreweryGet>
) => {
  const { breweryId } = req.params;
  try {
    console.log({ breweryId });
    const brewery = await breweriesController.getBreweryById(breweryId);

    res.status(200).send({
      status: "success",
      message: "Successfully fetched brewery",
      data: brewery,
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `Failed to fetch brewery: ${breweryId}`,
    });
  }
};

breweriesRouter.get(RouteBreweries.ROOT, listBreweries);
breweriesRouter.get(`${RouteBreweries.ROOT}/:breweryId`, getBrewery);

export default breweriesRouter;
