import React from 'react';

import { LoginForm } from '@features/auth';

interface LoginProps {}

const Login = ({}: LoginProps) => {
	return <LoginForm />;
};

Login.displayName = 'Login Page';
export default Login;
