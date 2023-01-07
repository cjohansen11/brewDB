import { Brewery, BreweryType } from "@prisma/client";
import { APIResponse } from "./APIResponse";

export type APIResponseBreweriesList = APIResponse<Brewery[]>;

export type APIResponseBreweryGet = APIResponse<Brewery>;

export type QueryBreweriesList = {
  take?: number;
  cursor?: string;
  name?: string;
  country?: string;
  region?: string;
  type?: BreweryType;
};
