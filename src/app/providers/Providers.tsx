import React, { StrictMode, Suspense } from 'react';
import type { ReactNode } from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import { Loader } from '@shared/ui';

import { AuthInterceptorsProvider } from './auth-interceptors-provider/AuthInterceptorsProvider';
import { ErrorBoundary } from './error-boundary/ui/ErrorBoundary';
import { QueryClientProvider } from './query-client/ui/QueryClientProvider';

interface ProvidersProps {
	children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
	return (
		<StrictMode>
			<BrowserRouter>
				<QueryClientProvider>
					<ErrorBoundary>
						<Suspense fallback={<Loader />}>
							<AuthInterceptorsProvider>{children}</AuthInterceptorsProvider>
						</Suspense>
					</ErrorBoundary>
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</BrowserRouter>
		</StrictMode>
	);
};
