// // app/blog/page.tsx
// import { MDXRemote } from 'next-mdx-remote-client/rsc';
// import { supabase } from '@/lib/supabase/client';
// // import remarkGfm from 'remark-gfm';
// // import rehypeHighlight from 'rehype-highlight';

// export default async function BlogContent() {
// 	const { data: files, error } = await supabase.storage
// 		.from('blogvault') // 👈 your bucket name
// 		.list('', { limit: 100 }); // '' = root, can also provide folder path

// 	if (error) {
// 		return <div>Error: {error.message}</div>;
// 	}

// 	// Map files to public URLs
// 	const urls = files?.map((file) => {
// 		const { data } = supabase.storage
// 			.from('blogvault')
// 			.getPublicUrl(file.name);
// 		//console.log('this is url', data.publicUrl);
// 		return { name: file.name, url: data.publicUrl };
// 	});

// 	// const urlss = urls
// 	// console.log(urlss)
// 	// // const rawurl = urls.map(({name, url})) => 
// 	console.log('this is url:',urls)

// 	const contentUrl = String(urls[2].url);

// 	// Fetch MDX file content from Supabase
// 	const res = await fetch(
// 		contentUrl,
// 		{ cache: 'no-store' } // always fresh
// 	);

// 	if (!res.ok) {
// 		throw new Error('Failed to fetch MDX file');
// 	}

// 	const source = await res.text();


// 	return (
// 		<article className='prose mx-auto'>
// 			<MDXRemote
// 				source={source}
// 				// options={{
// 				// 	mdxOptions: {
// 				// 		remarkPlugins: [remarkGfm],
// 				// 		rehypePlugins: [rehypeHighlight],
// 				// 	},
// 				// }}
// 			/>
// 			{/* <div className='grid gap-4'>
// 				{urls?.map((file) => (
// 					<div key={file.name}>
// 						<a href={file.url} target='_blank'>
// 							{file.name}
// 						</a>
// 					</div>
// 				))}
// 			</div> */}
// 			<ul>
// 				{/* {urls.map(({ name, url }) => (
// 					<li key={name}>
// 						<a href={url} target='_blank' rel='noopener noreferrer'>
// 							{url}
// 						</a>
// 					</li>
// 				))} */}
				
// 			</ul>
// 			;
			
// 		</article>
// 	);
// }
