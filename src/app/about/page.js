'use client';

import Image from 'next/image';
import Link from 'next/link';

const stats = [
	{ label: 'Transactions every 24 hours', value: '44 million' },
	{ label: 'Assets under holding', value: '$119 trillion' },
	{ label: 'New users annually', value: '46,000' },
];
const values = [
	{
		name: 'Build deliberately',
		description:
			'We set a clear north, trim the noise, and deliver in small, confident steps. Strong foundations compound—so we design systems that stay fast, stable, and easy to extend.',
	},
	{
		name: 'Share progress early',
		description:
			'Momentum comes from visibility. We ship in thin slices, demo weekly, and surface risks immediately so decisions are timely, budgets stay real, and surprises land early—never in production.',
	},
	{
		name: 'Learn in public',
		description:
			'Every release teaches us something. We measure outcomes, write what we discover, and fold those learnings back into the roadmap so each iteration climbs higher than the last.',
	},
	{
		name: 'Support the whole stack',
		description:
			'Strategy, design, code, infrastructure, analytics, and the story you tell the market. We connect the layers so your product and your pitch move in the same direction.',
	},
	{
		name: 'Own the outcome',
		description:
			'We treat goals like our own—clear scope, secure practices, and pragmatic engineering. If constraints change, we recalibrate fast and protect what matters most: value in customers’ hands.',
	},
	{
		name: 'Protect the weekend',
		description:
			'Sustainable pace beats heroics. Thoughtful planning, automation, and guardrails prevent fire drills, keeping quality high and teams energized for the next climb.',
	},
];
const team = [
	// {
	// 	name: 'Michael Foster',
	// 	role: 'Co-Founder / CTO',
	// 	imageUrl:
	// 		'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	// },
	// {
	// 	name: 'Dries Vincent',
	// 	role: 'Business Relations',
	// 	imageUrl:
	// 		'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	// },
	// {
	// 	name: 'Lindsay Walton',
	// 	role: 'Front-end Developer',
	// 	imageUrl:
	// 		'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	// },
	// {
	// 	name: 'Courtney Henry',
	// 	role: 'Designer',
	// 	imageUrl:
	// 		'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	// },
	// {
	// 	name: 'Tom Cook',
	// 	role: 'Director of Product',
	// 	imageUrl:
	// 		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	// },
	// {
	// 	name: 'Whitney Francis',
	// 	role: 'Copywriter',
	// 	imageUrl:
	// 		'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	// },
	// {
	// 	name: 'Leonard Krasner',
	// 	role: 'Senior Designer',
	// 	imageUrl:
	// 		'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	// },
	// {
	// 	name: 'Floyd Miles',
	// 	role: 'Principal Designer',
	// 	imageUrl:
	// 		'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	// },
	// {
	// 	name: 'Emily Selman',
	// 	role: 'VP, User Experience',
	// 	imageUrl:
	// 		'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	// },
	// {
	// 	name: 'Kristin Watson',
	// 	role: 'VP, Human Resources',
	// 	imageUrl:
	// 		'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	// },
	// {
	// 	name: 'Emma Dorsey',
	// 	role: 'Senior Developer',
	// 	imageUrl:
	// 		'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	// },
	// {
	// 	name: 'Alicia Bell',
	// 	role: 'Junior Copywriter',
	// 	imageUrl:
	// 		'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	// },
];
const blogPosts = [
	{
		id: 1,
		title: 'From discovery to launch: shaping the shortest path to value',
		href: '#',
		description:
			'A lightweight approach to research, scoping, and delivery that keeps teams aligned, reduces risk, and gets working software in front of customers sooner.',
		imageUrl:
			'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&auto=format&fit=crop&w=3603&q=80',
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',
		author: {
			name: 'Michael Foster',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		id: 2,
		title: 'Pricing that fuels adoption, not churn',
		href: '#',
		description:
			'Simple tiers, clear value ladders, and usage signals that guide upsell without friction.',
		imageUrl:
			'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80',
		date: 'Mar 10, 2020',
		datetime: '2020-03-10',
		author: {
			name: 'Lindsay Walton',
			imageUrl:
				'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		id: 3,
		title: 'Design systems that scale with your roadmap',
		href: '#',
		description:
			'How tokens, accessible components, and guardrails speed delivery while keeping brand and UX consistent across squads.',
		imageUrl:
			'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80',
		date: 'Feb 12, 2020',
		datetime: '2020-02-12',
		author: {
			name: 'Tom Cook',
			imageUrl:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
];

export default function About() {
	return (
		<main className='isolate'>
			{/* Hero section */}
			<div className='relative isolate -z-10'>
				<svg
					aria-hidden='true'
					className='absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200 dark:stroke-white/10'
				>
					<defs>
						<pattern
							x='50%'
							y={-1}
							id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84'
							width={200}
							height={200}
							patternUnits='userSpaceOnUse'
						>
							<path d='M.5 200V.5H200' fill='none' />
						</pattern>
					</defs>
					<svg
						x='50%'
						y={-1}
						className='overflow-visible fill-gray-50 dark:fill-sky-700'
					>
						<path
							d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
							strokeWidth={0}
						/>
					</svg>
					<rect
						fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)'
						width='100%'
						height='100%'
						strokeWidth={0}
					/>
				</svg>
				<div
					aria-hidden='true'
					className='absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
				>
					<div
						style={{
							clipPath:
								'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
						}}
						className='aspect-801/1036 w-200.25 bg-linear-to-tr from-[#80ecff] to-[#9089fc] opacity-30'
					/>
				</div>
				<div className='overflow-hidden'>
					<div className='mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32'>
						<div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
							<div className='relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl'>
								<h1 className='text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl dark:text-white'>
									We build from the ground up
								</h1>
								<p className='mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none dark:text-gray-400'>
									Custom apps, engineering, marketing, sales, and financial
									guidance—shaped into one clear plan. From discovery to launch,
									we align strategy and execution so momentum never stalls. Ship
									faster, learn sooner, and keep climbing with measurable
									results.
								</p>
							</div>
							<div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
								<div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80'>
									<div className='relative h-64 w-44'>
										<Image
											alt=''
											src='/assets/illustrations/photo1.jpg'
											fill
											className='rounded-xl bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5'
											sizes='( max-width: 640px ) 100vw, ( max-width: 1280px ) 50vw, 33vw'
										/>
										<div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10' />
									</div>
								</div>
								<div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
									<div className='relative h-64 w-44'>
										<Image
											alt=''
											src='/assets/illustrations/photo2.jpg'
											fill
											className='rounded-xl bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5'
											sizes='( max-width: 640px ) 100vw, ( max-width: 1280px ) 50vw, 33vw'
										/>
										<div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10' />
									</div>
									<div className='relative h-64 w-44'>
										<Image
											alt=''
											src='/assets/illustrations/photo3.jpg'
											fill
											className='rounded-xl bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5'
											sizes='( max-width: 640px ) 100vw, ( max-width: 1280px ) 50vw, 33vw'
										/>
										<div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10' />
									</div>
								</div>
								<div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
									<div className='relative h-64 w-44'>
										<Image
											alt=''
											src='/assets/illustrations/photo4.jpg'
											fill
											className='rounded-xl bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5'
											sizes='( max-width: 640px ) 100vw, ( max-width: 1280px ) 50vw, 33vw'
										/>
										<div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10' />
									</div>
									<div className='relative h-64 w-44'>
										<Image
											alt=''
											src='/assets/illustrations/photo6.jpg'
											fill
											className='rounded-xl bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5'
											sizes='( max-width: 640px ) 100vw, ( max-width: 1280px ) 50vw, 33vw'
										/>
										<div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Content section */}
			<div className='mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8'>
				<div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
					<h2 className='text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white'>
						Our mission
					</h2>
					<div className='mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row'>
						<div className='lg:w-full lg:max-w-2xl lg:flex-auto'>
							<p className='text-xl/8 text-gray-600 dark:text-gray-300'>
								We help organizations turn ideas into durable products and
								repeatable growth. Our work blends product thinking, technical
								depth, and go-to-market focus so teams move confidently from
								zero to one—and well beyond.
							</p>
							<p className='mt-10 max-w-xl text-base/7 text-gray-700 dark:text-gray-400'>
								We design lean paths to value: a short discovery, a scope that
								fits the budget, and a cadence that keeps stakeholders aligned.
								Clear ownership, secure code, and purposeful design reduce risk
								while accelerating delivery. Expect weekly progress, honest
								tradeoffs, and the documentation needed to scale without drama.
							</p>
						</div>
						{/* <div className='lg:flex lg:flex-auto lg:justify-center'>
							<dl className='w-64 space-y-8 xl:w-80'>
								{stats.map((stat) => (
									<div
										key={stat.label}
										className='flex flex-col-reverse gap-y-4'
									>
										<dt className='text-base/7 text-gray-600 dark:text-gray-400'>
											{stat.label}
										</dt>
										<dd className='text-5xl font-semibold tracking-tight text-gray-900 dark:text-white'>
											{stat.value}
										</dd>
									</div>
								))}
							</dl>
						</div> */}
					</div>
				</div>
			</div>

			{/* Image section */}
			<div className='mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8'>
				<Image
					alt=''
					src='/assets/illustrations/webPhoto.svg'
					width={2832}
					height={1133}
					className='aspect-5/2 w-full object-cover outline-1 -outline-offset-1 outline-black/5 xl:rounded-3xl dark:outline-white/10'
				/>
			</div>

			{/* Feature section */}
			<div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:mx-0'>
					<h2 className='text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white'>
						Our values
					</h2>
					<p className='mt-6 text-lg/8 text-gray-700 dark:text-gray-300'>
						Principles that keep us moving upward—practical, human, and built to
						last.
					</p>
				</div>
				<dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
					{values.map((value) => (
						<div key={value.name}>
							<dt className='font-semibold text-gray-900 dark:text-white'>
								{value.name}
							</dt>
							<dd className='mt-1 text-gray-600 dark:text-gray-400'>
								{value.description}
							</dd>
						</div>
					))}
				</dl>
			</div>

			{/* Team section */}
			<div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:mx-0'>
					<h2 className='text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white'>
						Our team
					</h2>
					<p className='mt-6 text-lg/8 text-gray-600 dark:text-gray-400'>
						We are a Veteran-Owned Business, filled with builders, strategists,
						and storytellers who care about results more than buzzwords—and we
						partner closely with clients to make the right things real.
					</p>
				</div>
				{/* <ul
					role='list'
					className='mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6'
				>
					{team.map((person) => (
						<li key={person.name}>
							<Image
								alt=''
								src={person.imageUrl}
								width={96}
								height={96}
								className='mx-auto size-24 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10'
							/>
							<h3 className='mt-6 text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white'>
								{person.name}
							</h3>
							<p className='text-sm/6 text-gray-600 dark:text-gray-400'>
								{person.role}
							</p>
						</li>
					))}
				</ul> */}
			</div>

			{/* Blog section */}
			{/* <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
					<h2 className='text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white'>
						From the blog
					</h2>
					<p className='mt-2 text-lg/8 text-gray-600 dark:text-gray-400'>
						Practical playbooks, field notes, and templates to help you ship and
						grow.
					</p>
				</div>
				<div className='mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
					{blogPosts.map((post) => (
						<article
							key={post.id}
							className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80 dark:bg-gray-800'
						>
							<Image
								alt=''
								src={post.imageUrl}
								fill
								className='absolute inset-0 -z-10 object-cover'
							/>
							<div className='absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40 dark:from-black/80 dark:via-black/40' />
							<div className='absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-gray-900/10 dark:inset-ring-white/10' />

							<div className='flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300'>
								<time dateTime={post.datetime} className='mr-8'>
									{post.date}
								</time>
								<div className='-ml-4 flex items-center gap-x-4'>
									<svg
										viewBox='0 0 2 2'
										className='-ml-0.5 size-0.5 flex-none fill-white/50 dark:fill-gray-300/50'
									>
										<circle r={1} cx={1} cy={1} />
									</svg>
									<div className='flex gap-x-2.5'>
										<Image
											alt=''
											src={post.author.imageUrl}
											width={24}
											height={24}
											className='size-6 flex-none rounded-full bg-white/10 dark:bg-gray-800/10'
										/>
										{post.author.name}
									</div>
								</div>
							</div>
							<h3 className='mt-3 text-lg/6 font-semibold text-white'>
								<Link href={post.href}>
									<span className='absolute inset-0' />
									{post.title}
								</Link>
							</h3>
						</article>
					))}
					<h3>Free Industry Articles Coming Soon!!!</h3>
				</div>
			</div>*/}
		</main>
	);
}
