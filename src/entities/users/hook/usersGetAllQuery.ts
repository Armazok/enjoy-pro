import { useQuery } from '@tanstack/react-query';

import { usersGetAllApi } from '../api/users-get-all-api';
import { userKeys } from '../constant/user-query-keys';

export const useUsers = () => {
	return useQuery({
		queryKey: userKeys.all,
		queryFn: usersGetAllApi,
	});
};
