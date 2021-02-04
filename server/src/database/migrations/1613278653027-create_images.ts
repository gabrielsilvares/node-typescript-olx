import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1613278653027 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'image',
			columns: [
				{
					name: 'id',
					type: 'uuid',
					isPrimary: true,
					generationStrategy: 'uuid',
					default: 'uuid_generate_v4()',
				},
				{
					name: 'path',
					type: 'varchar'
				},
				{
					name: 'ad_id',
					type: 'uuid'
				}
			],
			foreignKeys: [
				{
					name: 'ImageAd',
					columnNames: ['ad_id'],
					referencedTableName: 'ad',
					referencedColumnNames: ['id'],
					onUpdate: 'CASCADE',
					onDelete: 'CASCADE'
				},
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('image')
	}

}
