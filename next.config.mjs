/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'images.unsplash.com' },
			{ protocol: 'https', hostname: 'plus.unsplash.com' }, // sometimes used for higher-res
			{ protocol: 'https', hostname: 'tailwindcss.com' }, // sometimes used for higher-res
		],
	},
};

export default nextConfig;
