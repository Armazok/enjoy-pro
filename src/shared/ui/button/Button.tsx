import React, { memo } from 'react';

import { StyledAntdButton } from './Button.styled';

import type { StyledButtonProps } from './Button.styled';
import type { ButtonProps as AntdButtonProps } from 'antd';

interface ButtonProps extends AntdButtonProps, StyledButtonProps {}

export const Button = memo(
	({ children, type = 'primary', $mt, $mr, $mb, $ml, ...otherProps }: ButtonProps) => {
		return (
			<StyledAntdButton type={type} $mt={$mt} $mr={$mr} $mb={$mb} $ml={$ml} {...otherProps}>
				{children}
			</StyledAntdButton>
		);
	},
);

Button.displayName = 'Button';
