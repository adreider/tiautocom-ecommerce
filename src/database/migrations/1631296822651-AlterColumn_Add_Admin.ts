import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterColumnAddAdmin1631296822651 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "admin",
                type: "boolean",
                default: false,
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "admin")
    }

}
