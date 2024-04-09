import Image from 'next/image';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Index from './(pages)/Home/page';
import Social from './components/Social';

export default function Home() {
	return (
		<>
			<div className='min-h-screen'>
				<head>
					<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-FGHHHD31CJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-FGHHHD31CJ');
</script>
				</head>
				<Index />
				<Social />
			</div>
		</>
	);
}
