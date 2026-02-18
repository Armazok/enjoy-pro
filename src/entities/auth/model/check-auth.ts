import { ROUTES } from '@shared/constant';

import { authStorage } from '../lib/auth-storage';

import type { NavigateFunction } from 'react-router-dom';

export const checkAuth = (navigate: NavigateFunction) => {
	const token = authStorage.getToken();

	if (!token) {
		if (window.location.pathname !== ROUTES.LOGIN) {
			navigate(ROUTES.LOGIN, { replace: true });
		}
	}
};
