import { User } from "../../entity/User";
import { IGenericServices } from "./IGenericServices";

export interface IUserServices extends IGenericServices<User> {
  // Add custom methods here
}