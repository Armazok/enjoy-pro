import { API_ENDPOINTS, axiosInstance } from '@shared/config';

import type { UserType, UserBase } from '../type/user-type';

export const userCreate = async (userData: UserBase): Promise<UserType> => {
	const { data } = await axiosInstance.post<UserType>(API_ENDPOINTS.users.create, userData);

	return data;
};
