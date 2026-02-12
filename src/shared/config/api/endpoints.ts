export const API_ENDPOINTS = {
	users: {
		getAll: '/users',
		getById: (id: number | string) => `/users/${id}`,
		create: '/users',
		update: (id: number | string) => `/users/${id}`,
		delete: (id: number | string) => `/users/${id}`,
	},
} as const;

export type ApiEndpointsType = typeof API_ENDPOINTS;
