import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Building, Mail, Video } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

// app/about/page.tsx
export const metadata: Metadata = {
	title: 'Contact Morteza Maddahi | Architectural Design',
	description:
		'Reach out to Morteza Maddahi for architectural design consultations and collaborative opportunities.',
	openGraph: {
		title: 'Contact Morteza Maddahi | Architectural Design',
		description:
			'Connect with Morteza Maddahi — bridging architecture, software, and healthcare to create innovative and functional design solutions.',
		url: 'https://mortezamaddahi.com/Contact',
		type: 'website',
		images: [
			{
				url: 'https://mortezamaddahi.com/images/morteza-og.jpg',
				width: 1200,
				height: 630,
				alt: 'Morteza Maddahi',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'About Morteza Maddahi | Architectural Design',
		description:
			'Discover the story of Morteza Maddahi’s multidisciplinary journey and his commitment to real-world innovation.',
		images: ['https://mortezamaddahi.com/images/morteza-og.jpg'],
	},
	alternates: {
		canonical: 'https://mortezamaddahi.com/Contact',
	},
};

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
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
