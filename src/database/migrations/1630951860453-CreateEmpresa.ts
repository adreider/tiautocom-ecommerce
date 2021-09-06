import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEmpresa1630951860453 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "empresa",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "logo",
                        type: "varchar"
                    },
                    {
                        name: "active",
                        type: "boolean",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("empresa")
    }

}
