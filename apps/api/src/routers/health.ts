import { publicProcedure, router } from "../utils/createContext";
import { APIResponseHealth } from "@brewdb/types";
import { isAuthed } from "../middleware/auth";

const protectedProcedure = publicProcedure.use(isAuthed);

export const healthRouter = router({
  health: publicProcedure.query<APIResponseHealth>(() => ({
    status: "success",
    message: "Server is up",
    data: {},
  })),
  "protected-health": protectedProcedure.query<APIResponseHealth>(() => ({
    status: "success",
    message: "Server is up",
    data: {},
  })),
});
