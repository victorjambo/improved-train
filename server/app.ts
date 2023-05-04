import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./src/routes";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import { swagger } from "./src/utils/swagger";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(helmet());
app.use(express.json());

app.use("/api", router);
app.use("/", swaggerUi.serve, swaggerUi.setup(swagger));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
