import React, { StrictMode, Suspense } from 'react';
import type { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import { Loader } from '@shared/ui';

import { AuthInterceptorsProvider } from './auth-interceptors-provider/AuthInterceptorsProvider';
import { ErrorBoundary } from './error-boundary/ui/ErrorBoundary';

interface ProvidersProps {
	children: ReactNode;
}

const queryClient = new QueryClient();

export const Providers = ({ children }: ProvidersProps) => {
	return (
		<StrictMode>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<ErrorBoundary fallback={<Loader />}>
						<Suspense fallback={<Loader />}>
							<AuthInterceptorsProvider>{children}</AuthInterceptorsProvider>
						</Suspense>
					</ErrorBoundary>
					<ReactQueryDevtools initialIsOpen={true} />
				</QueryClientProvider>
			</BrowserRouter>
		</StrictMode>
	);
};
