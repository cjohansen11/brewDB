import breweries from "./seedData/breweries.json";
import { BreweryType, PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

async function runSeed() {
  await Promise.all(
    breweries.map(
      async ({
        name,
        brewery_type,
        state,
        street,
        address_2,
        address_3,
        city,
        country,
        county_province,
        website_url,
        postal_code,
        phone,
        longitude,
        latitude,
        obdb_id,
      }) => {
        try {
          await prisma.brewery.upsert({
            where: {
              id: obdb_id,
            },
            update: {},
            create: {
              id: obdb_id,
              name,
              // Forced to typecast here due to the JSON file submitting this field as a plain string
              brewery_type: brewery_type as BreweryType,
              street,
              address2: address_2,
              address3: address_3,
              city,
              state,
              county_province,
              postal_code,
              website: website_url,
              country,
              longitude,
              latitude,
              phone,
            },
          });
        } catch (error) {
          console.error(`Error while seeding brewery: ${name}`);
          throw error;
        }
      }
    )
  );
}

runSeed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
