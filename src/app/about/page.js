import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title:'Company', description:'Sudden North is a Service-Disabled Veteran-Owned Small Business building useful, resilient technology.', alternates: { canonical: '/about' } };

const principles = [
	['01','Clarity before complexity','We translate hard problems into a shared picture of the outcome, the constraints, and the decisions ahead.'],
	['02','Progress you can see','Working software, direct communication, and measurable milestones keep teams aligned from the first week.'],
	['03','Ownership beyond launch','We design for the people who will operate, maintain, and extend the system—not just the launch date.'],
	['04','Security in the foundation','Resilience is part of the architecture and delivery practice, not a checklist added at the end.'],
];

export default function AboutPage() {
	return <main className='page-main'>
		<section className='page-hero'><div className='shell page-hero-inner'><div><p className='section-kicker'>Company</p><h1>Small by design. <span>Serious by default.</span></h1></div><p className='page-hero-copy'>Sudden North is a veteran-owned technology company built to make difficult work clearer, faster, and more dependable.</p></div></section>
		<section className='content-section light-content'><div className='shell statement-grid'><div><p className='section-kicker dark-kicker'>Our north</p><h2>Useful technology. Honest partnership. Lasting capability.</h2></div><div className='statement-copy'><p>We started Sudden North around a simple belief: great technology work should create momentum, not dependency. That means understanding the real mission, communicating plainly, and building systems teams can own.</p><p>Our size lets us stay close to the work. Our approach brings strategy, design, and engineering into one accountable path from first question to fielded capability.</p></div></div></section>
		<section className='content-section' id='markets'><div className='shell'><div className='content-heading'><h2>Two markets. One standard.</h2><p>Government and commercial teams operate in different environments, but both deserve focused execution, resilient systems, and a partner who understands the stakes.</p></div><div className='market-grid about-markets'><article className='market-card public-card'><p className='section-kicker'>Government</p><h2>Serve the mission.</h2><p>Modernization, digital products, automation, and technical prototypes designed around real users, operating constraints, and public value.</p><div className='market-meta'><span>SDVOSB</span><span>New England based</span></div></article><article className='market-card private-card'><p className='section-kicker dark-kicker'>Commercial</p><h2>Create momentum.</h2><p>Product engineering and connected business systems for teams ready to move from idea to market—or from scattered tools to scalable operations.</p><div className='market-meta dark-meta'><span>Product + platform</span><span>Strategy through delivery</span></div></article></div></div></section>
		<section className='content-section'><div className='shell'><div className='content-heading'><h2>How we show up.</h2><p>Principles only matter when they are visible in the work.</p></div><div className='feature-list'>{principles.map(([number,title,text]) => <article className='feature-item' key={number}><small>{number}</small><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
		<section className='content-section founder-section'><div className='shell founder-grid'><div className='founder-mark'><Image src='/assets/brand/suddennorth-n.svg' alt='' width={220} height={240} /></div><div><p className='section-kicker'>Founder-led</p><blockquote>“Build deliberately, communicate clearly, and leave every team stronger than you found it.”</blockquote><div className='founder-names'><p>Ben Martin<br /><span>Co-Founder, Sudden North</span></p><p>Shawn-Patrick Bland<br /><span>Co-Founder, Sudden North</span></p></div></div></div></section>
		<section className='section cta-section'><div className='shell cta-panel'><div><p className='section-kicker'>Work with us</p><h2>Let’s build the next capability.</h2></div><Link href='/contact' className='button button-primary'>Start a conversation <span>↗</span></Link></div></section>
	</main>;
}
