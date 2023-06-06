import { IGenericServices } from './../interfaces/GenericInterfaces/IGenericServices';
import { BaseEntity } from 'typeorm';
import { IGenericRepository } from './../interfaces/GenericInterfaces/IGenericRepository';
export abstract class GenericServices<Entity extends BaseEntity> implements IGenericServices<Entity>
{
  constructor(protected repository: IGenericRepository<Entity>) {}
  async Create(entity: Entity): Promise<Entity> {
    const response = await this.repository.Create(entity);
    return response;
  }
  async GetAll(): Promise<Entity[]> {
    const response = await this.repository.GetAll();
    return response;
  }
  // async GetById(id?: number): Promise<Entity> {
  //   const response = await this.repository.GetById(id);
  //   return response;
  // }
  async Update(id: number, entity: Entity): Promise<Entity> {
    const response = await this.repository.Update(id, entity);
    return response;
  }
  async Delete(id: number): Promise<void> {
    await this.repository.Delete(id);
  }
}
