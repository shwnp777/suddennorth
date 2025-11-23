// app/page.js
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='relative isolate overflow-hidden'>
			{/* Background image */}
			<Image
				aria-hidden
				src='/assets/illustrations/SuddenNorthBackGround.svg'
				alt=''
				fill
				priority
				sizes='100vw'
				className='absolute inset-0 -z-20 object-cover'
			/>

			{/* Dark overlay */}
			<div
				aria-hidden
				className='absolute inset-0 -z-10 bg-black/55 dark:bg-black/75'
			/>

			{/* Gradient overlay */}
			<div
				aria-hidden
				className='absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/30 to-transparent dark:from-black/60 dark:via-black/40 dark:to-transparent'
			/>

			<div
				aria-hidden='true'
				className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
			>
				<div
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
					className='relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75'
				/>
			</div>

			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
					<div className='hidden sm:mb-8 sm:flex sm:justify-center'>
						<div className='relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20'>
							Announcing our newest Application.{' '}
							<Link
								href='/products/safestream'
								className='font-semibold text-sky-600 dark:text-sky-400'
							>
								<span aria-hidden='true' className='absolute inset-0' />
								View now <span aria-hidden='true'>&rarr;</span>
							</Link>
						</div>
					</div>

					<div className='text-center'>
						<h1 className='text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white'>
							Business from the Ground Up
						</h1>
						<p className='mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400'>
							Custom apps, software development, marketing, sales and financial
							consulting. From idea to execution, we build, launch, and grow
							your business— every step of the way.
						</p>
						<div className='mt-10 flex items-center justify-center gap-x-6'>
							<Link
								href='/contact'
								className='rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:bg-sky-500 dark:hover:bg-sky-400 dark:focus-visible:outline-sky-500'
							>
								Get started
							</Link>
							<Link
								href='/about'
								className='text-sm/6 font-semibold text-gray-900 dark:text-white'
							>
								Learn more <span aria-hidden='true'>→</span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div
				aria-hidden='true'
				className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
			>
				<div
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
					className='relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75'
				/>
			</div>
		</div>
	);
}
