import { Injectable } from '@nestjs/common';
import { CourseEntity } from './course.entity';
import { UpdateCourseDto } from './Dtos/UpdateCourse.dto';
import { CreateCourseDto } from './Dtos/CreateCourese.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CourseService {

    private courses: CourseEntity[] = [] ; 

    getAll():CourseEntity[]{
        return this.courses ; 
    }

    getCourse(id:String): CourseEntity{
        let f = this.courses.find(
            (course , idx ) => course.id == id  
        );
        if(f) return f ;
        else{
            return new CourseEntity() ; 
        } 
    }

    createCourse( data:CreateCourseDto ):CourseEntity{

        let course:CourseEntity = {
            ...data,
            id: uuid()
        };

        this.courses.push(course) ; 

        return course ; 
    
    }

    editCourse( id:String , data:UpdateCourseDto ):CourseEntity{

        let idx = this.courses.findIndex(
            ( course , idx ) => course.id == id 
        );

        this.courses[idx] = {
            ...this.courses[idx] , 
            ...data 
        };

        return this.courses[idx] ; 

    }

    deleteCourse( id:string ){
        this.courses = this.courses.filter(
            ( course , idx ) => course.id != id  
        );
    }

}
