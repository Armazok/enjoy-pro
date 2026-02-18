import type { ChangeEvent, FormEvent } from 'react';
import { useState, useCallback } from 'react';

import { ROUTES } from '@shared/constant';

import { useLogin } from '../hook/useLogin';

interface LoginFormState {
	login: string;
	password: string;
	error: string | null;
}

const initialState: LoginFormState = {
	login: '',
	password: '',
	error: null,
};

export const useLoginForm = () => {
	const { mutate, isPending } = useLogin();
	const [state, setState] = useState<LoginFormState>(() => initialState);
	const { login, password, error } = state;

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault();
			setState((prev) => ({ ...prev, error: null }));

			mutate(
				{ login, password },
				{
					onSuccess: () => {
						window.location.href = ROUTES.USERS;
					},
					onError: (err: Error) => {
						setState((prev) => ({ ...prev, error: err.message }));
					},
				},
			);
		},
		[login, password, mutate],
	);

	const onChangeLogin = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setState((prev) => ({ ...prev, login: value }));
	}, []);

	const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setState((prev) => ({ ...prev, password: value }));
	}, []);

	return {
		login,
		password,
		error,
		isPending,
		handleSubmit,
		onChangeLogin,
		onChangePassword,
	};
};
