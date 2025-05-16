'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export default function ScrollButton() {
	const handleScroll = () => {
		const projectsSection = document.getElementById('projects');
		if (projectsSection) {
			projectsSection.scrollIntoView({
				behavior: 'smooth',
			});
		}
	};

	return (
		<Button
			className='bg-white text-black hover:bg-white/90 transition-all duration-1000 text-base px-8 py-6'
			onClick={handleScroll}>
			Projects
		</Button>
	);
}
