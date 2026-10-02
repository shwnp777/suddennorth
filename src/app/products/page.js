import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title:'Products', description:'Explore products designed and built by Sudden North.' };

export default function ProductsPage() {
	return <main className='page-main'>
		<section className='page-hero'><div className='shell page-hero-inner'><div><p className='section-kicker'>Products</p><h1>Ideas turned into <span>working systems.</span></h1></div><p className='page-hero-copy'>We do more than advise. Sudden North creates and operates products that solve focused, real-world problems.</p></div></section>
		<section className='content-section'><div className='shell product-feature'><div className='product-feature-visual'><div className='phone-frame'><Image src='/assets/illustrations/preview1.PNG' alt='Safe Stream parental controls screen' fill sizes='(max-width: 800px) 80vw, 360px' /></div><div className='product-pulse' /></div><div className='product-feature-copy'><p className='section-kicker'>Product / 001</p><div className='product-name'><Image src='/assets/logos/SafeStream.png' alt='' width={64} height={64} /><span>Safe Stream</span></div><h2>Safer streaming, designed for families.</h2><p>Approve the YouTube channels, playlists, and videos you trust. Safe Stream gives children a focused library without ads, autoplay, or recommendation loops.</p><ul className='check-list'><li>Parent-approved content only</li><li>No ads or autoplay</li><li>Secure, simple parental controls</li><li>Available for iPhone and iPad</li></ul><Link href='/products/safestream' className='button button-primary'>Explore Safe Stream <span>↗</span></Link></div></div></section>
		<section className='content-section light-content'><div className='shell statement-grid'><div><p className='section-kicker dark-kicker'>Have an idea?</p><h2>Your product can be next.</h2></div><div className='statement-copy'><p>We partner with teams to validate, design, engineer, and launch products that deserve to exist. Start with the problem; we’ll help shape the shortest credible path to value.</p><Link href='/contact' className='text-link'>Build with Sudden North <span>↗</span></Link></div></div></section>
	</main>;
}
