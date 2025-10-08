'use client';
import { useEffect, useRef, useState } from 'react';

type SearchResult = { slug: string; title: string; snippet?: string };

// Small debounce hook (same file for convenience)
function useDebounce<T>(value: T, ms = 250) {
	const [v, setV] = useState(value);
	useEffect(() => {
		const t = setTimeout(() => setV(value), ms);
		return () => clearTimeout(t);
	}, [value, ms]);
	return v;
}

export default function SearchBox() {
	const [open, setOpen] = useState(false);
	const [q, setQ] = useState('');
	const [res, setRes] = useState<SearchResult[]>([]);
	const debouncedQ = useDebounce(q, 250);

	// ⬇️ THIS is the snippet — put it right here, inside the component.
	useEffect(() => {
		if (!debouncedQ) {
			setRes([]);
			return;
		}
		const ctrl = new AbortController();
		fetch(`/api/search?q=${encodeURIComponent(debouncedQ)}`, {
			signal: ctrl.signal,
		})
			.then((r) => r.json())
			.then((d) => setRes(d.results ?? []))
			.catch(() => {});
		return () => ctrl.abort();
	}, [debouncedQ]);

	return (
		<div className='relative flex items-center'>
			<div className='flex mt-4 mr-10 items-center space-x-2'>
				<button
				onClick={() => setOpen((v) => !v)}
				className='p-2 text-zinc-200 hover:text-amber-500 transition-colors'
				aria-label='Open search'>
				<svg
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					className='w-6 h-6'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
					/>
				</svg>
			</button>

			{/* Input */}
			<input
				type='text'
				placeholder='Search posts…'
				value={q}
				onChange={(e) => setQ(e.target.value)}
				onBlur={() => (q ? null : setOpen(false))}
				className={`bg-white border-b rounded border-gray-400 text-zinc-700 outline-none p-1
            transition-all duration-300 ease-in-out ml-2
                    ${open ? 'w-96 opacity-100' : 'w-0 opacity-0'}`}
			/>

			{/* Results */}
			{open && res.length > 0 && (
				<div className='absolute top-20 right-10 w-180 max-h-380 overflow-auto rounded-xl bg-zinc-900/90 backdrop-blur border border-zinc-700 shadow-lg'>
					<ul className='divide-y divide-zinc-800'>
						{res.map((r) => (
							<li key={r.slug} className='p-3 hover:bg-zinc-800'>
								<a
									href={`/Blog/post/${r.slug}`}
									className='block'>
									<div className='text-amber-400 font-medium'>
										{r.title}
									</div>
									{r.snippet && (
										<div className='text-xs text-zinc-300 mt-1 line-clamp-2'>
											…{r.snippet}…
										</div>
									)}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
			</div>
			{/* Search icon */}
			
		</div>
	);
}
