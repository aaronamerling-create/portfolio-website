import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const work = defineCollection({
	// Load Markdown files in the `src/content/work/` directory.
	loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		client: z.string(),
		summary: z.string(),
		challenge: z.string(),
		solution: z.string(),
		results: z.array(z.string()),
		order: z.number(),
	}),
});

export const collections = { blog, work };
