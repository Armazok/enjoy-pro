import { type ReactNode } from 'react';

export interface ErrorBoundaryProps {
	children: ReactNode;
	fallback?: ReactNode;
	componentName?: string;
}

export interface ErrorBoundaryState {
	hasError: boolean;
	error?: Error;
}
