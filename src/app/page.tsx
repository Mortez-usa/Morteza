import Image from 'next/image';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Index from './(pages)/Home/page';
import Social from './components/Social';
import Script from 'next/script';

export default function Home() {
	return (
		<>
			<div className='min-h-screen'>
				<Index />
				<Social />
			</div>
		</>
	);
}
