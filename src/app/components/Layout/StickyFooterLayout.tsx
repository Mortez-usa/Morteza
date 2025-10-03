import React, { ReactNode } from 'react';
import Footer from '../Footer/page';

interface StickyFooterLayoutProps {
	children: ReactNode;
	showFooter?: boolean;
}

export default function StickyFooterLayout({
	children,
	showFooter = true,
}: StickyFooterLayoutProps) {
	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-grow'>{children}</main>
			{showFooter && <Footer />}
		</div>
	);
}
