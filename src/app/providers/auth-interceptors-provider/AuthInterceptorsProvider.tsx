import { type ReactNode, useEffect } from 'react';
import React from 'react';

import { useNavigate } from 'react-router-dom';

import { checkAuth, setupAuthInterceptors } from '@entities/auth';

interface AuthInterceptorsProviderProps {
	children: ReactNode;
}
export const AuthInterceptorsProvider = ({ children }: AuthInterceptorsProviderProps) => {
	const navigation = useNavigate();

	useEffect(() => {
		setupAuthInterceptors(navigation);
		checkAuth(navigation);
	}, [navigation]);

	return <>{children}</>;
};
