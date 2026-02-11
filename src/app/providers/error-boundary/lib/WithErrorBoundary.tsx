import React from 'react';

import { ErrorBoundary } from '../ui/ErrorBoundary';

import type { ErrorBoundaryProps } from '../types/ErrorBoundaryType';

export const WithErrorBoundary = <P extends object>(
	Component: React.ComponentType<P>,
	errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>,
) => {
	const displayName = Component.displayName || Component.name || 'Component';

	const WrappedComponent = (props: P) => (
		<ErrorBoundary
			{...errorBoundaryProps}
			componentName={errorBoundaryProps?.componentName || displayName}
		>
			<Component {...props} />
		</ErrorBoundary>
	);

	WrappedComponent.displayName = `withErrorBoundary(${displayName})`;

	return WrappedComponent;
};
