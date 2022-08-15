import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTransactions1660571009976 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transactions",
        columns: [
          {
            name: "id",
            type: "uuid"
          },
          {
            name: "description",
            type: "varchar"
          },
          {
            name: "type",
            type: "varchar"
          },
          {
            name: "category",
            type: "varchar"
          },
          {
            name: "price",
            type: "numeric"
          },
          {
            name: "user_id",
            type: "uuid"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
        ],
        foreignKeys: [
          {
            name: "FKUserTransaction",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("transactions")
  }

}
