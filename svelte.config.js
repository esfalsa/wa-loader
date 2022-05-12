import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			assets: 'docs'
		}),
		prerender: {
			default: true
		}
	}
};
