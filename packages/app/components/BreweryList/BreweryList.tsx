import { Brewery } from "@prisma/client";
import { InfiniteData } from "react-query";
import { Fragment } from "react";
import { BreweryCard } from "client/components";

export type BreweryListProps = {
  breweries: InfiniteData<Brewery[]>;
};

export default function BreweryList({ breweries }: BreweryListProps) {
  return (
    <div className="flex flex-wrap justify-center">
      {breweries.pages.map((page, idx) => (
        <Fragment key={idx}>
          {page.map((brewery) => (
            <BreweryCard key={brewery.id} {...brewery} />
          ))}
        </Fragment>
      ))}
    </div>
  );
}