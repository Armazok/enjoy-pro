import { memo, type MouseEvent, useCallback } from 'react';
import React from 'react';

import type { UserType } from '@entities/users';

import { formatDate } from '@shared/lib';

import { Avatar, CardArticle, RegistrationDate, UserInfo, UserName } from './UserCard.styled';

interface Props {
	user: UserType;
	onClick: (userId: string) => void;
}

export const UserCard = memo(({ user, onClick }: Props) => {
	const { avatar, createdAt, name, id } = user;

	const handleClick = useCallback(
		(e: MouseEvent<HTMLDivElement>) => {
			const el = (e.target as HTMLElement).closest('[data-clickable]');
			if (el) onClick(id);
		},
		[onClick, id],
	);

	return (
		<CardArticle onClick={handleClick}>
			<Avatar data-clickable="userImg" src={avatar} alt={name} width={50} height={50} />
			<UserInfo>
				<UserName data-clickable="userName">{name}</UserName>
				<RegistrationDate>Зарегистрирован {formatDate(createdAt)}</RegistrationDate>
			</UserInfo>
		</CardArticle>
	);
});
