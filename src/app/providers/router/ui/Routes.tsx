import React from 'react';

import { Error403Page, Error404Page, Error500Page } from '@pages/error';
import { Login } from '@pages/login';
import { Users } from '@pages/users';

import { ROUTES } from '@shared/config';

import type { AppRouteObject } from '../type/RouterType';

export const routeConfig: AppRouteObject[] = [
	{
		path: ROUTES.LOGIN,
		element: <Login />,
		meta: {
			label: 'Страница авторизации',
			hidden: true,
		},
	},
	{
		path: ROUTES.ERROR_403,
		element: <Error403Page />,
		meta: {
			label: '403',
			hidden: true,
		},
	},
	{
		path: ROUTES.ERROR_500,
		element: <Error500Page />,
		meta: {
			label: '500',
			hidden: true,
		},
	},
	{
		path: ROUTES.HOME,
		element: <div>Home</div>,
		meta: {
			label: 'Главная страница',
			private: true,
		},
	},
	{
		path: ROUTES.USERS,
		element: <Users />,
		meta: {
			label: 'Пользователи',
			private: true,
		},
	},
	{
		path: ROUTES.ERROR_404,
		element: <Error404Page />,
		meta: {
			label: '404',
			hidden: true,
		},
	},
];
