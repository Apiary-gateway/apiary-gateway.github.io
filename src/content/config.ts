import { defineCollection, z } from 'astro:content';

const caseStudyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    images: z.record(z.string()).optional(),
  }),
});

export const collections = {
  'case-study': caseStudyCollection,
};
