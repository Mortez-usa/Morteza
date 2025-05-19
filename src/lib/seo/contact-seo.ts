import { Metadata } from 'next';

// app/about/page.tsx
export const contactmetadata: Metadata = {
	title: 'Contact Morteza Maddahi | Architectural Design',
	description:
		'Reach out to Morteza Maddahi for architectural design consultations and collaborative opportunities.',
	openGraph: {
		title: 'Contact Morteza Maddahi | Architectural Design',
		description:
			'Connect with Morteza Maddahi — bridging architecture, software, and healthcare to create innovative and functional design solutions.',
		url: 'https://mortezamaddahi.com/Contact',
		type: 'website',
		images: [
			{
				url: 'https://mortezamaddahi.com/images/morteza-og.jpg',
				width: 1200,
				height: 630,
				alt: 'Morteza Maddahi',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'About Morteza Maddahi | Architectural Design',
		description:
			'Discover the story of Morteza Maddahi’s multidisciplinary journey and his commitment to real-world innovation.',
		images: ['https://mortezamaddahi.com/images/morteza-og.jpg'],
	},
	alternates: {
		canonical: 'https://mortezamaddahi.com/Contact',
	},
};

export const metadata = contactmetadata;
