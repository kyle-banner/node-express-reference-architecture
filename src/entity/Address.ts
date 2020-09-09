import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  line1!: string;

  @Column()
  line2?: string;

  @Column()
  city!: string;

  @Column()
  state!: string;

  @Column()
  zipCode!: number;
}
