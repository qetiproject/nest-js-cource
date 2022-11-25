import { Body, Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // create(@Body() createUser: CreateUserDto) {
  // return createUser;
  // }

  // update(updateUserDTO: UpdateUserDto, userId: number) {
  //     return { body: updateUserDTO, userId};
  // }

  // show(userId: number) {
  //     return userId;
  //  }

  //  delete(userId: number) {
  //     return userId;
  //  }
}
