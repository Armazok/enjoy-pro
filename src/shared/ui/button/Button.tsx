import React, { memo } from 'react';

import { StyledAntdButton } from './Button.styled';

import type { ButtonProps as AntdButtonProps } from 'antd';

type ButtonProps = AntdButtonProps;

export const Button = memo(({ children, type = 'primary', ...otherProps }: ButtonProps) => {
	return (
		<StyledAntdButton type={type} {...otherProps}>
			{children}
		</StyledAntdButton>
	);
});

Button.displayName = 'Button';
