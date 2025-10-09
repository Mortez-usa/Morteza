// 'use client';

// import { useState, useTransition } from 'react';
// import { subscribeAction } from '../../actions/subscribe';

// type Props = {
// 	slug?: string;
// 	headline?: string;
// 	subhead?: string;
// };

// export default function SubscribeCard({
// 	slug,
// 	headline = 'Get the next post in your inbox',
// 	subhead = 'No spam. Unsubscribe anytime.',
// }: Props) {
// 	const [email, setEmail] = useState('');
// 	const [name, setName] = useState('');
// 	const [hp, setHp] = useState(''); // honeypot
// 	const [msg, setMsg] = useState<string | null>(null);
// 	const [isPending, startTransition] = useTransition();

// 	const onSubmit = (e: React.FormEvent) => {
// 		e.preventDefault();
// 		setMsg(null);

// 		startTransition(async () => {
// 			const res = await subscribeAction({
// 				email,
// 				name,
// 				slug,
// 				source: 'blog',
// 				honeypot: hp,
// 			});
// 			setMsg(res.message);
// 			if (res.ok) {
// 				setEmail('');
// 				// keep name for friendliness
// 			}
// 		});
// 	};

// 	return (
// 		<section className='mt-16'>
// 			<div className='rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-sm'>
// 				<h2 className='text-xl sm:text-2xl font-semibold tracking-tight'>
// 					{headline}
// 				</h2>
// 				<p className='text-sm text-neutral-500 mt-1'>{subhead}</p>

// 				<form
// 					onSubmit={onSubmit}
// 					className='mt-4 grid gap-3 sm:grid-cols-[1fr_auto]'>
// 					{/* Honeypot */}
// 					<input
// 						aria-hidden='true'
// 						tabIndex={-1}
// 						autoComplete='off'
// 						value={hp}
// 						onChange={(e) => setHp(e.target.value)}
// 						className='hidden'
// 						name='company'
// 					/>

// 					<label className='sr-only' htmlFor='email'>
// 						Email
// 					</label>
// 					<input
// 						id='email'
// 						type='email'
// 						inputMode='email'
// 						required
// 						placeholder='you@domain.com'
// 						value={email}
// 						onChange={(e) => setEmail(e.target.value)}
// 						className='w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-500'
// 					/>

// 					<div className='grid grid-cols-1 gap-3 sm:col-span-2 sm:grid-cols-[1fr_auto]'>
// 						<label className='sr-only' htmlFor='name'>
// 							Name (optional)
// 						</label>
// 						<input
// 							id='name'
// 							type='text'
// 							placeholder='Name (optional)'
// 							value={name}
// 							onChange={(e) => setName(e.target.value)}
// 							className='w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-700'
// 						/>

// 						<button
// 							type='submit'
// 							disabled={isPending}
// 							className='rounded-xl px-5 py-3 text-sm font-semibold bg-zinc-700 text-white hover:bg-zinc-700 disabled:opacity-60 disabled:cursor-not-allowed'>
// 							{isPending ? 'Subscribing…' : 'Subscribe'}
// 						</button>
// 					</div>
// 				</form>

// 				{msg && (
// 					<p className='mt-3 text-sm text-neutral-600 dark:text-neutral-300'>
// 						{msg}
// 					</p>
// 				)}

// 				<p className='mt-2 text-[11px] text-neutral-400'>
// 					We’ll never share your email. Read our privacy note.
// 				</p>
// 			</div>
// 		</section>
// 	);
// }


import React from 'react'

export default function page() {
  return (
	<div>
	  test
	</div>
  )
}
