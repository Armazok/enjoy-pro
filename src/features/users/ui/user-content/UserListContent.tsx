import React from 'react';

import type { UserType } from '@entities/users';

import { UserCard } from '../user-card/UserCard';

interface Props {
	users: UserType[];
	onEditUser: (userId: string) => void;
}

export const UsersListContent = ({ users, onEditUser }: Props) => {
	return (
		<>
			{users.length !== 0 ? (
				users.map((user) => <UserCard key={user.id} user={user} onClick={onEditUser} />)
			) : (
				<div>Пользователей нету, но вы можете его создать</div>
			)}
		</>
	);
};
