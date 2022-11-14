import {
  Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Req,
  } from '@nestjs/common';
  import { Request } from 'express';
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
  
    @Post()
    store(@Body() createUser: CreateUserDto) {
      return this.userService.create(createUser);
    }
  
    @Patch('/:userId')
    update(@Body() updateUserDTO: UpdateUserDto, @Param() param: { userId: number}) {
      return this.userService.update(updateUserDTO, param);
    }
  
    @Get('/:userId')
    getUser(@Param() param: { userId: number }) {
      return this.userService.show(param)
    }
  
    @Delete('/:userId')
    deleteUser(@Param() param: { userId: number }) {
      return this.userService.delete(param);
    }
  }