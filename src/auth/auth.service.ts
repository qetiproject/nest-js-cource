import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserDto } from 'src/user/dto/register-user.dto';
import { User } from 'src/user/entity/user.entity';
import { UserModel } from 'src/user/user.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(registerUserDto: RegisterUserDto): UserModel {
    const { name, email, password } = registerUserDto;

    const user: UserModel = {
      id: uuid(),
      name,
      email,
      password,
    };

    return user;
    // return this.userRepository.save(registerUserDto);
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
