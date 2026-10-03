const BASE = 'https://suddennorth.com';

export default function sitemap() {
	const lastModified = new Date();
	return [
		{ url: `${BASE}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
		{ url: `${BASE}/services`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${BASE}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${BASE}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
	];
}
