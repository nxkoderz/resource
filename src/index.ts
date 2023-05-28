import chalk from "chalk";
import { AppDataSource } from "./data-source";
import express, { Express } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors';
import errorHandlerMiddleware from "./middlewares/CustomErrorMiddleware";
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

app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'))

app.use("/", (req, res) => {
  res.send("<h1>hello tinku</h1>");
});

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(
    chalk.magentaBright.bold(
      `⚡️[server]: Server is running at http://localhost:${port}`
    )
  );
});
