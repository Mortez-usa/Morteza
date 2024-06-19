import React from 'react';
import Image from 'next/image';

export default function Book() {
	return (
		<div className='grid mr-64 ml-64 mt-52 text-gray-700'>
			<div className='text-xl font-bold'>Books that I am reading...</div>
			<div className='grid grid-cols-3 text-gray-700 border-2 border-gray-100'>
				<div className='grid grid-cols-2 gap-4 m-16 text-gray-700'>
					<div>
						<h2>
							The Singularity Is Nearer: When We Merge with AI
						</h2>
						<h4>by Ray Kurzweil</h4>
					</div>
					<Image
						className='rounded-lg shadow-sm hover:opacity-90'
						src='/images/books/TheSingularityIsNearer.jpg'
						width={150}
						height={150}
						alt='Picture of the author'
					/>
				</div>
				<div className='grid grid-cols-2 gap-4 m-16 text-gray-700'>
					<div>
						<h2>
							The Art of Startup Fundraising: Pitching Investors,
							Negotiating the Deal, and Everything Else
							Entrepreneurs Need to Know
						</h2>
						<h4>by Alejandro Cremades</h4>
					</div>
					<Image
						className='rounded-lg shadow-sm hover:opacity-90'
						src='/images/books/The Art of Startup Fundraising.jpg'
						width={150}
						height={150}
						alt='Picture of the author'
					/>
				</div>
				<div className='grid grid-cols-2 gap-4 m-16 text-gray-700'>
					<div>
						<h2>
							Advisory Boards in Startups: Investigating the Roles
							of Advisory Boards in German Technology-Based
							Startups
						</h2>
						<h4>by Eric Weber</h4>
					</div>
					<Image
						className='rounded-lg shadow-sm hover:opacity-90'
						src='/images/books/Advisory board.png'
						width={150}
						height={150}
						alt='Picture of the author'
					/>
				</div>
			</div>
		</div>
	);
}
