import { Brewery } from "@prisma/client";
import { api } from "client/utils";
import { UseQueryOptions, useQuery } from "react-query";

export default function useBrewery({
  id,
  options,
}: {
  id?: string;
  options?: UseQueryOptions<
    Brewery,
    unknown,
    Brewery,
    Array<string | undefined>
  >;
}) {
  return useQuery(
    ["read-brewery", id],
    () => api.breweries.fetchBrewery(id),
    options
  );
}
