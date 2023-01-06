import { mergeRouters, router } from "../utils/createContext";
import { breweriesRouter } from "./breweries";
import { healthRouter } from "./health";

export const appRouter = mergeRouters(healthRouter, breweriesRouter);
