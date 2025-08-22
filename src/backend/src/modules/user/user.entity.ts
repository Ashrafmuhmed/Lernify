import { IsUUID } from "class-validator";
import { CreateUserDto } from "../auth/Dto/CreateUser.dto";
import { EnrollmentDto } from "../enrollments/Dto/Enrollment.dto";
import { EnrollmentEntity } from "../enrollments/erollment.entity";
import { Exclude } from "class-transformer";

export class UserEntity extends CreateUserDto{

    @Exclude()
    @IsUUID()
    id : string 

    erollments: EnrollmentEntity[] = [];

}