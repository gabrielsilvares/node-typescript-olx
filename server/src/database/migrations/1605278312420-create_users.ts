import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1605278312420 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(
				new Table({
					name: 'user',
					columns: [
						{
							name: 'id',
							type: 'uuid',
							isPrimary: true,
							generationStrategy: 'uuid',
							default: 'uuid_generate_v4()',
						},
						{
							name: 'state_id',
							type: 'uuid'
						},
						{
							name: 'name',
							type: 'varchar',
						},
						{
							name: 'email',
							type: 'varchar',
							isUnique: true,
						},
						{
							name: 'password',
							type: 'varchar',
						},
						{
							name: 'active',
							type: 'boolean',
							default: true,
						},
						{
							name: 'created_at',
							type: 'timestamp',
							default: 'now()',
						},
						{
							name: 'updated_at',
							type: 'timestamp',
							default: 'now()',
						},
					],
					foreignKeys: [
						{
							name: 'UserState',
							columnNames: ['state_id'],
							referencedTableName: 'state',
							referencedColumnNames: ['id'],
							onUpdate: 'CASCADE',
							onDelete: 'CASCADE'
						},
					]
				})
			);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('user')
    }

}
