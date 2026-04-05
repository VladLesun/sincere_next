import Link from 'next/link';
import { useState } from 'react';
import Modal from 'react-modal';
import ScheduleModal from './ScheduleModal';

interface IProps {
	children: string;
	variant: string;
	href?: string;
	className: string;
}

const Links = ({ children, variant, href, className }: IProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const classes = `${variant === 'primary' ? 'bg-[#fff] text-[#000] hover:bg-[#f7f4eb]' : variant === 'secondary' ? 'bg-[#31110f] text-[#fff] hover:bg-[#1f0808]' : ''} flex items-center justify-center h-[58px] px-1 rounded-[500px] text-lg transition-colors duration-300 ease-in-out ${className}`;

	const modalOpen = () => {
		Modal.setAppElement('#root');
		setIsModalOpen(true);
	};

	const modalClose = () => {
		setIsModalOpen(false);
	};

	if (href)
		return (
			<Link
				href={href}
				className={classes}
			>
				{children}
			</Link>
		);

	return (
		<>
			<button
				type='button'
				onClick={modalOpen}
				className={classes}
			>
				{children}
			</button>

			<ScheduleModal
				isOpen={isModalOpen}
				isClose={modalClose}
				setIsModalOpen={setIsModalOpen}
			/>
		</>
	);
};

export default Links;
