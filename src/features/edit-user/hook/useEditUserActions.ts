import { useCallback } from 'react';

import { type UserType, useUserDeleteById, useUserUpdateById } from '@entities/users';

export const useEditUserActions = () => {
	const { mutate: deleteUser, isPending: isDeleting } = useUserDeleteById();
	const { mutate: updateUser, isPending: isUpdating } = useUserUpdateById();

	const handleDelete = useCallback(
		(
			userId: string,
			options?: { onSuccess?: () => void; onError?: (error: Error) => void },
		) => {
			deleteUser(userId, {
				onError: (error) => {
					console.error('Ошибка удаления пользователя:', error);
					options?.onError?.(error as Error);
				},
				onSuccess: options?.onSuccess,
			});
		},
		[deleteUser],
	);

	const handleUpdate = useCallback(
		(
			userId: string,
			userData: UserType,
			options?: { onSuccess?: () => void; onError?: (error: Error) => void },
		) => {
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
		[updateUser],
	);

	return { handleDelete, handleUpdate, isPending: isDeleting || isUpdating };
};
