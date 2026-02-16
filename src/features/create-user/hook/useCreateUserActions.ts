import { useCallback } from 'react';

import { type UserBase, useUserCreate } from '@entities/users';

export const useCreateUserAction = (onSuccessClose: () => void) => {
	const { mutate, isPending, isError, reset } = useUserCreate();

	const submitCreateUser = useCallback(
		(data: UserBase) => {
			mutate(data, {
				onSuccess: () => {
					onSuccessClose();
				},
				onError: (err) => {
					console.error(err);
				},
			});
		},
		[mutate, onSuccessClose],
	);

	return {
		submitCreateUser,
		isPending,
		isError,
		reset,
	};
};
