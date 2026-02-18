import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { ROUTES } from '@shared/constant';

import { authStorage } from '../lib/auth-storage';

export const useAuthStorageWatcher = () => {
	const location = useLocation();

	useEffect(() => {
		const handleStorage = (e: StorageEvent) => {
			if (e.key === authStorage.TOKEN_KEY && !e.newValue) {
				if (location.pathname !== ROUTES.LOGIN) {
					window.location.href = ROUTES.LOGIN;
				}
			}
		};

		window.addEventListener('storage', handleStorage);

		if (!authStorage.getToken() && location.pathname !== ROUTES.LOGIN) {
			window.location.href = ROUTES.LOGIN;
		}

		return () => window.removeEventListener('storage', handleStorage);
	}, [location.pathname]);
};
