import { Brewery } from "@prisma/client";
import { InfiniteData } from "react-query";
import { Fragment } from "react";
import { BreweryCard, NotFound } from "client/components";

export type BreweryListProps = {
  breweries: InfiniteData<Brewery[]>;
};

export default function BreweryList({ breweries }: BreweryListProps) {
  const { pages } = breweries;

  return (
    <div className="flex flex-wrap justify-center">
      {pages.length > 0 && pages[0] && pages[0].length > 0 ? (
        breweries.pages.map((page, idx) => (
          <Fragment key={idx}>
            {page.map((brewery) => (
              <BreweryCard key={brewery.id} {...brewery} />
            ))}
          </Fragment>
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
}
