import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Address } from './Address';
import { Employee } from './Employee';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn('uuid')
  id?: string | undefined;

  @Column()
  scheduledTime!: string;

  @OneToOne((type) => Address, { cascade: true })
  @JoinColumn({ name: 'addressId' })
  address!: Address;

  @OneToOne((type) => Employee, { cascade: true })
  @JoinColumn({ name: 'hostEmployeeId' })
  hostEmployeeId!: string;

  @OneToOne((type) => Employee, { cascade: true })
  @JoinColumn({ name: 'joiningEmployeeId' })
  joiningEmployeeId!: string;
}
