import { Injectable, Logger } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { CreateUserDto } from '../auth/Dto/CreateUser.dto';
import { v4 as uuid } from 'uuid';
import { LoginDataDto } from '../auth/Dto/loginData.dto';
import { EnrollmentEntity } from '../enrollments/erollment.entity';
import { EncryptionMethods } from '../../utils/encryption.methods';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UserService {
  private encryption = new EncryptionMethods( new ConfigService() ) ; 
  private users: UserEntity[] = [];
  private logger = new Logger(UserService.name);
  async createUser(date: CreateUserDto): Promise<UserEntity | string> {
    let idx: number = -1;
    if (this.users.length)
      idx = this.users.findIndex((user, idx) => user.email === date.email);
    date.password = await this.encryption.encrypt(date.password);
    if (idx !== -1) {
      return 'Used email before';
    } else {
      const newUser: UserEntity = {
        ...date,
        id: uuid(),
        erollments: [],
      };
      this.users.push(newUser);
      return newUser;
    }
  }

  getUserByLoginData(data: LoginDataDto): UserEntity | string {
    const idx = this.users.findIndex(
      async (user) =>
        user.email === data.email &&
        user.password === (await this.encryption.encrypt(data.password)),
    );
    if (idx !== -1) {
      return this.users[idx];
    } else {
      return 'User not found';
    }
  }

  getUserById(id: string): { user: UserEntity; idx: number } | undefined {
    const idx = this.users.findIndex((user) => user.id === id);
    if (idx !== -1) {
      return {
        user: this.users[idx],
        idx: idx,
      };
    } else {
      return undefined;
    }
  }

  addEnrollment(idx: number, enroll: EnrollmentEntity): UserEntity {
    this.users[idx].erollments.push(enroll);
    return this.users[idx];
  }

  exist(id: string): { exist: boolean; idx: number } {
    const idx = this.users.findIndex((user, i) => user.id === id);
    console.log('UserService exist check:');
    console.log(id);
    console.log(this.users);
    return {
      exist: idx !== -1,
      idx: idx,
    };
  }

  getAllUsers(): UserEntity[] {
    return this.users;
  }
}
