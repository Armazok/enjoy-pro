import { useState } from 'react';

export const useModalState = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const handleOk = () => setIsModalOpen(false);
	const handleCancel = () => setIsModalOpen(false);

	return {
		isModalOpen,
		showModal,
		closeModal,
		handleOk,
		handleCancel,
	};
};
