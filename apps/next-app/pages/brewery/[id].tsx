import { ErrorScreen, GoogleMap } from "client/components";
import { useBrewery } from "client/hooks";
import { useRouter } from "next/router";

export default function Brewery() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: brewery,
    isLoading,
    isError,
  } = useBrewery({
    id: typeof id === "string" ? id : "",
    options: { enabled: !!id },
  });

  if (!brewery || isError) {
    return <ErrorScreen />;
  }

  return (
    <div className="flex h-screen bg-black flex-col p-4">
      <div className="pb-5">
        <div className="text-5xl text-orange pb-1">{brewery.name}</div>
        {brewery?.website && (
          <a
            className="hover:text-orange"
            href={brewery.website}
            target="_blank"
          >
            Website
          </a>
        )}
      </div>
      <div className="text-xl pb-5">{`${brewery.street} ${brewery.city}, ${
        brewery.state ?? brewery.county_province
      } ${brewery.postal_code?.split("-")[0]}`}</div>
      <GoogleMap
        lat={+brewery.latitude}
        lng={+brewery.longitude}
        name={brewery.name}
      />
    </div>
  );
}
