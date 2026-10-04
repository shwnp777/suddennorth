const BASE = 'https://suddennorth.com';

const routes = [
	['/', 'monthly', 1],
	['/services', 'monthly', 0.8],
	['/teaming', 'monthly', 0.9],
	['/resources', 'monthly', 0.8],
	['/resources/cmmc-readiness', 'monthly', 0.8],
	['/resources/ai-cost-benefit', 'monthly', 0.7],
	['/resources/ai-integration-risk', 'monthly', 0.7],
	['/about', 'monthly', 0.8],
	['/contact', 'yearly', 0.6],
	['/security', 'yearly', 0.3],
];

export default function sitemap() {
	const lastModified = new Date();
	return routes.map(([path, changeFrequency, priority]) => ({ url: `${BASE}${path}`, lastModified, changeFrequency, priority }));
}
