import React from 'react';

import { authStorage } from '@entities/auth';

import { navigationConfig } from '@shared/config';

import { HeaderRoot, Nav, NavItem } from './Header.styles';

const Header = () => {
	const isAuthenticated = !!authStorage.getToken();

	const visibleLinks = navigationConfig.filter((item) => {
		if (item.private) return isAuthenticated;
		if (item.publicOnly) return !isAuthenticated;
		return true;
	});

	return (
		<HeaderRoot>
			<Nav>
				{visibleLinks.map(({ path, label }) => (
					<NavItem key={path} to={path}>
						{label}
					</NavItem>
				))}
			</Nav>
		</HeaderRoot>
	);
};

export default Header;
