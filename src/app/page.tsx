import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';
import Hero from './components/Hero/page';
import Projects from './(pages)/Projects/page';
import About from './(pages)/About/page';
import Contact from './(pages)/Contact/page';
import Videos from './(pages)/Videos/page';
import Conceptdesign from './(pages)/Conceptdesign/page';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/app/components/ui/card';

export const metadata: Metadata = {
	title: 'Shaping Space with Purpose: Architectural Thinking by Morteza Maddahi',
	description:
		'Crafting innovative architectural solutions where form meets function. Explore my portfolio',
	keywords: [
		'architect',
		'architectural design',
		'BIM',
		'projects',
		'about',
		'bellevue, wa',
	],
	authors: [{ name: 'Morteza Maddahi' }],
	creator: 'Morteza Maddahi',
	// viewport moved to a dedicated export below (Next.js expects a top-level `viewport` export)
	openGraph: {
		type: 'website',
		title: 'Shaping Space with Purpose: Architectural Thinking by Morteza Maddahi',
		description:
			'Architecture is not just about buildings, but about creating spaces that enhance and transform life experiences',
		siteName: 'Morteza Maddahi',
	},
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
};

export default function Page() {
	return (
		<>
			<div className='flex flex-col min-h-screen'>
				<div className='flex-grow'>
					<Hero />
					<Projects />
					<Videos />
					<Conceptdesign />
					<About />
					<Contact />
				</div>
			</div>
		</>
	);
}
