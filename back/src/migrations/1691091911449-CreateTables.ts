import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1691091911449 implements MigrationInterface {
    name = 'CreateTables1691091911449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "register_date"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "register_date" TIMESTAMP NOT NULL`);
    }

}
