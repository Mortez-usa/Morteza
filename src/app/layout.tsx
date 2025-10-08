import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
// import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Inter } from 'next/font/google';
import './globals.css';
import {
	ClerkProvider,
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs';
import { Geist, Geist_Mono } from 'next/font/google';
import NavWrapper from './components/Navigation/NavWrapper';
import Footer from './components/Footer/page';
import FooterWapper from './components/Footer/FooterWrapper';
const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
	title: 'Morteza Maddahi',
	description:
		" I have a soft spot for startups and a passion for bringing innovative ideas to life. I believe in building things that genuinely help people. Whether it's learning new technologies or understanding the ins and outs of business, I'm always open to new challenges and eager to pick up whatever skills are necessary. ",
};

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			{' '}
			<html
				lang='en'
				className='scroll-smooth *:focus-visible:outline-none '>
				<body
					className={(inter.className, 'min-h-screen flex flex-col')}>
					<SpeedInsights />
					<main className='flex-1'>
						<NavWrapper />
						{children}
					</main>
					<div className='min-h-[0vh] flex flex-col'>
						<Footer />
					</div>

					<Analytics />
					<SpeedInsights />
				</body>
			</html>
		</ClerkProvider>
	);
}
