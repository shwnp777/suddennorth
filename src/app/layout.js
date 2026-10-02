import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
	metadataBase: new URL('https://suddennorth.com'),
	title: {
		default: 'Sudden North — Mission-driven technology',
		template: '%s · Sudden North',
	},
	description:
		'Secure software, resilient systems, and integrated technology for public missions and private innovation.',
	icons: {
		icon: '/favicon-32.png',
		apple: '/apple-touch-icon.png',
	},
	openGraph: {
		type: 'website',
		url: 'https://suddennorth.com',
		title: 'Sudden North — Mission-driven technology',
		description:
			'Secure software, resilient systems, and integrated technology for public missions and private innovation.',
		siteName: 'Sudden North',
		images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Sudden North — Build what matters. Move what’s possible.' }],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sudden North — Mission-driven technology',
		description:
			'Secure software, resilient systems, and integrated technology for public missions and private innovation.',
		images: ['/og.png'],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<SiteHeader />
				<div>{children}</div>
				<SiteFooter />
			</body>
		</html>
	);
}
