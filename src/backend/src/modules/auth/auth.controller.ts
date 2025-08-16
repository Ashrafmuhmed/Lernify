import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './Dto/CreateUser.dto';
import { AuthService } from './auth.service';
import { UserEntity } from './user.entity';
import { LoginDataDto } from './Dto/loginData.dto';

@Controller('auth')

export class AuthController {

    constructor( private readonly authService:AuthService){}

    @Post('register')
    regitster(@Body() data:CreateUserDto ):UserEntity|string{
        return this.authService.register(data) ; 
    }

    @Post('login')
    login( @Body() data:LoginDataDto ){
        return this.authService.login(data) ; 
    }



}
