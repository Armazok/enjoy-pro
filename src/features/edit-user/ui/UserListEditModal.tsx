import React, { type ChangeEvent, memo } from 'react';

import type { UserType } from '@entities/users';

import { Modal } from '@shared/ui';

import { EditUserModalContent } from './edit-content/EditUserModalContent';
import { EditUserModalFooter } from './edit-footer/EditUserModalFooter';

interface EditUserModalProps {
	formData: UserType;
	isLoading: boolean;
	error: string | null;
	errorsValidate: Record<string, string | undefined>;
	isModalOpen: boolean;
	closeEditModal: () => void;
	handleChangeAvatar: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
	handleDeleteUser: () => void;
	handleUpdateUser: () => void;
}
export const UserListEditModal = memo(
	({
		formData,
		errorsValidate,
		closeEditModal,
		handleChangeAvatar,
		handleChangeName,
		handleDeleteUser,
		handleUpdateUser,
		error,
		isModalOpen,
		isLoading,
	}: EditUserModalProps) => {
		const isValid = !isLoading && !error;

		return (
			<Modal
				title="Редактирование пользователя"
				open={isModalOpen}
				onCancel={closeEditModal}
				footer={
					isValid && (
						<EditUserModalFooter
							handleDelete={handleDeleteUser}
							handleUpdate={handleUpdateUser}
							onCancel={closeEditModal}
						/>
					)
				}
			>
				<EditUserModalContent
					formData={formData}
					loading={isLoading}
					error={error}
					errorsValidate={errorsValidate}
					onChangeAvatar={handleChangeAvatar}
					onChangeName={handleChangeName}
				/>
			</Modal>
		);
	},
);
UserListEditModal.displayName = 'EditUserModal';
