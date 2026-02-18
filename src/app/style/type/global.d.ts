/// <reference types="react-scripts" />

export {};

type GtagCommand = 'config' | 'event' | 'set' | 'js' | 'get' | 'consent';
type GtagParams = Record<string, string | number | boolean | null | undefined>;

declare global {
	interface Window {
		__APP_VERSION__: string;
		__BUILD_DATE__: string;
		gtag: (command: GtagCommand, target: string, params?: GtagParams) => void;
		ym?: (counterId: number, action: string, ...args: unknown[]) => void;
		fbq?: (event: string, ...args: unknown[]) => void;
	}
}
