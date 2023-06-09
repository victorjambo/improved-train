import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./src/routes";
import helmet from "helmet";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swagger } from "./src/utils/swagger";
import cookieParser from "cookie-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use("/api", router);
app.use("/", swaggerUi.serve, swaggerUi.setup(swagger));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
