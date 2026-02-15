import { useState, useCallback } from 'react';

import { validate } from './validate';

import type { ValidationSchema, ValidationErrors } from './validate';

export const useValidation = <T extends Record<string, any>>(
	data: T,
	schema: ValidationSchema<T>,
) => {
	const [errorsValidate, setErrorsValidate] = useState<ValidationErrors<T>>({});

	const runValidation = useCallback(() => {
		const newErrors = validate(data, schema);
		setErrorsValidate(newErrors);
		return Object.keys(newErrors).length === 0;
	}, [data, schema]);

	const clearAllErrors = useCallback(() => {
		setErrorsValidate({});
	}, []);

	return { errorsValidate, validate: runValidation, clearAllErrors };
};
