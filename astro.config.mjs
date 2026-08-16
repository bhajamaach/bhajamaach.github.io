// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// TODO: confirm once purchased — required for RSS item links to be absolute.
	site: 'https://bhajamaach.dev',
	markdown: {
		shikiConfig: {
			// Emit both themes as CSS vars instead of a hardcoded background, so global.css
			// can switch them with the site's own [data-theme] toggle (see the .astro-code rules).
			themes: { light: 'github-light', dark: 'github-dark' },
			defaultColor: false,
		},
	},
});
