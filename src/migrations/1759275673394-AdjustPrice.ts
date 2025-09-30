import { MigrationInterface, QueryRunner } from "typeorm";

export class AdjustPrice1759275673394 implements MigrationInterface {
    name = 'AdjustPrice1759275673394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "books" ADD "price" numeric NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "books" ADD "price" integer NOT NULL`);
    }

}
