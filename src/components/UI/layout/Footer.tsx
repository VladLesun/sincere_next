import { siteConfig } from '@/config/site.config';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='py-17 bg-[#f7f4eb] text-[#000]'>
			<div className='max-w-[976px] px-7'>
				<div className='flex flex-col gap-21 max-lg:gap-12'>
					<div className='flex justify-between items-center gap-6 max-sm:flex-col max-sm:items-start'>
						<Link href='/'>
							<svg
								width='50'
								height='38'
								viewBox='0 0 50 38'
								fill='currentColor'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M24.957 10.2363L42.6826 0.000976562L47.6338 2.85938C49.0413 3.67213 49.9082 5.17447 49.9082 6.7998V30.3604C49.9082 31.9857 49.0413 33.488 47.6338 34.3008L42.6855 37.1572L24.957 26.9219L7.22656 37.1582V37.1592L2.27441 34.3008C0.866917 33.488 0 31.9857 0 30.3604V6.7998C0 5.17447 0.866903 3.67213 2.27441 2.85938L7.22754 0L24.957 10.2363Z' />
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
