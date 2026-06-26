import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    category: z.enum(['data', 'ml', 'agents', 'app']),
    github: z.string().url(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number(),
    status: z.enum(['complete', 'in-progress', 'planned']).default('planned'),
  }),
});

export const collections = { projects };
