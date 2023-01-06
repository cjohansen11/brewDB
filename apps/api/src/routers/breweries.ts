import { BreweryType } from "@prisma/client";
import { z } from "zod";
import { prisma } from "../utils";
import { publicProcedure, router } from "../utils/createContext";

export const breweriesRouter = router({
  breweries: publicProcedure
    .input(
      z.object({
        take: z.number().default(10),
        cursor: z.string().optional(),
        skip: z.number().default(1),
        name: z.string().optional(),
        country: z.string().optional(),
        region: z.string().optional(),
        type: z.nativeEnum(BreweryType).optional(),
      })
    )
    .query(async ({ input }) => {
      const { take, cursor, skip, name, country, region, type } = input;
      console.log({ take, cursor, skip, name, country, region, type });

      const breweries = await prisma.brewery.findMany({
        take,
        cursor: cursor ? { id: cursor } : undefined,
        skip,
      });

      return breweries;
    }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const { id } = input;
      console.log({ id });

      const brewery = await prisma.brewery.findUniqueOrThrow({ where: { id } });

      return brewery;
    }),
});
