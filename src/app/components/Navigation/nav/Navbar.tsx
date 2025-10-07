'use client';

import React from 'react';
import Link from 'next/link';
import '/src/app/globals.css';

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const navLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Blog', href: '/Blog' },
	{ name: 'sign in', href: '/signin' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'Contact', href: '/contact' },
];

export default function Page() {
	return (
		<div className='flex justify-between bg-zinc-950 h-36 z-50 '>
			<div className='flex mt-4 ml-10 text-zinc-200'>
				<div className='p-2 font-serif text-3xl'>
					<Link href='/'>Morteza Maddahi</Link>
				</div>
			</div>
			<div className='flex justify-end items-start font-serif'>
				<div className='flex mt-4 mr-10 cursor-pointer'>
					<div className='p-2 text-zinc-200 hover:underline hover:text-blue-600'>
						<a
							// facebook
							href='/'
							className='text-gray-400 hover:text-white transition-colors'>
							<svg
								fill='none'
								aria-hidden='true'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='size-6'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
