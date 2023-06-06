import { PostGresService } from './PostgresService';
import { DbService } from "./DbService"

export class DbFactory {
    db: DbService;

    getDb = (): DbService => {
        if(this.db) this.db = new PostGresService();
        return this.db;
    }
}