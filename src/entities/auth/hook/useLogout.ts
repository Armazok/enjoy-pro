import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@shared/constant';

import { authKeys } from '../constant/auth-query-keys';
import { authStorage } from '../lib/auth-storage';

export const useLogout = () => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	return useMutation({
		mutationFn: async () => {
			authStorage.clearAuth();
			return Promise.resolve();
		},
		onSuccess: () => {
			queryClient.clear();
			queryClient.setQueryData(authKeys.session(), {
				isAuthenticated: false,
				token: null,
			});

			navigate(ROUTES.LOGIN, { replace: true });
		},
	});
};
