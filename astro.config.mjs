// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// Currently the live GitHub Pages URL. Switch to https://bhajamaach.dev once the domain
	// is purchased and DNS/CNAME is configured — see README's deployment notes.
	site: 'https://bhajamaach.github.io',
	prefetch: { defaultStrategy: 'hover' },
	integrations: [sitemap()],
	markdown: {
		shikiConfig: {
			// Emit both themes as CSS vars instead of a hardcoded background, so global.css
			// can switch them with the site's own [data-theme] toggle (see the .astro-code rules).
			themes: { light: 'github-light', dark: 'github-dark' },
			defaultColor: false,
		},
	},
});
