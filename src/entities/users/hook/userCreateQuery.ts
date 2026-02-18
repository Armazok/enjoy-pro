import { useMutation, useQueryClient } from '@tanstack/react-query';

import { userCreate } from '../api/user-create-api';
import { userKeys } from '../constant/user-query-keys';

import type { UserType, UserBase } from '../type/user-type';

export const useUserCreate = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (dataTransfer: UserBase) => userCreate(dataTransfer),

		onSuccess: (createdUser: UserType) => {
			queryClient.setQueryData(userKeys.all, (oldData: unknown) => {
				if (Array.isArray(oldData)) {
					const typedOldData = oldData as unknown as UserType[];
					return [...typedOldData, createdUser];
				}
				return [createdUser];
			});
			queryClient.setQueryData(userKeys.detail(createdUser.id), createdUser);
		},
	});
};
