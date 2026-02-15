import { API_ENDPOINTS, axiosInstance } from '@shared/config';

import type { UserType } from '../type/user-type';

export const userGetById = async (id: string): Promise<UserType> => {
	const { data } = await axiosInstance.get<UserType>(API_ENDPOINTS.users.getById(id));

	return data;
};
