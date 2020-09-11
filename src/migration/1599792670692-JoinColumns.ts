import {MigrationInterface, QueryRunner} from "typeorm";

export class JoinColumns1599792670692 implements MigrationInterface {
    name = 'JoinColumns1599792670692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meeting" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD CONSTRAINT "UQ_0f700978535ef22db953d0c97d1" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD "hostEmployeeIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD CONSTRAINT "UQ_65668415d3ec739e8a8095adecb" UNIQUE ("hostEmployeeIdId")`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD "joiningEmployeeIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD CONSTRAINT "UQ_3b2064a1540b92ebf78f0c64c5a" UNIQUE ("joiningEmployeeIdId")`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "line2" SET DEFAULT null`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD CONSTRAINT "FK_0f700978535ef22db953d0c97d1" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD CONSTRAINT "FK_65668415d3ec739e8a8095adecb" FOREIGN KEY ("hostEmployeeIdId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD CONSTRAINT "FK_3b2064a1540b92ebf78f0c64c5a" FOREIGN KEY ("joiningEmployeeIdId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "FK_3b2064a1540b92ebf78f0c64c5a"`);
        await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "FK_65668415d3ec739e8a8095adecb"`);
        await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "FK_0f700978535ef22db953d0c97d1"`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "line2" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "UQ_3b2064a1540b92ebf78f0c64c5a"`);
        await queryRunner.query(`ALTER TABLE "meeting" DROP COLUMN "joiningEmployeeIdId"`);
        await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "UQ_65668415d3ec739e8a8095adecb"`);
        await queryRunner.query(`ALTER TABLE "meeting" DROP COLUMN "hostEmployeeIdId"`);
        await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "UQ_0f700978535ef22db953d0c97d1"`);
        await queryRunner.query(`ALTER TABLE "meeting" DROP COLUMN "addressId"`);
    }

}
