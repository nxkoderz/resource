import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';


@Entity({ name: "users" })
export class User extends BaseEntity {
  constructor(user?: User) {
    super();
    Object.assign(this, user);
  }
  @Column()
  name: string;
}
