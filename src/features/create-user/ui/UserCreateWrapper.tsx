import React from 'react';

import { Button } from '@shared/ui';

import { useCreateUser } from '../hook/useCreateUser';
import { CreateUserModal } from '../ui/CreateUserModal';

export const UserCreateWrapper = () => {
	const {
		isModalOpen,
		openCreateModal,
		handleCloseModal,
		handleCreate,
		formData,
		handleChangeName,
		handleChangeAvatar,
		errorsValidate,
		isError,
		isPending,
	} = useCreateUser();

	return (
		<>
			<Button onClick={openCreateModal}>Создать пользователя</Button>
			<CreateUserModal
				isError={isError}
				isPending={isPending}
				formData={formData}
				open={isModalOpen}
				errorsValidate={errorsValidate}
				onCancel={handleCloseModal}
				onOk={handleCreate}
				onChangeName={handleChangeName}
				onChangeAvatar={handleChangeAvatar}
			/>
		</>
	);
};

UserCreateWrapper.displayName = 'CreateUserWrapper';
