import { ICarousel } from '@/types/carousel.types';

const CarouselSideBar = ({ slides }: ICarousel) => {
	return (
		<ul className='flex gap-[10px]'>
			{slides.map((_, index) => (
				<li key={index}>
					<button className='w-[11px] h-[11px] rounded-[100%] bg-black'></button>
				</li>
			))}
		</ul>
	);
};

export default CarouselSideBar;
