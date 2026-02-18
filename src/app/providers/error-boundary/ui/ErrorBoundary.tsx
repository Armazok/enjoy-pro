import type { ErrorInfo } from 'react';
import React, { Component } from 'react';

import { Alert } from 'antd';

import { ErrorLogger } from '@shared/lib';
import { Button } from '@shared/ui';

import type { ErrorBoundaryProps, ErrorBoundaryState } from '../types/ErrorBoundaryType';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
		// отправка аналитики
	}

	render() {
		if (this.state.hasError) {
			return (
				<>
					<ErrorLogger
						error={this.state.error!}
						context={{
							componentStack: this.state.error?.stack,
							componentName: this.props.componentName,
						}}
						componentName={this.props.componentName}
					/>

					{this.props.fallback || (
						<div
							role="alert"
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								height: '100vh',
								textAlign: 'center',
								padding: '16px',
								boxSizing: 'border-box',
							}}
						>
							<Alert
								message="Что-то пошло не так"
								description="Произошла ошибка при загрузке компонента."
								type="error"
								showIcon
							/>
							<Button
								type="primary"
								style={{ marginTop: 16 }}
								onClick={() => window.location.reload()}
							>
								Обновить страницу
							</Button>
						</div>
					)}
				</>
			);
		}

		return this.props.children;
	}
}
