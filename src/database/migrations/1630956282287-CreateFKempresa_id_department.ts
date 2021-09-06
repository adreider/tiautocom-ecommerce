import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateFKempresaIdDepartment1630956282287 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "department",
            new TableForeignKey({
                name: "FKEmpresa_department",
                referencedTableName: "empresa",
                referencedColumnNames: ["id"],
                columnNames: ["empresa_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("department", "createForeignKey")
    }

}
