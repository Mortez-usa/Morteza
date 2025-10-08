import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // keep anon key for public reads; use service_role server-side if RLS locks this down
);

export async function GET(req: Request) {
	const q = new URL(req.url).searchParams.get('q')?.trim() || '';
	if (!q) return NextResponse.json({ results: [] });

	const { data, error } = await supabase.rpc('search_posts_ilike', {
		q,
		limit_count: 10,
	});
	if (error)
		return NextResponse.json({ error: error.message }, { status: 500 });

	return NextResponse.json({ results: data });
}
