import { IBM_Plex_Mono, Inter_Tight } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const sans = Inter_Tight({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-mono', display: 'swap' });

const description =
	'Secure software, resilient systems, and integrated technology for public missions and private innovation.';

export const metadata = {
	metadataBase: new URL('https://suddennorth.com'),
	title: {
		default: 'Sudden North — Mission-driven technology',
		template: '%s · Sudden North',
	},
	description,
	icons: {
		icon: '/favicon-32.png',
		apple: '/apple-touch-icon.png',
	},
	openGraph: {
		type: 'website',
		url: 'https://suddennorth.com',
		title: 'Sudden North — Mission-driven technology',
		description,
		siteName: 'Sudden North',
		images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Sudden North — Build what matters. Move what’s possible.' }],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sudden North — Mission-driven technology',
		description,
		images: ['/og.png'],
	},
};

export const viewport = {
	themeColor: '#0b1220',
	colorScheme: 'dark',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={`${sans.variable} ${mono.variable}`}>
			<body>
				<a href='#main' className='skip-link'>Skip to content</a>
				<SiteHeader />
				<div id='main' tabIndex={-1}>{children}</div>
				<SiteFooter />
			</body>
		</html>
	);
}
