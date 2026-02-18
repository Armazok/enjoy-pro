import React, { memo, type MemoExoticComponent } from 'react';

import { Input as AntInput, Typography } from 'antd';

import { BaseInputContainer } from './Input.styled';

import type { InputProps as AntInputProps } from 'antd';

interface InputProps extends AntInputProps {
	error?: string;
	label?: string;
}

const BaseInput = ({ error, label, ...props }: InputProps) => {
	return (
		<BaseInputContainer>
			{label && <Typography.Title level={5}>{label}</Typography.Title>}
			<AntInput {...props} status={error ? 'error' : undefined} />
			{error && <Typography.Text type="danger">{error}</Typography.Text>}
		</BaseInputContainer>
	);
};

type CompoundInput = MemoExoticComponent<typeof BaseInput> & {
	Password: typeof AntInput.Password;
};

export const Input = memo(BaseInput) as CompoundInput;

Input.Password = AntInput.Password;

Input.displayName = 'Input';
