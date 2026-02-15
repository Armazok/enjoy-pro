import { useMutation, useQueryClient } from '@tanstack/react-query';

import { userUpdateById } from '../api/user-update-by-id-api';
import { userKeys } from '../constant/user-query-keys';

import type { UserType } from '../type/user-type';

export const useUserUpdateById = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({ id, user }: { id: string; user: UserType }) => userUpdateById(id, user),

		onSuccess: (updatedUser, variables) => {
			queryClient.setQueryData(userKeys.detail(variables.id), updatedUser);

			queryClient.setQueriesData({ queryKey: userKeys.all }, (oldData: unknown) => {
				if (!oldData) return oldData;

				if (Array.isArray(oldData)) {
					const typedOldData = oldData as unknown as UserType[];

					return typedOldData.map((user) =>
						user.id === variables.id ? updatedUser : user,
					);
				}
			});
		},
	});
};
