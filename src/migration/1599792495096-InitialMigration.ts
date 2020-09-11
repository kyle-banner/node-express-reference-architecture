import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1599792495096 implements MigrationInterface {
  name = 'InitialMigration1599792495096';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "line1" character varying NOT NULL, "line2" character varying DEFAULT null, "city" character varying NOT NULL, "state" character varying NOT NULL, "zipCode" integer NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "employee" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "title" character varying NOT NULL, "email" character varying NOT NULL, "practice" character varying NOT NULL, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "meeting" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "scheduledTime" character varying NOT NULL, CONSTRAINT "PK_dccaf9e4c0e39067d82ccc7bb83" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "meeting"`);
    await queryRunner.query(`DROP TABLE "employee"`);
    await queryRunner.query(`DROP TABLE "address"`);
  }
}
