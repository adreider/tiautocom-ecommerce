import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterProductAddDepartmentId1630957621998 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "product",
            new TableColumn({
                name: "department_id",
                type: "uuid"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("product", "department_id")
    }

}
