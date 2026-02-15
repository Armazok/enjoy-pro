import { API_ENDPOINTS, axiosInstance } from '@shared/config';

import type { UserType } from '../type/user-type';

export const usersGetAllApi = async (): Promise<UserType[]> => {
	const { data } = await axiosInstance.get<UserType[]>(API_ENDPOINTS.users.getAll);

	return data;
};
