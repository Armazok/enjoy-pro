import React, { memo } from 'react';

import { Spin } from 'antd';

interface LoaderProps {
	text?: string;
}

export const Loader = memo(({ text = 'Загрузка...' }: LoaderProps) => {
	return (
		<div style={{ padding: 20, textAlign: 'center' }}>
			<Spin tip={text} />
		</div>
	);
});

Loader.displayName = 'Loader';
