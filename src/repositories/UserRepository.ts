import { User } from "../entity/User";
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