'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


export default function About() {
	return (
		<div className='bg-gray-300  grid grid-cols-1 md:grid-cols-2 items-center justify-center h-[500px] gap-4 mx-36'>
			<div className='flex flex-col items-center md:items-start min-w-[500px]'>
				<h1 className='text-4xl'>About Me</h1>
				<p>
					Hello! I&apos;m Morteza, a passionate software developer
					with a love for creating innovative solutions.
				</p>
				<h2 className='text-2xl'>Personal Details</h2>
				<ul className='list-disc list-inside'>
					<li>
						<strong>Name:</strong> Morteza
					</li>
					<li>
						<strong>Profession:</strong> Software Developer
					</li>
					<li>
						<strong>Hobbies:</strong> Coding, Reading, Traveling
					</li>
				</ul>
			</div>
			<div className='text-center min-w-[500px]'>
				<Image
					src='/images/projectsImage/3.jpeg'
					alt='Morteza'
					width={700}
					height={400}
				/>
			</div>

			<div>
				<Button>Click me</Button>
			</div>
		</div>
	);
};
