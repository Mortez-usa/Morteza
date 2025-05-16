// components/ContactForm.tsx
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);
	const [responseMsg, setResponseMsg] = useState('');

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setResponseMsg('');

		const res = await fetch('/api/submit', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		});

		const data = await res.json();
		setLoading(false);
		setResponseMsg(data.message);
		if (res.ok)
			setFormData({ name: '', email: '', subject: '', message: '' });
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className='space-y-6'
				name='contact'
				id='contact-form'>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
					<div className='space-y-2'>
						<label htmlFor='name' className='text-sm font-medium'>
							Name
						</label>
						<Input
							name='name'
							value={formData.name}
							onChange={handleChange}
							placeholder='Name'
							required
							className='border-gray-300 focus:border-accent focus:ring-accent'
						/>
					</div>
					<div className='space-y-2'>
						<label htmlFor='email' className='text-sm font-medium'>
							Email
						</label>
						<Input
							name='email'
							value={formData.email}
							onChange={handleChange}
							placeholder='Email'
							type='email'
							required
							className='border-gray-300 focus:border-accent focus:ring-accent'
						/>
					</div>
				</div>
				<div className='space-y-2'>
					<label htmlFor='subject' className='text-sm font-medium'>
						Subject
					</label>
					<Input
						name='subject'
						value={formData.subject}
						onChange={handleChange}
						placeholder='Subject'
						required
						className='border-gray-300 focus:border-accent focus:ring-accent'
					/>
				</div>
				<div className='space-y-2'>
					<label htmlFor='message' className='text-sm font-medium'>
						Message
					</label>
					<Textarea
						name='message'
						value={formData.message}
						onChange={handleChange}
						placeholder='Message'
						required
						className='border-gray-300 focus:border-accent focus:ring-accent min-h-[150px]'
					/>
				</div>
				<Button
					className='bg-zinc-900 hover:bg-zinc-950 transition-colors text-white w-full py-6'
					type='submit'
					disabled={loading}>
					{loading ? 'Submitting...' : 'Submit'}
				</Button>
				{responseMsg && (
					<p className='text-center mt-2'>{responseMsg}</p>
				)}
			</form>
		</div>
	);
}
