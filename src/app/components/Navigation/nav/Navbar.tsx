'use client';

import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import '/src/app/globals.css';
import SearchBox from '../../SearchBox';

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
				<SearchBox />
			</div>
		</div>
	);
}
