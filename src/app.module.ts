import { Module } from '@nestjs/common';
import { UserModule } from './auth/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/user/entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/task.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'nestjs',
      entities: [User, Task],
      synchronize: true,
    }),
    AuthModule,
    ProfileModule,
    TasksModule,
  ],
})
export class AppModule {}
