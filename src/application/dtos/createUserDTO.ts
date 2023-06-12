import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDTO {
  constructor(props: CreateUserDTO) {
    Object.assign(this, props);
  }
  @IsNotEmpty()
  @IsString()
  name: string;
}
