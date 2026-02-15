import React from 'react';

import { LogoutButton } from '@features/logout';

import { HeaderContainer } from './UserListHeader.styled';

export const UsersListHeader = () => {
	return (
		<HeaderContainer>
			<LogoutButton />
		</HeaderContainer>
	);
};

UsersListHeader.displayName = 'UsersListHeader';
