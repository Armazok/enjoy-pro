import React, { Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from '@app/providers';

import { Login } from '@pages/login';
import { NotFound } from '@pages/not-found';
import { Users } from '@pages/users';

function App() {
	return (
		<BrowserRouter>
			<ErrorBoundary fallback={<div>Oops!</div>}>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" element={<div>Home</div>} />
						<Route path="/login" element={<Login />} />
						<Route path="/users" element={<Users />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</ErrorBoundary>
		</BrowserRouter>
	);
}

export default App;
