import React from 'react';

import { useLoginForm } from '@entities/auth';

import { FormError, Heading } from '@shared/ui';

import { LoginFormFields } from './LoginFormFields';

export const LoginForm = () => {
	const { login, onChangeLogin, password, onChangePassword, isPending, handleSubmit, error } =
		useLoginForm();

	return (
		<div style={{ maxWidth: '400px', margin: '100px auto', padding: '20px' }}>
			<Heading mb={'20px'}>Авторизация</Heading>
			<FormError error={error} />
			<LoginFormFields
				login={login}
				password={password}
				isPending={isPending}
				onSubmit={handleSubmit}
				onChangePassword={onChangePassword}
				onChangeLogin={onChangeLogin}
			/>
		</div>
	);
};
