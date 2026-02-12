import React, { StrictMode, Suspense } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line no-restricted-imports
import { ErrorBoundary } from '@app/providers';

import App from './App';

const queryClient = new QueryClient();

render(
	<StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ErrorBoundary fallback={<div>Oops!</div>}>
					<Suspense fallback={<div>Loading...</div>}>
						<App />
					</Suspense>
				</ErrorBoundary>
				<ReactQueryDevtools initialIsOpen={true} />
			</QueryClientProvider>
		</BrowserRouter>
	</StrictMode>,
	document.getElementById('root'),
);
