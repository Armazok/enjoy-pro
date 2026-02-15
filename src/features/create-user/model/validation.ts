import { required, url } from '@shared/lib';

export const userSchema = {
	name: [required('Имя обязательно')],
	avatar: [required('Аватар обязателен'), url('Аватар должен быть ссылкой')],
};
