import Link from 'next/link';
import AiCostBenefit from '@/components/tools/AiCostBenefit';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
	title: 'AI Cost–Benefit Calculator',
	description: 'Does the cost of AI outweigh the benefit? Model licenses, integration, security review, and oversight against real time saved. Free and private.',
	path: '/resources/ai-cost-benefit',
});

const paysOff = [
	['High-volume text work', 'Drafting, summarizing, and reformatting that people do many times a week.'],
	['Search across your own documents', 'Finding the answer buried in policies, specs, or past proposals.'],
	['Code assistance with review', 'Boilerplate, tests, and refactoring, with engineers still owning the result.'],
	['First-pass triage', 'Sorting tickets, inquiries, or logs so people start from a shortlist.'],
];

const struggles = [
	['Low-volume or one-off tasks', 'Setup and oversight cost more than the minutes saved.'],
	['High-stakes output that needs full review', 'If every line must be checked, the savings mostly disappear.'],
	['Messy or scattered data', 'The real project becomes data cleanup — budget for it honestly.'],
	['Regulated data you cannot share', 'CUI, ITAR, health, or client data may require approved environments that change the cost picture.'],
];

const hidden = [
	'Data cleanup and access permissions before the tool is useful',
	'Integration with the systems people already use',
	'Security, privacy, and contract review of the vendor and its data terms',
	'Time spent checking and correcting output (the “review tax”)',
	'Workflow and prompt upkeep as models and vendors change',
	'Monitoring, logging, and an owner who answers for the system',
	'Usage-based charges that grow faster than seat counts',
];

export default function AiCostBenefitPage() {
	return <main className='page-main'>
		<section className='page-hero tool-hero'>
			<div className='shell'>
				<nav className='crumbs' aria-label='Breadcrumb'><Link href='/resources'>Resources</Link><span aria-hidden='true'>/</span><span aria-current='page'>AI cost–benefit</span></nav>
				<div className='page-hero-inner'>
					<div><p className='section-kicker'>Tool / 02 · AI</p><h1>Does the cost <span>outweigh the benefit?</span></h1></div>
					<p className='page-hero-copy'>Most AI business cases count the license and the hoped-for savings. This one also counts adoption, review time, integration, and security, the parts that decide whether it actually pays.</p>
				</div>
				<div className='privacy-strip'><span className='privacy-dot' aria-hidden='true' />Calculated in your browser. Your numbers are never sent anywhere.</div>
			</div>
		</section>

		<section className='content-section tool-section'>
			<div className='shell'><AiCostBenefit /></div>
		</section>

		<section className='content-section light-content'>
			<div className='shell'>
				<div className='content-heading'><div><p className='section-kicker dark-kicker'>Reading the result</p><h2>Where AI earns its keep.</h2></div><p>The math only works when the task is frequent, the output is checkable, and the data can safely go where the tool runs.</p></div>
				<div className='compare-grid'>
					<div className='compare-col'>
						<p className='compare-label compare-good'>Tends to pay off</p>
						<ul>{paysOff.map(([t, d]) => <li key={t}><strong>{t}</strong><span>{d}</span></li>)}</ul>
					</div>
					<div className='compare-col'>
						<p className='compare-label compare-warn'>Often doesn’t</p>
						<ul>{struggles.map(([t, d]) => <li key={t}><strong>{t}</strong><span>{d}</span></li>)}</ul>
					</div>
				</div>
			</div>
		</section>

		<section className='content-section'>
			<div className='shell'>
				<div className='content-heading'><div><p className='section-kicker'>Hidden costs</p><h2>What most estimates leave out.</h2></div><p>Before you sign, put a number, even a rough one, next to each of these.</p></div>
				<ol className='check-list'>{hidden.map((item) => <li key={item}>{item}</li>)}</ol>
			</div>
		</section>

		<section className='section cta-section'>
			<div className='shell cta-panel'>
				<div><p className='section-kicker'>The other side of the ledger</p><h2>The benefit can become the risk.</h2><p>Read our field notes on the security cost of AI integration.</p></div>
				<Link href='/resources/ai-integration-risk' className='button button-primary'>Read the field notes <span aria-hidden='true'>↗</span></Link>
			</div>
		</section>
	</main>;
}
