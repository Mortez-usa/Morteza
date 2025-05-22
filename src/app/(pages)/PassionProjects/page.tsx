import React from 'react';
import Image from 'next/image';
import '../../globals.css';
import Footer from '@/components/Footer/page';

export default function page() {
	return (
		<div className='flex flex-col min-h-screen'>
			<section className='py-24 px-6 md:px-16 lg:px-24 mt-24 flex-grow'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16'>
						<div>
							<div className='flex flex-col justify-center items-start justify-items-center content-center center'>
								<h2 className='font-serif text-3xl md:text-4xl mb-4'>
									Red Hat Architects
								</h2>
								<h3>App store for architects and designers.</h3>
							</div>
						</div>
						<div>
							<div>
								<Image
									src={'/RedHatArchitects.png'}
									alt='Red Hat Architects'
									width={200}
									height={200}
									className='object-cover mb-4'
									loading='lazy'
									placeholder='blur'
									blurDataURL='/PORTFOLIO.jpg'
									quality={100}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='max-w-7xl mx-auto'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16'>
						<div>
							<Image
								src={'/veranook.png'}
								alt='Red Hat Architects'
								width={200}
								height={200}
								className='object-cover mb-4'
								loading='lazy'
								placeholder='blur'
								blurDataURL='/PORTFOLIO.jpg'
								quality={100}
							/>
						</div>
						<div>
							<h2 className='font-serif text-3xl md:text-4xl mb-4'>
								Veranook{' '}
							</h2>
							<h3>
								A turnkey clinic solution for independent
								doctors and healthcare providers. Veranook
								empowers physicians to launch or expand their
								practices with fully equipped, ready-to-use
								medical spaces—removing the operational barriers
								and allowing them to focus on delivering
								exceptional patient care.
							</h3>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
