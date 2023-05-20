import "reflect-metadata"
import { DataSource } from "typeorm"
import path = require("path")

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "juaid",
    password: "",
    database: "resource",
    synchronize: false,
    logging: false,
    entities: [path.join(__dirname, 'entity/**/*{.js,.ts}')],
    migrations: ['src/migrations/*.ts'],
    migrationsTableName: 'migrations',
    subscribers: [],
})


