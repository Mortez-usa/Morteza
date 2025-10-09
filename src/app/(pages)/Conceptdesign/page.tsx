import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import '../../globals.css';
import { Button } from '@/app/components/ui/button';

export default function page() {
	return (
		<div className=''>
			<section className='py-24 px-6 md:px-16 lg:px-24 bg-orange-50 justify-center items-center'>
				<div className='max-w-7xl mx-auto justify-center'>
					<div className='grid grid-cols-1 lg:grid-cols-1 gap-4 '>
						<div className='grid justify-center'>
							<h1 className='font-serif text-3xl md:text-4xl mb-4 items-center'>
								Architectural Design that Starts with Purpose.
							</h1>
							{/* <div className='w-24 h-1 bg-accent mb-8'></div> */}
							<h2>
								Smart, creative, and practical concept designs
								tailored to your space, goals, and budget.
							</h2>
						</div>
						<div className='grid grid-cols-1 gap-4 justify-center items-center'>
							<div className='relative h-full w-full'>
								<Link href='https://calendar.app.google/21J71BqZe7sbNKMB8'>
									<div className='mt-12 flex justify-center'>
										<Button className='rounded-lg bg-white border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-base px-8 py-6'>
											Free Consultation
										</Button>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
