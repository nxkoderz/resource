import { AppDataSource } from "../data-source";
import { DbInterface } from "../interfaces/DbInterface";
import { DbService } from "./DbService";

export class PostGresService extends DbService{
    client: any;

    constructor() {
        super();
        this.initService();
    }

    initService = () => {
        this.client = AppDataSource.res
    }
    insert(params: DbInterface) {
        AppDataSource.
    }
    get(params: DbInterface) {
        throw new Error("Method not implemented.");
    }
    query(params: DbInterface) {
        throw new Error("Method not implemented.");
    }
    update(params: DbInterface) {
        throw new Error("Method not implemented.");
    }
    delete(params: DbInterface) {
        throw new Error("Method not implemented.");
    }
}