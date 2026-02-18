import { useState, useEffect, useCallback } from 'react';
import type { ChangeEvent } from 'react';

import type { UserType } from '@entities/users';

import { userSchema, useValidation } from '@shared/lib';

export const useEditUserForm = (initialData: UserType) => {
	const [formData, setFormData] = useState<UserType>(() => initialData);

	const { errorsValidate, validate, clearAllErrors } = useValidation<UserType>(
		formData,
		userSchema,
	);

	useEffect(() => {
		if (initialData) {
			setFormData(initialData);
		}
	}, [initialData]);

	const handleChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setFormData((formData) => ({ ...formData, name: value }));
	}, []);

	const handleChangeAvatar = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setFormData((formData) => ({ ...formData, avatar: value }));
	}, []);

	return {
		formData,
		errorsValidate,
		validate,
		handleChangeName,
		handleChangeAvatar,
		clearAllErrors,
	};
};
