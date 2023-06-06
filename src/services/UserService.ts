import { User } from "../entity/User";
import { GenericServices } from "./GenericServices";
import { IUserServices } from "../interfaces/GenericInterfaces/IUserServices";
import { IUserRepository } from "../interfaces/GenericInterfaces/IUserRepository";
import { UserBuilder } from "../entity/UserBuilder";
import { UserInterface } from "../interfaces/DbInterface";

export class UserService extends GenericServices<User>  
implements IUserServices{

  constructor(protected repository: IUserRepository) {
    super(repository);
  }

  getUserObject = (user: UserInterface): User => {
    return new UserBuilder().setId(user.id)
    .build();
  }
}

