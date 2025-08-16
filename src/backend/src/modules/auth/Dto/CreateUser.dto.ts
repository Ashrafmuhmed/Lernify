import { 
    IsEmail,
    IsNumber,
    IsNumberString, 
    IsPhoneNumber, 
    IsString, 
    IsStrongPassword, 
    Length } from "class-validator";


export class CreateUserDto{

    @IsString()
    @Length( 5 , 25 )
    name: string ;

    @IsNumberString()
    @Length( 2 , 2 )
    age: string
    
    @IsNumberString()
    @IsPhoneNumber('EG')
    @Length( 11 , 11 )
    phoneNumber: string

    @IsEmail()
    email: string


    @IsStrongPassword({})
    password:string


}