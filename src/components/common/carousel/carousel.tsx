import { siteConfig } from '@/config/site.config';
import { ISlide } from '@/types/carousel.types';
import { useEffect, useRef, useState } from 'react';
import CarouselActions from './carouselActions';

const Carousel = () => {
	const slides: ISlide[] = siteConfig.pagesContent.home.reviewsSection.carousel;
	const [activeId, setActiveId] = useState(0);

	const containerRef = useRef<HTMLDivElement>(null);
	const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

	const prevSlide = () =>
		setActiveId(prev => (prev === slides.length - 1 ? 0 : prev + 1));
	const nextSlide = () =>
		setActiveId(prev => (prev === 0 ? slides.length - 1 : prev - 1));

	useEffect(() => {
		const activeInner = slideRefs.current[activeId];
		if (activeInner && containerRef.current) {
			containerRef.current.style.height = activeInner.offsetHeight + 'px';
		}
	}, [activeId]);

	return (
		<div className='w-full'>
			<div
				ref={containerRef}
				className='relative w-full bg-[#f6f6f6] overflow-hidden transition-[height] duration-300'
			>
				<ul className='relative w-full'>
					{slides.map((slide, index) => (
						<li
							key={index}
							className={`absolute left-0 top-0 w-full transition-opacity duration-300 ease-in-out ${
								activeId === index ? 'opacity-100' : 'opacity-0'
							}`}
						>
							<div
								ref={el => {
									slideRefs.current[index] = el;
								}}
								className='pt-[32px] px-[50px] pb-[136px] text-center max-sm:pt-[30px] max-sm:pb-[134px]'
							>
								<p className='mb-[32px] text-[32px] font-medium leading-[109%] tracking-[-0.05em] max-sm:text-[22px]'>
									{slide.text}
								</p>
								<p className='text-[32px] font-medium leading-[109%] tracking-[-0.05em] max-sm:text-[22px]'>
									{slide.author}
								</p>
							</div>
						</li>
					))}
				</ul>

				<CarouselActions
					slides={slides}
					nextSlide={nextSlide}
					prevSlide={prevSlide}
					activeId={activeId}
					onSelect={setActiveId}
				/>
			</div>
		</div>
	);
};

export default Carousel;
