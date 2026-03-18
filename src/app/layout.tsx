import Footer from '@/components/UI/layout/Footer';
import Header from '@/components/UI/layout/Header';
import { siteConfig } from '@/config/site.config';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className='flex min-h-screen flex-col justify-between'>
					<Header />
					<main className=''>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
