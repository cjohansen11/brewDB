import express, { Application, Response, Request } from "express";
import initializeRoutes from "./routers";

const app: Application = express();

app.use(express.json());

initializeRoutes(app);

app.listen(3000, function () {
  console.info("listening on port 3000");
});
