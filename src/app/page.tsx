'use client';

import Carousel from '@/components/common/carousel/carousel';
import Links from '@/components/ui/Links';
import { siteConfig } from '@/config/site.config';
import Image from 'next/image';

const Home = () => {
	const homeContent = siteConfig.pagesContent.home;

	return (
		<>
			<section className='pt-[135px] pb-[178px] bg-[#f7f4eb] text-[#000] max-sm:pt-[48px] max-sm:pb-[80px]'>
				<div className='max-w-[942px] mx-auto px-6'>
					<h2 className='mb-[60px] text-[32px] font-medium max-sm:text-[22px]'>
						{homeContent.heroSection.title}
					</h2>

					<ul className='mb-[50px] flex justify-between gap-3 max-lg:gap-[48px] max-sm:flex-col max-sm:gap-6'>
						{homeContent.heroSection.description.map(item => (
							<li
								key={item.text}
								className='w-[49%] max-sm:w-full'
							>
								<p>{item.text}</p>
							</li>
						))}
					</ul>

					<Links
						variant='secondary'
						href='/schedule'
						className='w-[202px] max-sm:mx-auto'
					>
						Schedule a Consult
					</Links>
				</div>
			</section>

			<section>
				<Image
					src={homeContent.offerSection.image.src}
					alt={homeContent.offerSection.image.alt}
					width={1280}
					height={625}
					className='w-full min-h-[625px] object-cover max-lg:min-h-[480px] max-sm:min-h-[280px]'
				/>

				<div className='max-w-[1128px] flex gap-[74px] ml-auto pt-[93px] pb-[126px] px-7 max-lg:flex-col max-lg:gap-[48px] max-sm:py-[64px] max-sm:gap-6'>
					<h2 className='text-[32px] font-medium'>
						{homeContent.offerSection.title}
					</h2>

					<nav>
						<ul className='flex flex-col mb-[64px] text-[76px] leading-[95%] tracking-[-0.06em] max-lg:text-[64px] max-sm:text-[36px]'>
							{homeContent.offerSection.list.map(item => (
								<li
									key={item.text}
									className='last:text-[#fff0c480]'
								>
									{item.text}{' '}
								</li>
							))}
						</ul>

						<Links
							variant='primary'
							href='/services'
							className='w-[117px]'
						>
							Services
						</Links>
					</nav>
				</div>
			</section>

			<section className='bg-[#fff]'>
				<div className='flex flex-col gap-14 max-w-[738px] mx-auto px-7 py-29 text-[#000] max-sm:pt-[64px] max-sm:pb-[80px]'>
					<div className='text-center'>
						<h2 className='mb-8 text-[32px] max-sm:text-[22px]'>
							{homeContent.reviewsSection.title}
						</h2>
						<p className='max-w-[480px] mx-auto'>
							{homeContent.reviewsSection.description}
						</p>
					</div>

					<Carousel />

					<p className='max-w-[480px] mx-auto text-center'>
						{homeContent.reviewsSection.connection}
					</p>

					<Links
						variant='secondary'
						href='/schedule'
						className='w-[202px] mx-auto'
					>
						Schedule a Consult
					</Links>
				</div>

				<Image
					src={homeContent.bottomImgSection.src}
					alt={homeContent.bottomImgSection.alt}
					width={1280}
					height={625}
					className='w-full min-h-[625px] object-cover max-lg:min-h-[480px] max-sm:min-h-[280px]'
				/>
			</section>
		</>
	);
};

export default Home;
