import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterEmpresaAddColumnCnpj1631299694789 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "empresa",
            new TableColumn({
                name: "cnpj",
                type: "varchar",
                isNullable: true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("empresa", "cnpj")
    }

}
