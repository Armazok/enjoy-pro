import React from 'react';

import './app/style/main.css';
import './app/style/reset.css';

import { render } from 'react-dom';

// eslint-disable-next-line no-restricted-imports
import { Providers } from '@app/providers';

import App from './App';

render(
	<Providers>
		<App />
	</Providers>,
	document.getElementById('root'),
);
