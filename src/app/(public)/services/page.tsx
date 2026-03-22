'use client';

import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';
import { siteConfig } from '../../../config/site.config';

const Services = () => {
	const servicesContent = siteConfig.pagesContent.services;

	return (
		<>
			<section className='py-24 bg-[#f7f4eb] max-sm:py-12'>
				<div className='px-7'>
					<ul className='max-w-[960px] mx-auto flex justify-between gap-12 text-[#31110f]  tracking-[-0.06em] max-lg:max-w-[672px] max-sm:flex-col max-lg:items-center max-lg:gap-[64px] '>
						{servicesContent.heroSection.map(item => (
							<li key={item.topText}>
								<p className='mb-14 text-[120px] leading-[95%] tracking-[-0.06em] max-lg:text-[84px] max-lg:mb-7'>
									{item.topText}
								</p>
								<p className='text-2xl max-lg:text-[20px]'>{item.bottomText}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section>
				<div className='px-7 py-28.5 max-sm:py-[64px]'>
					<div className='max-w-[980px] mx-auto flex flex-col gap-42.5 max-lg:max-w-[672px] max-lg:gap-20 max-sm:gap-[64px]'>
						<h2 className='max-w-[590px] text-[32px] max-sm:text-[22px]'>
							Navigating Complex Legal Landscapes? We Can Help.
						</h2>

						<ul className='border-b border-[#fff] max-lg:flex max-lg:flex-wrap max-lg:gap-5 max-lg:items-start max-lg:justify-center max-lg:shrink-0'>
							{servicesContent.helpsSection.map(item => {
								const cleanHtml = DOMPurify.sanitize(item.description);
								return (
									<li
										key={item.title}
										className='flex justify-between gap-6 py-5 border-t border-[#fff] max-lg:w-full max-lg:max-w-[326px] max-lg:flex-col max-md:max-w-none'
									>
										<h3 className='w-[40%] max-lg:w-full'>{item.title}</h3>
										<p className='w-[40%] max-lg:w-full'>{parse(cleanHtml)}</p>
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				<Image
					src={servicesContent.bottomImgSection.src}
					alt={servicesContent.bottomImgSection.alt}
					width={1280}
					height={625}
					className='w-full min-h-[625px] object-cover max-lg:min-h-[480px] max-sm:min-h-[280px]'
				/>
			</section>
		</>
	);
};

export default Services;
