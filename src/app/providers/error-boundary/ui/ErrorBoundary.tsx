import type { ErrorInfo } from 'react';
import React, { Component } from 'react';

import { ErrorLogger } from '@shared/lib';

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
		// для аналитики Sentry или другом аналогичном
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
						<div role="alert">
							<h2>Что-то пошло не так</h2>
							<button onClick={() => window.location.reload()}>
								Обновить страницу
							</button>
						</div>
					)}
				</>
			);
		}

		return this.props.children;
	}
}
