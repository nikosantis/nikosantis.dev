import { defineCollection, defineConfig } from "@content-collections/core";
import { transformMDX } from "@fumadocs/content-collections/configuration";
import * as z from "zod";

const posts = defineCollection({
	name: "posts",
	directory: "content/posts",
	include: ["*.mdx"],
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishedAt: z.string(),
		isOld: z.boolean().optional(),
		content: z.string(),
	}),
	transform: async (document, context) => {
		const mdx = await transformMDX(document, context);
		const name = document._meta.directory;
		return {
			...document,
			name,
			mdx,
		};
	},
});

export default defineConfig({
	collections: [posts],
});
