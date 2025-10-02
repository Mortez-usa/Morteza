import React from 'react'
import Link from 'next/link';
import '../../../app/globals.css';
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function page() {
  return (
		<div>
			<div className='absolute flex right-10 top-10 justify-end items-center  hover:underline z-50 '>
				<ClerkProvider publishableKey={publishableKey}>
					<div className='hover:underline cursor-pointer'>
						<div className='text-white'>
							<Link href='/Blog'>Blog</Link>
						</div>
						<SignedIn>
							<UserButton showName />
						</SignedIn>
					</div>
				</ClerkProvider>
			</div>
		</div>
  );
}
