import React, { memo, type MemoExoticComponent } from 'react';

import { Input as AntInput, Typography } from 'antd';

import type { InputProps as AntInputProps } from 'antd';

interface InputProps extends AntInputProps {
	error?: string;
	label?: string;
}

const BaseInput = ({ error, label, ...props }: InputProps) => {
	return (
		<div style={{ marginBottom: 16 }}>
			{label && <Typography.Title level={5}>{label}</Typography.Title>}
			<AntInput {...props} status={error ? 'error' : undefined} />
			{error && <Typography.Text type="danger">{error}</Typography.Text>}
		</div>
	);
};

type CompoundInput = MemoExoticComponent<typeof BaseInput> & {
	Password: typeof AntInput.Password;
};

export const Input = memo(BaseInput) as CompoundInput;

Input.Password = AntInput.Password;

Input.displayName = 'Input';
