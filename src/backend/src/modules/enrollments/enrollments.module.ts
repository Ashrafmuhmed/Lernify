import { Module } from '@nestjs/common';
import { EnrollmentsController } from './enrollments.controller';
import { EnrollmentsService } from './enrollments.service';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';

@Module({
  controllers: [EnrollmentsController],
  providers: [EnrollmentsService,UserService]
})
export class EnrollmentsModule {}
