import { IsUUID } from "class-validator";
import { CreateUserDto } from "./Dto/CreateUser.dto";

export class UserEntity extends CreateUserDto{

    @IsUUID()
    id : string 
}