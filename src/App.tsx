import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { MainLayout } from '@app/layouts';
import { routeConfig, withGuards } from '@app/providers';

import { useAuthStorageWatcher } from '@entities/auth';

function App() {
	useAuthStorageWatcher();

	return (
		<Routes>
			<Route element={<MainLayout />}>
				{routeConfig.map((route) => (
					<Route key={route.path} path={route.path} element={withGuards(route)} />
				))}
			</Route>
		</Routes>
	);
}

export default App;
