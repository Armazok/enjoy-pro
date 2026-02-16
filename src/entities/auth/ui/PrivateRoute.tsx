import React, { type ReactNode } from 'react';

import { Navigate } from 'react-router-dom';

import { ROUTES } from '@shared/constant';

import { authStorage } from '../lib/auth-storage';

interface PrivateRouteProps {
	children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
	const token = authStorage.getToken();

	if (!token) {
		return <Navigate to={ROUTES.LOGIN} replace />;
	}

	return <>{children}</>;
};
