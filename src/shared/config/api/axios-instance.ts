import axios from 'axios';

import { API_CONFIG } from './api-config';

export const axiosInstance = axios.create({
	baseURL: API_CONFIG.baseURL,
	timeout: API_CONFIG.timeout,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});
