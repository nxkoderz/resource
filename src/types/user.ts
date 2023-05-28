import { UserRoles, UserStatus } from "./enums";

export interface ICreateUser {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  status?: UserStatus;
  role?: UserRoles;
}
