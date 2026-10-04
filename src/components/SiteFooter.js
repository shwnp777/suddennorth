import Image from 'next/image';
import Link from 'next/link';
import TerminalLogo from '@/components/TerminalLogo';
import { CONTACT_EMAIL, contactNav, primaryNav, secondaryNav } from '@/lib/navigation';

const links = [{ name: 'Home', href: '/' }, ...primaryNav, contactNav, ...secondaryNav];

export default function SiteFooter() {
	return (
		<footer className='site-footer'>
			<div className='shell footer-top'>
				<div>
					<Link href='/' className='footer-brand terminal-link' aria-label='Sudden North home'><TerminalLogo /></Link>
					<p>Software · Cyber · Systems · Hardware</p>
				</div>
				<nav aria-label='Footer navigation'>
					{links.map((link) => <Link href={link.href} key={link.name}>{link.name}</Link>)}
				</nav>
			</div>
			<div className='shell footer-bottom'>
				<div className='footer-cert'>
					<Image src='/assets/logos/SDVOSB.svg' alt='Service-Disabled Veteran-Owned Small Business certification seal' width={80} height={80} />
					<span>Service-Disabled Veteran-Owned<br />Small Business</span>
				</div>
				<div className='footer-meta'>
					<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
					<span>© {new Date().getFullYear()} Sudden North, LLC</span>
				</div>
			</div>
		</footer>
	);
}
