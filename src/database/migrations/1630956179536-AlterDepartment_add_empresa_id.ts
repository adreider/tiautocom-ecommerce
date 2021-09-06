import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterDepartmentAddEmpresaId1630956179536 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "department",
            new TableColumn({
                name: "empresa_id",
                type: "uuid"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("department", "empresa_id")
    }

}
