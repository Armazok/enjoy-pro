import type { ChangeEvent } from 'react';
import { useState, useCallback } from 'react';

import { type UserBase } from '@entities/users';

import { useValidation } from '@shared/lib';

import { userSchema } from '../model/validation';

export const useCreateUserForm = () => {
	const [formData, setFormData] = useState<UserBase>({
		name: '',
		avatar: '',
	});

	const { errorsValidate, validate, clearAllErrors } = useValidation<UserBase>(
		formData,
		userSchema,
	);

	const resetForm = useCallback(() => {
		setFormData({ name: '', avatar: '' });
	}, []);

	const handleChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setFormData((prev) => ({ ...prev, name: value }));
	}, []);

	const handleChangeAvatar = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setFormData((prev) => ({ ...prev, avatar: value }));
	}, []);

	return {
		formData,
		resetForm,
		handleChangeName,
		handleChangeAvatar,
		errorsValidate,
		validate,
		clearAllErrors,
	};
};
