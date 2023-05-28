import path from "path"
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "tinku",
    password: "tinku",
    database: "resources",
    synchronize: false,
    logging: false,
    entities: ['src/entity/*{.js,.ts}'],
    migrations: [path.join(__dirname, 'migration/*{.js,.ts}')],
    subscribers: [],
})


