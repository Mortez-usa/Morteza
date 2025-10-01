'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import '../../app/globals.css';
import Link from 'next/link';

export default function ScrollButton() {
	// NOTE: This button currently has an `onClick` handler that scrolls to
	// the element with id="projects" (smooth scroll). However, the Button is
	// wrapped in a Next.js <Link href="/clientquery"> which will navigate the
	// page to `/clientquery` when clicked. That navigation will cause a full
	// route change, so the smooth scroll target on the current page won't be
	// visible after navigation. If the intention is to navigate to `/clientquery`
	// and then scroll to `#projects` on that page, consider one of the options
	// below:
	//  - Remove the Link and perform client-side navigation inside the handler
	//    (e.g., using `router.push('/clientquery#projects')`), or
	//  - Keep the Link but include the hash in the href: `<Link href="/clientquery#projects">`,
	//    or
	//  - Keep the scroll behavior only for the current page (remove the Link)
	// Choose the approach that matches the intended UX.
	const handleScroll = () => {
		const projectsSection = document.getElementById('projects');
		if (projectsSection) {
			projectsSection.scrollIntoView({
				behavior: 'smooth',
			});
		}
	};

	return (
		<>
			<Link href='/clientquery'>
				<Button
					className='bg-white text-black hover:bg-white/90 transition-all duration-1000 text-base px-8 py-6'
					onClick={handleScroll}>
					Start your project
				</Button>
			</Link>
		</>
	);
}
