import { Brewery } from "@prisma/client";
import { useRouter } from "next/router";

export default function BreweryCard({
  name,
  state,
  county_province,
  website,
  street,
  postal_code,
  brewery_type,
  city,
  id,
  country,
}: Brewery) {
  const { push } = useRouter();
  return (
    <div
      className="flex w-80 border rounded p-4 flex flex-col m-2 text-white hover:border-orange gap-4 justify-between"
      onClick={() => push(`/brewery/${id}`)}
    >
      <div className="text-xl font-bold text-orange">{name}</div>
      <div>
        Type: <span className="text-orange italic">{brewery_type}</span>
      </div>
      <div className="flex flex-row gap-2">
        Website:
        {website ? (
          <a
            className="hover:underline"
            href={website}
            onClick={(e) => e.stopPropagation()}
            target={"_blank"}
          >
            {name}
          </a>
        ) : (
          <div className="text-red">Not available</div>
        )}
      </div>
      <div>
        <div>{`${street} ${city}`}</div>
        <div>{`${state ?? county_province}`}</div>
        <div>{country}</div>
        <div>{postal_code?.split("-")[0]}</div>
      </div>
    </div>
  );
}
