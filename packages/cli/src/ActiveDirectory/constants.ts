/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/naming-convention */

export const ACTIVE_DIRECTORY_FEATURE_NAME = 'activeDirectory';

export const ACTIVE_DIRECTORY_DISABLED = 'activeDirectory.disabled';

export const ACTIVE_DIRECTORY_LOGIN_LABEL = 'activeDirectory.loginLabel';

export const ACTIVE_DIRECTORY_LOGIN_ENABLED = 'activeDirectory.loginEnabled';

export enum SignInType {
	LDAP = 'ldap',
	EMAIL = 'email',
}

export enum RunningMode {
	DRY = 'dry',
	LIVE = 'live',
}

export enum SyncStatus {
	SUCCESS = 'success',
	ERROR = 'error',
}

export const AD_LOG_PREPEND_MESSAGE = 'Activery Directory -';
