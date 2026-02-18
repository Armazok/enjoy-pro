import type { ReactNode } from 'react';
import React from 'react';

import { QueryClientProvider as RQProvider } from '@tanstack/react-query';

import { queryClient } from '../config/queryClientConfig';

interface Props {
	children: ReactNode;
}

export const QueryClientProvider = ({ children }: Props) => (
	<RQProvider client={queryClient}>{children}</RQProvider>
);
