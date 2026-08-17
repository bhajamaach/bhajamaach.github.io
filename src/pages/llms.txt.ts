import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
	const base = site?.toString().replace(/\/$/, '') ?? 'https://bhajamaach.dev';
	const projects = await getCollection('projects');
	const posts = (await getCollection('blog')).sort(
		(a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
	);

	const categories = ['Systems', 'AI/ML', 'Client Work'] as const;

	const lines = [
		'# Kanishka Das (bhajamaach)',
		'',
		'> Systems engineer working on allocators, renderers, kernels, and AI infrastructure — inference and serving. Personal portfolio and blog.',
		'',
		`- Homepage: ${base}/`,
		`- Contact: ${base}/contact`,
		`- Resume (PDF): ${base}/resume.pdf`,
		`- GitHub: https://github.com/bhajamaach`,
		`- LinkedIn: https://www.linkedin.com/in/kanishka-das-512320284`,
		`- X: https://x.com/bhajamaacha`,
		'',
		'## Projects',
		'',
	];

	for (const category of categories) {
		const items = projects.filter((p) => p.data.category === category);
		if (items.length === 0) continue;
		lines.push(`### ${category}`, '');
		for (const project of items) {
			const links = [`${base}/projects/${project.id}/`];
			if (project.data.githubUrl) links.push(project.data.githubUrl);
			if (project.data.liveUrl) links.push(project.data.liveUrl);
			lines.push(`- **${project.data.name}** (${project.data.techStack.join(', ')}): ${project.data.description} — ${links.join(' | ')}`);
		}
		lines.push('');
	}

	lines.push('## Blog', '');
	if (posts.length === 0) {
		lines.push('No posts published yet.');
	} else {
		for (const post of posts) {
			const date = post.data.publishDate.toISOString().slice(0, 10);
			lines.push(`- **${post.data.title}** (${date}): ${post.data.summary ?? ''} — ${base}/blog/${post.id}/`);
		}
	}
	lines.push('');

	return new Response(lines.join('\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
