import React from 'react';
import Link from 'next/link';

export default function Navbar() {
	return (
		<div className=''>
			<header>
				<div className='h-24 grid grid-cols-2 m-16 text-gray-700'>
					<div className='text-[24px] font-bold'>
						<a href='/'>Morteza Maddahi</a>
					</div>
					<div className='flex justify-end font-bold gap-6'>
						<Link href='./Projects'>Projects</Link>{' '}
						<div className='flex justify-end font-bold'>
							<Link href='https://calendar.app.google/zGCryN5QUTXBQfxe8'>
								Schedule a meeting
							</Link>{' '}
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}
