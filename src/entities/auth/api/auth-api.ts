export interface fakeLoginProps {
	login: string;
	password: string;
}

export const fakeLogin = ({ login, password }: fakeLoginProps): Promise<string> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (login === 'admin' && password === 'admin') {
				const token = `token-${Date.now()}`;
				resolve(token);
			} else {
				reject(new Error('Неверный логин или пароль'));
			}
		}, 2000);
	});
};
