import {MigrationInterface, QueryRunner} from "typeorm";

export class AddMeetings1599171100254 implements MigrationInterface {
    name = 'AddMeetings1599171100254'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "line1" character varying NOT NULL, "line2" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "zipCode" integer NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "meeting" ("id" SERIAL NOT NULL, "scheduledTime" character varying NOT NULL, CONSTRAINT "PK_dccaf9e4c0e39067d82ccc7bb83" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "meeting"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
