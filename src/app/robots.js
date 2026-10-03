export default function robots() {
	return {
		rules: [{ userAgent: '*', allow: '/' }],
		sitemap: 'https://suddennorth.com/sitemap.xml',
	};
}
