import { AnyMxRecord } from "dns";
import { IGenericServices } from "./IGenericServices";
import { User } from "../../entity/User";
import { UserInterface } from "../DbInterface";

export interface IUserServices extends IGenericServices<User> {
  // Add custom methods here
  getUserObject(user: UserInterface): User
}