import { Controller, Get, Param , Post , Body, Patch, ParseUUIDPipe } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './Dtos/CreateCourese.dto';
import { UpdateCourseDto } from './Dtos/UpdateCourse.dto';

@Controller('course')
export class CourseController {

    constructor( private courseService: CourseService){}

    @Get()
    getAll(){
        return this.courseService.getAll() ; 
    }

    @Get(':id')
    getCourse( @Param('id') id:string ){
        return this.courseService.getCourse(id) ;
    }

    @Post()
    addCourse( @Body() data:CreateCourseDto ){
        return this.courseService.createCourse(data) ; 
    }

    @Patch('id')
    editCourse( @Param('id' , ParseUUIDPipe ) id:string , @Body() data:UpdateCourseDto ){
        return this.courseService.editCourse( id , data ) ;
    }

    @Post(':id')
    deleteCourse( @Param('id' , ParseUUIDPipe) id:string ){
        return this.courseService.deleteCourse(id) ;
    }

}
