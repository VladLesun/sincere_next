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
	pagesContent: {
		//! переименовано с '/'
		home: {
			heroSection: {
				title: 'Welcome to Jones & Brown Legal',
				// ! Попробовать без объектов
				description: [
					{
						text: 'Jones & Brown Legal has been a pillar of the Los Angeles legal community, providing expert legal counsel across a wide spectrum of practice areas. We are more than just attorneys, we are trusted advisors, dedicated advocates, and strategic partners committed to achieving the best possible outcomes for our clients.',
					},
					{
						text: 'We combine decades of experience with a deep understanding of the complexities of California law. Our team of seasoned trial attorneys boasts a proven track record of success in courtrooms throughout Los Angeles and beyond. We pride ourselves on our comprehensive expertise, covering nearly every field of law, ensuring that whatever your legal challenge, we have the knowledge and experience to guide you.',
					},
				],
			},
			offerSection: {
				image: { src: '/breaker-img.png', alt: 'books' },
				title: 'What We Offer',
				list: [
					{ text: 'Business formation' },
					{ text: 'Contract drafting' },
					{ text: 'Mergers and Acquisitions' },
					{ text: 'Property Protection' },
					{ text: 'Employment Law' },
					{ text: 'Corporate Governance' },
					{ text: 'Shareholder Disputes' },
					{ text: '+More' },
				],
			},
			reviewsSection: {
				title: 'Hear From Our Clients',
				description:
					'We believe that our clients` experiences speak volumes about the quality of our legal services. Here`s what some of them have to say:',
				carousel: [
					{
						text: `"Jones & Brown Legal handled my estate planning with such care and professionalism. They listened to my concerns and made the process clear and straightforward. I now have complete peace of mind knowing my family's future is secure."`,
						author: '— David L., Business Owner',
					},
					{
						text: `"Their expertise and courtroom presence were truly impressive. They turned a stressful situation into a successful outcome."`,
						author: '— Sarah M., Small Business Owner',
					},
					{
						text: `"I was very impressed with the responsiveness and knowledge of everyone at Jones & Brown Legal. I felt like they really cared about my case, and they fought hard to get me a great result."`,
						author: '— Thomas P., Individual Client',
					},
					{
						text: `"Their attention to detail and proactive communication made the entire process smooth and stress-free. I felt completely supported every step of the way."`,
						author: '— Robert P., Real Estate Investor',
					},
				],
				connection:
					'Let us help you navigate your legal journey with confidence and peace of mind. Contact Jones & Brown Legal today.',
			},
			bottomImgSection: { src: '/divider-img1.png', alt: 'hall' },
		},
		//! переименовано с '/services'
		services: {
			heroSection: [
				{ topText: '30+', bottomText: 'years of experience' },
				{ topText: '98%', bottomText: 'success rate in court' },
				{ topText: '120+', bottomText: 'attorneys at hand' },
			],
			helpsSection: [
				{
					title: 'Business and Corporate Law',
					description: `
					Business formation (LLCs, corporations, partnerships)
					<br />
					Contract drafting and review
					<br />
					Mergers and acquisitions
					<br />
					Intellectual property protection
					<br />
					Employment law and workplace policies
					<br />
					Corporate governance
					<br />
					Shareholder and partnership disputes
				`,
				},
				{
					title: 'Litigation and Dispute Resolution',
					description: `
					Civil litigation
					<br />
					Commercial litigation
					<br />
					Arbitration and mediation
					<br />
					Class action lawsuits
					<br />
					Personal injury claims
					<br />
					Product liability cases
				`,
				},
				{
					title: 'Family Law',
					description: `
					Divorce and separation
					<br />
					Child custody and support
					<br />
					Prenuptial and postnuptial agreements
					<br />
					Adoption and surrogacy
					<br />
					Domestic violence protection
				`,
				},
				{
					title: 'Criminal Defense',
					description: `
					DUI and traffic offenses
					<br />
					White-collar crime defense
					<br />
					Drug charges
					<br />
					Assault and battery cases
					<br />
					Expungements and record sealing
				`,
				},
				{
					title: 'Real Estate Law',
					description: `
					Property transactions (buying, selling, leasing)
					<br />
					Landlord-tenant disputes
					<br />
					Zoning and land use
					<br />
					Construction law
					<br />
					Real estate development
				`,
				},
				{
					title: 'Immigration Law',
					description: `
					Visa applications
					<br />
					Green cards and citizenship
					<br />
					Deportation defense
					<br />
					Employment-based immigration
				`,
				},
			],
			bottomImgSection: { src: '/divider-img2.png', alt: 'library' },
		},
		//! переименовано с '/schedule'
		schedule: {
			plansSection: {
				title: "Ready to Take the Next Step? Let's Discuss",
				list: [
					{
						number: '1.',
						title: 'Free consultation',
						text: 'Schedule a complimentary consultation to discuss your legal needs. During this session, our experienced attorneys will assess your situation, provide initial guidance, and outline potential strategies.',
					},
					{
						number: '2.',
						title: 'Personalized Case Evaluation',
						text: 'If you choose to move forward, we conduct a detailed review of your case. This includes gathering key documents, outlining your legal options, and developing a tailored plan designed to achieve the best possible outcome.',
					},
					{
						number: '3.',
						title: 'Formal Engagement & Representation',
						text: 'Once you decide to proceed, we finalize the paperwork and begin representing you. Our team will keep you informed at every stage, ensuring you feel confident and supported throughout the process.',
					},
				],
				preButton: 'Discover how we can help',
			},
		},
	},
};
