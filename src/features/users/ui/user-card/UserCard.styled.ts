import { styled } from 'styled-components';

export const CardArticle = styled.article`
	max-width: 80%;
	margin-bottom: 15px;
	display: flex;
	align-items: center;
	gap: 13px;
	padding: 8px 0;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #f9f9f9;
		border-bottom-color: #1890ff;
	}
`;

export const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	cursor: pointer;
	object-fit: cover;
	border: 2px solid transparent;
	transition: border-color 0.2s ease;

	&:hover {
		border-color: #1890ff;
	}
`;

export const UserInfo = styled.div`
	flex: 1;
`;

export const UserName = styled.h4`
	cursor: pointer;
	margin: 0 0 4px 0;
	color: #333;
	font-weight: 600;
	transition: color 0.2s ease;
	display: inline-block;

	&:hover {
		color: #1890ff;
	}
`;

export const RegistrationDate = styled.p`
	user-select: none;
	margin: 0;
	font-size: 14px;
	color: #666;
`;
