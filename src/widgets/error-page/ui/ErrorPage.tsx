import React from 'react';

import { Result } from 'antd';

import { ROUTES } from '@shared/config';
import { Button } from '@shared/ui';

import { defaultErrorConfig } from '../config/ErrorConfig';

import type { ErrorStatusType } from '../type/ErrorType';
import type { ResultProps } from 'antd/es/result';

interface ErrorPageProps extends Omit<ResultProps, 'status' | 'extra'> {
	status: ErrorStatusType;
	withBackButton?: boolean;
	backPath?: string;
	backText?: string;
}

export const ErrorPage = ({
	status,
	title,
	subTitle,
	withBackButton = true,
	backPath = ROUTES.HOME,
	backText = 'Вернуться на главную',
	...restProps
}: ErrorPageProps) => {
	const defaultConfig = defaultErrorConfig[status];

	return (
		<Result
			status={defaultConfig.status}
			title={title || defaultConfig.title}
			subTitle={subTitle || defaultConfig.subTitle}
			extra={withBackButton ? <Button href={backPath}>{backText}</Button> : null}
			{...restProps}
		/>
	);
};

ErrorPage.displayName = 'ErrorPage';
