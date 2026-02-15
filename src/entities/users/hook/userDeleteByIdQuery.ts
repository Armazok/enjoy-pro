import { useMutation, useQueryClient } from '@tanstack/react-query';

import { userDeleteById } from '../api/user-delete-by-id-api';
import { userKeys } from '../constant/user-query-keys';

export const useUserDeleteById = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (id: string) => userDeleteById(id),
		onSuccess: (_, deletedId) => {
			void queryClient.invalidateQueries({ queryKey: userKeys.all });
			void queryClient.removeQueries({ queryKey: userKeys.detail(deletedId) });
		},
	});
};
