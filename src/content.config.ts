import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		summary: z.string().optional(),
		coverImage: z.string().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		name: z.string(),
		description: z.string(),
		category: z.enum(['Systems', 'AI/ML', 'Client Work']),
		techStack: z.array(z.string()),
		githubUrl: z.string().url().optional(),
		liveUrl: z.string().url().optional(),
		coverImage: z.string().optional(),
	}),
});

const experience = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
	schema: z.object({
		role: z.string(),
		company: z.string(),
		companyUrl: z.string().url().optional(),
		logo: z.string().optional(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
		description: z.string(),
	}),
});

export const collections = { blog, projects, experience };
