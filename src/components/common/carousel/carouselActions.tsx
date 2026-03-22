import { ICarouselActions } from '@/types/carousel.types';
import CarouselSideBar from './carouselSideBar';

const CarouselActions = ({
	slides,
	nextSlide,
	prevSlide,
	activeId,
	onSelect,
}: ICarouselActions) => {
	return (
		<div className='absolute bottom-[32px] left-[50%] w-full translate-x-[-50%] flex items-center justify-center gap-5 max-sm:bottom-[30px]'>
			<button
				className='shrink-0 active:scale-90 cursor-pointer'
				onClick={nextSlide}
			>
				<svg
					viewBox='0 0 24 24'
					width='24'
					height='24'
				>
					<use href='/sprite.svg#slide-arrow' />
				</svg>
			</button>

			<CarouselSideBar
				slides={slides}
				onSelect={onSelect}
				activeId={activeId}
			/>

			<button
				className='rotate-180 shrink-0 active:scale-90 cursor-pointer'
				onClick={prevSlide}
			>
				<svg
					viewBox='0 0 24 24'
					width='24'
					height='24'
				>
					<use href='/sprite.svg#slide-arrow' />
				</svg>
			</button>
		</div>
	);
};

export default CarouselActions;
