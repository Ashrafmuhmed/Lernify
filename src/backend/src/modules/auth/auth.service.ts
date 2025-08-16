import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './Dto/CreateUser.dto';
import { v4 as uuid } from 'uuid'
import { emitWarning } from 'process';
import { LoginDataDto } from './Dto/loginData.dto';


@Injectable()
export class AuthService {

    private readonly users:UserEntity[] = [] ; 

    register( data:CreateUserDto ):UserEntity|string{
        let idx:number = -1 ; 
        if( this.users.length )
            idx = this.users.findIndex(
                ( user , idx ) => user.email == data.email
            );

        if( idx == -1 ){
            const newUser:UserEntity = {
            ...data , 
            id: uuid()
            };
            this.users.push(newUser) ; 
            return newUser ;
        }else{
            return 'Used email before' ; 
        }

    };

    login( data:LoginDataDto ):UserEntity|string{
        let idx:number = -1 ; 
        
        if( this.users.length > 0 )
            idx = this.users.findIndex(
                ( user , idx ) => (user.email == data.email && user.password == data.password) 
            );

        if( idx != -1 ){
            return this.users[idx] ;
        }else{
            return 'Unfound user' ; 
        }

    }



}
