import {MigrationInterface, QueryRunner} from "typeorm";

export class EmployeeRefactoring1599621344112 implements MigrationInterface {
    name = 'EmployeeRefactoring1599621344112'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ADD "firstName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "practice" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "practice"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "firstName"`);
    }

}
