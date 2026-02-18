import { Button } from 'antd';
import { styled } from 'styled-components';

export interface StyledButtonProps {
	$mt?: number;
	$mr?: number;
	$mb?: number;
	$ml?: number;
}

export const StyledAntdButton = styled(Button)<StyledButtonProps>`
	background-color: var(--btn-bg-primary);
	border-color: var(--btn-bg-primary);
	color: var(--color-text-primary);

	${({ $mt }) => $mt && `margin-top: ${$mt}px;`}
	${({ $mr }) => $mr && `margin-right: ${$mr}px;`}
	${({ $mb }) => $mb && `margin-bottom: ${$mb}px;`}
	${({ $ml }) => $ml && `margin-left: ${$ml}px;`}
`;
