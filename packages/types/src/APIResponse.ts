export type APIResponse<Data> =
  | {
      status: "success";
      message: string;
      data: Data;
    }
  | {
      status: "error";
      message: string;
    };

export type APIResponseHealth = APIResponse<Record<string, never>>;
