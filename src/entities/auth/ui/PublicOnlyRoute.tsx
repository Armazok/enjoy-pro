import React, { type ReactNode } from 'react';

import { Navigate } from 'react-router-dom';

import { ROUTES } from '@shared/constant';

import { authStorage } from '../lib/auth-storage';

export const PublicOnlyRoute = ({ children }: { children: ReactNode }) => {
	const token = authStorage.getToken();

	if (token) {
		return <Navigate to={ROUTES.HOME} replace />;
	}

	return <>{children}</>;
};
