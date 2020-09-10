import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateEmployeeId1599767511312 implements MigrationInterface {
    name = 'UpdateEmployeeId1599767511312'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "line2" SET DEFAULT null`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "line2" DROP DEFAULT`);
    }

}
