import { prisma } from "../utils";

export const listBreweries = async () => {
  const breweries = await prisma.brewery.findMany();

  return breweries;
};
