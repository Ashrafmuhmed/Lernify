import { IsUUID } from "class-validator";
import { CreateCourseDto } from "./Dtos/CreateCourese.dto";

export class CourseEntity extends CreateCourseDto{
    @IsUUID()
    readonly id: string
}