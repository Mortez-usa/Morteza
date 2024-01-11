import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Morteza Maddahi',
  description: " I have a soft spot for startups and a passion for bringing innovative ideas to life. I believe in building things that genuinely help people. Whether it's learning new technologies or understanding the ins and outs of business, I'm always open to new challenges and eager to pick up whatever skills are necessary. ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang='en'>
			<body className={inter.className}>
				<SpeedInsights />
				<Navbar />
				{children} <Footer />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
  );
}
