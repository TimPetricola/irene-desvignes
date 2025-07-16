import { defineCollection, z } from 'astro:content';

const exhibitions = defineCollection({
  type: 'data',
  schema: z.object({
    month: z.string(),
    year: z.number(),
    location: z.string(),
    type: z.enum(['individual', 'group']),
  }),
});

const series = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    images: z.array(z.array(z.union([z.number(), z.string()]))),
    order: z.number(),
    category: z.enum(['peintures', 'dessins']).optional(),
  }),
});

export const collections = {
  exhibitions,
  series,
};