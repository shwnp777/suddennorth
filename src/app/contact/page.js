'use client';

import {
	BuildingOffice2Icon,
	EnvelopeIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';

export default function Page() {
	return (
		<div className='relative isolate bg-white dark:bg-gray-900'>
			<div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
				{/* LEFT COLUMN (unchanged) */}
				<div className='relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48'>
					<div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
						<div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2 dark:bg-gray-900 dark:ring-white/10'>
							<svg
								aria-hidden='true'
								className='absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-white/10'
							>
								<defs>
									<pattern
										x='100%'
										y={-1}
										id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
										width={200}
										height={200}
										patternUnits='userSpaceOnUse'
									>
										<path d='M130 200V.5M.5 .5H200' fill='none' />
									</pattern>
								</defs>
								<rect
									width='100%'
									height='100%'
									strokeWidth={0}
									className='fill-white dark:fill-gray-900'
								/>
								<svg
									x='100%'
									y={-1}
									className='overflow-visible fill-gray-50 dark:fill-gray-800/20'
								>
									<path d='M-470.5 0h201v201h-201Z' strokeWidth={0} />
								</svg>
								<rect
									fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
									width='100%'
									height='100%'
									strokeWidth={0}
								/>
							</svg>
							<div
								aria-hidden='true'
								className='absolute top-[calc(100%-13rem)] -left-56 hidden transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))] dark:block'
							>
								<div
									style={{
										clipPath:
											'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
									}}
									className='aspect-1155/678 w-288.75 bg-linear-to-br from-[#80caff] to-[#4f46e5] opacity-10 dark:opacity-20'
								/>
							</div>
						</div>

						<h2 className='text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white'>
							Get in touch
						</h2>
						<p className='mt-6 text-lg/8 text-gray-600 dark:text-gray-400'>
							Get in touch and let&apos;s explore what&apos;s possible together.
							Every great partnership starts with a simple conversation.
						</p>

						<dl className='mt-10 space-y-4 text-base/7 text-gray-600 dark:text-gray-300'>
							<div className='flex gap-x-4'>
								<dt className='flex-none'>
									<span className='sr-only'>Address</span>
									<BuildingOffice2Icon
										aria-hidden='true'
										className='h-7 w-6 text-gray-400'
									/>
								</dt>
								<dd>
									Serving clients worldwide
									<br />
									Located in New England
								</dd>
							</div>

							<div className='flex gap-x-4'>
								<dt className='flex-none'>
									<span className='sr-only'>Telephone</span>
									<PhoneIcon
										aria-hidden='true'
										className='h-7 w-6 text-gray-400'
									/>
								</dt>
								<dd>
									<a
										href='tel:+12347386024'
										className='hover:text-gray-900 dark:hover:text-white'
									>
										+1 (234) 738-6024
									</a>
								</dd>
							</div>

							<div className='flex gap-x-4'>
								<dt className='flex-none'>
									<span className='sr-only'>Email</span>
									<EnvelopeIcon
										aria-hidden='true'
										className='h-7 w-6 text-gray-400'
									/>
								</dt>
								<dd>
									<a
										href='mailto:contact@suddennorth.com'
										className='hover:text-gray-900 dark:hover:text-white'
									>
										contact@suddennorth.com
									</a>
								</dd>
							</div>
						</dl>
					</div>
				</div>

				{/* RIGHT COLUMN: Google Form Embed */}
				<div className='px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48'>
					<div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
						<div className='rounded-2xl bg-white/70 dark:bg-white/5 shadow-sm ring-1 ring-gray-900/10 dark:ring-white/10 backdrop-blur'>
							{/* Header like your old form area */}
							<div className='border-b border-gray-900/10 dark:border-white/10 px-6 py-5'>
								<h3 className='text-base font-semibold text-gray-900 dark:text-white'>
									Send a message
								</h3>
								<p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
									We usually reply within 1 business day.
								</p>
							</div>

							{/* Google form */}
							<div className='p-2 sm:p-4'>
								<iframe
									title='Sudden North Contact Form'
									src='https://docs.google.com/forms/d/e/1FAIpQLScHuLeKzjyg2xo2haaq7w37XfP6EtmPQanUYCxY9lQzdbT6gg/viewform?embedded=true'
									className='w-full rounded-xl'
									style={{ height: 920 }}
									frameBorder='0'
									marginHeight='0'
									marginWidth='0'
								>
									Loading…
								</iframe>
							</div>
						</div>

						<p className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
							Prefer email?{' '}
							<a
								className='underline underline-offset-2 hover:text-gray-900 dark:hover:text-white'
								href='mailto:contact@suddennorth.com'
							>
								contact@suddennorth.com
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
