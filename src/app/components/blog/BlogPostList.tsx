import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';

export default async function BlogPage() {
	const cookieStore = cookies();
	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.SUPABASE_ANON_KEY!,
		{ cookies: { get: (key) => cookieStore.get(key)?.value } }
	);

	const { data: blog } = await supabase.from('blog').select('id, content');

	return (
		<div>
			{blog?.map((post) => (
				<p key={post.id}>{post.content}</p>
			))}
		</div>
	);
}
