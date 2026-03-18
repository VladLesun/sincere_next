'use client';

import Links from '@/components/UI/Links';
import Image from 'next/image';

const Home = () => {
	return (
		<div>
			<section className='pt-[135px] pb-[178px] bg-[#f7f4eb] text-[#000]'>
				<div className='max-w-[942px] mx-auto px-6'>
					<h2 className='mb-[60px] text-[32px] font-medium'>
						Welcome to Jones & Brown Legal
					</h2>

					<ul className='mb-[50px] flex justify-between gap-3'>
						<li className='max-w-[447px]'>
							<p>
								Jones & Brown Legal has been a pillar of the Los Angeles legal
								community, providing expert legal counsel across a wide spectrum
								of practice areas. We are more than just attorneys, we are
								trusted advisors, dedicated advocates, and strategic partners
								committed to achieving the best possible outcomes for our
								clients.
							</p>
						</li>
						<li className='max-w-[447px]'>
							<p>
								We combine decades of experience with a deep understanding of
								the complexities of California law. Our team of seasoned trial
								attorneys boasts a proven track record of success in courtrooms
								throughout Los Angeles and beyond. We pride ourselves on our
								comprehensive expertise, covering nearly every field of law,
								ensuring that whatever your legal challenge, we have the
								knowledge and experience to guide you.
							</p>
						</li>
					</ul>

					<Links
						variant='secondary'
						href='/schedule'
						className='w-[202px]'
					>
						Schedule a Consult
					</Links>
				</div>
			</section>

			<section>
				<Image
					src='/breaker-img.png'
					alt='books'
					width={1280}
					height={625}
					className='w-full h-auto object-cover'
				/>

				<div className='max-w-[1128px] flex gap-[74px] ml-auto pt-[93px] pb-[126px] px-7'>
					<h2 className='text-[32px] font-medium'>What We Offer</h2>

					<nav>
						<ul className='flex flex-col mb-[64px] text-[76px] leading-[95%] tracking-[-0.06em]'>
							<li>Business formation</li>
							<li>Contract drafting</li>
							<li>Mergers and Acquisitions</li>
							<li>Property Protection</li>
							<li>Employment Law</li>
							<li>Corporate Governance</li>
							<li>Shareholder Disputes</li>
							<li className='text-[#fff0c480]'>+More</li>
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
				<div className='flex flex-col gap-14 max-w-[738px] mx-auto px-7 py-29 text-[#000]'>
					<div>
						<h2>Hear From Our Clients</h2>
						<p>
							We believe that our clients&apos; experiences speak volumes about
							the quality of our legal services. Here&apos;s what some of them
							have to say:
						</p>
					</div>

					<div className='w-full min-h-[445px] bg-[#f6f6f6]'>Carousel</div>

					<p>
						Let us help you navigate your legal journey with confidence and
						peace of mind. Contact Jones & Brown Legal today.
					</p>

					<Links
						variant='secondary'
						href='/schedule'
						className='w-[202px]'
					>
						Schedule a Consult
					</Links>
				</div>

				<Image
					src='/divider-img1.png'
					alt='hall'
					width={1280}
					height={625}
					className='w-full h-auto object-cover'
				/>
			</section>
		</div>
	);
};

export default Home;
