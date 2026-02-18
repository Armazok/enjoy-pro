import type { HTMLAttributes } from 'react';

import { styled } from 'styled-components';

export const StyledHeading = styled.h1<HeadingProps>`
	${({ $mt }) => $mt && `margin-top: ${$mt}px;`}
	${({ $mr }) => $mr && `margin-right: ${$mr}px;`}
	${({ $mb }) => $mb && `margin-bottom: ${$mb}px;`}
	${({ $ml }) => $ml && `margin-left: ${$ml}px;`}
`;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	size?: 'xl' | 'lg' | 'md' | 'sm';
	$mb?: number;
	$mt?: number;
	$mr?: number;
	$ml?: number;
}
