import React, { type ReactNode } from 'react';

import { Modal as AntModal } from 'antd';

import type { ModalProps as AntModalProps } from 'antd';

interface ModalProps extends AntModalProps {
	children: ReactNode | ((args?: NonNullable<unknown>) => ReactNode);
}

export const Modal = ({ children, ...props }: ModalProps) => {
	return (
		<AntModal getContainer={document.body} {...props}>
			{typeof children === 'function' ? children({}) : children}
		</AntModal>
	);
};
