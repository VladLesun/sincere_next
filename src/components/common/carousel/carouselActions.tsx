import { ICarouselActions } from '@/types/carousel.types';
import CarouselButtons from './carouselButtons';
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
			{/* пупу пум, сделал все в дев ветке, а потом понял, что не там сделал  */}
			<CarouselButtons onClick={nextSlide} />

			<CarouselSideBar
				slides={slides}
				onSelect={onSelect}
				activeId={activeId}
			/>

			<CarouselButtons
				onClick={prevSlide}
				className='rotate-180'
			/>
		</div>
	);
};

export default CarouselActions;
