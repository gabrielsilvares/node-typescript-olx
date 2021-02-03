import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAds1612360117486 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
			name: 'ad',
			columns: [
				{
					name: 'id',
					type: 'uuid',
					isPrimary: true,
					generationStrategy: 'uuid',
					default: 'uuid_generate_v4()',
				},
				{
					name: 'user_id',
					type: 'uuid'
				},
				{
					name: 'state_id',
					type: 'uuid'
				},
				{
					name: 'category_id',
					type: 'uuid'
				},
				{
					name: 'title',
					type: 'varchar'
				},
				{
					name: 'description',
					type: 'varchar'
				},
				{
					name: 'price',
					type: 'numeric(65,30)'
				},
				{
					name: 'price_negociable',
					type: 'boolean'
				},
				{
					name: 'views',
					type: 'integer'
				},
				{
					name: 'status',
					type: 'varchar'
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
					name: 'AdCategory',
					columnNames: ['category_id'],
					referencedTableName: 'category',
					referencedColumnNames: ['id'],
					onUpdate: 'CASCADE',
					onDelete: 'CASCADE'
				},
				{
					name: 'AdState',
					columnNames: ['state_id'],
					referencedTableName: 'state',
					referencedColumnNames: ['id'],
					onUpdate: 'CASCADE',
					onDelete: 'CASCADE'
				},
				{
					name: 'AdUser',
					columnNames: ['user_id'],
					referencedTableName: 'user',
					referencedColumnNames: ['id'],
					onUpdate: 'CASCADE',
					onDelete: 'CASCADE'
				},
			]
		}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('ad');
    }

}
