import { allPosts } from "content-collections";

export function getPosts() {
	return allPosts.sort((a, b) => {
		const dateA = new Date(a.publishedAt).getTime();
		const dateB = new Date(b.publishedAt).getTime();
		return dateB - dateA;
	});
}
