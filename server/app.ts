import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { setupRouter } from "./src/router";
import helmet from "helmet";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(helmet());

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Express + TypeScript Server (is running)" });
});

(async () => {
  const router = await setupRouter();
  app.use("/api", router);
})();

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
