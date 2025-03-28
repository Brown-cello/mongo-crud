import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({summary:'create a new user account'})
  @ApiResponse({status: 201,description:'created successfully'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({summary:'get all user accounts'})
  @ApiResponse({status: 200,description:'all users retrieved successfully'})
  async findAllUsers() {
    return this.usersService.findAll();
  }
  

  @Get(':id')
  @ApiOperation({summary:'get a specific user account'})
  @ApiResponse({status: 200,description:'user retrieved successfully'})
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({summary:'update a specific user account'})
  @ApiResponse({status: 200,description:'user updated successfully'})
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({summary:'delete a specific user account'})
  @ApiResponse({status: 200,description:'user deleted successfully'})
  async removeUser(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
  
  }

