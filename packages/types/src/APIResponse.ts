import { TRPCErrorResponse } from "@trpc/server/dist/rpc";

export type APIResponse<Data> =
  | {
      status: "success";
      message: string;
      data: Data;
    }
  | TRPCErrorResponse;

export type APIResponseHealth = APIResponse<Record<string, never>>;
