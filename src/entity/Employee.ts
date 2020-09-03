import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id!: number;
}
