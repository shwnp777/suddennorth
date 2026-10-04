import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';

const systemReadout = [['01','Discover','Frame the mission'],['02','Engineer','Build the right system'],['03','Deploy','Ship with confidence']];
const capabilities = [
	{ number:'01', title:'Software', text:'Purpose-built web, mobile, and cloud products engineered for real users and durable operations.', tags:['Application engineering','Cloud platforms','Data & AI'] },
	{ number:'02', title:'Cyber', text:'Security woven into the architecture, delivery pipeline, and day-to-day operation of every system.', tags:['Secure by design','Risk reduction','Operational resilience'] },
	{ number:'03', title:'Systems', text:'Connected workflows, infrastructure, and automation that turn fragmented tools into one dependable system.', tags:['Systems integration','Automation','Modernization'] },
	{ number:'04', title:'Hardware', text:'Practical prototyping and edge solutions that bridge the physical environment and the software layer.', tags:['Rapid prototyping','Edge systems','Technical validation'] },
];

export const metadata = pageMetadata({ path: '/' });

export default function Home() {
	return (
		<main>
			<section className='hero' id='top'>
				<div className='hero-grid' aria-hidden='true' /><div className='signal-orbit signal-orbit-one' aria-hidden='true' /><div className='signal-orbit signal-orbit-two' aria-hidden='true' />
				<div className='shell hero-layout'>
					<div className='hero-copy'>
						<p className='eyebrow'><span /> Mission-driven technology studio</p>
						<h1>Build what matters.<br /><span>Move what’s possible.</span></h1>
						<p className='hero-lede'>Sudden North designs and delivers secure software, resilient systems, and integrated technology for public missions and private innovation.</p>
						<div className='hero-actions'><Link href='/contact' className='button button-primary'>Start a conversation <span aria-hidden='true'>↗</span></Link><Link href='/services' className='button button-secondary'>Explore capabilities</Link></div>
						<div className='trust-line'><span className='trust-mark'>SDVOSB</span><span>Service-Disabled Veteran-Owned Small Business</span></div>
					</div>
					<div className='mission-panel' aria-label='Sudden North delivery approach'>
						<div className='panel-topline'><span>SN / OPS</span><span className='status'><i /> SYSTEM READY</span></div>
						<div className='north-field'><div className='field-rings' aria-hidden='true' /><div className='north-arrow' aria-hidden='true'>N</div><div className='coordinate coordinate-a'>44° N</div><div className='coordinate coordinate-b'>071° W</div><p>ONE TEAM<br />FULL SYSTEM</p></div>
						<div className='system-readout'>{systemReadout.map(([number,title,detail]) => <div className='readout-row' key={number}><span>{number}</span><strong>{title}</strong><small>{detail}</small></div>)}</div>
					</div>
				</div>
				<div className='shell capability-strip' aria-label='Core capabilities'><span>Software</span><i /><span>Cyber</span><i /><span>Systems</span><i /><span>Hardware</span></div>
			</section>

			<section className='section light-section'>
				<div className='shell statement-grid'>
					<div><p className='section-kicker dark-kicker'>Built for the real world</p><h2>From ambitious idea to dependable operation.</h2></div>
					<div className='statement-copy'><p>Technology creates leverage only when it works in context. We bring product thinking, disciplined engineering, and practical delivery into one focused team.</p><p>Whether the mission serves a federal program or a growing company, we make complexity understandable, decisions visible, and progress measurable.</p><Link href='/about' className='text-link'>How we work <span>↗</span></Link></div>
				</div>
			</section>

			<section className='section capability-section'>
				<div className='shell'>
					<div className='section-heading'><div><p className='section-kicker'>Core capabilities</p><h2>One team. The whole system.</h2></div><p>We connect strategy to execution across the layers that matter most.</p></div>
					<div className='capability-grid'>{capabilities.map((item) => <article className='capability-card' key={item.title}><span className='card-number'>/{item.number}</span><div className='card-glyph' aria-hidden='true'>{item.title.slice(0,2).toUpperCase()}</div><h3>{item.title}</h3><p>{item.text}</p><ul>{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
					<div className='section-link-row'><Link href='/services' className='text-link light-link'>View all capabilities <span>↗</span></Link></div>
				</div>
			</section>

			<section className='section market-section' id='markets'>
				<div className='shell market-grid'>
					<article className='market-card public-card'><p className='section-kicker'>Public sector</p><h2>Mission outcomes over technology theater.</h2><p>We help teams modernize workflows, prototype new capabilities, and deliver secure, usable systems with the clarity public missions demand.</p><Link href='/about#markets' className='text-link light-link'>For government teams <span>↗</span></Link><span className='market-code'>PUBLIC // 01</span></article>
					<article className='market-card private-card'><p className='section-kicker dark-kicker'>Commercial</p><h2>Product momentum without the growing pains.</h2><p>We help founders and operators turn complex ideas into focused products, connected operations, and a technology foundation built to scale.</p><Link href='/about#markets' className='text-link'>For private organizations <span>↗</span></Link><span className='market-code'>PRIVATE // 02</span></article>
				</div>
			</section>

			<section className='section path-section' aria-labelledby='paths-title'>
				<div className='shell'>
					<div className='section-heading'><div><p className='section-kicker'>Two ways in</p><h2 id='paths-title'>Team with us, or start free.</h2></div><p>Primes get a capability partner. Everyone else gets honest tools first.</p></div>
					<div className='path-grid'>
						<Link href='/teaming' className='path-card'>
							<span className='path-code'>PATH / 01 · PRIMES &amp; PROGRAMS</span>
							<h3>Teaming with us</h3>
							<p>Capability statement, NAICS codes, and how we fit into your pursuit as a veteran-owned subcontractor.</p>
							<span className='text-link light-link'>Capability statement <span>↗</span></span>
						</Link>
						<Link href='/resources' className='path-card path-card-alt'>
							<span className='path-code'>PATH / 02 · BEFORE YOU SPEND</span>
							<h3>You might not need us</h3>
							<p>A private CMMC readiness check, an AI cost–benefit calculator, and field notes on AI integration risk.</p>
							<span className='text-link light-link'>Free tools <span>↗</span></span>
						</Link>
					</div>
				</div>
			</section>

			<section className='section cta-section'>
				<div className='shell cta-panel'><div><p className='section-kicker'>Your next move</p><h2>Bring us the hard problem.</h2><p>We’ll help you find the clear path forward.</p></div><Link href='/contact' className='button button-primary'>Start a conversation <span>↗</span></Link></div>
			</section>
		</main>
	);
}
