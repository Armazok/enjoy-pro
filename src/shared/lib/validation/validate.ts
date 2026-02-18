export type ValidationSchema<T> = {
	[K in keyof T]?: Array<(value: T[K]) => string | undefined>;
};

export type ValidationErrors<T> = {
	[K in keyof T]?: string;
};

export const validate = <T extends object>(
	data: T,
	schema: ValidationSchema<T>,
): ValidationErrors<T> => {
	const errors: ValidationErrors<T> = {};

	for (const key of Object.keys(schema) as Array<keyof T>) {
		const rules = schema[key];
		if (!rules) continue;

		const value = data[key];

		for (const rule of rules) {
			const error = rule(value);
			if (error) {
				errors[key] = error;
				break;
			}
		}
	}

	return errors;
};
