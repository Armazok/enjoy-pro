import React, { type ChangeEvent, type FormEvent } from 'react';

import { Button, Input, Loader } from '@shared/ui';

import { ButtonWrapper, FieldWrapper } from './LoginFormFields.style';

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
			<FieldWrapper>
				<Input
					value={login}
					onChange={onChangeLogin}
					placeholder="Логин"
					disabled={isPending}
					required
				/>
			</FieldWrapper>

			<FieldWrapper>
				<Input.Password
					value={password}
					onChange={onChangePassword}
					placeholder="Пароль"
					disabled={isPending}
					required
				/>
			</FieldWrapper>

			<ButtonWrapper>
				<Button disabled={isPending} htmlType="submit">
					{isPending ? <Loader /> : 'Войти'}
				</Button>
			</ButtonWrapper>
		</form>
	);
};
