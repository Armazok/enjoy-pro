export interface UserBase {
	name: string;
	avatar: string;
}

export interface UserType extends UserBase {
	id: string;
	createdAt: string;
}
