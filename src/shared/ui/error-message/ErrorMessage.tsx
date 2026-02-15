import React from 'react';

import { Typography } from 'antd';

interface ErrorMessageProps {
	message: string;
}

export const ErrorMessage = React.memo(({ message }: ErrorMessageProps) => {
	return (
		<div>
			<Typography.Text type="danger">Ошибка: {message}</Typography.Text>
		</div>
	);
});

ErrorMessage.displayName = 'ErrorMessage';
