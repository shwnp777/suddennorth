import Image from 'next/image';
import Link from 'next/link';

const navigation = [
	{ name: 'Capabilities', href: '/services' },
	{ name: 'Markets', href: '/about#markets' },
	{ name: 'Products', href: '/products' },
	{ name: 'Company', href: '/about' },
];

export default function SiteHeader() {
	return (
		<header className='site-header'>
			<nav className='shell nav-bar' aria-label='Primary navigation'>
				<Link href='/' className='brand' aria-label='Sudden North home'>
					<Image src='/assets/brand/logo-horizontal-on-dark.svg' alt='Sudden North' width={760} height={160} priority />
				</Link>
				<div className='desktop-nav'>
					{navigation.map((item) => <Link href={item.href} key={item.name}>{item.name}</Link>)}
				</div>
				<Link href='/contact' className='nav-cta'>Let’s talk <span>↗</span></Link>
				<details className='mobile-nav'>
					<summary aria-label='Open navigation'><span /><span /></summary>
					<div className='mobile-nav-panel'>
						{navigation.map((item) => <Link href={item.href} key={item.name}>{item.name}</Link>)}
						<Link href='/contact'>Start a conversation</Link>
					</div>
				</details>
			</nav>
		</header>
	);
}
