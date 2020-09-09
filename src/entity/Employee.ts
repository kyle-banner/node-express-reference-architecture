import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne } from 'typeorm';
import EmployeeDto from '@models/Employee';
import Title from '@models/Title';
import Practice from '@models/Practice';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
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
