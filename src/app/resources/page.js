import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
	title: 'You Might Not Need Us',
	description: 'Free tools and straight answers before you spend money: a NIST SP 800-171 / CMMC readiness check, an AI cost-benefit calculator, and field notes on AI integration risk.',
	path: '/resources',
});

const tools = [
	{
		href: '/resources/cmmc-readiness',
		code: 'TOOL / 01',
		tag: 'Cyber',
		title: 'CMMC & NIST 800-171 readiness check',
		text: 'Fifteen to forty-four plain-English questions. See where you stand by control family, which gaps matter, and whether you can close them yourself.',
		meta: ['~10 minutes', 'Runs in your browser'],
	},
	{
		href: '/resources/ai-cost-benefit',
		code: 'TOOL / 02',
		tag: 'AI',
		title: 'AI cost–benefit calculator',
		text: 'Model the real costs of an AI rollout — licenses, integration, security review, oversight — against the time it actually saves. Get payback and break-even.',
		meta: ['~3 minutes', 'Runs in your browser'],
	},
	{
		href: '/resources/ai-integration-risk',
		code: 'FIELD NOTES / 01',
		tag: 'Research',
		title: 'When the benefit becomes the attack surface',
		text: 'What we are learning about the security risks of wiring AI agents into real systems, including agents that talk to other agents.',
		meta: ['6 min read', 'Updated Oct 2026'],
	},
];

const references = [
	['NIST SP 800-171 Rev. 2', 'The 110 requirements behind DFARS 252.204-7012 and CMMC Level 2. Dense, but it is the source.', 'https://csrc.nist.gov/pubs/sp/800/171/r2/upd1/final'],
	['DoD CIO — CMMC', 'Official program status, guides, and scoping documents. Check here before acting on anyone’s summary, including ours.', 'https://dodcio.defense.gov/CMMC/'],
	['Project Spectrum', 'DoD-funded, free cybersecurity training, tools, and readiness checks for small defense contractors.', 'https://www.projectspectrum.io/'],
	['APEX Accelerators', 'Free, local government-contracting counseling: registrations, bids, and compliance basics.', 'https://www.apexaccelerators.us/'],
	['CISA Cyber Hygiene Services', 'Free external vulnerability scanning and web application scanning from CISA.', 'https://www.cisa.gov/cyber-hygiene-services'],
	['NIST Small Business Cybersecurity Corner', 'Practical, plain-language guidance and templates sized for small teams.', 'https://www.nist.gov/itl/smallbusinesscyber'],
	['NIST AI Risk Management Framework', 'A vendor-neutral way to think through AI risk before and after deployment.', 'https://www.nist.gov/itl/ai-risk-management-framework'],
	['OWASP GenAI Security Project', 'The Top 10 lists for LLM and agentic applications. Our field notes build on them.', 'https://genai.owasp.org/'],
];

const callSignals = [
	['You handle CUI and your gaps are technical', 'Multi-factor everywhere, FIPS-validated encryption, centralized logging, and boundary protection take engineering, not just paperwork.'],
	['A contract or award depends on a date', 'If a proposal, recompete, or prime’s flow-down puts a deadline on your score, outside help can compress the timeline.'],
	['AI is touching real systems or real data', 'Once an AI tool can read your files, send messages, or call other systems, design and security review pay for themselves.'],
	['You have tried, and it is still not moving', 'Sometimes the fastest path is a second set of eyes for a week, not a long engagement.'],
];

export default function ResourcesPage() {
	return <main className='page-main'>
		<section className='page-hero'>
			<div className='shell page-hero-inner'>
				<div><p className='section-kicker'>Free tools &amp; resources</p><h1>You might not <span>need us.</span></h1></div>
				<p className='page-hero-copy'>Many problems don’t need a contractor. Start here: free tools, honest guidance, and the official sources we use ourselves. If the results show you can handle it in-house, that is a good outcome.</p>
			</div>
		</section>

		<section className='content-section'>
			<div className='shell'>
				<div className='content-heading'><h2>Start with a tool.</h2><p>Everything runs in your browser. Your answers are never sent to us or stored, so you can be candid about the gaps.</p></div>
				<div className='tool-grid'>
					{tools.map((tool) => <Link href={tool.href} className='tool-card' key={tool.href}>
						<div className='tool-card-top'><span>{tool.code}</span><span className='tool-tag'>{tool.tag}</span></div>
						<h3>{tool.title}</h3>
						<p>{tool.text}</p>
						<div className='tool-card-foot'><span>{tool.meta.join(' · ')}</span><span className='tool-go' aria-hidden='true'>↗</span></div>
					</Link>)}
				</div>
			</div>
		</section>

		<section className='content-section light-content'>
			<div className='shell'>
				<div className='content-heading'><div><p className='section-kicker dark-kicker'>Trusted references</p><h2>Go to the source.</h2></div><p>Free, official, and vendor-neutral. Each one has a short note on when it is worth your time.</p></div>
				<ul className='reference-list'>
					{references.map(([title, note, href]) => <li key={href}>
						<a href={href} target='_blank' rel='noopener noreferrer'>
							<strong>{title}<span className='sr-only'> (opens in a new tab)</span></strong>
							<span>{note}</span>
							<i aria-hidden='true'>↗</i>
						</a>
					</li>)}
				</ul>
			</div>
		</section>

		<section className='content-section'>
			<div className='shell'>
				<div className='content-heading'><div><p className='section-kicker'>Honest triage</p><h2>When it is worth a call.</h2></div><p>If none of these apply, the tools and references above may be all you need. If one does, a short conversation usually saves time and money.</p></div>
				<div className='feature-list'>
					{callSignals.map(([title, text], index) => <article className='feature-item' key={title}><small>SIGNAL / 0{index + 1}</small><h3>{title}</h3><p>{text}</p></article>)}
				</div>
			</div>
		</section>

		<section className='section cta-section'>
			<div className='shell cta-panel'>
				<div><p className='section-kicker'>Still stuck?</p><h2>Bring us the hard part.</h2><p>We’ll tell you plainly whether it needs us.</p></div>
				<Link href='/contact' className='button button-primary'>Start a conversation <span aria-hidden='true'>↗</span></Link>
			</div>
		</section>
	</main>;
}
