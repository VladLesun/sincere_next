'use client';

import Links from '@/components/UI/Links';
import { siteConfig } from '@/config/site.config';

const Schedule = () => {
	const scheduleContent = siteConfig.pagesContent.schedule.plansSection;

	return (
		<section className='pt-[114px] pb-[220px] bg-[#1f0808] max-lg:py-[114px] max-sm:py-[64px]'>
			<div className='max-w-[980px] mx-auto px-7'>
				<h2 className='max-w-100 mb-9 text-[32px] leading-[109%] tracking-[-0.05em]'>
					{scheduleContent.title}
				</h2>

				<ul className='mb-[220px] border-b-[0.5px] border-[#fff] max-lg:mb-[114px] max-sm:mb-[56px]'>
					{scheduleContent.list.map(item => (
						<li
							key={item.number}
							className='flex justify-between items-center py-[50px] border-t-[0.5px] border-[#fff] max-sm:flex-col max-sm:items-start'
						>
							<p className='text-[300px] font-extralight leading-[135%] tracking-[-0.02em] max-lg:text-[200px] max-sm:text-[100px]'>
								{item.number}
							</p>

							<div className='w-[50%] max-lg:w-full max-lg:max-w-[481px]'>
								<h3 className='mb-[56px] text-lg font-medium'>{item.title}</h3>
								<p className='text-lg'>{item.text}</p>
							</div>
						</li>
					))}
				</ul>

				<div className='flex flex-wrap justify-between items-center gap-[56px]'>
					<p className='text-[32px] leading-[109%] tracking-[-0.05em] max-sm:text-[22px]'>
						{scheduleContent.preButton}
					</p>

					<Links
						href='/schedule'
						variant='primary'
						className='w-[202px]'
					>
						Schedule a Consult
					</Links>
				</div>
			</div>
		</section>
	);
};

export default Schedule;
