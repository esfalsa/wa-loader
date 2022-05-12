import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			base: '/wa-loader'
		},
		prerender: {
			default: true,
			onError: 'continue'
		},
		trailingSlash: 'always'
	}
};
