import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ROUTES } from '@shared/constant';

import { authStorage } from '../lib/auth-storage';
import { authKeys } from '../model/queryKeys';

export const useLogout = () => {
	const queryClient = useQueryClient();

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

			window.location.href = ROUTES.LOGIN;
		},
	});
};
