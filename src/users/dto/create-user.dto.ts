import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString }from 'class-validator'

export class CreateUserDto {
     @ApiProperty({example:"akpan234", description:"the username of the user"})
    @IsNotEmpty()
    @IsString()
    username:string

    @ApiProperty({example:15,description:"the age of the user"})
    @IsNotEmpty()
    @IsNumber()
    age:number


    @ApiProperty({example:false,description:"this blocks the user the user"})
    @IsBoolean()
    @IsOptional()
    isBlocked?:boolean

    @ApiProperty({example:"akpan@gmail.com",description:"the email of the user"})
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @ApiProperty({example:"1234qw",description:"the password of the user"})
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({example:"admin",description:"the  of the user"})
    @IsNotEmpty()
    @IsString()
    role: string;
}
