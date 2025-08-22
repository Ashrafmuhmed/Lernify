import { Controller, Post , Body } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { EnrollmentDto } from './Dto/Enrollment.dto';

@Controller('enrollments')
export class EnrollmentsController {

    constructor(private readonly enrollmentsService: EnrollmentsService) {}

    @Post()
    addEnrollment( @Body() data: EnrollmentDto ) {
        return this.enrollmentsService.createEnrollment(data);
    }

}
