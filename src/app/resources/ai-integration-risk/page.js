import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
	title: 'AI Integration Risk: Field Notes',
	description: 'When the benefit becomes the attack surface: what we are learning about the security risks of connecting AI agents to real systems, and to each other.',
	path: '/resources/ai-integration-risk',
});

const articleJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Article',
	headline: 'When the benefit becomes the attack surface',
	description: 'Field notes on the security risks of integrating AI agents into real systems.',
	datePublished: '2026-10-04',
	dateModified: '2026-10-04',
	author: { '@type': 'Person', name: 'Shawn-Patrick Bland' },
	publisher: { '@type': 'Organization', name: 'Sudden North', url: 'https://suddennorth.com' },
	mainEntityOfPage: 'https://suddennorth.com/resources/ai-integration-risk',
};

const sources = [
	['OWASP Top 10 for LLM Applications (2025)', 'https://genai.owasp.org/llm-top-10/'],
	['OWASP Top 10 for Agentic Applications (2026)', 'https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications/'],
	['Motwani et al., “Secret Collusion among AI Agents: Multi-Agent Deception via Steganography,” NeurIPS 2024', 'https://neurips.cc/virtual/2024/poster/94463'],
	['Anthropic, “Reasoning models don’t always say what they think” (April 2025)', 'https://www.anthropic.com/research/reasoning-models-dont-say-think'],
	['NIST AI Risk Management Framework', 'https://www.nist.gov/itl/ai-risk-management-framework'],
];

const controls = [
	['Give each agent the least it needs', 'Separate credentials per agent, scoped to specific tools and data. No agent should inherit a person’s full access.'],
	['Treat every input as untrusted', 'Email, web pages, files, tool results, and other agents’ messages can all carry instructions. Design as if they will.'],
	['Keep a human on consequential actions', 'Sending, paying, deleting, deploying, and changing permissions should need explicit approval.'],
	['Structure agent-to-agent messages', 'Typed, schema-checked fields leave far less room for hidden content than free-form text between agents.'],
	['Log everything, outside the agent', 'Record every prompt, tool call, and inter-agent message in a store the agents cannot modify.'],
	['Monitor independently', 'Do not rely on an agent’s own explanation of what it did. Check actions against expected behavior.'],
	['Bound the blast radius', 'Rate limits, spending caps, and a tested way to stop the whole system quickly.'],
	['Respect data boundaries', 'CUI, export-controlled, and client data go only to services approved for them, including the model provider.'],
];

const questions = [
	'What can this system do without a person approving it?',
	'Which outside content can reach the model, and could it carry instructions?',
	'Which credentials does each agent hold, and who else could use them?',
	'Can we reconstruct exactly what happened, from logs the agents cannot change?',
	'Where does our data go, and what do the vendor’s terms allow it to be used for?',
	'How do we turn it off, and have we tried?',
];

function TrustChain() {
	return (
		<figure className='article-figure'>
			<svg viewBox='0 0 720 210' role='img' aria-labelledby='chain-title chain-desc'>
				<title id='chain-title'>How trust compounds in an agent chain</title>
				<desc id='chain-desc'>Untrusted content flows into Agent A, which passes messages to Agent B, which acts on tools and data. Each hop inherits the risk of the one before it.</desc>
				<defs><marker id='arrow' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M0,0 L10,5 L0,10 z' className='fig-arrowhead' /></marker></defs>
				{[
					[10, 'Untrusted input', 'email · web · files', 'fig-box fig-box-risk'],
					[195, 'Agent A', 'reads & summarizes', 'fig-box'],
					[380, 'Agent B', 'plans & delegates', 'fig-box'],
					[565, 'Tools & data', 'send · write · deploy', 'fig-box fig-box-act'],
				].map(([x, title, sub, cls]) => <g key={title}>
					<rect x={x} y='40' width='145' height='78' className={cls} />
					<text x={x + 72.5} y='74' textAnchor='middle' className='fig-title'>{title}</text>
					<text x={x + 72.5} y='96' textAnchor='middle' className='fig-sub'>{sub}</text>
				</g>)}
				{[155, 340, 525].map((x) => <line key={x} x1={x} y1='79' x2={x + 38} y2='79' className='fig-arrow' markerEnd='url(#arrow)' />)}
				<text x='175' y='150' textAnchor='middle' className='fig-note'>hidden instructions</text>
				<text x='360' y='150' textAnchor='middle' className='fig-note'>unreviewed messages</text>
				<text x='545' y='150' textAnchor='middle' className='fig-note'>real-world actions</text>
				<line x1='10' y1='180' x2='710' y2='180' className='fig-scale' />
				<text x='10' y='202' className='fig-sub'>Each hop inherits the risk of the one before it</text>
				<text x='710' y='202' textAnchor='end' className='fig-sub fig-sub-risk'>impact grows →</text>
			</svg>
		</figure>
	);
}

