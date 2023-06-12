

export abstract class DbService {
    abstract initService (): any;
    abstract insert (params: DbInterface): any;
    abstract get (params: DbInterface): any;
    abstract query (params: DbInterface): any;
    abstract update (params: DbInterface): any;
    abstract delete (params: DbInterface): any;
}