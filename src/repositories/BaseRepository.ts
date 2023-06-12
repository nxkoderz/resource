import { BaseEntity, EntityManager, EntityTarget, ObjectLiteral, ObjectType, Repository } from "typeorm";
import { AppDataSource } from "../data-source";

export class BaseRepository<T extends BaseEntity>{
    private repository: Repository<T>;

    constructor(entityClass: EntityTarget<T>){
        this.repository = AppDataSource.getRepository(entityClass)
    }

    async Create(entity: T): Promise<T> {
        const createEntity = this.repository.save(entity);
        return createEntity;
      }    

    GetAll(): Promise<T[]> {
        const entities = this.repository.find()
        return entities;
    }
}