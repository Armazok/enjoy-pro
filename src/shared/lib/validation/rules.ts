type Rule<T> = (value: T) => string | undefined;

export const required =
	(message = 'Поле обязательно'): Rule<unknown> =>
	(value) => {
		if (value == null) return message;
		if (typeof value === 'string' && !value.trim()) return message;
		return undefined;
	};

export const url =
	(message = 'Некорректный URL'): Rule<string> =>
	(value) => {
		if (!value) return undefined; // явно
		if (!/^https?:\/\/.+/.test(value)) return message;
		return undefined;
	};
