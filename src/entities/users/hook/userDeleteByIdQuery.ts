import { useMutation, useQueryClient } from '@tanstack/react-query';

import { userDeleteById } from '../api/user-delete-by-id-api';
import { userKeys } from '../constant/user-query-keys';

import type { AxiosError } from 'axios';

export const useUserDeleteById = () => {
	const queryClient = useQueryClient();

	return useMutation<unknown, AxiosError, { id: string }>({
		mutationFn: ({ id }) => userDeleteById(id),
		onSuccess: (_, variables) => {
			void queryClient.invalidateQueries({ queryKey: userKeys.all });
			void queryClient.removeQueries({ queryKey: userKeys.detail(variables.id) });
		},
	});
};
