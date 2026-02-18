import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@shared/constant';

import { authStorage } from '../lib/auth-storage';

export const useAuthStorageWatcher = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const handleStorage = (e: StorageEvent) => {
			if (e.key === authStorage.TOKEN_KEY && !e.newValue) {
				navigate(ROUTES.LOGIN, { replace: true });
			}
		};

		window.addEventListener('storage', handleStorage);

		if (!authStorage.getToken()) {
			navigate(ROUTES.LOGIN, { replace: true });
		}

		return () => window.removeEventListener('storage', handleStorage);
	}, [navigate]);
};
