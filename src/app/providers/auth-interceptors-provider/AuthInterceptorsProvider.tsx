import { type ReactNode, useEffect } from 'react';
import React from 'react';

import { checkAuth, setupAuthInterceptors } from '@entities/auth';

interface AuthInterceptorsProviderProps {
	children: ReactNode;
}
export const AuthInterceptorsProvider = ({ children }: AuthInterceptorsProviderProps) => {
	useEffect(() => {
		setupAuthInterceptors();
		checkAuth();
	}, []);

	return <>{children}</>;
};
