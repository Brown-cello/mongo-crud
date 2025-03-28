import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString }from 'class-validator'

export class CreateUserDto {
     @ApiProperty({example:"akpan234", description:"the username of the user"})
    @IsNotEmpty()
    @IsString()
    username:string
    @ApiProperty({example:15,description:"the age of the user"})
    @IsNotEmpty()
    @IsNumber()
    age:number
}
