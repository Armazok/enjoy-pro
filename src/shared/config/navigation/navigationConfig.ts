import { ROUTES } from '@shared/constant';

import type { NavigationItemType } from './navigationType';

export const navigationConfig: NavigationItemType[] = [
	{
		path: ROUTES.USERS,
		label: 'Список пользователей',
		private: true,
	},
];
