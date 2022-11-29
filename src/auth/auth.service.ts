import { Injectable } from '@nestjs/common';
import { UserService } from 'src/auth/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/auth/user/entity/user.entity';
import { UserModel, UserStatus } from 'src/auth/user/user.model';
import { v4 as uuid } from 'uuid';
import { RegisterUserDto } from 'src/auth/user/dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(registerUserDto: RegisterUserDto): UserModel {
    const { name, email, password, status } = registerUserDto;

    const user: UserModel = {
      id: uuid(),
      name,
      email,
      password,
      status:
        status != UserStatus.ADMINISTRATOR ? status : UserStatus.ADMINISTRATOR,
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
