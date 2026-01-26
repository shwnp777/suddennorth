'use client';

import { useState } from 'react';
import {
	BuildingOffice2Icon,
	EnvelopeIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';

export default function Page() {
	const [status, setStatus] = useState({ type: '', message: '' });
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		setStatus({ type: '', message: '' });
		setLoading(true);

		const form = e.currentTarget;
		const payload = {
			firstName: form.firstName.value,
			lastName: form.lastName.value,
			email: form.email.value,
			phone: form.phone.value,
			message: form.message.value,
		};

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});

			const json = await res.json();

			if (!res.ok || !json.ok) {
				throw new Error(json?.error || 'Something went wrong.');
			}

			form.reset();
			setStatus({
				type: 'success',
				message: 'Message sent! I’ll get back to you soon.',
			});
		} catch (err) {
			setStatus({ type: 'error', message: err.message || 'Failed to send.' });
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className='relative isolate bg-white dark:bg-gray-900'>
			<div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
				{/* ... your left column stays the same ... */}

				<form
					onSubmit={handleSubmit}
					className='px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48'
				>
					<div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
						<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
							<div>
								<label
									htmlFor='first-name'
									className='block text-sm/6 font-semibold text-gray-900 dark:text-white'
								>
									First name
								</label>
								<div className='mt-2.5'>
									<input
										id='first-name'
										name='firstName'
										type='text'
										autoComplete='given-name'
										className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-sky-500'
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor='last-name'
									className='block text-sm/6 font-semibold text-gray-900 dark:text-white'
								>
									Last name
								</label>
								<div className='mt-2.5'>
									<input
										id='last-name'
										name='lastName'
										type='text'
										autoComplete='family-name'
										className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-sky-500'
									/>
								</div>
							</div>

							<div className='sm:col-span-2'>
								<label
									htmlFor='email'
									className='block text-sm/6 font-semibold text-gray-900 dark:text-white'
								>
									Email
								</label>
								<div className='mt-2.5'>
									<input
										id='email'
										name='email'
										type='email'
										required
										autoComplete='email'
										className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-sky-500'
									/>
								</div>
							</div>

							<div className='sm:col-span-2'>
								<label
									htmlFor='phone-number'
									className='block text-sm/6 font-semibold text-gray-900 dark:text-white'
								>
									Phone number
								</label>
								<div className='mt-2.5'>
									<input
										id='phone-number'
										name='phone'
										type='tel'
										autoComplete='tel'
										className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-sky-500'
									/>
								</div>
							</div>

							<div className='sm:col-span-2'>
								<label
									htmlFor='message'
									className='block text-sm/6 font-semibold text-gray-900 dark:text-white'
								>
									Message
								</label>
								<div className='mt-2.5'>
									<textarea
										id='message'
										name='message'
										rows={4}
										required
										className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-sky-500'
										defaultValue=''
									/>
								</div>
							</div>
						</div>

						{status.message ? (
							<p
								className={`mt-4 text-sm ${
									status.type === 'success'
										? 'text-green-600 dark:text-green-400'
										: 'text-red-600 dark:text-red-400'
								}`}
							>
								{status.message}
							</p>
						) : null}

						<div className='mt-8 flex justify-end'>
							<button
								type='submit'
								disabled={loading}
								className='rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-sky-500 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:bg-sky-500 dark:hover:bg-sky-400 dark:focus-visible:outline-sky-500'
							>
								{loading ? 'Sending…' : 'Send message'}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
