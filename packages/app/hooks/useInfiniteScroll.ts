import { useEffect, useState, MutableRefObject } from "react";

export type UseInifiteScrollProps = {
  callback: () => Promise<void>;
  offsetHeight: number;
  hasNextPage: boolean;
};

export default function useInfiniteScroll({
  callback,
  offsetHeight,
  hasNextPage,
}: UseInifiteScrollProps) {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = async () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight + offsetHeight >= scrollHeight) {
      console.log("setting fetch");
      setIsFetching(true);
    }
  };

  useEffect(() => {
    const handleFetch = async () => {
      if (isFetching && hasNextPage) {
        await callback();
        setIsFetching(false);
      }
    };
    handleFetch();
  }, [isFetching]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching, setIsFetching]);
}
