import type { NextPage } from "next";
import { useBreweryList, useInfiniteScroll } from "client/hooks";
import { ErrorScreen, BreweryList } from "client/components";
import { BreweryType } from "@prisma/client";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useRef } from "react";

const Home: NextPage = () => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const { control, watch } = useForm();

  const {
    data: breweries,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useBreweryList({
    take: 10,
    type: !!watch("type") ? watch("type") : undefined,
    name: watch("name"),
    region: watch("region"),
    country: watch("country"),
    options: {},
  });
  console.log({ breweries });
  useInfiniteScroll({ callback: fetchNextPage });

  return (
    <div ref={listRef}>
      <div className="text-6xl text-orange font-bold p-2 text-center">
        Breweries
      </div>
      <div className="flex flex-row gap-2 pb-4 pt-4 border border-dark-grey rounded-lg justify-center m-4 sticky top-12 bg-black">
        <div>Filters:</div>
        <Controller
          control={control}
          name="type"
          render={({ field }) => (
            <select
              className="bg-dark-grey"
              onBlur={field.onBlur}
              onChange={field.onChange}
              value={field.value}
            >
              <option value={""}>Select Type</option>
              {Object.values(BreweryType).map((type, idx) => (
                <option key={type + idx}>{type}</option>
              ))}
            </select>
          )}
        />
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <>
              <label htmlFor="name">Name:</label>
              <input
                name="name"
                className="bg-dark-grey"
                onBlur={field.onBlur}
                onChange={field.onChange}
                value={field.value}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="region"
          render={({ field }) => (
            <>
              <label htmlFor="region">Region:</label>
              <input
                name="region"
                className="bg-dark-grey"
                onBlur={field.onBlur}
                onChange={field.onChange}
                value={field.value}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="country"
          render={({ field }) => (
            <>
              <label htmlFor="country">Country:</label>
              <input
                name="country"
                className="bg-dark-grey"
                onBlur={field.onBlur}
                onChange={field.onChange}
                value={field.value}
              />
            </>
          )}
        />
      </div>
      {isLoading ? (
        <div className="flex h-screen justify-center content-center pt-8">
          <div className="text-white">Loading...</div>
        </div>
      ) : null}
      <div>
        {breweries && !isError ? (
          <BreweryList breweries={breweries} />
        ) : (
          <ErrorScreen />
        )}
      </div>
    </div>
  );
};

export default Home;
