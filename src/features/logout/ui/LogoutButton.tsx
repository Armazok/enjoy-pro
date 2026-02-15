import React, { type CSSProperties } from 'react';

import { authStorage, useLogout } from '@entities/auth';

import { Button } from '@shared/ui';

interface LogoutButtonProps {
	style?: CSSProperties;
}

export const LogoutButton = ({ style, ...props }: LogoutButtonProps) => {
	const { mutate: logout, isPending } = useLogout();
	const isAuthenticated = !!authStorage.getToken();

	if (!isAuthenticated) {
		return null;
	}

	return (
		<Button onClick={() => logout()} style={style} disabled={isPending} {...props}>
			{isPending ? 'Выход из системы...' : 'Выход'}
		</Button>
	);
};
