import React from 'react';

import { Alert } from 'antd';

import { FormErrorContainer } from './FormError.styled';

interface FormErrorProps {
	error: string | null;
}

export const FormError = ({ error }: FormErrorProps) => {
	if (!error) return null;

	return (
		<FormErrorContainer>
			<Alert message={error} type="error" showIcon closable />
		</FormErrorContainer>
	);
};
