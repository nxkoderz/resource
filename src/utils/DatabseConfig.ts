const DB_TYPE:
  | "mysql"
  | "mariadb"
  | "postgres"
  | "mssql"
  | "oracle"
  | "sqlite" = "postgres";

export const DB_CONFIG = {
  type: DB_TYPE,
  host: "localhost",
  port: 5432,
  username: "tinku",
  password: "tinku",
  database: "resources",
};