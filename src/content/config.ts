import { defineCollection, z } from "astro:content";

const albums = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      markdown: z.string().optional(),
      cover: image(),
      usual_artist: z.string().optional(),

      artists: z.record(z.string(), z.string()).optional(),

      images: z.record(z.string(), z.object({
        alt: z.string().optional(),
        artist: z.string().optional(),
        var: z.string().optional()
      })).optional()
    }),
});

export const collections = {
  albums,
};