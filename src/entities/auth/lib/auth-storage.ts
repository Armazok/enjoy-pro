const AUTH_TOKEN_KEY = 'auth_token';

export const authStorage = {
	TOKEN_KEY: AUTH_TOKEN_KEY,

	getToken: (): string | null => {
		return localStorage.getItem(AUTH_TOKEN_KEY);
	},

	setToken: (token: string): void => {
		localStorage.setItem(AUTH_TOKEN_KEY, token);
	},

	removeToken: (): void => {
		localStorage.removeItem(AUTH_TOKEN_KEY);
	},

	clearAuth: (): void => {
		localStorage.removeItem(AUTH_TOKEN_KEY);
	},
};
