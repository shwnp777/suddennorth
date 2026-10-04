import { CONTACT_EMAIL } from '@/lib/navigation';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
	title: 'Security & Vulnerability Disclosure',
	description: 'How to report a security vulnerability in suddennorth.com, and what you can expect from us in return.',
	path: '/security',
});

const sections = [
	['Scope', ['suddennorth.com and its subdomains operated by Sudden North, LLC.', 'Third-party services we use (hosting, form processing, analytics) are out of scope; please report issues in those directly to the provider.']],
	['How to report', [`Email ${CONTACT_EMAIL} with “Security” in the subject line.`, 'Include the affected URL, a description of the issue, steps to reproduce, and its potential impact. Screenshots or a short proof of concept help.']],
	['What we ask', ['Make a good-faith effort to avoid privacy violations, data destruction, and service disruption.', 'Only interact with accounts or data you own or have explicit permission to access.', 'Do not run denial-of-service, social engineering, physical, or spam testing.', 'Give us reasonable time to fix the issue before sharing it publicly.']],
	['What you can expect', ['Acknowledgment within three business days.', 'An honest assessment and regular updates until the issue is resolved.', 'Credit for your finding, with your permission, once it is fixed.', 'We will not pursue legal action against research conducted in good faith under this policy.']],
];

export default function SecurityPage() {
	return <main className='page-main'>
		<section className='page-hero'>
			<div className='shell page-hero-inner'>
				<div><p className='section-kicker'>Security</p><h1>Found something? <span>Tell us.</span></h1></div>
				<p className='page-hero-copy'>We hold our own site to the standard we bring to client systems. If you find a vulnerability, we want to hear about it and we will work with you in good faith.</p>
			</div>
		</section>
		<section className='content-section'>
			<div className='shell'>
				<div className='feature-list policy-list'>
					{sections.map(([title, items], i) => <article className='feature-item' key={title}>
						<small>0{i + 1}</small>
						<h3>{title}</h3>
						<ul className='policy-items'>{items.map((item) => <li key={item}>{item}</li>)}</ul>
					</article>)}
				</div>
				<p className='policy-foot'>Machine-readable contact details are published at <a href='/.well-known/security.txt'>/.well-known/security.txt</a> (RFC 9116).</p>
			</div>
		</section>
	</main>;
}
