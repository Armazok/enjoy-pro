export const API_ENDPOINTS = {
	users: {
		getAll: '/users',
		getById: (id: number | string) => `/users/${id}`,
		create: '/users',
		updateById: (id: number | string) => `/users/${id}`,
		deleteById: (id: number | string) => `/users/${id}`,
	},
} as const;
