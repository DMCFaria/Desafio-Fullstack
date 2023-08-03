import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1691090871056 implements MigrationInterface {
    name = 'CreateTables1691090871056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "users_pkey"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_c90850dfa1384e76141907a111f" UNIQUE ("number")`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "register_date"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "register_date" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "register_date"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "register_date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_c90850dfa1384e76141907a111f"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "number" character varying(50)`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_b48860677afe62cd96e12659482"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "email" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "name" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "id" integer NOT NULL DEFAULT nextval('users_id_seq')`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id")`);
    }

}
