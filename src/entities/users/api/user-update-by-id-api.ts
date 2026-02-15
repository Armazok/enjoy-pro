import { API_ENDPOINTS, axiosInstance } from '@shared/config';

import type { UserType } from '../type/user-type';

export const userUpdateById = async (id: string, userData: UserType): Promise<UserType> => {
	const { data } = await axiosInstance.put<UserType>(
		API_ENDPOINTS.users.updateById(id),
		userData,
	);

	return data;
};
