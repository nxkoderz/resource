import chalk from "chalk";
import { AppDataSource } from "./data-source";
import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

AppDataSource.initialize()
  .then(() => {
    console.log(chalk.bgGreen.bold("Data Source has been initialized!"));
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.use("/", (req, res) => {
  console.log(req);
  res.send("<h1>hello from the other side</h1>");
});

app.listen(port, () => {
  console.log(
    chalk.magentaBright.bold(
      `⚡️[server]: Server is running at http://localhost:${port}`
    )
  );
});
