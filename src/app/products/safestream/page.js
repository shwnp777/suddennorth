'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SafeStreamPage() {
	return (
		<main className='isolate'>
			{/* ======================== */}
			{/* Background Grid + Blob   */}
			{/* ======================== */}
			<div className='relative isolate -z-10'>
				<svg
					aria-hidden='true'
					className='hidden md:block absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200 dark:stroke-white/10'
				>
					<defs>
						<pattern
							id='grid-pattern'
							width={200}
							height={200}
							patternUnits='userSpaceOnUse'
						>
							<path d='M0 200V0H200' fill='none' />
						</pattern>
					</defs>

					<rect
						width='100%'
						height='100%'
						fill='url(#grid-pattern)'
						strokeWidth={0}
					/>
				</svg>

				<div
					aria-hidden='true'
					className='absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu blur-3xl lg:ml-24 xl:ml-48'
				>
					<div
						className='aspect-[801/1036] w-[200rem] bg-gradient-to-tr from-sky-300 to-indigo-400 opacity-30'
						style={{
							clipPath:
								'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
						}}
					/>
				</div>

				{/* ======================== */}
				{/* Hero Section             */}
				{/* ======================== */}
				<div className='mx-auto max-w-7xl px-6 pt-40 pb-24 lg:px-8 lg:pt-32'>
					<div className='grid gap-x-16 gap-y-12 lg:grid-cols-2 lg:items-center'>
						{/* Logo + Text */}
						<div>
							<Image
								src='/assets/logos/SafeStream.png'
								alt='Safe Stream Logo'
								width={120}
								height={120}
								className='rounded-xl'
							/>

							<h1 className='mt-6 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl dark:text-white'>
								Safe Stream
							</h1>

							<p className='mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-xl'>
								A safer YouTube experience for your children. Approve the
								channels, playlists, & videos you trust— Safe Stream handles the
								rest. No ads. No autoplay. No algorithm steering your kids to
								the wrong content.
							</p>

							<div className='mt-8 flex gap-4'>
								<Link
									href='#video'
									className='rounded-md bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400'
								>
									Setup Guide Video
								</Link>

								<Link
									href='#screenshots'
									className='rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-sky-600 shadow hover:bg-gray-100 dark:bg-white dark:hover:bg-gray-200'
								>
									View Screenshots →
								</Link>
							</div>
							<Link
								href='/products/safestream/privacy-policy'
								className='mt-4 inline-block text-sm text-gray-500 hover:underline'
							>
								SafeStream Privacy Policy
							</Link>
						</div>

						{/* App Screenshot Card */}
						<div className='relative h-96 w-full'>
							<Image
								src='/assets/illustrations/safepreview.jpg'
								alt='Safe Stream App Preview'
								className='rounded-2xl object-cover shadow-xl ring-1 ring-gray-900/10 dark:ring-white/10'
								fill
							/>
						</div>
					</div>
				</div>
			</div>

			{/* ======================== */}
			{/* How It Works             */}
			{/* ======================== */}
			<section
				id='how'
				className='mx-auto max-w-7xl px-6 py-24 lg:px-8 border-t border-gray-200 dark:border-white/10'
			>
				<h2 className='text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
					How Safe Stream Works
				</h2>

				<div className='mt-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-3'>
					{[
						{
							title: 'Approve Only What You Trust',
							desc: 'You choose the channels, playlists, or videos allowed in your home. Everything else is blocked.',
						},
						{
							title: 'No Ads, No Autoplay',
							desc: 'Children watch only what you approve—no recommended videos or distracting thumbnails.',
						},
						{
							title: 'Simple, Secure Controls',
							desc: 'Parents manage access with a secure PIN. Kids see only their safe library.',
						},
					].map((item) => (
						<div key={item.title}>
							<h3 className='text-lg font-semibold text-sky-600 dark:text-sky-400'>
								{item.title}
							</h3>
							<p className='mt-2 text-gray-700 dark:text-gray-300'>
								{item.desc}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* ======================== */}
			{/* Instructional Video      */}
			{/* ======================== */}
			<section
				id='video'
				className='mx-auto max-w-7xl px-6 py-24 lg:px-8 border-t border-gray-200 dark:border-white/10'
			>
				<h2 className='text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
					Setup Guide: Getting Your YouTube API Key
				</h2>

				<p className='mt-4 text-gray-600 dark:text-gray-400 max-w-xl'>
					Follow this quick walkthrough to connect Safe Stream to your YouTube
					Data API.
				</p>

				<div className='mt-10 relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-900 ring-1 ring-gray-900/20 dark:ring-white/10 shadow-xl'>
					<iframe
						className='absolute inset-0 w-full h-full'
						src='https://www.youtube.com/embed/dTVAPNoVrvs'
						title='Safe Stream Setup Tutorial'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					/>
				</div>
			</section>

			{/* ======================== */}
			{/* Screenshots Gallery      */}
			{/* ======================== */}
			<section
				id='screenshots'
				className='mx-auto max-w-7xl px-6 py-24 lg:px-8 border-t border-gray-200 dark:border-white/10'
			>
				<h2 className='text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
					In-App Screenshots
				</h2>

				<div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{[
						'/assets/illustrations/preview1.PNG',
						'/assets/illustrations/preview2.PNG',
						'/assets/illustrations/preview3.PNG',
					].map((src) => (
						<div
							key={src}
							className='relative h-180 rounded-2xl ring-1 ring-gray-900/10 dark:ring-white/10 overflow-hidden shadow-lg'
						>
							<Image src={src} alt='App screen' fill className='object-cover' />
						</div>
					))}
				</div>
			</section>

			{/* ======================== */}
			{/* CTA Section              */}
			{/* ======================== */}
			<section className='mx-auto max-w-7xl px-6 py-24 lg:px-8 border-t border-gray-200 dark:border-white/10'>
				<div className='rounded-3xl bg-sky-600 px-8 py-16 text-center shadow-xl dark:bg-sky-500'>
					<h2 className='text-3xl font-semibold text-white sm:text-4xl'>
						Ready to create a safer streaming experience?
					</h2>
					<p className='mt-4 text-sky-100 max-w-2xl mx-auto'>
						Start building your child&apos;s approved video library today.
					</p>

					<a
						href='https://apps.apple.com/us/app/safe-stream-app/id6757622774'
						target='_blank'
						rel='noopener noreferrer'
						className='mt-8 inline-flex items-center gap-4 rounded-md bg-white px-6 py-4 shadow hover:bg-gray-100'
					>
						<Image
							src='/assets/logos/app-store-badge.svg'
							alt='Download on the App Store'
							width={32}
							height={32}
							className='h-8 w-auto'
						/>
						<span className='text-base font-semibold text-sky-700'>
							Download Safe Stream
						</span>
					</a>
				</div>
			</section>
		</main>
	);
}
