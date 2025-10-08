'use client';

import { useState } from 'react';
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
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='flex justify-between bg-zinc-950 h-36 z-50 '>
			<div className='flex mt-4 ml-10 text-gray-400'>
				<div className='p-2 font-serif text-3xl hover:text-amber-500 transition-colors'>
					<Link href='/'>Morteza Maddahi</Link>
				</div>
			</div>
			<div className='flex justify-end items-start font-serif'>
				<div className='flex mt-4 mr-10 items-center space-x-2'>
					{/* Search Icon */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='p-2 text-zinc-200 hover:text-amber-500 transition-colors'>
						<svg
							fill='none'
							aria-hidden='true'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-6 h-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
							/>
						</svg>
					</button>

					{/* Search Input */}
					<input
						type='text'
						placeholder='Search...'
						className={`bg-white border-b rounded border-gray-400 text-zinc-700 outline-none p-1
            transition-all duration-300 ease-in-out
            ${isOpen ? 'w-72 opacity-100' : 'w-0 opacity-0'}
          `}
					/>
				</div>
			</div>
		</div>
	);
}
