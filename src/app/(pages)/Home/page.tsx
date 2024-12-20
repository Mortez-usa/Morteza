import React from 'react';
import Image from 'next/image';
import Script from 'next/script';


export default function page() {
	return (
		<>
			<Script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></Script>
			<Script id='google analytics' strategy='afterInteractive'>
				{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
			</Script>
			{/*.env*/}
			<head>
				<title>Home page</title>
				<meta
					name='Morteza Maddahi'
					content='Morteza Maddahi, Personal Bio, Professional Background, Skills, Contact Information'
				/>
				{/* Open Graph */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://mortezamaddahi.com' />
				<meta property='og:title' content='Morteza Maddahi' />
				<meta
					property='og:description'
					content='Hello, I&#39;m Morteza Maddahi, an individual with a background in architecture design who also has a keen interest in entrepreneurship, software , and emerging technologies. I have a genuine passion for nature, enjoy watching Science fiction movies, and place great value on cultivating strong relationships with friends . Join me as I explore the harmonious blend of creativity, technology, and a love for life&#39;s simple pleasures.'
				/>
				<meta property='og:image' content='/images/Morteza-pro.jpg' />

				{/* Twitter Card */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content='Morteza Maddahi' />
				<meta
					name='twitter:description'
					content='Hello, I&#39;m Morteza Maddahi, an individual with a background in architecture design who also has a keen interest in entrepreneurship, software , and emerging technologies. I have a genuine passion for nature, enjoy watching Science fiction movies, and place great value on cultivating strong relationships with friends . Join me as I explore the harmonious blend of creativity, technology, and a love for life&#39;s simple pleasures.'
				/>
				<meta name='twitter:image' content='/images/Morteza-pro.jpg' />
			</head>

			<div>
				<div className=''>
					<div className='flex justify-center gap-14 mt-24 text-gray-700'>
						<h1 className='w-[400px]'>
							Hello, I&#39;m Morteza Maddahi, an individual with a
							background in{' '}
							<a
								className='text-blue-500'
								href='https://archinect.com/Morteza-Maddahi'>
								architecture design
							</a>{' '}
							who also has a keen interest in entrepreneurship,{' '}
							<a
								className='text-blue-500'
								href='https://www.docktorly.com'>
								software
							</a>{' '}
							, and emerging technologies. I have a genuine
							passion for nature, enjoy watching{' '}
							<a
								className='text-blue-500'
								href='https://editorial.rottentomatoes.com/guide/essential-sci-fi-movies-of-all-time/'>
								Science fiction
							</a>{' '}
							movies, and place great value on cultivating strong
							relationships with friends . Join me as I explore
							the harmonious blend of creativity, technology, and
							a love for life&#39;s simple pleasures.
						</h1>
						<div className='grid-col-2'>
							<Image
								src='/images/Morteza-pro.jpg'
								width={200}
								height={200}
								alt='Picture of the author'
								className='rounded-lg shadow-sm hover:opacity-90'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
