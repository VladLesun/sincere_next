import Link from 'next/link';

interface IProps {
	children: string;
	variant: string;
	href: string;
	className: string;
}

const Links = ({ children, variant, href, className }: IProps) => {
	return (
		<Link
			href={href}
			className={`${variant === 'primary' ? 'bg-[#fff] text-[#000] hover:bg-[#f7f4eb]' : variant === 'secondary' ? 'bg-[#31110f] text-[#fff] hover:bg-[#1f0808]' : ''} flex items-center justify-center h-[58px] px-1 rounded-[500px] text-lg transition-colors duration-300 ease-in-out ${className}`}
		>
			{children}
		</Link>
	);
};

export default Links;
