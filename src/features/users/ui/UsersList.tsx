import React from 'react';

import { UserCreateWrapper } from '@features/create-user';
import { UserListEditModal, useEditUser } from '@features/edit-user';

import { useUsers } from '@entities/users';

import { ErrorMessage, Loader } from '@shared/ui';

import { UsersListContent } from './user-content/UserListContent';
import { UsersListHeader } from './user-header/UserListHeader';

export const UsersList = () => {
	const { data: allUsersData, isLoading: loadingUsers, isError: isErrorUsers } = useUsers();
	const {
		handleDeleteUser,
		handleUpdateUser,
		handleChangeName,
		handleChangeAvatar,
		isLoading,
		error: errorEditModal,
		errorsValidate,
		isModalOpen: isModalOpenEdit,
		openEditModal,
		formDataEditUser,
		closeEditModal,
	} = useEditUser();

	if (loadingUsers) return <Loader />;
	if (isErrorUsers) return <ErrorMessage message="Ошибка при запросе пользователей" />;

	return (
		<>
			<UsersListHeader />
			<UserListEditModal
				handleUpdateUser={handleUpdateUser}
				handleDeleteUser={handleDeleteUser}
				formData={formDataEditUser}
				isLoading={isLoading}
				error={errorEditModal}
				errorsValidate={errorsValidate}
				isModalOpen={isModalOpenEdit}
				closeEditModal={closeEditModal}
				handleChangeAvatar={handleChangeAvatar}
				handleChangeName={handleChangeName}
			/>
			<UsersListContent users={allUsersData} onEditUser={openEditModal} />
			<UserCreateWrapper />
		</>
	);
};

UsersList.displayName = 'UsersList';
