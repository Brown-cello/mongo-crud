import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel:Model<User>){}
 async create(createUserDto: CreateUserDto) {
    const newuser = await new this.userModel(createUserDto)
    return newuser.save();
  }

  findAll() {
    return this.userModel.find();
  }

   async findOne(id: string) {
    const user =await this.userModel.findById(id).exec()
    if(user) return user
    return  new HttpException('user not found', 404) ;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  remove(id: number) {
    return this.userModel.findByIdAndUpdate(id);
  }
   }
