import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "@brewdb/api/src/";
import superjson from "superjson";

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [httpBatchLink({ url: `${process.env.NEXT_PUBLIC_API}/trpc` })],
      queryClientConfig: {
        defaultOptions: { queries: { staleTime: Infinity } },
      },
      transformer: superjson,
    };
  },
  ssr: false,
});
