import { useCallback } from 'react';

import { type UserType, useUserDeleteById, useUserUpdateById } from '@entities/users';

export const useEditUserActions = () => {
	const {
		mutate: deleteUser,
		isPending: isDeleting,
		error: errorDelete,
		reset: resetDelete,
	} = useUserDeleteById();
	const {
		mutate: updateUser,
		isPending: isUpdating,
		error: errorUpdate,
		reset: resetUpdate,
	} = useUserUpdateById();

	const handleDelete = useCallback(
		(
			userId: string,
			options?: { onSuccess?: () => void; onError?: (error: Error) => void },
		) => {
			resetDelete();
			deleteUser(
				{ id: userId },
				{
					onError: (error) => {
						console.error('Ошибка удаления пользователя:', error);
						options?.onError?.(error as Error);
					},
					onSuccess: options?.onSuccess,
				},
			);
		},
		[deleteUser, resetDelete],
	);

	const handleUpdate = useCallback(
		(
			userId: string,
			userData: UserType,
			options?: { onSuccess?: () => void; onError?: (error: Error) => void },
		) => {
			resetUpdate();
			updateUser(
				{ id: userId, user: userData },
				{
					onError: (error) => {
						console.error('Ошибка обновления пользователя:', error);
						options?.onError?.(error as Error);
					},
					onSuccess: options?.onSuccess,
				},
			);
		},
		[resetUpdate, updateUser],
	);

	return {
		handleDelete,
		handleUpdate,
		isPending: isDeleting || isUpdating,
		error: errorDelete || errorUpdate,
		resetUpdate,
		resetDelete,
	};
};
