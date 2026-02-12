import React, { memo } from 'react';

import { Button as AntdButton } from 'antd';

import type { ButtonProps as AntdButtonProps } from 'antd';

interface ButtonProps extends AntdButtonProps {}

export const Button = memo(({ children, type = 'primary', ...otherProps }: ButtonProps) => {
	return (
		<AntdButton type={type} {...otherProps}>
			{children}
		</AntdButton>
	);
});

Button.displayName = 'Button';
