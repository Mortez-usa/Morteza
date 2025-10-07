'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
	const [selectedGroup, setSelectedGroup] = useState('All');
	const groups = [...new Set(posts.map((p) => p.group))]; // unique groups

	useEffect(() => {
		fetch('/api/blog')
			.then((r) => r.json())
			.then(({ data }) => setPosts(data ?? []))
			.catch(() => setPosts([]))
			.finally(() => setLoading(false));
	}, []);

	const filteredPosts =
		selectedGroup === 'All'
			? posts
			: posts.filter((post) => post.group === selectedGroup);

	
	const groupCounts = posts.reduce((acc, post) => {
		acc[post.group] = (acc[post.group] || 0) + 1;
		return acc;
	}, {});

	return (
		<div>
			<main className='p-4 sm:p-6 md:p-8 lg:p-12 max-w-4xl mx-auto [hyphens:none] [word-break:normal] [overflow-wrap:normal] leading-relaxed text-left'>
				<div className='p-4'>
					{/* Filter buttons */}
					<div className='flex flex-col mb-2 text-zinc-600'>
						<button
							onClick={() => setSelectedGroup('All')}
							className={`text-right px-3 rounded ${
								selectedGroup === 'All'
									? 'bg-white text-zinc-400'
									: 'bg-white'
							}`}>
							All
						</button>
						{groups.map((group) => (
							<button
								key={group}
								onClick={() => setSelectedGroup(group)}
								className={`hover:underline text-right px-3 rounded ${
									selectedGroup === group
										? 'bg-white text-zinc-400'
										: 'bg-white'
								}`}>
								{group} ({groupCounts[group] || 0})
							</button>
						))}
					</div>
				</div>
				{loading ? (
					<p>Loading posts…</p>
				) : posts.length === 0 ? (
					<p>No posts found.</p>
				) : (
					<ul className='space-y-6'>
						{filteredPosts.map((post) => {
							const slug = post.slug
								? post.slug
								: slugify(post.title);
							return (
								<div>
									<li key={post.id}>
										<article className='text-zinc-700'>
											<Link href={`/Blog/post/${slug}`}>
												<div>
													<Image
														src={post.image}
														alt='Red Hat Architects'
														width={200}
														height={200}
														className='object-cover mb-4 inline'
														loading='lazy'
														placeholder='blur'
														blurDataURL='/PORTFOLIO.jpg'
														quality={100}
													/>
													<h2 className='text-xl font-semibold hover:underline'>
														{post.title ??
															'Untitled'}
													</h2>
												</div>
											</Link>
											<div className=''>
												{post.created_at && (
													<p className='text-sm text-muted-foreground text-gray-500'>
														{new Date(
															post.created_at
														).toLocaleDateString()}
													</p>
												)}

												{post.description ? (
													<p className='mt-1'>
														{post.description +
															'...'}
													</p>
												) : (
													post.excerpt && (
														<p className='mt-1'>
															{post.excerpt}
														</p>
													)
												)}
											</div>
										</article>
										<hr className='my-4 border-slate-300' />
									</li>
								</div>
							);
						})}
					</ul>
				)}
			</main>
		</div>
	);
}
