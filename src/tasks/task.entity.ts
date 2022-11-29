import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;
}
