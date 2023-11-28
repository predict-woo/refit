import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInfo1701168209627 implements MigrationInterface {
    name = 'CreateInfo1701168209627'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "workout_style" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "infoId" integer, CONSTRAINT "PK_166032b141801a0f002eb8b93a1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "info" ("id" SERIAL NOT NULL, "yoe" integer NOT NULL, "workoutFrequency" integer NOT NULL, CONSTRAINT "PK_687dc5e25f4f1ee093a45b68bb7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "workout_style" ADD CONSTRAINT "FK_a0b99182d22773a745178b2f4ba" FOREIGN KEY ("infoId") REFERENCES "info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "workout_style" DROP CONSTRAINT "FK_a0b99182d22773a745178b2f4ba"`);
        await queryRunner.query(`DROP TABLE "info"`);
        await queryRunner.query(`DROP TABLE "workout_style"`);
    }

}
