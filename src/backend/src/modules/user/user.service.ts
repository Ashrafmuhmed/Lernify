import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { CreateUserDto } from '../auth/Dto/CreateUser.dto';
import { v4 as uuid } from 'uuid';
import { LoginDataDto } from '../auth/Dto/loginData.dto';
import { EnrollmentEntity } from '../enrollments/erollment.entity';
@Injectable()
export class UserService {

    private users: UserEntity[] = [ ];

    createUser( date: CreateUserDto ): UserEntity | string {
        let idx: number = -1;
        if (this.users.length)
            idx = this.users.findIndex(
                (user, idx) => user.email === date.email
            );

        if (idx === -1) {
            const newUser: UserEntity = {
                ...date,
                id: uuid(),
                erollments: []
            };
            this.users.push(newUser);
            return newUser;
        } else {
            return 'Used email before';
        }
    }

    getUserByLoginData(data:LoginDataDto): UserEntity | string {
        const idx = this.users.findIndex(user => user.email === data.email && user.password === data.password);
        if (idx !== -1) {
            return this.users[idx];
        } else {
            return 'User not found';
        }
    }

    getUserById(id: string): {user:UserEntity , idx:number} | undefined {
        const idx = this.users.findIndex(user => user.id === id);
        if (idx !== -1) {
            return {
                user: this.users[idx],
                idx: idx
            };
        } else {
            return undefined;
        }
    }

    addEnrollment( idx:number , enroll: EnrollmentEntity ):UserEntity{

        this.users[idx].erollments.push(enroll);
        return this.users[idx];


    }

    exist( id: string ):{exist:boolean,idx:number} {
        const idx = this.users.findIndex(( user , i ) => user.id === id);
        console.log('UserService exist check:');
        console.log( id ) ; 
        console.log( this.users ) ;
        return {
            exist: idx !== -1,
            idx: idx
        };
    }

    getAllUsers(): UserEntity[] {
        return this.users;
    }


}
