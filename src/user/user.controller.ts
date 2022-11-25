import {
  Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
  } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

  @Controller('user')
  export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    getUsers() {
      return this.userService.get()
    }
  
    // @Post()
    // store(@Body() createUser: CreateUserDto) {
    //   return this.userService.create(createUser);
    // }
  
    // @Patch('/:userId')
    // update(@Body() updateUserDTO: UpdateUserDto, @Param('userId', ParseIntPipe)  userId: number) {
    //   return this.userService.update(updateUserDTO, userId);
    // }
  
    // @Get('/:userId')
    // getUser(@Param('userId', ParseIntPipe) userId: number) {
    //   return this.userService.show(userId)
    // }
  
  // @Delete('/:userId')
    // deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    //   return this.userService.delete(userId);
    // }
  }
