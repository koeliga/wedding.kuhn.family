// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://wedding.kuhn.family',
	// Single-page site: inline the (small) CSS so first paint isn't blocked on a
	// separate stylesheet request.
	build: { inlineStylesheets: 'always' },
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Cinzel',
			cssVariable: '--font-cinzel',
			weights: [400, 500],
			styles: ['normal'],
			fallbacks: ['serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Cormorant',
			cssVariable: '--font-cormorant',
			weights: [400, 500],
			styles: ['normal', 'italic'],
			fallbacks: ['serif'],
		},
	],
});
