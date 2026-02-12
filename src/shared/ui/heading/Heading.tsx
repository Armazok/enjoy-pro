import type { HTMLAttributes } from 'react';
import React, { memo } from 'react';

import styled, { css } from 'styled-components';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	size?: 'xl' | 'lg' | 'md' | 'sm';
	color?: string;
	mb?: string;
}

const sizes = {
	xl: '2.5rem',
	lg: '2rem',
	md: '1.5rem',
	sm: '1.25rem',
};

const StyledHeading = styled.h1<HeadingProps>`
	margin-bottom: ${({ mb }) => mb || '0'};
	font-weight: 600;
	color: ${({ color }) => color || '#000'};

	${({ size = 'md' }) => css`
		font-size: ${sizes[size]};
	`}
`;

export const Heading = memo(
	({ as = 'h2', size = 'md', color, children, ...props }: HeadingProps) => {
		return (
			<StyledHeading as={as} size={size} color={color} {...props}>
				{children}
			</StyledHeading>
		);
	},
);
