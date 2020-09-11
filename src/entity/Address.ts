import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id?: string | undefined;

  @Column()
  line1!: string;

  @Column({nullable: true, default: null})
  line2?: string;

  @Column()
  city!: string;

  @Column()
  state!: string;

  @Column()
  zipCode!: number;
}
