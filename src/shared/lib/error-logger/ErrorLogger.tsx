/* eslint-disable no-console */

import { useEffect } from 'react';
import type { FC } from 'react';

interface ErrorLoggerProps {
	error: Error;
	context?: Record<string, unknown>;
	componentName?: string;
	showInConsole?: boolean;
}

export const ErrorLogger: FC<ErrorLoggerProps> = ({
	error,
	context,
	componentName = 'Component',
	showInConsole = true,
}) => {
	useEffect(() => {
		if (showInConsole) {
			console.group(
				`ErrorBoundary поймал ошибку в ${componentName}`,
				'color: red; font-weight: bold;',
			);

			console.log(`Сообщение:`, 'color: orange;', error.message || '');
			console.log(`Стек:`, 'color: orange;', error.stack || '');

			if (context) {
				console.log(`Контекст:`, 'color: orange;', context);
			}

			console.log(`Время:`, 'color: gray;', new Date().toLocaleString());
			console.groupEnd();
		}
	}, [error, context, componentName, showInConsole]);

	return null;
};
