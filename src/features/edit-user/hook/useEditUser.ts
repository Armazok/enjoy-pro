import { useState, useCallback } from 'react';

import { useUserById } from '@entities/users';

import { useModalState } from '@shared/lib';

import { useEditUserActions } from './useEditUserActions';
import { useEditUserForm } from './useEditUserForm';

export const useEditUser = () => {
	const { isModalOpen, showModal, closeModal } = useModalState();
	const [selectedUserId, setSelectedUserId] = useState<string>('');

	const { data: selectedUserData, isLoading, error } = useUserById(selectedUserId);
	const { handleDelete, handleUpdate, isPending } = useEditUserActions();

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
			setSelectedUserId(userId);
			showModal();
		},
		[showModal],
	);

	const handleDeleteUser = useCallback(() => {
		if (!selectedUserData?.id) return;
		resetAndClose();
		handleDelete(selectedUserData.id);
	}, [selectedUserData?.id, handleDelete, resetAndClose]);

	const handleUpdateUser = useCallback(() => {
		if (!selectedUserData?.id || !selectedUserData) return;
		if (!validate()) return;
		resetAndClose();
		handleUpdate(selectedUserData.id, formData);
	}, [selectedUserData, validate, resetAndClose, handleUpdate, formData]);

	return {
		formDataEditUser: formData,
		errorsValidate,
		isModalOpen: isModalOpen,
		isLoading: isLoading || isPending,
		error: error ? (error as Error).message : null,
		openEditModal,
		closeEditModal: resetAndClose,
		handleChangeAvatar,
		handleChangeName,
		handleUpdateUser,
		handleDeleteUser,
	};
};
