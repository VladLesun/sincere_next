import { ICarousel } from '@/types/carousel.types';

const CarouselSideBar = ({ slides, activeId, onSelect }: ICarousel) => {
	return (
		<ul className='flex flex-wrap gap-[10px]'>
			{slides.map((_, index) => (
				<li key={index}>
					<button
						className={`w-[11px] h-[11px] rounded-[100%] cursor-pointer ${activeId === index ? 'bg-[#31110f]' : 'bg-[#00000040]'} transition-colors duration-300 ease-in-out hover:bg-[#31110f]`}
						onClick={() => onSelect(index)}
					></button>
				</li>
			))}
		</ul>
	);
};

export default CarouselSideBar;
