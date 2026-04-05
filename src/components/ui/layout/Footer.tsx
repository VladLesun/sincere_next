import { siteConfig } from '@/config/site.config';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='py-17 bg-[#f7f4eb] text-[#000]'>
			<div className='max-w-[976px] mx-auto px-7'>
				<div className='flex flex-col gap-21 max-lg:gap-12'>
					<div className='flex justify-between items-center gap-6 max-sm:flex-col max-sm:items-start'>
						<Link href='/'>
							<svg
								width='50'
								height='38'
								viewBox='0 0 50 38'
							>
								<use href='/sprite.svg#logo' />
							</svg>
						</Link>

						<p className='text-6xl max-lg:text-4xl max-sm:text-2xl'>
							Jones & Brown Legal
						</p>
					</div>

					<p className='text-lg'>Deep expertise, decisive courtroom presence</p>

					<div className='max-w-[855px] flex justify-between gap-[45px] text-sm max-sm:flex-col max-sm:gap-6'>
						<ul>
							{siteConfig.contacts.map(contact => (
								<li key={contact.href}>
									<Link
										href={contact.href}
										target='_blank'
									>
										{contact.label}
									</Link>
								</li>
							))}
						</ul>

						<address>
							123 Candyland Lane
							<br />
							Suite 123
							<br />
							Los Angeles, CA 94117
						</address>

						<ul>
							{siteConfig.socials.map(social => (
								<li key={social.href}>
									<Link
										href={social.href}
										target='_blank'
									>
										{social.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<p className='text-sm'>
						Jones & Brown Legal
						<br /> © 2025 All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
