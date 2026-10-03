export default function manifest() {
	return {
		name: 'Sudden North',
		short_name: 'Sudden North',
		description: 'Secure software, resilient systems, and integrated technology for public missions and private innovation.',
		start_url: '/',
		display: 'standalone',
		background_color: '#0b1220',
		theme_color: '#0b1220',
		icons: [
			{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
			{ src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
			{ src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
		],
	};
}
