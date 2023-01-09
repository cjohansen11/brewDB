import { useEffect, useState, MutableRefObject } from "react";

export type UseInifiteScrollProps = {
  callback: () => void;
};

export default function useInfiniteScroll({ callback }: UseInifiteScrollProps) {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      if (!isFetching) {
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

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      setIsFetching(true);
    }
  };
}
