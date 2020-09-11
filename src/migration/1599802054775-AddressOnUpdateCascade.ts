import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddressOnUpdateCascade1599802054775 implements MigrationInterface {
  name = 'AddressOnUpdateCascade1599802054775';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "FK_0f700978535ef22db953d0c97d1"`);
    await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "line2" SET DEFAULT null`);
    await queryRunner.query(
      `ALTER TABLE "meeting" ADD CONSTRAINT "FK_0f700978535ef22db953d0c97d1" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE CASCADE`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "FK_0f700978535ef22db953d0c97d1"`);
    await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "line2" DROP DEFAULT`);
    await queryRunner.query(
      `ALTER TABLE "meeting" ADD CONSTRAINT "FK_0f700978535ef22db953d0c97d1" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
