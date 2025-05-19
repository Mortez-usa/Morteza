'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Building, Mail, Video } from 'lucide-react';
import Link from 'next/link';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [status, setStatus] = useState('');
	const [loading, setLoading] = useState(false);
	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setStatus('Submitting...');
		setLoading(true);

		const res = await fetch('/api/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		});

		if (res.ok) {
			setStatus('Message sent successfully!');
			setFormData({ name: '', email: '', subject: '', message: '' });
		} else {
			setStatus('Failed to send message.');
		}
		setLoading(false);
	}

	return (
		<div>
			<section className='py-24 px-6 md:px-16 lg:px-24 bg-white'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
						<div>
							<h2 className='font-serif text-3xl md:text-4xl mb-4'>
								Contact Us
							</h2>
							<div className='w-24 h-1 bg-accent mb-8'></div>
							<p className='text-lg mb-8 leading-relaxed'>
								I&apos;d love to hear about your project. Reach
								out to discuss how we can help bring your vision
								to life.
							</p>

							<div className='space-y-6'>
								<div className='flex items-start'>
									<Building className='w-6 h-6 mr-4 text-accent mt-1' />
									<div>
										<h3 className='font-medium text-lg'>
											Address
										</h3>
										<p className='text-gray-600 *:hover:underline'>
											<Link href='https://maps.app.goo.gl/gZU7MHVytXBpCNba7'>
												Bellevue,
												<br />
												WA 98004
											</Link>
										</p>
									</div>
								</div>

								<div className='flex items-start'>
									<Mail className='w-6 h-6 mr-4 text-accent mt-1' />
									<div>
										<h3 className='font-medium text-lg'>
											Email
										</h3>
										<p className='text-gray-600 *:hover:underline'>
											<Link href='mailto:contact@mortezamaddahi.com'>
												contact@mortezamaddahi.com
											</Link>
										</p>
									</div>
								</div>

								<div className='flex items-start'>
									<Video className='w-6 h-6 mr-4 text-accent mt-1' />
									<div>
										<h3 className='font-medium text-lg'>
											Let&apos;s Meet
										</h3>
										<p className='text-gray-600 *:hover:underline'>
											<Link
												href='https://calendar.app.google/21J71BqZe7sbNKMB8'
												target='_blank'>
												Schedule a video call with me
											</Link>
										</p>
									</div>
								</div>
							</div>
						</div>

						<div>
							<div>
								<form
									onSubmit={handleSubmit}
									className='space-y-6'
									name='contact'
									id='contact-form'>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
										<div className='space-y-2'>
											<label
												htmlFor='name'
												className='text-sm font-medium'>
												Name
											</label>
											<Input
												name='name'
												value={formData.name}
												onChange={(e) =>
													setFormData({
														...formData,
														name: e.target.value,
													})
												}
												placeholder='Name'
												required
												className='border-gray-300 focus:border-accent focus:ring-accent'
											/>
										</div>
										<div className='space-y-2'>
											<label
												htmlFor='email'
												className='text-sm font-medium'>
												Email
											</label>
											<Input
												name='email'
												value={formData.email}
												onChange={(e) =>
													setFormData({
														...formData,
														email: e.target.value,
													})
												}
												placeholder='Email'
												type='email'
												required
												className='border-gray-300 focus:border-accent focus:ring-accent'
											/>
										</div>
									</div>
									<div className='space-y-2'>
										<label
											htmlFor='subject'
											className='text-sm font-medium'>
											Subject
										</label>
										<Input
											name='subject'
											value={formData.subject}
											onChange={(e) =>
												setFormData({
													...formData,
													subject: e.target.value,
												})
											}
											placeholder='Subject'
											required
											className='border-gray-300 focus:border-accent focus:ring-accent'
										/>
									</div>
									<div className='space-y-2'>
										<label
											htmlFor='message'
											className='text-sm font-medium'>
											Message
										</label>
										<Textarea
											name='message'
											value={formData.message}
											onChange={(e) =>
												setFormData({
													...formData,
													message: e.target.value,
												})
											}
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
									{status && (
										<p className='text-center mt-2'>
											{status}
										</p>
									)}
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
