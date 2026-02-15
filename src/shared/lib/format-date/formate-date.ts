import dayjs from 'dayjs';

export const formatDate = (value: string | number | Date, pattern = 'DD.MM.YYYY'): string => {
	if (!value) return '';

	const date = dayjs(value);

	if (!date.isValid()) return '';

	return date.format(pattern);
};
