import { IBM_Plex_Mono, Inter_Tight } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { SITE, organizationJsonLd, pageMetadata } from '@/lib/seo';

// Site-wide share defaults (no canonical/url here, so pages without their own metadata don't point at the home page).
const rootShare = pageMetadata();
delete rootShare.alternates;
delete rootShare.openGraph.url;

const sans = Inter_Tight({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-mono', display: 'swap' });

export const metadata = {
	metadataBase: new URL(SITE.url),
	title: {
		default: SITE.title,
		template: '%s · Sudden North',
	},
	applicationName: SITE.name,
	...rootShare,
	formatDetection: { telephone: false },
};

export const viewport = {
	themeColor: '#0b1220',
	colorScheme: 'dark',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={`${sans.variable} ${mono.variable}`}>
			<body>
				<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
				<a href='#main' className='skip-link'>Skip to content</a>
				<SiteHeader />
				<div id='main' tabIndex={-1}>{children}</div>
				<SiteFooter />
			</body>
		</html>
	);
}
