import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
	metadataBase: new URL('https://suddennorth.com'),
	title: {
		default: 'Sudden North — From the ground up',
		template: '%s · Sudden North',
	},
	description:
		"Apps, Websites, Software Engineering, Marketing, Finance & Sales consulting — it's all up from here.",
	openGraph: {
		type: 'website',
		url: 'https://suddennorth.com',
		title: 'Sudden North',
		description:
			"Apps, Websites, Software Engineering, Marketing, Finance & Sales consulting — it's all up from here.",
		siteName: 'Sudden North',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sudden North',
		description:
			"Apps, Websites, Software Engineering, Marketing, Finance & Sales consulting — it's all up from here.",
	},
};

export default function RootLayout({ children }) {
	return (
		<html data-theme='dark' lang='en' className='dark'>
			<body className='min-h-screen bg-gray-950 text-white'>
				<SiteHeader />
				<div>{children}</div>
				<SiteFooter />
			</body>
		</html>
	);
}
