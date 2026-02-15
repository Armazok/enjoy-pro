import React from 'react';

import { Button } from '@shared/ui';

import { ButtonGroup, FooterContainer } from './EditUserModalFooter.styled';

interface EditUserModalFooterProps {
	handleDelete: () => void;
	handleUpdate: () => void;
	onCancel: () => void;
}

export const EditUserModalFooter = ({
	handleDelete,
	handleUpdate,
	onCancel,
}: EditUserModalFooterProps) => {
	return (
		<FooterContainer>
			<Button onClick={handleDelete}>Удалить</Button>
			<ButtonGroup>
				<Button onClick={handleUpdate}>Сохранить</Button>
				<Button onClick={onCancel}>Отмена</Button>
			</ButtonGroup>
		</FooterContainer>
	);
};
