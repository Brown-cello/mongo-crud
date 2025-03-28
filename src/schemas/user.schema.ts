import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class User{
    @ApiProperty({example:"akpan234", description:"the username of the user"})
    @Prop({unique:true ,required:true } )
    username:string;
    
    @ApiProperty({example:15,description:"the age of the user"})
    @Prop({ required:true } )
    age:number
}

export const UserSchema =SchemaFactory.createForClass(User);





















