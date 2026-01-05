import Link from "next/link";

import { ChevronRightIcon } from "lucide-react";

import { getPosts } from "@/lib/posts";

export default function Page() {
	const posts = getPosts();

	return (
		<main>
			<h1 className="mb-12 text-2xl font-medium tracking-tighter">
				hola, soy nikolas santis 👋
			</h1>

			<div className="prose prose-neutral dark:prose-invert">
				<p>
					Soy <strong>Senior Software Engineer</strong> con más de 15 años de
					experiencia construyendo sistemas web de alto impacto, desde MVPs
					hasta aplicaciones de gran escala.
				</p>

				<p>
					Me especializo en{" "}
					<strong>frontend moderno con React, Next.js y TypeScript</strong>, con
					un sólido background en <strong>backend con Node.js</strong>, siempre
					con foco en performance, escalabilidad y calidad del software.
				</p>

				<p>
					Trabajo desde{" "}
					<Link
						href="https://maps.app.goo.gl/k9FnEM5in6pUKoze9"
						target="_blank"
						title="Villa Alemana, Chile"
					>
						Villa Alemana, Chile 🇨🇱
					</Link>
					, colaborando de forma remota con equipos y proyectos en distintos
					contextos técnicos y de negocio.
				</p>

				<p>
					En este espacio comparto proyectos, aprendizajes y reflexiones sobre
					desarrollo de software, arquitectura frontend y performance web.
				</p>
			</div>

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
							{/* {!post.isOld && (
								<div className="absolute left-0 top-0 inline-flex bg-neutral-500 px-3 py-1 dark:bg-neutral-600">
									<span className="text-xxs leading-none text-white">New</span>
								</div>
							)} */}
						</div>
					);
				})}
			</div>
		</main>
	);
}
