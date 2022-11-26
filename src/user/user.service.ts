import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  update(updateUserDTO: UpdateUserDto, userId: number) {
    return this.userRepository.update(userId, updateUserDTO);
  }

  show(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  delete(userId: number) {
    return this.userRepository.delete(userId);
  }
}
