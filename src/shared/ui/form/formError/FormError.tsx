import React from 'react';

import { Alert } from 'antd';

interface FormErrorProps {
	error: string | null;
}

export const FormError = ({ error }: FormErrorProps) => {
	if (!error) return null;

	return <Alert message={error} type="error" showIcon closable style={{ marginBottom: 24 }} />;
};
