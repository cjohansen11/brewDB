import { BreweryType } from "@prisma/client";
import { z } from "zod";

const FilterFormSchema = z.object({
  type: z.nativeEnum(BreweryType).optional(),
  name: z.string().optional(),
  region: z.string().optional(),
  country: z.string().optional(),
});

export type FilterFormType = z.infer<typeof FilterFormSchema>;
