import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import { Address } from './Address';
import { Employee } from './Employee';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  scheduledTime!: string;

  @OneToOne((type) => Address)
  address?: Address;

  @OneToOne((type) => Employee)
  hostEmployeeId!: number;

  @OneToOne((type) => Employee)
  joiningEmployeeId!: number;
}
