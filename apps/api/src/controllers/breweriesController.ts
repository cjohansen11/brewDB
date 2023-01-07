import { QueryBreweriesList } from "@brewdb/types";
import { prisma } from "../utils";

/**
 * This function handles any listing of Brewery documents including querying
 *
 * @param take A number representing the number of documents to return. Defaults to 10
 * @param cursor A string representing the last document ID fetched to provide paginated results
 * @param name A string representing the name or partial name of a brewery
 * @param country A string representing a country or partial country where a brewery is located
 * @param region A string representing a state/county_provence or partial state/county_provence where a brewery is located
 * @param type A string representing the brewery type. Based on the BreweryType enum
 * @returns An array of breweries based on the provided query options
 */
export const listBreweries = async ({
  take = 10,
  cursor,
  name,
  country,
  region,
  type,
}: QueryBreweriesList) => {
  const breweries = await prisma.brewery.findMany({
    take: +take ?? undefined,
    skip: cursor ? 1 : 0,
    cursor: cursor ? { id: cursor } : undefined,
    where: {
      name: { contains: name, mode: "insensitive" },
      country: { contains: country, mode: "insensitive" },
      AND: [
        {
          OR: [
            { state: { contains: region, mode: "insensitive" } },
            { county_province: { contains: region, mode: "insensitive" } },
          ],
        },
      ],
      brewery_type: { equals: type },
    },
  });

  if (breweries.length === 0) throw new Error("No breweries found");

  return breweries;
};

/**
 * This function queries the database for a single Brewery document that contains an ID of the one passed to it
 *
 * @param id String representing the document ID for a single brewery
 * @returns A Brewery document if found
 */
export const getBreweryById = async (id: string) => {
  const brewery = await prisma.brewery.findUniqueOrThrow({ where: { id } });

  return brewery;
};
