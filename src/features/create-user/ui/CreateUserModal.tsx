import React from 'react';
import { type ChangeEvent, memo } from 'react';

import type { UserBase } from '@entities/users';

import { ErrorMessage, Input, Modal } from '@shared/ui';

interface CreateUserModalProps {
	open: boolean;
	formData: UserBase;
	isError: boolean;
	isPending: boolean;
	onOk: () => void;
	onCancel: () => void;
	errorsValidate: Record<string, string | undefined>;
	onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeAvatar: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CreateUserModal = memo(
	({
		isError,
		open,
		formData,
		onOk,
		onCancel,
		onChangeName,
		onChangeAvatar,
		errorsValidate,
		isPending,
	}: CreateUserModalProps) => {
		return (
			<Modal
				open={open}
				onOk={onOk}
				onCancel={onCancel}
				title="Создание пользователя"
				okText="Создать"
				cancelText="Отмена"
				okButtonProps={{ disabled: isPending }}
				cancelButtonProps={{ disabled: isPending }}
			>
				{isError && <ErrorMessage message={'Ошибка при создание пользователя'} />}
				<Input
					label="Имя"
					value={formData.name}
					onChange={onChangeName}
					error={errorsValidate.name}
					disabled={isPending}
				/>

				<Input
					disabled={isPending}
					label="Ссылка на аватарку"
					value={formData.avatar}
					onChange={onChangeAvatar}
					error={errorsValidate.avatar}
				/>
			</Modal>
		);
	},
);
