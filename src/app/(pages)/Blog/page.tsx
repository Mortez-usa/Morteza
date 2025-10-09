import React, { Suspense } from 'react';
import ClientBlog from './ClientBlog';

export default function BlogPage() {
	return (
		<React.Fragment>
			<Suspense fallback={<div className='p-6'>Loading blog…</div>}>
				{/* ClientBlog uses `useSearchParams()` and other client-only hooks */}
				<ClientBlog />
			</Suspense>
		</React.Fragment>
	);
}
