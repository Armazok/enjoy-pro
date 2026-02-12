import type { ErrorStatusType } from '../type/ErrorType';
import type { ResultStatusType } from 'antd/es/result';

export const defaultErrorConfig: Record<
	ErrorStatusType,
	{
		status: ResultStatusType;
		title: string;
		subTitle: string;
	}
> = {
	'404': {
		status: '404',
		title: '404',
		subTitle: 'Извините, страница, которую вы посетили, не существует.',
	},
	'500': {
		status: '500',
		title: '500',
		subTitle: 'Извините, что-то пошло не так. Пожалуйста, попробуйте позже.',
	},
	'403': {
		status: '403',
		title: '403',
		subTitle: 'Извините, у вас нет доступа к этой странице.',
	},
} as const;
