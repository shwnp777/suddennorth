import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='fullBG grid min-h-full grid-cols-1 grid-rows-[1fr_auto_1fr] bg-white lg:grid-cols-[max(50%,36rem)_1fr] dark:bg-gray-900'>
			<main className='mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8'>
				<div className='max-w-lg'>
					<p className='text-base/8 font-semibold text-sky-600 dark:text-sky-400'>
						404
					</p>
					<h1 className='mt-4 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl dark:text-white'>
						Page not found
					</h1>
					<p className='mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400'>
						Sorry, we couldn not find the page.
					</p>
					<div className='mt-10'>
						<Link
							href='/'
							className='text-sm/7 font-semibold text-sky-600 dark:text-sky-400'
						>
							<span aria-hidden='true'>&larr;</span> Back to home
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
}
