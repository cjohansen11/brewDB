import { router } from "../utils/createContext";
import { breweriesRouter } from "./breweries";
import { healthRouter } from "./health";

export const appRouter = router({
  health: healthRouter,
  breweries: breweriesRouter,
});
