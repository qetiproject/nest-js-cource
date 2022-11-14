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

    update(updateUserDTO: UpdateUserDto, param: {userId: number}) {
        return { body: updateUserDTO, param};
    }

    show(param: { userId: number} ) {
        return param;
     }
    
     delete(param: { userId: number} ) {
        return param;
     }
}
