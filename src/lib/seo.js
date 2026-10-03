// Shared SEO + social-share metadata.
// Share images come from the file convention: opengraph-image.jpg / twitter-image.jpg in each route folder.
export const SITE = {
	name: 'Sudden North',
	legalName: 'Sudden North, LLC',
	url: 'https://suddennorth.com',
	title: 'Sudden North — Mission-driven technology',
	description: 'Secure software, resilient systems, and integrated technology for public missions and private innovation.',
	email: 'contact@suddennorth.com',
};

export function pageMetadata({ title, description = SITE.description, path = '/' } = {}) {
	const shareTitle = title ? `${title} · ${SITE.name}` : SITE.title;
	return {
		...(title ? { title } : {}),
		description,
		alternates: { canonical: path },
		openGraph: {
			type: 'website',
			siteName: SITE.name,
			locale: 'en_US',
			url: path,
			title: shareTitle,
			description,
		},
		twitter: {
			card: 'summary_large_image',
			title: shareTitle,
			description,
		},
	};
}

export const organizationJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: SITE.name,
	legalName: SITE.legalName,
	url: SITE.url,
	logo: `${SITE.url}/icon-512.png`,
	email: SITE.email,
	description: SITE.description,
	slogan: 'Build what matters. Move what’s possible.',
	areaServed: 'US',
	knowsAbout: ['Software engineering', 'Cybersecurity', 'Systems integration', 'Hardware prototyping'],
	contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', email: SITE.email, availableLanguage: 'English' }],
};
