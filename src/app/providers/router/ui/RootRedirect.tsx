import React from 'react';

import { Navigate } from 'react-router-dom';

import { authStorage } from '@entities/auth';

import { ROUTES } from '@shared/constant';

export const RootRedirect = () => {
	const token = authStorage.getToken();

	if (token) {
		return <Navigate to={ROUTES.USERS} replace />;
	}

	return <Navigate to={ROUTES.LOGIN} replace />;
};
