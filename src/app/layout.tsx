import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
// import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
	title: 'Morteza Maddahi',
	description:
		" I have a soft spot for startups and a passion for bringing innovative ideas to life. I believe in building things that genuinely help people. Whether it's learning new technologies or understanding the ins and outs of business, I'm always open to new challenges and eager to pick up whatever skills are necessary. ",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='scroll-smooth *:focus-visible:outline-none'>
			<body className={inter.className}>
				<SpeedInsights />
				<main>{children}</main>
				<div className='absolute bg-blue-800 bottom-0 w-full'></div>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
