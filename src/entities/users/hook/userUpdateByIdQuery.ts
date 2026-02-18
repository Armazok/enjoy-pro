import { useMutation, useQueryClient } from '@tanstack/react-query';

import { userUpdateById } from '../api/user-update-by-id-api';
import { userKeys } from '../constant/user-query-keys';

import type { UserType } from '../type/user-type';
import type { AxiosError } from 'axios';

export const useUserUpdateById = () => {
	const queryClient = useQueryClient();

	return useMutation<unknown, AxiosError, { id: string; user: UserType }>({
		mutationFn: ({ id, user }) => userUpdateById(id, user),

		onSuccess: (updatedUser, variables) => {
			if (!updatedUser) return;

			queryClient.setQueryData(userKeys.detail(variables.id), updatedUser);

			queryClient.setQueriesData({ queryKey: userKeys.all }, (oldData: unknown) => {
				if (!oldData || !Array.isArray(oldData)) return oldData;

				const typedOldData = oldData as UserType[];
				return typedOldData.map((user) => (user.id === variables.id ? updatedUser : user));
			});
		},
	});
};
