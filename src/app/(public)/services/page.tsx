'use client';

import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';
import { siteConfig } from '../../../config/site.config';

const Services = () => {
	const servicesContent = siteConfig.pagesContent.services;

	return (
		<>
			<section className='py-24 bg-[#f7f4eb]'>
				<div className='px-7'>
					<ul className='max-w-[960px] mx-auto flex justify-between gap-12 text-[#31110f]  tracking-[-0.06em]'>
						{servicesContent.heroSection.map(item => (
							<li key={item.topText}>
								<p className='mb-14 text-[120px] leading-[95%] tracking-[-0.06em]'>
									{item.topText}
								</p>
								<p className='text-2xl'>{item.bottomText}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className=''>
				<div className='py-28.5 px-7'>
					<div className='max-w-[980px] mx-auto flex flex-col gap-42.5'>
						<h2>
							Navigating Complex Legal Landscapes?
							<br /> We Can Help.
						</h2>

						<ul className='border-b border-[#fff]'>
							{servicesContent.helpsSection.map(item => {
								const cleanHtml = DOMPurify.sanitize(item.description);
								return (
									<li
										key={item.title}
										className='flex justify-between gap-6 py-5 border-t border-[#fff]'
									>
										<h3 className='w-[40%]'>{item.title}</h3>
										<p className='w-[40%]'>{parse(cleanHtml)}</p>
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
					className='w-full h-auto object-cover'
				/>
			</section>
		</>
	);
};

export default Services;
