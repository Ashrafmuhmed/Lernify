import { PartialType } from "@nestjs/swagger";
import { CreateCourseDto } from "./CreateCourese.dto";

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    
}