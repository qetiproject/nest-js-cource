import { Body, Injectable, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

    get() {
       return { name: 'Keti', email: 'ketideveloper@gmail.com' };
    }

    create(@Body() createUser: CreateUserDto) {
        return createUser;
    }

    update(updateUserDTO: UpdateUserDto, userId: number) {
        return { body: updateUserDTO, userId};
    }

    show(userId: number) {
        return userId;
     }
    
     delete(userId: number) {
        return userId;
     }
}
