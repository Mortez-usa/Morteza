import Image from 'next/image';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Index from './(pages)/Home/page';
import Social from './components/Social';
import Script from 'next/script';

export default function Home() {
	return (
		<>
			<Script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=G-FGHHHD31CJ`}></Script>
			<Script id='google analytics' strategy='afterInteractive'>
				{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-FGHHHD31CJ');`}
			</Script>
			<div className='min-h-screen'>
				<Index />
				<Social />
			</div>
		</>
	);
}
