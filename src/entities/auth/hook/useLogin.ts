import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fakeLogin, type fakeLoginProps } from '../api/auth-api';
import { authStorage } from '../lib/auth-storage';

const authKeys = {
	all: ['auth'] as const,
	session: () => [...authKeys.all, 'session'] as const,
};

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
			throw new Error('Не верный логин или пароль');
		},
	});
};
