import React, { type ReactNode } from 'react';

import { Navigate } from 'react-router-dom';

import { ROUTES } from '@shared/constant';

import { authStorage } from '../lib/auth-storage';

interface PublicOnlyRouteProps {
	children: ReactNode;
}
export const PublicOnlyRoute = ({ children }: PublicOnlyRouteProps) => {
	const token = authStorage.getToken();

	if (token) {
		return <Navigate to={ROUTES.HOME} replace />;
	}

	return <>{children}</>;
};
