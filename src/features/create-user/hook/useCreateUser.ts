import { useCallback } from 'react';

import { useModalState } from '@shared/lib';

import { useCreateUserAction } from './useCreateUserActions';
import { useCreateUserForm } from './useCreateUserForm';

export const useCreateUser = () => {
	const { isModalOpen, showModal, closeModal } = useModalState();

	const {
		formData,
		resetForm,
		handleChangeName,
		handleChangeAvatar,
		clearAllErrors,
		validate,
		errorsValidate,
	} = useCreateUserForm();

	const handleCloseModal = useCallback(() => {
		closeModal();
		resetForm();
		clearAllErrors();
	}, [closeModal, resetForm, clearAllErrors]);

	const { submitCreateUser, isPending, isError } = useCreateUserAction(handleCloseModal);

	const openCreateModal = useCallback(() => {
		resetForm();
		clearAllErrors();
		showModal();
	}, [resetForm, clearAllErrors, showModal]);

	const handleCreate = useCallback(() => {
		if (!validate()) return;
		submitCreateUser(formData);
	}, [validate, submitCreateUser, formData]);

	return {
		formData,
		errorsValidate,

		isModalOpen,
		isPending,
		isError,

		openCreateModal,
		handleCloseModal,

		handleChangeName,
		handleChangeAvatar,

		handleCreate,
	};
};
