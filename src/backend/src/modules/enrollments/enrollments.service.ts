import { Injectable } from '@nestjs/common';
import { EnrollmentDto } from './Dto/Enrollment.dto';
import { v4 as uuid } from 'uuid';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class EnrollmentsService {

    constructor(private readonly userService: UserService) {}

    createEnrollment( data: EnrollmentDto ):UserEntity|string{
        let userid = data.userId;
        let { exist , idx } = this.userService.exist(userid);
        console.log('exist', exist);
        console.log('idx', idx);
        if(exist){
            const enroll = {
                ...data,
                id: uuid()
            };
            return this.userService.addEnrollment(idx, enroll);
        }else{
            return 'User not found';
        }
    }

}
