import React from 'react';

import { authStorage, useLogout } from '@entities/auth';

import { Button } from '@shared/ui';

export const LogoutButton = ({ ...props }) => {
	const { mutate: logout, isPending } = useLogout();
	const isAuthenticated = !!authStorage.getToken();

	if (!isAuthenticated) {
		return null;
	}

	return (
		<Button onClick={() => logout()} disabled={isPending} {...props}>
			{isPending ? 'Выход из системы...' : 'Выход'}
		</Button>
	);
};
