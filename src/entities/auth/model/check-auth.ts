import { ROUTES } from '@shared/constant';

import { authStorage } from '../lib/auth-storage';

export const checkAuth = () => {
	const token = authStorage.getToken();

	if (!token) {
		if (window.location.pathname !== ROUTES.LOGIN) {
			window.location.href = ROUTES.LOGIN;
		}
	}
};
