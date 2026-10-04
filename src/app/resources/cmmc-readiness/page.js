import Link from 'next/link';
import CmmcReadiness from '@/components/tools/CmmcReadiness';
import { STATUS_NOTE } from '@/data/cmmcQuestions';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
	title: 'CMMC & NIST 800-171 Readiness Check',
	description: 'A free, private readiness check for CMMC Level 1 and NIST SP 800-171 (Level 2). See your gaps by control family and whether you can close them yourself.',
	path: '/resources/cmmc-readiness',
});

export default function CmmcReadinessPage() {
	return <main className='page-main'>
		<section className='page-hero tool-hero'>
			<div className='shell'>
				<nav className='crumbs' aria-label='Breadcrumb'><Link href='/resources'>Resources</Link><span aria-hidden='true'>/</span><span aria-current='page'>Readiness check</span></nav>
				<div className='page-hero-inner'>
					<div><p className='section-kicker'>Tool / 01 · Cyber</p><h1>CMMC readiness, <span>without the sales pitch.</span></h1></div>
					<p className='page-hero-copy'>Answer honestly and see where you stand, family by family, with a next step for every gap. About ten minutes.</p>
				</div>
				<div className='privacy-strip'><span className='privacy-dot' aria-hidden='true' />Your answers stay in this browser tab. Nothing is sent to us or saved; closing the tab clears them.</div>
			</div>
		</section>
		<section className='content-section tool-section'>
			<div className='shell tool-layout'>
				<div className='tool-main'><CmmcReadiness /></div>
				<aside className='tool-aside'>
					<div className='status-card'>
						<p className='data-card-label'>Program status · {STATUS_NOTE.asOf}</p>
						<p>{STATUS_NOTE.text}</p>
						<a href={STATUS_NOTE.source} target='_blank' rel='noopener noreferrer'>Check DoD CIO for updates ↗</a>
					</div>
					<div className='status-card'>
						<p className='data-card-label'>How scoring works</p>
						<p>Yes = full credit, Partly = half, No or Not sure = none. Domain bars show where effort will matter most.</p>
					</div>
				</aside>
			</div>
		</section>
	</main>;
}
