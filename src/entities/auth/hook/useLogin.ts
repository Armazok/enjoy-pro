import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fakeLogin, type fakeLoginProps } from '../api/auth-api';
import { authKeys } from '../constant/auth-query-keys';
import { authStorage } from '../lib/auth-storage';

export const useLogin = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({ login, password }: fakeLoginProps) => fakeLogin({ login, password }),
		onSuccess: (token) => {
			authStorage.setToken(token);

			queryClient.setQueryData(authKeys.session(), {
				isAuthenticated: true,
				token,
			});
		},
		onError: (error: Error) => {
			console.error('Не верный логин или пароль:', error.message);
		},
	});
};
