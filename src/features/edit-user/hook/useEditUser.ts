import { useState, useCallback } from 'react';

import { useUserById } from '@entities/users';

import { useModalState } from '@shared/lib';

import { useEditUserActions } from './useEditUserActions';
import { useEditUserForm } from './useEditUserForm';

export const useEditUser = () => {
	const { isModalOpen, showModal, closeModal } = useModalState();
	const [selectedUserId, setSelectedUserId] = useState<string>('');

	const { data: selectedUserData, isLoading, error: errorUserById } = useUserById(selectedUserId);
	const {
		handleDelete,
		handleUpdate,
		isPending,
		error: errorUpdateOrDelete,
		resetUpdate,
		resetDelete,
	} = useEditUserActions();

	const {
		errorsValidate,
		validate,
		handleChangeAvatar,
		handleChangeName,
		formData,
		clearAllErrors,
	} = useEditUserForm(selectedUserData!);

	const resetAndClose = useCallback(() => {
		setSelectedUserId('');
		closeModal();
		clearAllErrors();
	}, [clearAllErrors, closeModal]);

	const openEditModal = useCallback(
		(userId: string) => {
			resetUpdate();
			resetDelete();

			setSelectedUserId(userId);
			showModal();
		},
		[resetDelete, resetUpdate, showModal],
	);

	const handleDeleteUser = useCallback(() => {
		if (!selectedUserData?.id) return;
		setSelectedUserId('');

		handleDelete(selectedUserData.id, { onSuccess: () => resetAndClose() });
	}, [selectedUserData?.id, handleDelete, resetAndClose]);

	const handleUpdateUser = useCallback(() => {
		if (!selectedUserData?.id || !selectedUserData) return;
		if (!validate()) return;
		handleUpdate(selectedUserData.id, formData, { onSuccess: () => resetAndClose() });
	}, [selectedUserData, validate, resetAndClose, handleUpdate, formData]);

	return {
		formDataEditUser: formData,
		errorsValidate,
		isModalOpen: isModalOpen,
		isLoading: isLoading || isPending,
		error: errorUserById?.message ?? errorUpdateOrDelete?.message ?? null,
		openEditModal,
		closeEditModal: resetAndClose,
		handleChangeAvatar,
		handleChangeName,
		handleUpdateUser,
		handleDeleteUser,
	};
};
