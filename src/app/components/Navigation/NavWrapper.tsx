// components/NavWrapper.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import '/src/app/globals.css';
import { usePathname } from 'next/navigation';
import Nav from './nav/page';
import {
	ClerkProvider,
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs';

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function NavWrapper() {
	const pathname = usePathname();

	// Don't render Nav on homepage
	if (pathname === '/')
		return (
			<div>
				<div className='absolute flex right-10 top-10 justify-end items-center z-50 '>
					<ClerkProvider publishableKey={publishableKey}>
						<div className='flex  cursor-pointer '>
							<div className='p-2 hover:text-amber-500'>
								<Link href='/Blog'>Blog</Link>
							</div>
							<div className='p-2 hover:text-amber-500'>
								<SignedOut>
									<SignInButton />
								</SignedOut>
								<SignedIn>
									<UserButton showName />
								</SignedIn>
							</div>
						</div>
					</ClerkProvider>
				</div>
			</div>
		);

	return <Nav />;
}
