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
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M11.834 2.5L2.33398 12M2.33398 12L11.834 21.5M2.33398 12H21.0546'
						strokeWidth='2'
					/>
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
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M11.834 2.5L2.33398 12M2.33398 12L11.834 21.5M2.33398 12H21.0546'
						strokeWidth='2'
					/>
				</svg>
			</button>
		</div>
	);
};

export default CarouselActions;
