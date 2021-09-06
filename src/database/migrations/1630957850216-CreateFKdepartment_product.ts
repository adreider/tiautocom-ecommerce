import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateFKdepartmentProduct1630957850216 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "product",
            new TableForeignKey({
                name: 'FKdepartment_product',
                referencedTableName: "department",
                referencedColumnNames: ["id"],
                columnNames: ["department_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("product", "FKdepartment_product")
    }

}
