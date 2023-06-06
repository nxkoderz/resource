import path from "path"
import "reflect-metadata"
import { DataSource } from "typeorm"
import { DB_CONFIG } from "./utils/DatabseConfig"

export const AppDataSource = new DataSource({
    type: DB_CONFIG.type,
    host: DB_CONFIG.host,
    port: DB_CONFIG.port,
    username: DB_CONFIG.username,
    password: DB_CONFIG.password,
    database: DB_CONFIG.database,
    synchronize: false,
    logging: false,
    entities: ['src/entity/*{.js,.ts}'],
    migrations: [path.join(__dirname, 'migration/*{.js,.ts}')],
    subscribers: [],
})


