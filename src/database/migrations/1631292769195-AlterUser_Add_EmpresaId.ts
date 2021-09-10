import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddEmpresaId1631292769195 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users", 
            new TableColumn({
                name: "empresa_id",
                type: "uuid",
                isNullable: true,
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "empresa_id")
    }

}
