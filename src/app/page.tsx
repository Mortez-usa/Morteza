import Image from 'next/image';
import Index from './(pages)/Home/page';
import Social from './components/Social';

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
