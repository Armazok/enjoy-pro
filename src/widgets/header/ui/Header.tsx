import React from 'react';

import { NavLink } from 'react-router-dom';

import { routeConfig } from '@app/providers';

import { authStorage, useLogout } from '@entities/auth';

import { Button } from '@shared/ui';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
	const { mutate: logout } = useLogout();
	const isAuthenticated = !!authStorage.getToken();

	return (
		<header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
			<nav>
				{routeConfig
					.filter((route) => route.meta?.label && !route.meta.hidden)
					.filter((route) => {
						if (route.meta?.private) return isAuthenticated;
						if (route.meta?.publicOnly) return !isAuthenticated;
						return true;
					})
					.map((route) => {
						if (!route.path) return null;

						return (
							<NavLink
								key={route.path}
								to={route.path}
								style={({ isActive }) => ({
									marginRight: '1rem',
									textDecoration: isActive ? 'underline' : 'none',
								})}
							>
								{route.meta?.label}
							</NavLink>
						);
					})}
			</nav>

			{isAuthenticated && <Button onClick={() => logout()}>Logout</Button>}
		</header>
	);
};

Header.displayName = 'Header';
export default Header;
