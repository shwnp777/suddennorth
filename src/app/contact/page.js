import ContactForm from '@/components/ContactForm';

export const metadata = { title:'Contact', description:'Start a conversation with Sudden North about your next mission, product, or system.' };

export default function ContactPage() {
	return <main className='page-main'>
		<section className='page-hero'><div className='shell page-hero-inner'><div><p className='section-kicker'>Contact</p><h1>Bring us the <span>hard problem.</span></h1></div><p className='page-hero-copy'>Tell us what you are trying to make possible. We’ll reply with clear next steps—usually within one business day.</p></div></section>
		<section className='content-section'><div className='shell contact-grid'><aside className='contact-details'><p className='section-kicker'>Direct line</p><h2>Start where you are.</h2><p>An early idea, an overloaded system, a new program, or a mission that needs momentum—we’re ready to listen.</p><ul className='contact-list'><li><span>Email</span><a href='mailto:contact@suddennorth.com'>contact@suddennorth.com</a></li><li><span>Location</span><span className='contact-value'>New England · Serving clients worldwide</span></li><li><span>Business</span><span className='contact-value'>Service-Disabled Veteran-Owned Small Business</span></li></ul><div className='notice-box'>Government teams: include your agency, program context, desired timeline, and any applicable acquisition requirements. Please do not send controlled or sensitive information through this form.</div></aside><div><div className='form-label'><span>PROJECT INTAKE / SECURE START</span><i /> AVAILABLE</div><ContactForm /></div></div></section>
	</main>;
}
