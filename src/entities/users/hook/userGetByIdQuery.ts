import { useQuery } from '@tanstack/react-query';

import type { UserType } from '@entities/users';

import { userGetById } from '../api/user-get-by-id-api';
import { userKeys } from '../constant/user-query-keys';

import type { AxiosError } from 'axios';

export const useUserById = (id: string) => {
	return useQuery<UserType, AxiosError>({
		queryKey: userKeys.detail(id ?? 'skip'),
		queryFn: () => userGetById(id),
		enabled: !!id,
	});
};
