import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { CourseModule } from './modules/course/course.module';
import { EnrollmentsModule } from './modules/enrollments/enrollments.module';
import { UserModule } from './modules/user/user.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [AuthModule, CourseModule, EnrollmentsModule, UserModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor, // This interceptor can be used for serialization
    }
  ]
})
export class AppModule {}
