import { EntityManager } from "typeorm";
import { User } from "../entity/User";
import { BaseRepository } from "./BaseRepository";
import { DbService } from "../factories/DbService";
import { DbFactory } from "../factories/DbFactory";
import { DbInterface, UserInterface } from "../interfaces/DbInterface";
import { UserType } from "../types/UserType";
import { GenericRepository } from "./GenericRepository";
import { IUserRepository } from "../interfaces/GenericInterfaces/IUserRepository";

export class UserRepository 
extends GenericRepository<User> 
implements IUserRepository{
    constructor(){
        const Entity = User;
        super(Entity)
    }
}