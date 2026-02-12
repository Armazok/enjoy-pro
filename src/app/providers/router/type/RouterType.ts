import type { RouteObject } from 'react-router-dom';

export interface RouteMeta {
	label?: string;
	hidden?: boolean;
	private?: boolean;
	roles?: string[];
}

export type AppRouteObject = RouteObject & {
	meta?: RouteMeta;
	children?: AppRouteObject[];
};
