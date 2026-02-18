import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderRoot = styled.header`
	padding: 1rem;
	border-bottom: 1px solid #ccc;
	margin-bottom: 20px;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
`;

export const NavItem = styled(NavLink)`
	margin-right: 1rem;
	text-decoration: none;
	color: inherit;

	&.active {
		text-decoration: underline;
	}
`;
