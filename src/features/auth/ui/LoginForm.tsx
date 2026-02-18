import React from 'react';

import { useLoginForm } from '@entities/auth';

import { FormError, Heading } from '@shared/ui';

import { LoginFormContainer } from './LoginForm.styled';
import { LoginFormFields } from '../ui/login-form-fields/LoginFormFields';

export const LoginForm = () => {
	const { login, onChangeLogin, password, onChangePassword, isPending, handleSubmit, error } =
		useLoginForm();

	return (
		<LoginFormContainer>
			<Heading $mb={20}>Авторизация</Heading>
			<FormError error={error} />
			<LoginFormFields
				login={login}
				password={password}
				isPending={isPending}
				onSubmit={handleSubmit}
				onChangePassword={onChangePassword}
				onChangeLogin={onChangeLogin}
			/>
		</LoginFormContainer>
	);
};
