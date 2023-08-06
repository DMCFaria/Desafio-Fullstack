import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatedTables1691118794846 implements MigrationInterface {
    name = 'CreatedTables1691118794846'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "created_at"`);
    }

}
