import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { MainLayout } from '@app/layouts';
import { routeConfig } from '@app/providers';

function App() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				{routeConfig.map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Route>
		</Routes>
	);
}

export default App;
