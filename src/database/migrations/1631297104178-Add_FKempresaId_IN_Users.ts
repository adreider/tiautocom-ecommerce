import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddFKempresaIdINUsers1631297104178 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "users",
            new TableForeignKey({
                name: "FkEmpresaId_users",
                referencedTableName: "empresa",
                referencedColumnNames: ["id"],
                columnNames: ["empresa_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("users", "FkEmpresaId_users")
    }

}
