import React from 'react';

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
