import React from 'react';

import { PrivateRoute, PublicOnlyRoute } from '@entities/auth';

import type { AppRouteObject } from '../type/router-type';

export const withGuards = (route: AppRouteObject) => {
	let element = route.element;

	if (route.meta?.private) {
		element = <PrivateRoute>{element}</PrivateRoute>;
	}

	if (route.meta?.publicOnly) {
		element = <PublicOnlyRoute>{element}</PublicOnlyRoute>;
	}

	return element;
};
