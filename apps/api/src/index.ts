import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import initializeRoutes from "./routers";

const app: Application = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

initializeRoutes(app);

app.listen(3000, function () {
  console.info("listening on port 3000");
});
