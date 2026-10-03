'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import TerminalLogo from '@/components/TerminalLogo';
import { CONTACT_EMAIL, contactNav, primaryNav } from '@/lib/navigation';

const menuItems = [...primaryNav, contactNav];

function isCurrent(pathname, href) {
	return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
	const pathname = usePathname() || '/';
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const toggleRef = useRef(null);
	const panelRef = useRef(null);

	// Close the menu whenever the route changes (the header persists across navigations).
	useEffect(() => { setOpen(false); }, [pathname]);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const root = document.documentElement;
		root.classList.toggle('menu-open', open);
		if (!open) return undefined;

		const panel = panelRef.current;
		const focusables = () => [toggleRef.current, ...panel.querySelectorAll('a[href]')];
		const firstLink = panel.querySelector('a[href]');
		const focusTimer = window.setTimeout(() => firstLink?.focus({ preventScroll: true }), 120);

		const onKey = (event) => {
			if (event.key === 'Escape') {
				setOpen(false);
				toggleRef.current?.focus();
				return;
			}
			if (event.key !== 'Tab') return;
			const items = focusables();
			const first = items[0];
			const last = items[items.length - 1];
			if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
			else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
		};
		const desktop = window.matchMedia('(min-width: 961px)');
		const onResize = (event) => { if (event.matches) setOpen(false); };

		document.addEventListener('keydown', onKey);
		desktop.addEventListener('change', onResize);
		return () => {
			window.clearTimeout(focusTimer);
			root.classList.remove('menu-open');
			document.removeEventListener('keydown', onKey);
			desktop.removeEventListener('change', onResize);
		};
	}, [open]);

	return (
		<header className='site-header' data-scrolled={scrolled || undefined} data-menu-open={open || undefined}>
			<nav className='shell nav-bar' aria-label='Primary navigation'>
				<Link href='/' className='brand terminal-link' aria-label='Sudden North home'>
					<TerminalLogo />
				</Link>
				<div className='desktop-nav'>
					{primaryNav.map((item) => (
						<Link href={item.href} key={item.name} aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}>{item.name}</Link>
					))}
				</div>
				<Link href={contactNav.href} className='nav-cta'>Let’s talk <span aria-hidden='true'>↗</span></Link>
				<button
					ref={toggleRef}
					type='button'
					className='menu-toggle'
					aria-expanded={open}
					aria-controls='site-menu'
					aria-label={open ? 'Close menu' : 'Open menu'}
					onClick={() => setOpen((value) => !value)}
				>
					<span aria-hidden='true' /><span aria-hidden='true' />
				</button>
			</nav>

			<div
				id='site-menu'
				ref={panelRef}
				className='menu-panel'
				role='dialog'
				aria-modal='true'
				aria-label='Site menu'
				inert={!open}
			>
				<div className='menu-backdrop' aria-hidden='true' />
				<div className='shell menu-inner'>
					<p className='menu-prompt' aria-hidden='true'><span>$</span> ls ~/sudden_north</p>
					<ol className='menu-links'>
						{menuItems.map((item, index) => (
							<li key={item.name} style={{ '--item': index }}>
								<Link href={item.href} aria-current={isCurrent(pathname, item.href) ? 'page' : undefined} onClick={() => setOpen(false)}>
									<span className='menu-index' aria-hidden='true'>0{index + 1}</span>
									<span className='menu-label'>{item.name}</span>
									<span className='menu-path' aria-hidden='true'>{item.path}</span>
								</Link>
							</li>
						))}
					</ol>
					<div className='menu-foot' style={{ '--item': menuItems.length }}>
						<Link href={contactNav.href} className='button button-primary' onClick={() => setOpen(false)}>Start a conversation <span aria-hidden='true'>↗</span></Link>
						<div className='menu-meta'>
							<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
							<span>SDVOSB · New England</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
