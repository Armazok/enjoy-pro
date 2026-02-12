import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ROUTES } from '@shared/constant';

import { fakeLogin } from './auth-api';
import { authStorage } from '../lib/auth-storage';

const authKeys = {
	all: ['auth'] as const,
	session: () => [...authKeys.all, 'session'] as const,
};

export const useLogin = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({ login, password }: { login: string; password: string }) =>
			fakeLogin(login, password),
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
