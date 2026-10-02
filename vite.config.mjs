import { sites } from '@openai/sites-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig(async () => {
	const { cloudflare } = await import('@cloudflare/vite-plugin');

	return {
		plugins: [
			sites(),
			cloudflare({
				viteEnvironment: { name: 'rsc', childEnvironments: ['ssr'] },
				config: {
					main: './worker/index.js',
					compatibility_flags: ['nodejs_compat'],
					assets: {
						directory: './out',
						binding: 'ASSETS',
						html_handling: 'auto-trailing-slash',
						not_found_handling: '404-page',
					},
				},
			}),
		],
	};
});
