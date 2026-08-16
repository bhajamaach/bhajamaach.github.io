import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: 'Kanishka Das — Blog',
		description: 'Technical writing on systems, performance, and AI infrastructure.',
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.publishDate,
			description: post.data.summary,
			link: `/blog/${post.id}/`,
			categories: post.data.tags,
		})),
	});
}
