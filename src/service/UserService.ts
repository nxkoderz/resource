import { ICreateUser } from "../types/user";
import HttpException from "../utils/HttpException";

export default class UserService {
  public createOne = (payload: ICreateUser) => {
    try {
    } catch (error: any) {
      throw new HttpException(error?.status, error?.message);
    }
  };
}
