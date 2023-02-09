import { PartialType } from "@nestjs/swagger";
import { CreateUserDto } from "./createUser.Dto";

export class UpdateUserDto extends PartialType(CreateUserDto) { }