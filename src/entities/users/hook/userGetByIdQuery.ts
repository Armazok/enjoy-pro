import { useQuery } from '@tanstack/react-query';

import { userGetById } from '../api/user-get-by-id-api';
import { userKeys } from '../constant/user-query-keys';

export const useUserById = (id: string) => {
	return useQuery({
		queryKey: userKeys.detail(id ?? 'skip'),
		queryFn: () => userGetById(id),
		enabled: !!id,
	});
};
