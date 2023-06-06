import { AppDataSource } from "../data-source";
import { UserRepository } from "../repositories/UserRepository";
import HttpException from "../utils/HttpException";
import { User } from "../entity/User";
import { GenericServices } from "./GenericServices";
import { IUserServices } from "../interfaces/GenericInterfaces/IUserServices";
import { IUserRepository } from "../interfaces/GenericInterfaces/IUserRepository";

export class UserService extends GenericServices<User>  implements IUserServices{
  constructor(protected repository: IUserRepository) {
    super(repository);
  }
}

