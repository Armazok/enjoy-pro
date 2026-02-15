import { API_ENDPOINTS, axiosInstance } from '@shared/config';

export const userDeleteById = async (id: string): Promise<void> => {
	await axiosInstance.delete(API_ENDPOINTS.users.deleteById(id));
};
