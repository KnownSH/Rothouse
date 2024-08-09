import { defineCollection, z } from "astro:content";

const albums = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      cover: image(),
      usual_artist: z.string().optional(),

      images: z.record(z.string(), z.object({
        alt: z.string().optional(),
        artist: z.string().optional()
      }))
    }),
});

export const collections = {
  albums,
};