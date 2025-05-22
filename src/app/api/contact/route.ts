import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export async function POST(req: NextRequest) {
	const data = await req.json();
	const { name, email, subject, message } = data;

	const { error } = await supabase
		.from('messages')
		.insert([{ name, email, subject, message }]);

	if (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}

	return NextResponse.json({ success: true }, { status: 200 });
}
