import React, { type ChangeEvent } from 'react';

import type { UserType } from '@entities/users';

import { Input, Loader, ErrorMessage } from '@shared/ui';

interface EditUserModalContentProps {
	formData: UserType;
	loading: boolean;
	error: string | null;
	errorsValidate: Record<string, string | undefined>;
	onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeAvatar: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const EditUserModalContent = ({
	formData,
	loading,
	error,
	errorsValidate,
	onChangeName,
	onChangeAvatar,
}: EditUserModalContentProps) => {
	if (loading) return <Loader text="Загрузка данных пользователя..." />;
	if (error) return <ErrorMessage message={error} />;
	if (!formData) return <div>Пользователь не найден</div>;

	return (
		<>
			<Input label="id" value={formData.id} disabled />
			<Input
				label="Имя"
				value={formData.name}
				onChange={onChangeName}
				error={errorsValidate.name}
			/>
			<Input
				label="Ссылка на аватарку"
				value={formData.avatar}
				onChange={onChangeAvatar}
				error={errorsValidate.avatar}
			/>
		</>
	);
};
