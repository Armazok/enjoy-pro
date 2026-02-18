import { required, url } from '../rules';

export const userSchema = {
	name: [required('Имя обязательно')],
	avatar: [required('Аватар обязателен'), url('Аватар должен быть ссылкой')],
};
