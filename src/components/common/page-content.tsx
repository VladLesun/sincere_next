import { siteConfig } from '@/config/site.config';
import { usePathname } from 'next/navigation';

const PageContent = () => {
	const pathname = usePathname();
	const pageContent =
		siteConfig.pagesContent[pathname as keyof typeof siteConfig.pagesContent];

	console.log('Объект:', pageContent);

	if (!pageContent) {
		return <h1 className='mx-auto py-25 px-10 text-[120px]'>Page not found</h1>;
	}

	return <>{pathname}</>;
};

export default PageContent;
