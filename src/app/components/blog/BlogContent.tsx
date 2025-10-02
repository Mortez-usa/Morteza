// app/blog/page.tsx
import { MDXRemote } from 'next-mdx-remote-client/rsc';
// import remarkGfm from 'remark-gfm';
// import rehypeHighlight from 'rehype-highlight';

export default async function BlogContent() {
	// Fetch MDX file content from Supabase
	const res = await fetch(
		'https://gwmwqolzgcnzeiklrvpn.supabase.co/storage/v1/object/public/blogvault/FutureMaterials.mdx',
		{ cache: 'no-store' } // always fresh
	);

	if (!res.ok) {
		throw new Error('Failed to fetch MDX file');
	}

	const source = await res.text();

	return (
		<article className='prose mx-auto'>
			<MDXRemote
				source={source}
				// options={{
				// 	mdxOptions: {
				// 		remarkPlugins: [remarkGfm],
				// 		rehypePlugins: [rehypeHighlight],
				// 	},
				// }}
			/>
		</article>
	);
}
