import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserStatus } from '../user.model';

export class RegisterUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEnum(UserStatus)
  @IsString()
  status: UserStatus;
}
