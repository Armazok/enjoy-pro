import axios, { type AxiosError, type AxiosResponse } from 'axios';

import { ROUTES } from '@shared/config';

import { API_CONFIG } from './api-config';

const axiosInstance = axios.create({
	baseURL: API_CONFIG.baseURL,
	timeout: API_CONFIG.timeout,
	headers: {
		'Content-Type': 'application/json',
	},
});

axiosInstance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

axiosInstance.interceptors.response.use(
	(response: AxiosResponse) => response,
	(error: AxiosError) => {
		const status = error.response?.status;

		const statusHandlers: Record<number, string> = {
			403: ROUTES.LOGIN,
			404: ROUTES.ERROR_404,
			500: ROUTES.ERROR_500,
		};

		if (status && status in statusHandlers) {
			const route = statusHandlers[status];
			if (route) {
				window.location.href = route;
			}
		}
		return Promise.reject(error);
	},
);
