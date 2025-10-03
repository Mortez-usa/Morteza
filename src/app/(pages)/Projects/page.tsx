import React from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { AspectRatio } from '@/app/components/ui/aspect-ratio';
import { CardTitle, CardDescription } from '@/app/components/ui/card';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import { CardFooter } from '@/app/components/ui/card';

interface Project {
	id: number;
	title: string;
	location: string;
	year: string;
	imageUrl: string;
}

const projects: Project[] = [
	{
		id: 1,
		title: 'Residential House',
		location: 'Seattle, WA',
		year: '2025',
		imageUrl: '/shelly.png',
	},
	{
		id: 2,
		title: 'ADU ',
		location: 'Shorline, WA',
		year: '2025',
		imageUrl: '/adu.png',
	},
	{
		id: 3,
		title: 'Myrostar Health Clinic',
		location: 'Bellevue, WA',
		year: '2024',
		imageUrl: '/PORTFOLIO.jpg',
	},
	{
		id: 4,
		title: 'Multi-Family Residential',
		location: 'Bellevue, WA',
		year: '2025',
		imageUrl: '/resmulti.png',
	},
];

export default function page() {
	return (
		<div>
			<section
				id='projects'
				className='py-24 px-6 md:px-16 lg:px-24 bg-white'>
				<div className='max-w-7xl mx-auto'>
					<div className='mb-16'>
						<h2 className='font-serif text-3xl md:text-4xl mb-4'>
							Selected Projects
						</h2>
						<div className='w-24 h-1 bg-accent'></div>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
						{projects.map((project) => (
							<Card
								key={project.id}
								className='border-none rounded-none overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl'>
								<CardContent className='p-0'>
									<AspectRatio ratio={4 / 3}>
										<div className='h-full w-full overflow-hidden'>
											<Image
												src={project.imageUrl}
												alt={project.title}
												width={800}
												height={600}
												className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
											/>
										</div>
									</AspectRatio>
									<div className='p-6'>
										<h3 className='font-serif text-xl md:text-2xl mb-1'>
											{project.title}
										</h3>
										<div className='flex flex-wrap text-sm text-gray-600'>
											<span>{project.location}</span>
											<span className='mx-2'>•</span>
											<span>{project.year}</span>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
					<div className='mt-12 flex justify-center'>
						<Button className='bg-white border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-base px-8 py-6'>
							View All Projects
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
