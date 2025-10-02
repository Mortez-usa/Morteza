'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function slugify(input?: string) {
	if (!input) return '';
	return input
		.toString()
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');
}

export default function BlogPage() {
	const [posts, setPosts] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('/api/blog')
			.then((r) => r.json())
			.then(({ data }) => setPosts(data ?? []))
			.catch(() => setPosts([]))
			.finally(() => setLoading(false));
	}, []);

	return (
		<main className='prose mx-auto p-6'>
			<h1>Blog</h1>
			{loading ? (
				<p>Loading posts…</p>
			) : posts.length === 0 ? (
				<p>No posts found.</p>
			) : (
				<ul className='space-y-6'>
					{posts.map((post) => {
						const slug = post.slug
							? post.slug
							: slugify(post.title);
						return (
							<li key={post.id}>
								<article>
									<h2 className='text-xl font-semibold'>
										<Link href={`/Blog/post/${slug}`}>
											{post.title ?? 'Untitled'}
										</Link>
									</h2>

									{post.created_at && (
										<p className='text-sm text-muted-foreground'>
											{new Date(
												post.created_at
											).toLocaleDateString()}
										</p>
									)}

									{post.body ? (
										<p className='mt-1'>
											{post.body.slice(0, 200) + '...'}
										</p>
									) : (
										post.excerpt && (
											<p className='mt-1'>
												{post.excerpt}
											</p>
										)
									)}
								</article>
							</li>
						);
					})}
				</ul>
			)}
		</main>
	);
}
