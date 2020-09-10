import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import Title from 'src/dto/Title';
import Practice from 'src/dto/Practice';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  title!: Title;

  @Column()
  email!: string;

  @Column()
  practice!: Practice;
}
