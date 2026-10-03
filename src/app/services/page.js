import Link from 'next/link';

export const metadata = { title:'Capabilities', description:'Software, cybersecurity, systems integration, and hardware prototyping for government and commercial teams.', alternates: { canonical: '/services' } };

const services = [
	['01 / SOFTWARE','Application engineering','Modern web, mobile, cloud, and data products shaped around the mission—not a generic stack.',['Product strategy & UX','Full-stack development','Cloud architecture','Data and AI workflows']],
	['02 / CYBER','Secure by design','Practical security decisions embedded from architecture through deployment and operations.',['Threat-aware architecture','Secure development practices','Identity & access patterns','Resilience planning']],
	['03 / SYSTEMS','Connected operations','Integration and automation that make critical information easier to access, trust, and act on.',['Systems integration','Workflow automation','API design','Legacy modernization']],
	['04 / HARDWARE','From signal to system','Rapid technical exploration at the boundary between physical environments and digital products.',['Concept prototyping','Edge computing','Sensor integration','Technical validation']],
];
const process = [['01','Frame','Define the outcome, constraints, users, and risk before choosing the technology.'],['02','Prove','Build the smallest credible slice that validates the hard assumptions.'],['03','Deliver','Move in visible increments with clear decisions, demos, and documentation.'],['04','Strengthen','Measure what matters, reduce operational drag, and extend with confidence.']];

export default function ServicesPage() {
	return <main className='page-main'>
		<section className='page-hero'><div className='shell page-hero-inner'><div><p className='section-kicker'>Capabilities</p><h1>Technology built for <span>the mission.</span></h1></div><p className='page-hero-copy'>Sudden North brings software, cyber, systems, and hardware thinking together so critical work moves from concept to dependable operation.</p></div></section>
		<section className='content-section'><div className='shell'><div className='content-heading'><h2>A connected capability set.</h2><p>Complex problems rarely live in one layer. We work across the product, infrastructure, workflow, and physical environment—bringing in exactly what the outcome requires.</p></div><div className='feature-list'>{services.map(([label,title,text,tags]) => <article className='feature-item' key={title}><small>{label}</small><h3>{title}</h3><p>{text}</p><ul className='tag-list'>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article>)}</div></div></section>
		<section className='content-section light-content'><div className='shell'><div className='content-heading'><h2>Disciplined from day one.</h2><p>Our approach keeps the work understandable and useful. Short feedback loops surface risk early, while clear ownership and documentation protect the value after launch.</p></div><div className='process-list'>{process.map(([number,title,text]) => <div className='process-step' key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
		<section className='section cta-section'><div className='shell cta-panel'><div><p className='section-kicker'>Need a capability partner?</p><h2>Let’s define the mission.</h2><p>Start with the outcome. We’ll help map the path.</p></div><Link href='/contact' className='button button-primary'>Start a conversation <span>↗</span></Link></div></section>
	</main>;
}
