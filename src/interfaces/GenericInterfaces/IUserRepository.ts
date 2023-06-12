import { User } from "../../entity/User";
import { IGenericRepository } from "./IGenericRepository";

export interface IUserRepository extends IGenericRepository<User> {
    // Add custom methods here
  }
  