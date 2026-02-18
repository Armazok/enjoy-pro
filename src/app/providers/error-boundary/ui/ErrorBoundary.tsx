import type { ErrorInfo } from 'react';
import React, { Component } from 'react';

import { Alert } from 'antd';

import { ErrorLogger } from '@shared/lib';
import { Button } from '@shared/ui';

import { ErrorBoundaryContainer } from './ErrorBoundary.styled';

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
		const { hasError, error } = this.state;

		if (hasError && error) {
			return (
				<>
					<ErrorLogger
						error={error}
						context={{
							componentStack: error.stack,
							componentName: this.props.componentName,
						}}
						componentName={this.props.componentName}
					/>

					{this.props.fallback || (
						<ErrorBoundaryContainer role="alert">
							<Alert
								message="Что-то пошло не так"
								description="Произошла ошибка при загрузке компонента."
								type="error"
								showIcon
							/>
							<Button $mt={16} onClick={() => window.location.reload()}>
								Обновить страницу
							</Button>
						</ErrorBoundaryContainer>
					)}
				</>
			);
		}

		return this.props.children;
	}
}
