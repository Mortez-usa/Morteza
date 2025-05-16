import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Building } from 'lucide-react';
import Link from 'next/link';


export default function page() {
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
									<svg
										className='w-6 h-6 mr-4 text-accent mt-1'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
										/>
									</svg>
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
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
										className='lucide lucide-video-icon lucide-video w-6 h-6 mr-4 text-accent mt-1'>
										<path d='m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5' />
										<rect
											x='2'
											y='6'
											width='14'
											height='12'
											rx='2'
										/>
									</svg>
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
							<form
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
											id='name'
											placeholder='Your name'
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
											id='email'
											type='email'
											placeholder='Your email'
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
										id='subject'
										placeholder='Subject'
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
										id='message'
										placeholder='Tell us about your project'
										className='border-gray-300 focus:border-accent focus:ring-accent min-h-[150px]'
									/>
								</div>

								<Button className='bg-zinc-900 hover:bg-zinc-950 transition-colors text-white w-full py-6'>
									Send Message
								</Button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
