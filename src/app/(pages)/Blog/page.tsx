'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

const PAGE_SIZE = 7;

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
	const router = useRouter();
	const searchParams = useSearchParams();

	const [posts, setPosts] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [selectedGroup, setSelectedGroup] = useState('All');

	// Read current page from URL (default 1)
	const pageFromUrl = Number(searchParams.get('page') || '1');
	const page =
		Number.isFinite(pageFromUrl) && pageFromUrl > 0 ? pageFromUrl : 1;

	const groups = useMemo(
		() => Array.from(new Set(posts.map((p) => p.group))),
		[posts]
	);

	useEffect(() => {
		fetch('/api/blog')
			.then((r) => r.json())
			.then(({ data }) => {
				const sorted = (data ?? []).sort(
					(a: any, b: any) =>
						new Date(b.created_at).getTime() -
						new Date(a.created_at).getTime()
				);
				setPosts(sorted);
			})
			.catch(() => setPosts([]))
			.finally(() => setLoading(false));
	}, []);

	// Filtered posts by group
	const filteredPosts = useMemo(
		() =>
			selectedGroup === 'All'
				? posts
				: posts.filter((p) => p.group === selectedGroup),
		[posts, selectedGroup]
	);

	// Group counts (for the buttons)
	const groupCounts = useMemo(() => {
		return posts.reduce((acc: Record<string, number>, post: any) => {
			acc[post.group] = (acc[post.group] || 0) + 1;
			return acc;
		}, {});
	}, [posts]);

	// Pagination math
	const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
	const safePage = Math.min(page, totalPages);
	const start = (safePage - 1) * PAGE_SIZE;
	const end = start + PAGE_SIZE;
	const pageItems = filteredPosts.slice(start, end);

	// Change ?page= in the URL (history-friendly)
	function goToPage(nextPage: number) {
		const sp = new URLSearchParams(searchParams.toString());
		sp.set('page', String(nextPage));
		router.push(`?${sp.toString()}`, { scroll: true });
	}

	// When user switches group, reset page to 1
	function selectGroup(group: string) {
		setSelectedGroup(group);
		const sp = new URLSearchParams(searchParams.toString());
		sp.set('page', '1');
		router.push(`?${sp.toString()}`, { scroll: true });
	}

	// Small helper to render numbered page buttons (compact window)
	function PageNumbers() {
		// show up to 7 numbers centered around current page
		const windowSize = 7;
		let startNum = Math.max(1, safePage - 3);
		let endNum = Math.min(totalPages, startNum + windowSize - 1);
		startNum = Math.max(1, endNum - windowSize + 1);

		const nums = [];
		for (let n = startNum; n <= endNum; n++) nums.push(n);

		return (
			<div className='flex items-center gap-2'>
				<button
					onClick={() => goToPage(1)}
					disabled={safePage === 1}
					className='px-2 py-1 rounded border disabled:opacity-40'
					aria-label='First page'>
					« First
				</button>
				<button
					onClick={() => goToPage(safePage - 1)}
					disabled={safePage === 1}
					className='px-2 py-1 rounded border disabled:opacity-40'
					aria-label='Previous page'>
					‹ Prev
				</button>

				{startNum > 1 && <span className='px-1'>…</span>}
				{nums.map((n) => (
					<button
						key={n}
						onClick={() => goToPage(n)}
						className={`px-3 py-1 rounded border ${
							n === safePage ? 'bg-zinc-100' : 'bg-white'
						}`}
						aria-current={n === safePage ? 'page' : undefined}>
						{n}
					</button>
				))}
				{endNum < totalPages && <span className='px-1'>…</span>}

				<button
					onClick={() => goToPage(safePage + 1)}
					disabled={safePage === totalPages}
					className='px-2 py-1 rounded border disabled:opacity-40'
					aria-label='Next page'>
					Next ›
				</button>
				<button
					onClick={() => goToPage(totalPages)}
					disabled={safePage === totalPages}
					className='px-2 py-1 rounded border disabled:opacity-40'
					aria-label='Last page'>
					Last »
				</button>
			</div>
		);
	}

	return (
		<div>
			<main className='p-4 sm:p-6 md:p-8 lg:p-12 max-w-4xl mx-auto [hyphens:none] [word-break:normal] [overflow-wrap:normal] leading-relaxed text-left'>
				<div className='p-4'>
					{/* Filter buttons */}
					<div className='flex mb-24 text-zinc-600 text-sm'>
						<button
							onClick={() => selectGroup('All')}
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
								onClick={() => selectGroup(group)}
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
					<>
						{/* Top pagination (optional) */}

						<ul className='space-y-6'>
							{pageItems.map((post) => {
								const slug = post.slug
									? post.slug
									: slugify(post.title);
								return (
									<li key={post.id}>
										<article className='text-zinc-700'>
											<Link href={`/Blog/post/${slug}`}>
												<div>
													<Image
														src={post.image}
														alt={
															post.title ??
															'Post image'
														}
														width={300}
														height={300}
														className='hover:opacity-90 object-cover mb-4 inline'
														loading='lazy'
														placeholder='blur'
														blurDataURL='/PORTFOLIO.jpg'
														quality={100}
													/>
													<h2 className='text-xl font-semibold hover:underline hover:text-amber-500'>
														{post.title ??
															'Untitled'}
													</h2>
												</div>
											</Link>
											<div>
												{post.created_at && (
													<p className='text-sm text-muted-foreground text-gray-500'>
														{new Date(
															post.created_at
														).toLocaleDateString(
															'en-US',
															{
																year: 'numeric',
																month: 'short',
																day: '2-digit',
															}
														)}
													</p>
												)}
												{post.description ? (
													<p className='mt-3'>
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
								);
							})}
						</ul>

						<div className='mt-24 mb-6 flex flex-col items-center'>
							<PageNumbers />
							<p className='mt-2 text-xs text-zinc-500'>
								Page {safePage} of {totalPages} •{' '}
								{filteredPosts.length} articles
							</p>
						</div>
					</>
				)}
			</main>
		</div>
	);
}
