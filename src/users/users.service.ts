import { BadRequestException, ConflictException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor( @InjectModel(User.name) private userModel:Model<User>){}
 async create(createUserDto: CreateUserDto) {
  const newuser = await new this.userModel(createUserDto)
  try {
    const existingUser = await this.userModel.findOne({ username: createUserDto.username });
    if (existingUser) {
      throw new ConflictException('Username is already in use. Please choose another.');
    }
    const newUser = new this.userModel(createUserDto);
   return await newUser.save();
  } catch (error) {
    
    throw error;

  }
  
  
  }

  findAll() {
    return this.userModel.find();
  }

   async findOne(id: string) {
    const user =await this.userModel.findById(id).exec()
    if(user) return user
    return  new HttpException('user not found', 404) ;
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email }).select('+password').exec();
  }

  async findByPassword(password: string) {
    return await this.userModel.findOne({ password } );
}

  

 async update(id: string, updateUserDto: UpdateUserDto) {
    const updateuser = await this.userModel.findOne({ where: { id } });
    if (!updateuser) {
      throw new NotFoundException(` record with ID ${id} not found`);
    }

    const newupdatecar = await this.userModel.findByIdAndUpdate(id,updateuser);
    const updated = await this.userModel.findOne({ where: { id } })
    

    return{
      statuscode:200,
      message:'link succesfully updated',
      data:updated
    }
}



async remove(id: string) {
  const result = await this.userModel.findByIdAndDelete(id);

  if (!result) {
    throw new NotFoundException(`Library record with ID ${id} not found`);
  
  }

  const newresult= await this.userModel.findByIdAndDelete(id)
  

  return { message: `Library record with ID ${id} deleted successfully`,


};
} 
  
  }


