/** @type {import('next').NextConfig} */
const nextConfig = {
	// Product pages are retired for now; the Safe Stream privacy policy stays live for the App Store listing.
	async redirects() {
		return [
			{ source: '/products', destination: '/', permanent: false },
			{ source: '/products/safestream', destination: '/', permanent: false },
			{ source: '/content', destination: '/', permanent: false },
		];
	},
};

export default nextConfig;
