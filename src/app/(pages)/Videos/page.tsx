import React from 'react';

export default function page() {
	return (
		<div className='bg-orange-50  text-white w-full'>
			<div className='max-w-7xl justify-self-center'>
				<h2 className='font-serif text-3xl md:text-4xl text-black'></h2>
				<div className='pt-24'>
					<div className='relative w-full aspect-video'>
						<iframe
							src='https://www.youtube.com/embed/MRwLyefu0G0?si=83AFOS89gjy4tok5'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
							className='md:w-[900px] md:h-[500px]'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
