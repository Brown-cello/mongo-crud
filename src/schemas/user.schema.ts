import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Schema()
export class User extends Document{
    @ApiProperty({example:"akpan234", description:"the username of the user"})
    @Prop({required:true } )
    username:string;
    
    @ApiProperty({example:15,description:"the age of the user"})
    @Prop({ required:true } )
    age:number
    
    @ApiProperty({example:false,description:"this blocks the user the user"})
    @Prop({ default:false } )
    isBlocked:boolean

    @ApiProperty({example:"akpan@gmail.com",description:"the email of the user"})
    @Prop({ required: true, unique: true })
    email: string;

    @ApiProperty({example:"1234qw",description:"the password of the user"})
    @Prop({ required: true ,select:false})
    password: string;

    @ApiProperty({example:"admin",description:"the role of the user"})
    @Prop()
    role: string;
}

export const UserSchema =SchemaFactory.createForClass(User);



// UserSchema.pre<User>('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   });
  
//   UserSchema.methods.comparePassword = async function (candidatePassword: string) {
//     return await bcrypt.compare(candidatePassword, this.password);
//   };

















