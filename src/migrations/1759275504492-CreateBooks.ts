import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBooks1759275504492 implements MigrationInterface {
    name = 'CreateBooks1759275504492'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "author" character varying NOT NULL, "publisher" character varying NOT NULL, "gender" character varying NOT NULL, "price" integer NOT NULL, "publish_date" date NOT NULL, "status" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "books"`);
    }

}