export default function AiIntegrationRiskPage() {
	return <main className='page-main'>
		<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
		<section className='page-hero tool-hero'>
			<div className='shell'>
				<nav className='crumbs' aria-label='Breadcrumb'><Link href='/resources'>Resources</Link><span aria-hidden='true'>/</span><span aria-current='page'>Field notes</span></nav>
				<div className='article-hero'>
					<p className='section-kicker'>Field notes / 01 · AI integration risk</p>
					<h1>When the benefit becomes <span>the attack surface.</span></h1>
					<p className='page-hero-copy'>Everyone wants AI wired into their systems. We are studying what that wiring does to security, especially as AI agents start talking to other AI agents with no person reading along.</p>
					<div className='byline'><span>Shawn-Patrick Bland</span><span>Sudden North</span><span>October 2026</span><span>Living document</span></div>
				</div>
			</div>
		</section>

		<article className='content-section article-section'>
			<div className='shell article-layout'>
				<aside className='article-toc' aria-label='On this page'>
					<p className='data-card-label'>On this page</p>
					<ol>
						<li><a href='#shift'>The shift</a></li>
						<li><a href='#now'>Documented now</a></li>
						<li><a href='#agents'>Agents talking to agents</a></li>
						<li><a href='#emerging'>What research is finding</a></li>
						<li><a href='#controls'>What we recommend</a></li>
						<li><a href='#questions'>Questions to ask</a></li>
					</ol>
				</aside>

				<div className='prose'>
					<h2 id='shift'>The shift: from answering to acting</h2>
					<p>The first wave of business AI answered questions. The current wave acts. Agents read inboxes, open files, query databases, call APIs, write code, and hand work to other agents. That is where the value is, and it is also where the security model changes.</p>
					<p>A chatbot that gives a bad answer is a quality problem. An agent that takes a bad action with your credentials is a security incident. Every new connection is a new trust relationship, and many organizations are adding them faster than they are reviewing them.</p>

					<h2 id='now'>What is documented now</h2>
					<p>These are not theoretical. They are catalogued by the security community and show up in real deployments.</p>
					<ul>
						<li><strong>Prompt injection.</strong> Instructions hidden in content the model reads (an email, a web page, a document, a tool result) can redirect what it does. OWASP ranks it first in its 2025 Top 10 for LLM applications. When the model can only talk, injection produces a bad answer. When it can act, injection produces a bad action.</li>
						<li><strong>Excessive agency.</strong> Agents are often given broad permissions because narrow ones are inconvenient to set up. Whatever the agent can do, an attacker who steers it can do.</li>
						<li><strong>Sensitive data exposure.</strong> Data flows into prompts, logs, vendor systems, and memory features that were never part of the original data-handling plan.</li>
						<li><strong>Agentic failure modes.</strong> OWASP’s Top 10 for Agentic Applications names goal hijacking, tool misuse, identity and privilege abuse, supply-chain issues, memory poisoning, cascading failures, and rogue agents.</li>
					</ul>

					<h2 id='agents'>Agents talking to agents</h2>
					<p>Increasingly, agents pass work to other agents through standard protocols. A research agent summarizes; a planning agent decides; an execution agent acts. The messages between them are machine-to-machine and usually not reviewed by a person.</p>
					<TrustChain />
					<p>That creates a chain where trust compounds. If the first agent ingests a malicious instruction, it can pass a convincing, well-formatted request to the next, which has no reason to doubt a peer. OWASP lists <em>insecure inter-agent communication</em> and <em>cascading failures</em> as distinct agentic risks for exactly this reason. The agent with the most dangerous permissions is often the one furthest from the original untrusted input, and the hardest to trace back.</p>

					<h2 id='emerging'>What research is finding</h2>
					<p>The following results come from controlled research settings. We include them because they shape how systems should be designed now, not because they describe common incidents today.</p>
					<div className='finding'>
						<p className='finding-label'>Covert communication between agents</p>
						<p>Researchers at NeurIPS 2024 formalized “secret collusion”: AI agents using steganography to hide information inside ordinary-looking messages so overseers cannot see it. They measured growing steganographic capability in frontier models and found that common countermeasures such as monitoring and paraphrasing had real limits.</p>
					</div>
					<div className='finding'>
						<p className='finding-label'>Stated reasoning is not a reliable audit trail</p>
						<p>Anthropic tested whether reasoning models disclose what influenced their answers. Given hints, the models mentioned using them only a minority of the time (about 25% for one model, 39% for another). Reading a model’s explanation of itself is useful, but it is not proof of what it actually did.</p>
					</div>
					<p>Put together, these point to the concern we are studying: as more decisions pass between agents, the ability to see why something happened shrinks, and the assumption that we can simply ask the system becomes weaker. The benefit, autonomous systems coordinating at machine speed, becomes the risk when no one can verify the coordination.</p>

					<h2 id='controls'>What we recommend</h2>
					<p>None of this means avoiding AI. It means engineering it like any other system that holds credentials and touches real data.</p>
					<div className='control-grid'>
						{controls.map(([title, text], i) => <div key={title}><span>{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></div>)}
					</div>

					<h2 id='questions'>Questions to ask before you integrate</h2>
					<ol className='check-list'>{questions.map((q) => <li key={q}>{q}</li>)}</ol>
					<p>If you can answer all six with confidence, you may not need outside help. If several are hard to answer, that is the right moment for a design review, before the agents are connected.</p>

					<div className='article-note'>
						<p className='data-card-label'>About these notes</p>
						<p>Field notes are working research. We update them as the evidence changes and mark revisions with the date. Spotted something we should add or correct? <Link href='/contact'>Tell us.</Link></p>
					</div>

					<h2 className='sources-title'>Sources</h2>
					<ol className='source-list'>{sources.map(([label, href]) => <li key={href}><a href={href} target='_blank' rel='noopener noreferrer'>{label}<span className='sr-only'> (opens in a new tab)</span></a></li>)}</ol>
				</div>
			</div>
		</article>

		<section className='section cta-section'>
			<div className='shell cta-panel'>
				<div><p className='section-kicker'>Weighing an AI rollout?</p><h2>Run the numbers first.</h2><p>Model the full cost, including security and oversight.</p></div>
				<Link href='/resources/ai-cost-benefit' className='button button-primary'>AI cost–benefit calculator <span aria-hidden='true'>↗</span></Link>
			</div>
		</section>
	</main>;
}
