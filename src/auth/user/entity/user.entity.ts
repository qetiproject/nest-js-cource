import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserStatus } from '../user.model';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  status: UserStatus;
}
