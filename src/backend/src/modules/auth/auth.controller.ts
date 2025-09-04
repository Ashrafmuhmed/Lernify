import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './Dto/CreateUser.dto';
import { AuthService } from './auth.service';
import { LoginDataDto } from './Dto/loginData.dto';
import { UserEntity } from '../user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async regitster(@Body() data: CreateUserDto): Promise<UserEntity | string> {
    return await this.authService.register(data);
  }

  @Post('login')
  login(@Body() data: LoginDataDto) {
    return this.authService.login(data);
  }
}
