'use client';

import { siteConfig } from '@/config/site.config';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
	const pathname = usePathname();
	const content = siteConfig.headerContent.find(item => item.href === pathname);

	return (
		<header className='min-h-16'>
			<div className='relative'>
				<div
					className={`fixed top-0 left-0 z-10 w-full px-[50px] py-5 flex justify-between items-center gap-5 ${pathname === '/schedule' ? 'bg-[#1f0808]' : 'bg-background'} max-sm:gap-2`}
				>
					<Link
						href='/'
						className='w-[33px] h-[24px] text-[#fff] '
					>
						<svg
							width='50'
							height='38'
							viewBox='0 0 50 38'
						>
							<use href='/sprite.svg#logo' />
						</svg>
					</Link>

					<nav>
						<ul className='flex gap-[37px] text-[13px] max-sm:flex-wrap max-sm:gap-y-2 max-sm:justify-end'>
							{siteConfig.navLinks.map(link => (
								<li key={link.label}>
									<Link href={link.href}>{link.label}</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>

				{content && (
					<div>
						<Image
							src={content?.image || ''}
							alt='Изображение домашней страницы'
							width={1280}
							height={800}
							className='w-full min-h-[800px] object-cover max-sm:min-h-[456px]'
						/>

						<div className='absolute bottom-[70px] left-0 w-full px-[50px] max-sm:px-6'>
							{content?.title && (
								<h1 className='mb-19.5 text-[120px] leading-[95%] tracking-[-0.03em] max-lg:text-[72px] max-sm:text-4xl'>
									{content?.title}
								</h1>
							)}
							<div className='flex justify-between items-center gap-3 max-lg:flex-col max-lg:items-start'>
								{content?.description && (
									<p className='max-w-[734px] text-[32px] font-medium leading-[109%] tracking-[-0.05em] max-sm:text-[22px]'>
										{content?.description}
									</p>
								)}
								{content?.subdescription && (
									<p className='max-w-[370px] text-[18px]'>
										{content?.subdescription}
									</p>
								)}
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
