import Image from 'next/image';
import { NextUIProvider } from '@nextui-org/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Index from './(pages)/Home/page';
import Book from './components/Book';
import Hero from './components/Hero';
import Social from './components/Social';
import Script from 'next/script';

export default function Home() {
	return (
		<NextUIProvider>
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
				<div className='min-h-screen'>
					<Index />
					<Book />
					<Hero />
					<Social />
				</div>
			</>
		</NextUIProvider>
	);
}
