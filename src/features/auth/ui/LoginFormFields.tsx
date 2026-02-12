import React, { type ChangeEvent, type FormEvent } from 'react';

import { Button, Input } from 'antd';

interface LoginFormFieldsProps {
	login: string;
	password: string;
	isPending: boolean;
	onChangeLogin: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: FormEvent) => void;
}

export const LoginFormFields: React.FC<LoginFormFieldsProps> = ({
	login,
	password,
	isPending,
	onChangeLogin,
	onChangePassword,
	onSubmit,
}) => {
	return (
		<form onSubmit={onSubmit}>
			<div style={{ marginBottom: '15px' }}>
				<Input
					value={login}
					onChange={onChangeLogin}
					placeholder="Логин"
					disabled={isPending}
					required
				/>
			</div>

			<div style={{ marginBottom: '15px' }}>
				<Input.Password
					value={password}
					onChange={onChangePassword}
					placeholder="Пароль"
					disabled={isPending}
					required
				/>
			</div>

			<Button disabled={isPending || !login || !password} type="primary" htmlType="submit">
				{isPending ? 'Вход...' : 'Войти'}
			</Button>
		</form>
	);
};
