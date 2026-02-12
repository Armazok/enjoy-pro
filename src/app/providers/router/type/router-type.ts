import type { ReactNode } from 'react';

import type { RoutePath } from '@shared/constant';

import type { RouteObject } from 'react-router-dom';

export interface RouteMeta {
	label?: string;
	hidden?: boolean;
	private?: boolean;
	publicOnly?: boolean;
}

export type AppRouteObject = Omit<RouteObject, 'path' | 'element'> & {
	path: RoutePath;
	element: ReactNode;
	meta?: RouteMeta;
	children?: AppRouteObject[];
};
