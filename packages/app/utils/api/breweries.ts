import {
  APIResponseBreweriesList,
  QueryBreweriesList,
  RouteBreweries,
} from "types";
import { brewDBInstance } from "./instance";

export const listBreweries = async (queryParams: QueryBreweriesList) => {
  try {
    const { data } = await brewDBInstance.get<APIResponseBreweriesList>(
      RouteBreweries.ROOT,
      { params: queryParams }
    );

    if (data.status === "error") throw new Error(data.message);

    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};
