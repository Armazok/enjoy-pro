import React from 'react';

import { Error403Page, Error404Page, Error500Page } from '@pages/error';
import { Login } from '@pages/login';
import { Users } from '@pages/users';

import { RootRedirect } from './ui/RootRedirect';

import type { AppRouteObject } from '../router/type/router-type';

export const routeConfig: AppRouteObject[] = [
	{
		path: '/',
		element: <RootRedirect />,
		meta: { hidden: true },
	},
	{
		path: '/login',
		element: <Login />,
		meta: {
			hidden: true,
			publicOnly: true,
		},
	},
	{
		path: '/users',
		element: <Users />,
		meta: {
			label: 'Список пользователей',
			private: true,
		},
	},
	{
		path: '*',
		element: <Error404Page />,
		meta: {
			hidden: true,
		},
	},
	{
		path: '/403',
		element: <Error403Page />,
		meta: {
			hidden: true,
		},
	},
	{
		path: '/500',
		element: <Error500Page />,
		meta: {
			hidden: true,
		},
	},
];
