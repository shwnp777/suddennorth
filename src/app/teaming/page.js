import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import company from '@/data/company.json';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
	title: 'Teaming With Us',
	description: 'Capability statement, NAICS codes, and teaming models for prime contractors and program offices working with Sudden North, a veteran-owned engineering firm.',
	path: '/teaming',
});

const PDF_HREF = '/sudden-north-capability-statement.pdf';

export default function TeamingPage() {
	const identifiers = company.identifiers.filter((id) => id.value);
	const facts = [
		['Business', company.designation.long],
		...identifiers.map((id) => [id.label, id.value]),
		['Based in', `${company.location} · Remote-ready`],
		['Contact', company.email],
	];

	return <main className='page-main'>
		<section className='page-hero'>
			<div className='shell page-hero-inner'>
				<div><p className='section-kicker'>Teaming with us</p><h1>Your program. <span>Our workshare.</span></h1></div>
				<div>
					<p className='page-hero-copy'>For prime contractors and program offices that need a small, senior, security-minded engineering team that already speaks defense delivery.</p>
					<div className='hero-actions'>
						<a href={PDF_HREF} className='button button-primary' download>Capability statement <span aria-hidden='true'>↓</span></a>
						<a href='#inquiry' className='button button-secondary'>Start a teaming conversation</a>
					</div>
				</div>
			</div>
		</section>

		<section className='content-section light-content' id='capability-statement'>
			<div className='shell'>
				<div className='content-heading'>
					<div><p className='section-kicker dark-kicker'>Capability statement</p><h2>What we bring to the team.</h2></div>
					<p>{company.summary}</p>
				</div>
				<div className='capstat-grid'>
					<div className='capstat-competencies'>
						{company.competencies.map((group, index) => <article key={group.title}>
							<small>0{index + 1}</small>
							<h3>{group.title}</h3>
							<ul className='tag-list'>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
						</article>)}
					</div>
					<aside className='data-card' aria-label='Company data'>
						<div className='data-card-bar'><span>SN / COMPANY DATA</span><span>{company.updated.toUpperCase()}</span></div>
						<dl className='data-list'>
							{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
						</dl>
						<p className='data-card-label'>NAICS codes</p>
						<ul className='naics-list'>
							{company.naics.map((n) => <li key={n.code}><span>{n.code}</span>{n.title}</li>)}
						</ul>
						<a href={PDF_HREF} className='button button-primary data-card-download' download>Download PDF <span aria-hidden='true'>↓</span></a>
						<p className='data-card-note'>One page · Letter · Updated {company.updated}</p>
					</aside>
				</div>
			</div>
		</section>

		<section className='content-section'>
			<div className='shell'>
				<div className='content-heading'><h2>How we team.</h2><p>We fit where your program needs depth. Every role comes with founders who stay close to the work and a clear line of accountability.</p></div>
				<div className='feature-list'>
					{company.teamingRoles.map((role) => <article className='feature-item' key={role.code}><small>{role.code} / ROLE</small><h3>{role.title}</h3><p>{role.text}</p></article>)}
				</div>
			</div>
		</section>

		<section className='content-section light-content'>
			<div className='shell'>
				<div className='content-heading'><div><p className='section-kicker dark-kicker'>Why primes call us</p><h2>Less ramp-up. Fewer surprises.</h2></div><p>We have sat on your side of the table: building schedules, writing estimates, and owning delivery on large defense programs.</p></div>
				<div className='feature-list'>
					{company.differentiators.map((item, index) => <article className='feature-item' key={item.title}><small>0{index + 1}</small><h3>{item.title}</h3><p>{item.text}</p></article>)}
				</div>
			</div>
		</section>

		{company.caseStudies.length > 0 && <section className='content-section' id='case-studies'>
			<div className='shell'>
				<div className='content-heading'><h2>Case studies.</h2><p>Representative work. Client details are shared only with permission.</p></div>
				<div className='case-list'>
					{company.caseStudies.map((study) => <article className='case-card' key={study.title}>
						<div className='case-head'><small>{study.sector}</small><h3>{study.title}</h3></div>
						<dl>
							<div><dt>Challenge</dt><dd>{study.challenge}</dd></div>
							<div><dt>Approach</dt><dd>{study.approach}</dd></div>
							<div><dt>Outcome</dt><dd>{study.outcome}</dd></div>
						</dl>
					</article>)}
				</div>
			</div>
		</section>}

		<section className='content-section'>
			<div className='shell'>
				<div className='content-heading'><div><p className='section-kicker'>Who you work with</p><h2>Founder-led, every engagement.</h2></div><p>No hand-off to a bench you never met. The people who scope the work are the people who deliver it.</p></div>
				<div className='feature-list'>
					{company.founders.map((person) => <article className='feature-item' key={person.name}><small>{person.role.toUpperCase()}</small><h3>{person.name}</h3><p>{person.bio}</p></article>)}
				</div>
			</div>
		</section>

		<section className='content-section inquiry-section' id='inquiry'>
			<div className='shell contact-grid'>
				<aside className='contact-details'>
					<p className='section-kicker'>Teaming inquiry</p>
					<h2>Tell us about the pursuit.</h2>
					<p>Share the opportunity, the workshare you are considering, and your timeline. We reply within one business day.</p>
					<ul className='contact-list'>
						<li><span>Helpful to include</span><span className='contact-value'>Agency or customer, solicitation number or vehicle, set-aside goals, and proposal due date</span></li>
						<li><span>Prefer email?</span><a href={`mailto:${company.email}?subject=Teaming%20inquiry`}>{company.email}</a></li>
					</ul>
					<div className='notice-box'>Please do not send classified, CUI, or proprietary information through this form. We can exchange an NDA before detailed discussions.</div>
				</aside>
				<div>
					<div className='form-label'><span>TEAMING / PARTNER INTAKE</span><i>AVAILABLE</i></div>
					<ContactForm
						initialMarket='Government'
						messagePrefix='[Teaming inquiry] '
						messageLabel='The opportunity and the workshare you have in mind'
						messagePlaceholder='e.g. Pursuing a DoD software modernization recompete; looking for an SDVOSB partner for DevSecOps and cyber workshare. Proposal due in March.'
						successText='Inquiry received. We’ll reply within one business day.'
					/>
				</div>
			</div>
		</section>

		<section className='section cta-section'>
			<div className='shell cta-panel'>
				<div><p className='section-kicker'>Not a prime?</p><h2>Start with the free tools.</h2><p>Readiness checks and straight answers, before you spend a dollar.</p></div>
				<Link href='/resources' className='button button-secondary'>You might not need us <span aria-hidden='true'>↗</span></Link>
			</div>
		</section>
	</main>;
}
