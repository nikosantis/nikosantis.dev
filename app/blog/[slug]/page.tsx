import Link from "next/link";
import { notFound } from "next/navigation";

import { ChevronRightIcon } from "lucide-react";

import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/lib/posts";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = getPosts().find((post) => post._meta.path === slug);
	if (!post) return notFound();

	return {
		title: post.title,
		description: post.description,
		alternates: {
			canonical: `/blog/${post._meta.path}`,
		},
		openGraph: {
			type: "article",
			publishedTime: new Date(post.publishedAt).toISOString(),
		},
	};
}

export async function generateStaticParams() {
	const posts = getPosts();

	return posts.map((post) => ({
		slug: post._meta.path,
	}));
}

function GetLastPosts() {
	const posts = getPosts();
	return (
		<section className="mt-12">
			<h2 className="text-xl font-medium tracking-tighter">Últimos Posts</h2>
			<div className="my-8 flex w-full flex-col space-y-4">
				{posts.slice(0, 3).map((post) => {
					return (
						<div className="group relative" key={post._meta.path}>
							<Link
								href={`/blog/${post._meta.path}`}
								title={post.title}
								className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
							>
								<div className="flex flex-col">
									<p className="font-medium text-neutral-900 dark:text-neutral-100">
										{post.title}
									</p>
								</div>
								<div className="text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
									<ChevronRightIcon />
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default async function Blog({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = getPosts().find((post) => post._meta.path === slug);
	if (!post) return notFound();

	return (
		<div>
			<article className="prose prose-neutral dark:prose-invert">
				<h1>{post.title}</h1>
				<CustomMDX code={post.mdx.body} />
			</article>
			<GetLastPosts />
		</div>
	);
}
