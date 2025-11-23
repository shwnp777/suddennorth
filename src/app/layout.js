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
		<html lang='en'>
			{/* You can put a theme class on <html> if you manage dark mode with JS */}
			<body className='bg-white  min-h-screen'>
				<SiteHeader />
				{/* Reserve top space for the absolute header */}
				<div>{children}</div>
				<SiteFooter />
			</body>
		</html>
	);
}
