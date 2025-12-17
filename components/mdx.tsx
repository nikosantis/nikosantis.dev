import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import type React from "react";

import { MDXContent } from "@content-collections/mdx/react";
import { LinkIcon } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import slugify from "slugify";

import { cn } from "@/lib/utils";

type PreProps = React.ComponentPropsWithoutRef<"pre"> & { icon?: string };
type CodeProps = React.ComponentPropsWithoutRef<"code">;

function createHeading(level: string, extraClass?: string) {
	const HeadingComponent = ({
		children,
		...rest
	}: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	>) => {
		const Tag = `h${level}` as keyof Pick<
			React.JSX.IntrinsicElements,
			"h1" | "h2" | "h3" | "h4" | "h5" | "h6"
		>;
		const isChildrenString = typeof children === "string";
		const slug = isChildrenString
			? slugify(children as string, { lower: true, strict: true })
			: children;
		return (
			<Tag
				{...rest}
				id={String(slug)}
				className={cn(rest.className, extraClass)}
			>
				<Link
					href={`#${slug}`}
					className="group no-underline transition-all hover:underline"
					title={children as string}
				>
					{children}
					<span className="ml-2 inline-flex">
						<LinkIcon className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
					</span>
				</Link>
			</Tag>
		);
	};
	HeadingComponent.displayName = `Heading${level}`;
	return HeadingComponent;
}

const overrideComponents: MDXComponents = {
	h1: createHeading("1"),
	h2: createHeading("2", "flex scroll-m-28 flex-row items-center gap-2"),
	h3: createHeading("3"),
	h4: createHeading("4"),
	h5: createHeading("5"),
	h6: createHeading("6"),
	pre: (props: PreProps) => {
		const Icon = props.icon || "";
		return (
			<div className="relative my-4 rounded-md border">
				<div className="relative flex h-12 items-center gap-2 rounded-t-md border-b border-b-gray-200 bg-gray-50 pl-4 pr-3 dark:bg-neutral-950">
					<div
						className="flex shrink-0 items-center justify-center [&>svg]:size-4 [&>svg]:text-gray-400"
						aria-hidden="true"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: false positive
						dangerouslySetInnerHTML={{
							__html: Icon,
						}}
					></div>
					{props.title && (
						<span className="inline-flex truncate text-xs">{props.title}</span>
					)}
				</div>
				<pre {...props} className={cn(props.className, "p-0")}>
					{props.children}
				</pre>
			</div>
		);
	},
	a: (props) => {
		const href = props.href;

		const className = cn(
			"text-gray-600 decoration-[0.1em] underline-offset-2 transition-all hover:text-gray-400 dark:text-white dark:hover:text-gray-300",
		);

		if (href?.startsWith("/")) {
			return (
				<Link href={href} {...props} className={className}>
					{props.children}
				</Link>
			);
		}

		if (href?.startsWith("#")) {
			return <a {...props} className={className} />;
		}

		return (
			<a
				target="_blank"
				rel="noopener noreferrer"
				{...props}
				className={className}
			/>
		);
	},
	code: (props: CodeProps) => {
		const isChildrenString = typeof props.children === "string";
		let children = props.children;
		if (isChildrenString) {
			children = (props.children as string)
				?.replace(/^\n/, "")
				.replace(/\n$/, "");
		}
		const newProps = { ...props, children };
		return (
			<code
				className={cn(
					props.className,
					isChildrenString &&
						'rounded-md border-neutral-200 bg-neutral-50 px-2 py-[2px] before:content-[""] after:content-[""] dark:border-neutral-500 dark:bg-neutral-700',
				)}
				{...newProps}
			/>
		);
	},
};

const otherComponents: MDXComponents = {
	Image: (
		props: ImageProps & {
			figcaption?: string;
			theme?: "light" | "dark";
		},
	) => {
		return (
			<figure
				className={cn("relative my-10", {
					"hidden dark:block": props.theme === "dark",
					"block dark:hidden": props.theme === "light",
				})}
			>
				<div className="max-w-prose">
					<Image {...props} alt={props.alt} />
				</div>
				{props.figcaption && (
					<figcaption className="mx-auto flex items-baseline px-3 text-sm lg:mt-4 lg:justify-center lg:gap-2">
						{props.figcaption}
					</figcaption>
				)}
			</figure>
		);
	},
};

export function CustomMDX({ code }: { code: string }) {
	return (
		<MDXContent
			code={code}
			components={{
				...overrideComponents,
				...otherComponents,
			}}
		/>
	);
}
