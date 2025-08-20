import { IsBoolean, IsNumberString, IsString, Length } from "class-validator";

export class CreateCourseDto {

    @IsString()
    @Length(3, 100)
    title: string;

    @IsString()
    @Length(10, 500)
    description: string;
    
    @IsString()
    @Length(1 , 3) 
    @IsNumberString()
    duration: number; 
    
    @IsString()
    @Length( 10 , 30 )
    category: string;
    
    @IsString()
    @Length( 3 , 5 )
    price: number;
    
    @IsBoolean()
    isPublished: boolean;

}