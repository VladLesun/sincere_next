import { EPath } from '@/const/path-options';

export const siteConfig = {
	title: 'Jones & Brown Legal',
	description:
		"We've been serving the Los Angeles area with expert legal counsel since 1976.",
	navLinks: [
		{ href: EPath.SERVICES_PATH, label: 'Services' },
		{ href: EPath.SCHEDULE_PATH, label: 'Schedule a Consult' },
	],
	headerContent: [
		{
			href: EPath.HOME_PATH,
			image: '/header-img1.png',
			title: 'Jones & Brown Legal',
			description: 'Deep expertise, decisive courtroom presence',
			subdescription:
				"We've been serving the Los Angeles area with expert legal counsel since 1976.",
		},
		{
			href: EPath.SERVICES_PATH,
			image: '/header-img2.png',
			description:
				'At Jones & Brown Legal, we are committed to exceptional service and successful outcomes with:',
		},
		{
			href: EPath.SCHEDULE_PATH,
			image: '/header-img3.png',
			title: 'Let us help you',
		},
	],
	contacts: [
		{ href: 'hello@figma.com', label: 'hello@figma.com' },
		{ href: '5551234567', label: '(555) 123-4567' },
	],
	socials: [
		{ href: 'www.instagram.com', label: 'Instagram' },
		{ href: 'www.facebook.com', label: 'Facebook' },
		{ href: 'www.LinkedIn.com', label: 'LinkedIn' },
		{ href: 'www.Bluesky.com', label: 'Bluesky' },
	],
	'/': {},
	'/services': {},
	'/schedule': {},
};
