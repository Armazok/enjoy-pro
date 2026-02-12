import { API_ENDPOINTS } from '../api/endpoints';

import type { CreateAxiosDefaults } from 'axios';

interface ApiConfig extends CreateAxiosDefaults {
	endpoints: typeof API_ENDPOINTS;
}

export const API_CONFIG = {
	baseURL: process.env.REACT_APP_API_URL ?? 'https://698da450b79d1c928ed60557.mockapi.io/api/v1',
	timeout: Number(process.env.REACT_APP_API_TIMEOUT) || 10000,
	endpoints: API_ENDPOINTS,
} as const satisfies ApiConfig;
