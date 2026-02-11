import React from 'react';

import { Button } from '@shared/ui';

interface LoginProps {}

const Login = ({}: LoginProps) => {
	return (
		<div>
			Login
			<Button />
		</div>
	);
};

Login.displayName = 'Login';
export default Login;
