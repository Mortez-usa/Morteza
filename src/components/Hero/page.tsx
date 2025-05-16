import React from 'react';
import ScrollButton from './ScrollButton';

export default function page() {
	return (
		<section className='relative h-screen w-full overflow-hidden'>
			{/* Hero Background Video - Full bleed with no gaps */}
			<div className='absolute inset-0 z-0'>
				<video
					className='absolute inset-0 object-cover w-full h-full'
					autoPlay
					muted
					loop
					playsInline>
					<source src='../../../seattle.mp4' type='video/mp4' />
					{/* Fallback for browsers that don't support video */}
					Your browser does not support the video tag.
				</video>
				<div className='absolute inset-0 bg-black/40 z-0'></div>
			</div>

			{/* Content - Padding only inside the inner container */}
			<div className='relative z-10 h-full flex flex-col justify-center items-center w-full'>
				<div className='px-6 md:px-16 lg:px-24 max-w-screen-xl w-full'>
					<h1 className='font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4 max-w-3xl tracking-tight'>
						Morteza Maddahi
					</h1>
					<p className='text-white/90 text-lg md:text-xl mb-8 max-w-2xl font-light'>
						An AI-first architecture design practice reimagines the
						role of artificial intelligence as a core collaborator
						in the creation of buildings and spaces, not merely a
						tool for optimization. From the earliest concept stages,
						AI is integrated to generate, evaluate, and evolve
						design options based on performance metrics like energy
						efficiency, spatial flow, and user behavior. This
						approach enables architects to rapidly explore complex
						solutions, personalize designs at scale, and create
						adaptive environments that learn and respond over time.
						By embedding intelligence into both the design process
						and the built environment, AI-first practices unlock a
						new era of sustainable, data-informed, and human-centric
						architecture.
					</p>
					<ScrollButton />
				</div>
			</div>
		</section>
	);
}
