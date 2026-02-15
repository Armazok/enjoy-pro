export type ValidationSchema<T> = {
	[K in keyof T]?: Array<(value: T[K]) => string | undefined>;
};

export type ValidationErrors<T> = {
	[K in keyof T]?: string;
};

export const validate = <T extends Record<string, any>>(
	data: T,
	schema: ValidationSchema<T>,
): ValidationErrors<T> => {
	const errors: ValidationErrors<T> = {};

	for (const key in schema) {
		const rules = schema[key];
		if (!rules) continue;

		for (const rule of rules) {
			const error = rule(data[key]);
			if (error) {
				errors[key] = error;
				break;
			}
		}
	}

	return errors;
};
