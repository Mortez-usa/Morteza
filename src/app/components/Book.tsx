import React from 'react';
import Image from 'next/image';

export default function Book() {
	return (
		<div className='grid mr-64 ml-64 mt-52 text-gray-700'>
			<div className='text-xl font-bold'>
				Books I’m currently exploring...
			</div>
			<div className='grid grid-cols-3 text-gray-700 border-2 border-gray-100'>
				<div className='grid grid-cols-2 gap-4 m-16 text-gray-700'>
					<div>
						<a href='https://www.amazon.com/gp/product/0399562761?ref_=dbs_m_mng_rwt_calw_thcv_1&storeType=ebooks&sr=1-1'>
							<h2>
								The Singularity Is Nearer: When We Merge with AI
							</h2>
							<h4>by Ray Kurzweil</h4>
						</a>
					</div>
					<a href='https://www.amazon.com/gp/product/0399562761?ref_=dbs_m_mng_rwt_calw_thcv_1&storeType=ebooks&sr=1-1'>
						<Image
							className='rounded-lg shadow-sm hover:opacity-90'
							src='/images/books/TheSingularityIsNearer.jpg'
							width={150}
							height={150}
							alt='Picture of the author'
						/>
					</a>
				</div>
				<div className='grid grid-cols-2 gap-4 m-16 text-gray-700'>
					<div>
						<a href='https://www.amazon.com/Art-Startup-Fundraising-Negotiating-Entrepreneurs/dp/B0CFN7TZRG/ref=sr_1_35?crid=31BB3E8VT99XQ&dib=eyJ2IjoiMSJ9.pTF82J5HA-QcAy7N4QA8aAUc8e_4PgfH9sv5UoVuEsrGjHj071QN20LucGBJIEps.7l-Bs0cqCPMjlj2VRzIUXGGE9KG0qDLJxfQ60fCQLvg&dib_tag=se&keywords=startup&s=books&sprefix=startup%2Cstripbooks%2C162&sr=1-35'>
							<h2>
								The Art of Startup Fundraising: Pitching
								Investors, Negotiating the Deal, and Everything
								Else Entrepreneurs Need to Know
							</h2>
							<h4>by Alejandro Cremades</h4>
						</a>
					</div>
					<a href='https://www.amazon.com/Art-Startup-Fundraising-Negotiating-Entrepreneurs/dp/B0CFN7TZRG/ref=sr_1_35?crid=31BB3E8VT99XQ&dib=eyJ2IjoiMSJ9.pTF82J5HA-QcAy7N4QA8aAUc8e_4PgfH9sv5UoVuEsrGjHj071QN20LucGBJIEps.7l-Bs0cqCPMjlj2VRzIUXGGE9KG0qDLJxfQ60fCQLvg&dib_tag=se&keywords=startup&s=books&sprefix=startup%2Cstripbooks%2C162&sr=1-35'>
						<Image
							className='rounded-lg shadow-sm hover:opacity-90'
							src='/images/books/The Art of Startup Fundraising.jpg'
							width={150}
							height={150}
							alt='Picture of the author'
						/>
					</a>
				</div>
				<div className='grid grid-cols-2 gap-4 m-16 text-gray-700'>
					<div>
						<a href='https://www.amazon.com/Advisory-Boards-Startups-Investigating-Technology-Based-ebook/dp/B01LZEMM86/ref=sr_1_1?crid=I5P80FJ9ZDWC&dib=eyJ2IjoiMSJ9.d4lMgiR9isz7xt5bQaMZFQ.vYYR85xTecTjGVHDdbQwk2R6pokEbgNFogN7XGO2q0I&dib_tag=se&keywords=Advisory+Boards+in+Startups%3A+Investigating+the+Roles+of+Advisory+Boards+in+German+Technology-Based+Startups&s=books&sprefix=advisory+boards+in+startups+investigating+the+roles+of+advisory+boards+in+german+technology-based+startups%2Cstripbooks%2C239&sr=1-1'>
							<h2>
								Advisory Boards in Startups: Investigating the
								Roles of Advisory Boards in German
								Technology-Based Startups
							</h2>
							<h4>by Eric Weber</h4>
						</a>
					</div>
					<a href='https://www.amazon.com/Advisory-Boards-Startups-Investigating-Technology-Based-ebook/dp/B01LZEMM86/ref=sr_1_1?crid=I5P80FJ9ZDWC&dib=eyJ2IjoiMSJ9.d4lMgiR9isz7xt5bQaMZFQ.vYYR85xTecTjGVHDdbQwk2R6pokEbgNFogN7XGO2q0I&dib_tag=se&keywords=Advisory+Boards+in+Startups%3A+Investigating+the+Roles+of+Advisory+Boards+in+German+Technology-Based+Startups&s=books&sprefix=advisory+boards+in+startups+investigating+the+roles+of+advisory+boards+in+german+technology-based+startups%2Cstripbooks%2C239&sr=1-1'>
						<Image
							className='rounded-lg shadow-sm hover:opacity-90'
							src='/images/books/Advisory board.png'
							width={150}
							height={150}
							alt='Picture of the author'
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
