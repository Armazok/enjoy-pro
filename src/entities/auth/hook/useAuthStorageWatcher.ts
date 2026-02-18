import { useEffect } from 'react';

import { ROUTES } from '@shared/constant';

import { authStorage } from '../lib/auth-storage';

export const useAuthStorageWatcher = () => {
	useEffect(() => {
		const handleStorage = (e: StorageEvent) => {
			if (e.key === authStorage.TOKEN_KEY && !e.newValue) {
				window.location.href = ROUTES.LOGIN;
			}
		};

		window.addEventListener('storage', handleStorage);

		if (!authStorage.getToken()) {
			window.location.href = ROUTES.LOGIN;
		}

		return () => window.removeEventListener('storage', handleStorage);
	}, []);
};
