import React, { memo } from 'react';

import { type HeadingProps, StyledHeading } from './Heading.styled';

export const Heading = memo(({ as = 'h2', children, ...props }: HeadingProps) => {
	return (
		<StyledHeading as={as} {...props}>
			{children}
		</StyledHeading>
	);
});
