import type { NextConfig } from "next";

import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
	reactCompiler: true,
	transpilePackages: ["geist"],
	cacheComponents: true,
	bundlePagesRouterDependencies: true,
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	async redirects() {
		return [
			{
				source: "/sobre-mi",
				destination: "/about",
				permanent: true,
			},
			{
				source: "/curriculum",
				destination: "/",
				permanent: true,
			},
			{
				source: "/en/:path*",
				destination: "/",
				permanent: false,
			},
		];
	},
};

export default withContentCollections(nextConfig);
