/** @type {import('next').NextConfig} */

// Content Security Policy.
// - 'unsafe-inline' scripts are required by Next.js App Router hydration unless nonces are used
//   (nonces force every page to render dynamically). Revisit if the site moves to middleware nonces.
// - Google endpoints cover Firebase (Firestore contact form) and Firebase Analytics.
const isDev = process.env.NODE_ENV !== 'production';
const csp = [
	"default-src 'self'",
	`script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com`,
	"style-src 'self' 'unsafe-inline'",
	"img-src 'self' data: blob: https://www.googletagmanager.com https://*.google-analytics.com",
	"font-src 'self'",
	"connect-src 'self' https://*.googleapis.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com" + (isDev ? ' ws:' : ''),
	"frame-src 'none'",
	"frame-ancestors 'none'",
	"object-src 'none'",
	"base-uri 'self'",
	"form-action 'self'",
	"manifest-src 'self'",
	...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ');

const securityHeaders = [
	{ key: 'Content-Security-Policy', value: csp },
	// Two years. Add `; includeSubDomains; preload` only once every subdomain is HTTPS-only.
	{ key: 'Strict-Transport-Security', value: 'max-age=63072000' },
	{ key: 'X-Content-Type-Options', value: 'nosniff' },
	{ key: 'X-Frame-Options', value: 'DENY' },
	{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
	{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()' },
	{ key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
];

const nextConfig = {
	poweredByHeader: false,
	async headers() {
		return [{ source: '/:path*', headers: securityHeaders }];
	},
	// Product pages are retired for now; the Safe Stream privacy policy stays live for the App Store listing.
	async redirects() {
		return [
			{ source: '/products', destination: '/', permanent: false },
			{ source: '/products/safestream', destination: '/', permanent: false },
			{ source: '/content', destination: '/', permanent: false },
			{ source: '/capability-statement', destination: '/teaming#capability-statement', permanent: false },
		];
	},
};

export default nextConfig;
