'use client';
import Image from 'next/image';
import Link from 'next/link';

const collections = [
	{
		name: 'Ourstuff',
		href: '/',
		imageSrc:
			'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-collection-01.jpg',
		imageAlt:
			'Brown leather key ring with brass metal loops and rivets on wood table.',
		description:
			'A free application for users to rent any item from other users in their area.',
	},
	{
		name: 'Organized Desk Collection',
		href: '/',
		imageSrc:
			'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-collection-02.jpg',
		imageAlt:
			'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
		description:
			'The rest of the house will still be a mess, but your desk will look great.',
	},
	{
		name: 'Focus Collection',
		href: '/',
		imageSrc:
			'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-collection-03.jpg',
		imageAlt:
			'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
		description:
			'Be more productive than enterprise project managers with a single piece of paper.',
	},
];

export default function Page() {
	return (
		<div className='bg-gray-900'>
			{/* Hero section */}
			<div className='relative bg-sky-900 min-h-screen'>
				{/* Decorative image and overlay */}
				<div aria-hidden='true' className='absolute inset-0 overflow-hidden'>
					<Image
						alt=''
						src='/assets/illustrations/apps.jpg'
						fill
						priority
						sizes='100vw'
						className='object-cover'
					/>
				</div>

				<div aria-hidden='true' className='absolute inset-0 bg-gray-900/80' />

				<div className='relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center'>
					<h1 className='text-4xl font-bold tracking-tight text-white lg:text-6xl'>
						Sudden North Applications
					</h1>
					<p className='mt-4 text-xl text-white'>
						When we are not building products for our customers, we are building
						applications that help solve real problems.
					</p>
					<Link
						href='/products/safestream'
						className='mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100'
					>
						Latest Application
					</Link>
				</div>
			</div>

			<main>
				<section
					aria-labelledby='collection-heading'
					className='mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8'
				>
					<h2
						id='collection-heading'
						className='text-2xl font-bold tracking-tight text-gray-300'
					>
						Coming Soon
					</h2>
					<p className='mt-4 text-base text-gray-400'>
						We are in the process of building out our application store. Provide
						feedback on what applications you would like to see.
					</p>

					<div className='mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-8'>
						{collections.map((collection) => (
							<Link
								key={collection.name}
								href={collection.href}
								className='group block'
							>
								<Image
									alt={collection.imageAlt}
									src={collection.imageSrc}
									className='aspect-3/2 w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-5/6'
									width={500}
									height={300}
								/>
								<h3 className='mt-4 text-base font-semibold text-gray-300'>
									{collection.name}
								</h3>
								<p className='mt-2 text-sm text-gray-500'>
									{collection.description}
								</p>
							</Link>
						))}
					</div>
				</section>

				<section
					aria-labelledby='comfort-heading'
					className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8'
				>
					<div className='relative overflow-hidden rounded-lg'>
						<div className='absolute inset-0'>
							<Image
								alt=''
								src='https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-feature-section-02.jpg'
								className='size-full object-cover'
								priority
								fill
							/>
						</div>
						<div className='relative bg-gray-900/75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16'>
							<div className='relative mx-auto flex max-w-3xl flex-col items-center text-center'>
								<h2
									id='comfort-heading'
									className='text-3xl font-bold tracking-tight text-white sm:text-4xl'
								>
									Simple productivity
								</h2>
								<p className='mt-3 text-xl text-white'>
									Endless tasks, limited hours, a single piece of paper. Not
									really a haiku, but we&apos;re doing our best here. No kanban
									boards, burndown charts, or tangled flowcharts with our Focus
									system. Just the undeniable urge to fill empty circles.
								</p>
								<Link
									href='/'
									className='mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto'
								>
									Shop Focus
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
