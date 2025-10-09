'use server';

import { cookies, headers } from 'next/headers';
import { createClient } from '@supabase/supabase-js';

type SubscribeInput = {
	email: string;
	name?: string;
	slug?: string;
	source?: string;
	honeypot?: string;
};

function getServerSupabase() {
	const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
	// Use a service role if you want to bypass RLS for inserts (safer with strict code paths).
	// Otherwise, use anon and add an INSERT policy limited to the fields below.
	const key =
		process.env.SUPABASE_SERVICE_ROLE_KEY ??
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
	return createClient(url, key, { auth: { persistSession: false } });
}

function isValidEmail(email: string) {
	// Simple but robust enough; let ESP handle deep validation.
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
}

export async function subscribeAction(input: SubscribeInput) {
	const { email, name, slug, source = 'blog', honeypot = '' } = input;

	if (honeypot) {
		return { ok: true, message: 'Thanks!' }; // quietly ignore bots
	}

	if (!email || !isValidEmail(email)) {
		return { ok: false, message: 'Please enter a valid email.' };
	}

	const supabase = getServerSupabase();

	const ip = headers().get('x-forwarded-for') ?? '0.0.0.0';
	const ua = headers().get('user-agent') ?? 'unknown';

	// Upsert to avoid duplicate errors if user subscribes again
	const { error } = await supabase.from('email_subscribers').upsert(
		{
			email: email.toLowerCase(),
			name: name?.trim() || null,
			source,
			slug: slug ?? null,
			user_agent: ua,
			ip,
			confirmed: false, // flip to true after sending a confirmation link if you do double opt-in
			subscribed_at: new Date().toISOString(),
		},
		{ onConflict: 'email' }
	);

	if (error) {
		// Don’t leak internals to the UI
		return {
			ok: false,
			message: 'Could not subscribe right now. Please try again.',
		};
	}

	// TODO (optional): trigger a confirmation email via your ESP (Resend/Mailgun)
	// await sendConfirmEmail(email, name)

	return { ok: true, message: 'Check your inbox for next steps.' };
}
