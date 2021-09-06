import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDepartamento1630950257882 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "department",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "description",
                        type: "varchar"
                   }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
