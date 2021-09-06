import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterProcductCusto1630950084768 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "product",
            new TableColumn({
                name: "custo",
                type: "varchar"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("product", "custo")
    }

}
