import { type NavigateFunction } from 'react-router-dom';

import { axiosInstance } from '@shared/config';
import { type RoutePath } from '@shared/constant';

import { authStorage } from '../lib/auth-storage';

import type { AxiosError, AxiosResponse } from 'axios';

let initialized = false;

export const setupAuthInterceptors = (navigate: NavigateFunction) => {
	if (initialized) return;

	axiosInstance.interceptors.request.use((config) => {
		const accessToken = authStorage.getToken();
		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		return config;
	});

	axiosInstance.interceptors.response.use(
		(response: AxiosResponse) => response,
		(error: AxiosError) => {
			const status = error.response?.status;

			const statusHandlers: Record<number, RoutePath> = {
				401: '/login',
				500: '/500',
			};

			if (status && status in statusHandlers) {
				const route = statusHandlers[status];
				if (route) {
					navigate(route, { replace: true });
				}
			}
			return Promise.reject(error);
		},
	);

	initialized = true;
};
