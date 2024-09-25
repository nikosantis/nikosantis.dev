// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { transformMDX } from "@fumadocs/content-collections/configuration";
var posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: ["*.mdx"],
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string(),
    isOld: z.boolean().optional()
  }),
  transform: async (document, context) => {
    const mdx = await transformMDX(document, context);
    const name = document._meta.directory;
    return {
      ...document,
      name,
      mdx
    };
  }
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
