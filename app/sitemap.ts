import { allPosts } from "@/.content-collections/generated";

export default async function sitemap() {
	const baseRoutes = [
		{
			url: "https://nikosantis.dev/",
			lastModified: new Date().toISOString(),
		},
		{
			url: "https://nikosantis.dev/about",
			lastModified: new Date().toISOString(),
		},
		{
			url: "https://nikosantis.dev/blog",
			lastModified: new Date().toISOString,
		},
	];

	const postRoutes = allPosts.map((post) => ({
		url: `https://nikosantis.dev/blog/${post._meta.path}`,
		lastModified: new Date().toISOString(),
	}));

	return [...baseRoutes, ...postRoutes];
}
