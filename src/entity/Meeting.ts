import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Address } from './Address';
import { Employee } from './Employee';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn('uuid')
  id?: string | undefined;

  @Column()
  scheduledTime!: string;

  @ManyToOne((type) => Address, { cascade: true })
  @JoinColumn({ name: 'addressId' })
  address!: Address;

  @ManyToOne((type) => Employee, { cascade: true })
  @JoinColumn({ name: 'hostEmployeeId' })
  hostEmployeeId!: string;

  @ManyToOne((type) => Employee, { cascade: true })
  @JoinColumn({ name: 'joiningEmployeeId' })
  joiningEmployeeId!: string;
}
