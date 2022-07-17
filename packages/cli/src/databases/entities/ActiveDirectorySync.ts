/* eslint-disable import/no-cycle */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as config from '../../../config';
import { DatabaseType } from '../..';
import { RunningMode, SyncStatus } from '../../ActiveDirectory/constants';

function resolveDataType(dataType: string) {
	const dbType = config.getEnv('database.type');

	const typeMap: { [key in DatabaseType]: { [key: string]: string } } = {
		sqlite: {
			json: 'simple-json',
		},
		postgresdb: {
			datetime: 'timestamptz',
		},
		mysqldb: {},
		mariadb: {},
	};

	return typeMap[dbType][dataType] ?? dataType;
}

@Entity({ name: 'ad_sync' })
export class ActiveDirectorySync {
	@PrimaryGeneratedColumn()
	id: number;

	@Column(resolveDataType('datetime'))
	startedAt: Date;

	@Column(resolveDataType('datetime'))
	endedAt: Date;

	@Column()
	created: number;

	@Column()
	updated: number;

	@Column()
	disabled: number;

	@Column()
	scanned: number;

	@Column()
	status: SyncStatus;

	@Column()
	error: string;

	@Column()
	runMode: RunningMode;
}
