import React from 'react';
import Link from 'next/link';
import { SlSocialGithub } from 'react-icons/sl';
import { SlSocialInstagram } from 'react-icons/sl';
import { SlSocialLinkedin } from 'react-icons/sl';
import { SlSocialTwitter } from 'react-icons/sl';
import { SlSocialYoutube } from 'react-icons/sl';

export default function Social() {
	return (
		<div>
			
			<div className='h-96 grid grid-cols-1 justify-center content-center justify-items-center'>
				<div className='flex gap-8'>
					<div>
						<Link href='https://github.com/Mortez-usa'>
							<SlSocialGithub
								size='22'
								className='opacity-70 hover:opacity-100'
							/>
						</Link>
					</div>
					<div>
						<Link href='https://www.instagram.com/mortezaauss/'>
							<SlSocialInstagram
								size='22'
								className='opacity-70 hover:opacity-100'
							/>
						</Link>
					</div>
					<div>
						<Link href='https://www.linkedin.com/in/morteza-maddahi/'>
							<SlSocialLinkedin
								size='22'
								className='opacity-70 hover:opacity-100'
							/>
						</Link>
					</div>
					<div>
						<Link href='https://twitter.com/MortezaMaddahi'>
							<SlSocialTwitter
								size='22'
								className='opacity-70 hover:opacity-100'
							/>
						</Link>
					</div>
					<div>
						<Link href='https://www.youtube.com/@mortezamaddahi7617/videos'>
							<SlSocialYoutube
								size='22'
								className='opacity-70 hover:opacity-100'
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
