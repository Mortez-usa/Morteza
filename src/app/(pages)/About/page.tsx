import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import '../../globals.css';
import { Button } from '@/app/components/ui/button';

// app/about/page.tsx
export const metadata: Metadata = {
	title: 'About Morteza Maddahi | Architectural Design',
	description: 'Learn about Morteza Maddahi',
	openGraph: {
		title: 'About Morteza Maddahi | Architectural Design',
		description:
			'Explore the journey of Morteza Maddahi — bridging architecture, software, and healthcare to shape real-world solutions.',
		url: 'https://mortezamaddahi.com/About',
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
		canonical: 'https://mortezamaddahi.com/About',
	},
};

export default function page() {
	return (
		<div>
			<section className='py-24 px-6 md:px-16 lg:px-24 bg-gray-50'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
						<div>
							<h1 className='font-serif text-3xl md:text-4xl mb-4'>
								About me
							</h1>
							{/* <div className='w-24 h-1 bg-accent mb-8'></div> */}
							<p className='text-lg mb-6 leading-relaxed'>
								Hi, I’m Morteza—an architect with a deep
								interest in technology, AI, and the future of
								the built environment.
							</p>
							<p className='text-lg mb-6 leading-relaxed'>
								Over the past few years, I’ve worked at the
								intersection of architecture, software, and real
								estate development, driven by a belief that
								great design is both intelligent and
								human-centered. My approach combines practical
								architectural experience with a passion for
								innovation—especially in areas like Building
								Information Modeling (BIM), automation, and
								smart systems that enhance how we plan, build,
								and experience space.
							</p>
							<p className='text-lg leading-relaxed'>
								I see architecture not just as physical form,
								but as a system—where data, design, and people
								all interact. That mindset has led me to work on
								projects that bring together BIM, AI tools, and
								digital workflows to streamline decision-making,
								improve collaboration, and create more
								responsive environments. With a background in
								both design and software, I enjoy solving
								complex problems—whether it&apos;s optimizing a
								construction process, shaping early-stage real
								estate concepts, or exploring how emerging
								technologies can support human well-being in
								urban spaces. If you&apos;re looking to
								collaborate on future-oriented projects where
								architecture, business, and tech meet, I’d love
								to connect.
							</p>
							<Link href='/PassionProjects'>
								<div className='mt-12 flex justify-center'>
									<Button className='bg-white border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-base px-8 py-6'>
										Passion Projects
									</Button>
								</div>
							</Link>
						</div>
						<div className='grid grid-cols-2 gap-4'>
							<div className='relative h-full w-full'>
								<video
									className='object-cover w-full h-full'
									autoPlay
									muted
									loop
									playsInline>
									<source
										src='../../../farmeHouse.mp4'
										type='video/mp4'
									/>
									{/* Fallback for browsers that don't support video */}
									Your browser does not support the video tag.
								</video>
							</div>
							<div className='relative grid grid-rows-2 gap-4'>
								<Image
									src='/singleFamily.png'
									alt='Interior space'
									className='object-cover h-full w-full'
									width={800}
									height={600}
								/>
							</div>
							<div className='relative grid gap-4'>
								<Image
									src='/detail.png'
									alt='Interior space'
									className='object-cover h-full w-full'
									width={800}
									height={600}
								/>
							</div>
							<div className='relative grid grid-rows-2 gap-4'>
								<video
									className='object-cover w-full h-full'
									autoPlay
									muted
									loop
									playsInline>
									<source
										src='../../../church.mp4'
										type='video/mp4'
									/>
									{/* Fallback for browsers that don't support video */}
									Your browser does not support the video tag.
								</video>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
