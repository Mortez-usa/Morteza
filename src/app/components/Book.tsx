import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Book() {

	const books = [
		{
			title: 'The Singularity Is Nearer: When We Merge with AI',
			author: 'Ray Kurzweil',
			image: '/images/books/TheSingularityIsNearer.jpg',
			booklink: 'https://www.amazon.com/gp/product/0399562761?ref_=dbs_m_mng_rwt_calw_thcv_1&storeType=ebooks&sr=1-1',
		},
		{
			title: 'The Art of Startup Fundraising: Pitching Investors, Negotiating the Deal, and Everything Else Entrepreneurs Need to Know',
			author: 'Alejandro Cremades',
			image: '/images/books/The Art of Startup Fundraising.jpg',
			booklink: 'https://www.amazon.com/gp/product/0399562761?ref_=dbs_m_mng_rwt_calw_thcv_1&storeType=ebooks&sr=1-1',
		},
		{
			title: 'Advisory Boards in Startups: Investigating the Roles of Advisory Boards in German Technology-Based Startups',
			author: 'Eric Weber',
			image: '/images/books/Advisory board.png',
			booklink: 'https://www.amazon.com/Art-Startup-Fundraising-Negotiating-Entrepreneurs/dp/B0CFN7TZRG/ref=sr_1_35?crid=31BB3E8VT99XQ&dib=eyJ2IjoiMSJ9.pTF82J5HA-QcAy7N4QA8aAUc8e_4PgfH9sv5UoVuEsrGjHj071QN20LucGBJIEps.7l-Bs0cqCPMjlj2VRzIUXGGE9KG0qDLJxfQ60fCQLvg&dib_tag=se&keywords=startup&s=books&sprefix=startup%2Cstripbooks%2C162&sr=1-35',
		},
	];

	

	return (
		<div>
			<div className='grid mr-64 ml-64 mt-56 mb-12 text-gray-700'>
				<h2 className='text-xl font-bold mb-2'>
					Books I’m currently exploring...
				</h2>
				<div className='grid grid-cols-3 text-gray-700 border-2 border-gray-100 p-12'>
					{books.map((book, index) => (
						<div key={index}>
							<div>
								<Link href={book.booklink}><Image
									className='min-w-24'
									src={book.image}
									alt={book.title}
									width={150}
									height={200}
								/></Link>
							</div>
							<div>
								<p className='pt-8 pr-8 min-w-48 text-small'><Link href={book.booklink}>{book.title}</Link> </p>
							</div>
							<div>
								<p className='pb-4 pr-4 text-small'>
									<em>by <Link href={book.booklink}>{book.author}</Link></em>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
