import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateMeetingToManyToOne1599801272100 implements MigrationInterface {
    name = 'UpdateMeetingToManyToOne1599801272100'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "line2" SET DEFAULT null`);
        await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "FK_0f700978535ef22db953d0c97d1"`);
        await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "FK_57fa2fbfb2e8a7917abb39ca760"`);
        await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "FK_f7fe9c8023cd712de62a6eb821d"`);
        await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "UQ_0f700978535ef22db953d0c97d1"`);
        await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "UQ_57fa2fbfb2e8a7917abb39ca760"`);
        await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "UQ_f7fe9c8023cd712de62a6eb821d"`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD CONSTRAINT "FK_0f700978535ef22db953d0c97d1" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD CONSTRAINT "FK_57fa2fbfb2e8a7917abb39ca760" FOREIGN KEY ("hostEmployeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD CONSTRAINT "FK_f7fe9c8023cd712de62a6eb821d" FOREIGN KEY ("joiningEmployeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "FK_f7fe9c8023cd712de62a6eb821d"`);
        await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "FK_57fa2fbfb2e8a7917abb39ca760"`);
        await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "FK_0f700978535ef22db953d0c97d1"`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD CONSTRAINT "UQ_f7fe9c8023cd712de62a6eb821d" UNIQUE ("joiningEmployeeId")`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD CONSTRAINT "UQ_57fa2fbfb2e8a7917abb39ca760" UNIQUE ("hostEmployeeId")`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD CONSTRAINT "UQ_0f700978535ef22db953d0c97d1" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD CONSTRAINT "FK_f7fe9c8023cd712de62a6eb821d" FOREIGN KEY ("joiningEmployeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD CONSTRAINT "FK_57fa2fbfb2e8a7917abb39ca760" FOREIGN KEY ("hostEmployeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD CONSTRAINT "FK_0f700978535ef22db953d0c97d1" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "line2" DROP DEFAULT`);
    }

}
