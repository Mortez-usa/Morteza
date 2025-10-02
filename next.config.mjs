import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	// Optionally, add any other Next.js config below
	experimental: {
		mdxRs: true, // new Rust-based MDX compiler (faster, Next.js 15)
	},
};

const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeHighlight],
	},
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
