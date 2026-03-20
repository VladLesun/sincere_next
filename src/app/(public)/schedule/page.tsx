'use client';

import Links from '@/components/UI/Links';
import { siteConfig } from '@/config/site.config';

const Schedule = () => {
	const scheduleContent = siteConfig.pagesContent.schedule.plansSection;

	return (
		<section className='pt-[114px] pb-[220px] bg-[#1f0808]'>
			<div className='max-w-[980px] mx-auto px-7'>
				<h2 className='max-w-100 mb-9 text-[32px] leading-[109%] tracking-[-0.05em]'>
					{scheduleContent.title}
				</h2>

				<ul className='mb-[220px] border-b-[0.5px] border-[#fff]'>
					{scheduleContent.list.map(item => (
						<li
							key={item.number}
							className='flex justify-between items-center py-[50px] border-t-[0.5px] border-[#fff]'
						>
							<p className='text-[300px] font-extralight leading-[135%] tracking-[-0.02em]'>
								{item.number}
							</p>

							<div className='w-[50%]'>
								<h3 className='mb-[56px] text-lg font-medium'>{item.title}</h3>
								<p className='text-lg'>{item.text}</p>
							</div>
						</li>
					))}
				</ul>

				<div className='flex items-center gap-[100px]'>
					<p className='text-[32px] leading-[109%] tracking-[-0.05em]'>
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
