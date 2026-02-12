export const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	USERS: '/users',
	ERROR_404: '*',
	ERROR_403: '/403',
	ERROR_500: '/500',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
