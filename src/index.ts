import chalk from "chalk";
import { AppDataSource } from "./data-source"
import express, { Express } from "express"
import dotenv from 'dotenv';
dotenv.config();

AppDataSource.initialize().then(async () => {

    const app: Express = express();
    const port = process.env.PORT;

    console.log(chalk.redBright.bold('DB Connected successfully'))

    app.use('/', (req, res) => {
        console.log(req)
        res.send('<h1>hello from the other side</h1>')
    })

    app.listen(port, () => {
        console.log(chalk.magentaBright.bold(`⚡️[server]: Server is running at http://localhost:${port}`));
    });

}).catch(error => console.log(error))
