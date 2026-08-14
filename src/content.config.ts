import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const work = defineCollection({
	loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
	schema: z.object({
		headline: z.string(),
		dek: z.string(),
		client: z.string(),
		order: z.number(),
		whereThingsStood: z.string(),
		theCall: z.string(),
		whatGotBuilt: z.array(z.string()),
		metrics: z.array(
			z.object({
				value: z.string(),
				label: z.string(),
				citation: z.string(),
			}),
		),
		whatIdDoDifferently: z.string().optional(),
		scope: z.string(),
		quotes: z
			.array(
				z.object({
					text: z.string(),
					name: z.string(),
					roleAtTime: z.string(),
					current: z.string().optional(),
					full: z.string().optional(),
					linkedin: z.boolean().optional(),
				}),
			)
			.optional(),
		needs: z.array(z.string()).optional(),
	}),
});

export const collections = { blog, work };
