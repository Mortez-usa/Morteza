'use server';
import { supabase } from '@/lib/supabase/client';

export default async function Posts({ params }: { params: { slug?: string | undefined;} }) {
	const slug = params?.slug ?? '';

	// Try to fetch by explicit `slug` column first
	let { data: postBySlug, error } = await supabase
		.from('blog')
		.select('*')
		.eq('slug', slug)
		.limit(1)
		.single();

	let post = postBySlug ?? null;

	if (!post) {
		// Fallback: convert slug to a title-like string and search case-insensitively
		const titleFromSlug = slug.replace(/-/g, ' ');

		const { data: postsMatchingTitle } = await supabase
			.from('blog')
			.select('*')
			.ilike('title', titleFromSlug);

		post =
			postsMatchingTitle && postsMatchingTitle.length > 0
				? postsMatchingTitle[0]
				: null;
	}

	if (!post) {
		return (
			<main className='prose mx-auto p-6'>
				<h1>Post not found</h1>
				<p>No post matches the provided slug.</p>
			</main>
		);
	}

	return (
		<main className='p-4 sm:p-6 md:p-8 lg:p-12 max-w-4xl mx-auto [hyphens:none] [word-break:normal] [overflow-wrap:normal] leading-relaxed text-left'>
			<article>
				<h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
					{post.title ?? 'Untitled'}
				</h1>

				<hr className='my-4 border-red-500 ' />

				{post.body ? (
					<div className='mt-4 prose'>{post.body}</div>
				) : (
					post.excerpt && <p className='mt-1'>{post.excerpt}</p>
				)}

				<div className='flex justify-between text-base sm:text-lg md:text-sm lg:text-sm py-2 text-gray-400'>
					<div>
						<p className='inline pr-1'>Date</p>
						{post.created_at && (
							<p className='inline pr-1'>
								{new Date(post.created_at).toLocaleDateString()}
							</p>
						)}
						<div>
							<p className='inline pr-1'>Author:</p>
							{post.author && (
								<p className='inline'>{post.author}</p>
							)}
						</div>
					</div>
				</div>
			</article>
		</main>
	);
}
