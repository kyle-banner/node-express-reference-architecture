import { MigrationInterface, QueryRunner } from 'typeorm';

export class JoinColumnsNames1599796660842 implements MigrationInterface {
  name = 'JoinColumnsNames1599796660842';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "FK_65668415d3ec739e8a8095adecb"`);
    await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "FK_3b2064a1540b92ebf78f0c64c5a"`);
    await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "UQ_65668415d3ec739e8a8095adecb"`);
    await queryRunner.query(`ALTER TABLE "meeting" DROP COLUMN "hostEmployeeIdId"`);
    await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "UQ_3b2064a1540b92ebf78f0c64c5a"`);
    await queryRunner.query(`ALTER TABLE "meeting" DROP COLUMN "joiningEmployeeIdId"`);
    await queryRunner.query(`ALTER TABLE "meeting" ADD "hostEmployeeId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "meeting" ADD CONSTRAINT "UQ_57fa2fbfb2e8a7917abb39ca760" UNIQUE ("hostEmployeeId")`
    );
    await queryRunner.query(`ALTER TABLE "meeting" ADD "joiningEmployeeId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "meeting" ADD CONSTRAINT "UQ_f7fe9c8023cd712de62a6eb821d" UNIQUE ("joiningEmployeeId")`
    );
    await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "line2" SET DEFAULT null`);
    await queryRunner.query(
      `ALTER TABLE "meeting" ADD CONSTRAINT "FK_57fa2fbfb2e8a7917abb39ca760" FOREIGN KEY ("hostEmployeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "meeting" ADD CONSTRAINT "FK_f7fe9c8023cd712de62a6eb821d" FOREIGN KEY ("joiningEmployeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "FK_f7fe9c8023cd712de62a6eb821d"`);
    await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "FK_57fa2fbfb2e8a7917abb39ca760"`);
    await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "line2" DROP DEFAULT`);
    await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "UQ_f7fe9c8023cd712de62a6eb821d"`);
    await queryRunner.query(`ALTER TABLE "meeting" DROP COLUMN "joiningEmployeeId"`);
    await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "UQ_57fa2fbfb2e8a7917abb39ca760"`);
    await queryRunner.query(`ALTER TABLE "meeting" DROP COLUMN "hostEmployeeId"`);
    await queryRunner.query(`ALTER TABLE "meeting" ADD "joiningEmployeeIdId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "meeting" ADD CONSTRAINT "UQ_3b2064a1540b92ebf78f0c64c5a" UNIQUE ("joiningEmployeeIdId")`
    );
    await queryRunner.query(`ALTER TABLE "meeting" ADD "hostEmployeeIdId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "meeting" ADD CONSTRAINT "UQ_65668415d3ec739e8a8095adecb" UNIQUE ("hostEmployeeIdId")`
    );
    await queryRunner.query(
      `ALTER TABLE "meeting" ADD CONSTRAINT "FK_3b2064a1540b92ebf78f0c64c5a" FOREIGN KEY ("joiningEmployeeIdId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "meeting" ADD CONSTRAINT "FK_65668415d3ec739e8a8095adecb" FOREIGN KEY ("hostEmployeeIdId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
