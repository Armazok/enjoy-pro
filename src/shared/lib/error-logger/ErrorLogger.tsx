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
			console.group(`ErrorBoundary поймал ошибку в ${componentName}`);

			console.log(`Сообщение:`, error.message || '');
			console.log(`Стек:`, error.stack || '');

			if (context) {
				console.log(`Контекст:`, context);
			}

			console.log(`Время:`, new Date().toLocaleString());
			console.groupEnd();
		}
	}, [error, context, componentName, showInConsole]);

	return null;
};
