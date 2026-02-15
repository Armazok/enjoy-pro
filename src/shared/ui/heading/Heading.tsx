import type { HTMLAttributes } from 'react';
import React, { memo } from 'react';

import styled from 'styled-components';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	size?: 'xl' | 'lg' | 'md' | 'sm';
}

const StyledHeading = styled.h1<HeadingProps>``;

export const Heading = memo(({ as = 'h2', children, ...props }: HeadingProps) => {
	return (
		<StyledHeading as={as} {...props}>
			{children}
		</StyledHeading>
	);
});
