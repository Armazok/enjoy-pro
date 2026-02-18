import { type ErrorInfo, type ReactNode } from 'react';

export interface ErrorBoundaryProps {
	children: ReactNode;
	fallback?: ReactNode;
	componentName?: string;
	callback?: (error: Error, errorInfo: ErrorInfo) => void;
}

export interface ErrorBoundaryState {
	hasError: boolean;
	error?: Error;
}
