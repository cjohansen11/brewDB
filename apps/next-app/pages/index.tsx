import type { NextPage } from "next";
import {
  useBreweryList,
  useDebouncedValue,
  useInfiniteScroll,
} from "client/hooks";
import { BreweryList, Loading } from "client/components";
import { BreweryType } from "@prisma/client";
import { useForm, Controller } from "react-hook-form";
import { useRef } from "react";

const Home: NextPage = () => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const { control, watch } = useForm<{
    type?: BreweryType;
    name?: string;
    region?: string;
    country?: string;
  }>();

  const {
    data: breweries,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useBreweryList({
    take: 20,
    type: !!watch("type") ? watch("type") : undefined,
    name: useDebouncedValue(watch("name"), 200),
    region: useDebouncedValue(watch("region"), 200),
    country: useDebouncedValue(watch("country"), 200),
    options: {},
  });

  useInfiniteScroll({
    callback: fetchNextPage,
    offsetHeight: 100,
    hasNextPage: !!hasNextPage,
  });

  return (
    <div ref={listRef}>
      <div className="text-6xl text-orange font-bold p-2 text-center">
        Breweries
      </div>
      <div className="flex flex-wrap gap-4 pb-4 pt-4 border border-dark-grey rounded-lg justify-center m-4 sticky top-12 bg-black">
        <div className="font-bold text-orange">Filters:</div>
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
            <div>
              <label htmlFor="name" className="pr-2">
                Name:
              </label>
              <input
                name="name"
                className="bg-dark-grey"
                onBlur={field.onBlur}
                onChange={field.onChange}
                value={field.value}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="region"
          render={({ field }) => (
            <div>
              <label htmlFor="region" className="pr-2">
                Region:
              </label>
              <input
                name="region"
                className="bg-dark-grey"
                onBlur={field.onBlur}
                onChange={field.onChange}
                value={field.value}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="country"
          render={({ field }) => (
            <div>
              <label htmlFor="country" className="pr-2">
                Country:
              </label>
              <input
                name="country"
                className="bg-dark-grey"
                onBlur={field.onBlur}
                onChange={field.onChange}
                value={field.value}
              />
            </div>
          )}
        />
      </div>
      <div>{breweries ? <BreweryList breweries={breweries} /> : null}</div>
      {isLoading ? <Loading /> : null}
    </div>
  );
};

export default Home;
