import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	metadataBase: new URL("https://nikosantis.dev/"),
	alternates: {
		canonical: "/",
	},
	title: {
		default:
			"Nikolas Santis | Senior Software Engineer (React, Next.js, TypeScript, Node.js)",
		template: "%s | Nikolas Santis",
	},

	description:
		"Soy Nikolas Santis, Senior Software Engineer con más de 15 años de experiencia construyendo sistemas web de alto impacto. Especializado en React, Next.js y TypeScript, con backend en Node.js. Enfocado en performance, escalabilidad, calidad del software y Core Web Vitals. Trabajo remoto desde Chile.",

	authors: [{ name: "Nikolas Santis", url: "https://nikosantis.dev/" }],
	creator: "Nikolas Santis",
	publisher: "Nikolas Santis",
	keywords: [
		"Nikolas Santis",
		"Senior Software Engineer",
		"React",
		"Next.js",
		"TypeScript",
		"Node.js",
		"Frontend Performance",
		"Core Web Vitals",
		"Web Systems",
		"Remote",
		"Chile",
	],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-snippet": -1,
			"max-image-preview": "large",
			"max-video-preview": -1,
		},
	},
	openGraph: {
		type: "website",
		url: "https://nikosantis.dev/",
		title:
			"Nikolas Santis | Senior Software Engineer (React, Next.js, TypeScript, Node.js)",
		description:
			"Senior Software Engineer con 15+ años de experiencia. React, Next.js, TypeScript, Node.js. Performance, escalabilidad y Core Web Vitals. Trabajo remoto desde Chile.",
		siteName: "Nikolas Santis",
		locale: "es_CL",
	},

	twitter: {
		card: "summary_large_image",
		title:
			"Nikolas Santis | Senior Software Engineer (React, Next.js, TypeScript, Node.js)",
		description:
			"Senior Software Engineer con 15+ años de experiencia. React, Next.js, TypeScript, Node.js. Performance, escalabilidad y Core Web Vitals.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="es"
			className={cn(
				GeistSans.variable,
				GeistMono.variable,
				"bg-white text-black dark:bg-neutral-900 dark:text-gray-100",
			)}
		>
			<body className="mx-4 flex min-h-screen max-w-2xl flex-col antialiased lg:mx-auto">
				<Header />
				<div className="mb-40 h-full flex-1">{children}</div>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
