import React from 'react'
import Image from 'next/image';


export default function Hero() {
  return (
		<div className="relative mt-96">
			<Image
				src='/images/hero/green.png'
				alt='hero'
				width={1920}
				height={1080}
				layout='responsive'
				objectFit='cover'
				objectPosition='center'
			/>
			<div className="absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl">
				In the autumn of our venture, as leaves fall and dreams rise, we
				pivot toward success, embracing failure as our compass.
			</div>
		</div>
  );
}
