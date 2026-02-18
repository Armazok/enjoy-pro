import React from 'react';

import styled from 'styled-components';

import type { UserType } from '@entities/users';

import { UserCard } from '../user-card/UserCard';

interface Props {
	users: UserType[];
	onEditUser: (userId: string) => void;
}

const ListContainer = styled.div`
	& > :not(:last-child) {
		border-bottom: 2px solid #ccc;
	}
`;

export const UsersListContent = ({ users, onEditUser }: Props) => {
	return (
		<>
			{users.length !== 0 ? (
				<ListContainer>
					{users.map((user) => (
						<UserCard key={user.id} user={user} onClick={onEditUser} />
					))}
				</ListContainer>
			) : (
				<div>Пользователей нету, но вы можете его создать</div>
			)}
		</>
	);
};
