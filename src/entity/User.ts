import {
  IsDate,
  IsEmail,
  IsEnum,
  IsPhoneNumber,
  IsString,
  Length,
  MaxLength,
  validateOrReject,
} from "class-validator";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserRoles, UserStatus } from "../types/enums";

@Entity({ name: "users" })
export class User {
  @PrimaryColumn({ unique: true })
  id!: number;

  @Column({ nullable: true })
  @MaxLength(100)
  @IsString()
  firstName!: string;

  @Column({ nullable: true })
  @MaxLength(100)
  @IsString()
  lastName!: string;

  @Column({ unique: true, type: "varchar" })
  @IsString()
  @IsPhoneNumber("BD")
  phone!: string;

  @Column({ unique: true, type: "varchar" })
  @IsEmail()
  @Length(3, 320)
  email!: string;

  @Column({ type: "enum", enum: UserStatus, default: UserStatus.ACTIVE })
  @IsEnum(UserStatus)
  status!: UserStatus;

  @Column({ type: "enum", enum: UserRoles, default: UserRoles.USER })
  @IsEnum(UserRoles)
  role!: UserRoles;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;

  @UpdateDateColumn({
    type: "timestamp",
    onUpdate: "CURRENT_TIMESTAMP",
    nullable: true,
  })
  updated_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    onUpdate: "CURRENT_TIMESTAMP",
    nullable: true,
  })
  @IsDate()
  deleted_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    await validateOrReject(this);
  }
}
