import React, { memo } from 'react';

import { Typography } from 'antd';

interface ErrorMessageProps {
	message: string;
}

export const ErrorMessage = memo(({ message }: ErrorMessageProps) => {
	return <Typography.Text type="danger">Ошибка: {message}</Typography.Text>;
});

ErrorMessage.displayName = 'ErrorMessage';
