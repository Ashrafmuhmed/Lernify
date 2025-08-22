import { IsNumber, IsUUID, Length } from "class-validator";
import { EnrollmentsController } from "../enrollments.controller";

export class EnrollmentDto {

    @IsUUID()
    @Length(36, 36)
    userId: string;

    @IsNumber()
    progress?: number;
    
    @IsUUID() 
    @Length(36, 36)
    courseId: string;

}