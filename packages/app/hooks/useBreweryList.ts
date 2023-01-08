import { api } from "../utils";
import { QueryBreweriesList } from "types";
import { UseInfiniteQueryOptions, useInfiniteQuery } from "react-query";
import { Brewery } from "@prisma/client";

export default function useBreweryList({
  take,
  name,
  country,
  region,
  type,
  options,
}: Pick<QueryBreweriesList, "take" | "name" | "country" | "region" | "type"> & {
  options?: UseInfiniteQueryOptions<Brewery[]>;
}) {
  return useInfiniteQuery(
    ["list-breweries", take, name, country, region, type],
    ({ pageParam }) => {
      return api.breweries.listBreweries({
        take,
        name,
        country,
        region,
        type,
        cursor: pageParam?.cursor,
      });
    },
    {
      ...options,
      staleTime: Infinity,
      notifyOnChangeProps: ["data"],
      getNextPageParam: (lastPage) => {
        if (lastPage.length > 0)
          return { cursor: lastPage[lastPage.length - 1]?.id };
        return undefined;
      },
    }
  );
}
