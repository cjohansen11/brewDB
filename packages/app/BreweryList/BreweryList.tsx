import { Brewery } from "@prisma/client";
import { InfiniteData } from "react-query";
import { Fragment } from "react";

export type BreweryListProps = {
  breweries: InfiniteData<Brewery[]>;
};

export default function BreweryList({ breweries }: BreweryListProps) {
  return (
    <div>
      <h1>Breweries</h1>
      {breweries.pages.map((page, idx) => (
        <Fragment key={idx}>
          {page.map(
            ({
              name,
              website,
              brewery_type,
              street,
              city,
              state,
              county_province,
              postal_code,
            }) => (
              <div style={{ padding: 4 }} key={`${name}-${street}`}>
                <p>{name}</p>
                <p>{brewery_type}</p>
                {website ? (
                  <a href={website} target={"_blank"}>
                    {website}
                  </a>
                ) : (
                  <p style={{ color: "red" }}>No website available</p>
                )}
                <p>{`${street} ${city}, ${state ?? county_province} ${
                  postal_code.split("-")[0]
                }`}</p>
              </div>
            )
          )}
        </Fragment>
      ))}
    </div>
  );
}
