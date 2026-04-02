interface IProps {
	onClick: () => void;
	className?: string;
}

const CarouselButtons = ({ onClick, className }: IProps) => {
	return (
		<button
			onClick={onClick}
			className={`${className} shrink-0 active:scale-90 cursor-pointer`}
		>
			<svg
				viewBox='0 0 24 24'
				width='24'
				height='24'
			>
				<use href='/sprite.svg#slide-arrow' />
			</svg>
		</button>
	);
};

export default CarouselButtons;
