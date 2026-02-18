import React, { memo } from 'react';

import { Spin } from 'antd';

import { LoaderContainer } from './Loader.styled';

interface LoaderProps {
	text?: string;
}

export const Loader = memo(({ text = 'Загрузка...' }: LoaderProps) => {
	return (
		<LoaderContainer>
			<Spin tip={text} />
		</LoaderContainer>
	);
});

Loader.displayName = 'Loader';
