import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export async function GET(req: NextRequest) {
	let { data: blog, error } = await supabase.from('blog').select('*');

	if (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}

	// return the retrieved blog rows so the client can render them
	return NextResponse.json({ data: blog ?? [] }, { status: 200 });
}
