import { Injectable } from '@nestjs/common';
import { UserEntity } from '../user/user.entity';
import { CreateUserDto } from './Dto/CreateUser.dto';
import { LoginDataDto } from './Dto/loginData.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {
    console.log(this.userService.getAllUsers());
  }

  async register(data: CreateUserDto): Promise<UserEntity | string> {
    console.log(this.userService.getAllUsers());
    return await this.userService.createUser(data);
  }

  login(data: LoginDataDto): UserEntity | string {
    return this.userService.getUserByLoginData(data);
  }
}
