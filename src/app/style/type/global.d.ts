/// <reference types="react-scripts" />

export {};

declare global {
	interface Window {
		__APP_VERSION__: string;
		__BUILD_DATE__: string;
		gtag: (...args: any[]) => void;
		ym?: (counterId: number, action: string, ...args: any[]) => void;
		fbq?: (event: string, ...args: any[]) => void;
	}
}
