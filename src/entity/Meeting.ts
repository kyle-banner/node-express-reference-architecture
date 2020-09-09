import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Address } from './Address';
import { Employee } from './Employee';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  scheduledTime!: string;

  @OneToOne((type) => Address, { cascade: true })
  address!: Address;

  @OneToOne((type) => Employee, { cascade: true })
  hostEmployeeId!: number;

  @OneToOne((type) => Employee, { cascade: true })
  joiningEmployeeId!: number;
}
