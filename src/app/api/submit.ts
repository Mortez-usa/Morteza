// pages/api/submit.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/SupabaseClient';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method Not Allowed' });
	}

	const { name, email, subject, message } = req.body;

	if (!name || !email || !subject || !message) {
		return res.status(400).json({ message: 'Missing required fields' });
	}

	const { error } = await supabase
		.from('contact_messages')
		.insert([{ name, email, subject, message }]);

	if (error) {
		console.error(error);
		return res.status(500).json({ message: 'Failed to save message' });
	}

	return res.status(200).json({ message: 'Message submitted successfully' });
}
