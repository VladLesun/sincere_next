import { ICarouselActions } from '@/types/carousel.types';
import CarouselSideBar from './carouselSideBar';

const CarouselActions = ({
	slides,
	nextSlide,
	prevSlide,
}: ICarouselActions) => {
	return (
		<div className='absolute bottom-[32px] left-[50%] translate-x-[-50%] flex gap-5 max-sm:bottom-[30px]'>
			<button
				className=''
				onClick={nextSlide}
			>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M11.834 2.5L2.33398 12M2.33398 12L11.834 21.5M2.33398 12H21.0546'
						stroke='black'
						strokeWidth='2'
					/>
				</svg>
			</button>

			<CarouselSideBar slides={slides} />

			<button
				className='rotate-180'
				onClick={prevSlide}
			>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M11.834 2.5L2.33398 12M2.33398 12L11.834 21.5M2.33398 12H21.0546'
						stroke='black'
						strokeWidth='2'
					/>
				</svg>
			</button>
		</div>
	);
};

export default CarouselActions;
