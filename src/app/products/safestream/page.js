import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title:'Safe Stream', description:'A safer YouTube experience that keeps parents in control.' };

const features = [
	['01','Approve what you trust','Choose the channels, playlists, and videos available in each child’s library.'],
	['02','Remove the noise','No advertising, autoplay, distracting thumbnails, or algorithm-led detours.'],
	['03','Set clear boundaries','Manage access with a parent PIN and create a focused experience for every profile.'],
];

export default function SafeStreamPage() {
	return <main className='page-main safestream-page'>
		<section className='safe-hero'><div className='shell safe-hero-grid'><div><div className='product-name'><Image src='/assets/logos/SafeStream.png' alt='' width={72} height={72} /><span>Safe Stream</span></div><p className='section-kicker'>A Sudden North product</p><h1>More control.<br /><span>Less algorithm.</span></h1><p>Build a video library you trust. Safe Stream gives children a calmer YouTube experience made entirely from content parents approve.</p><div className='hero-actions'><a href='https://apps.apple.com/us/app/safe-stream-app/id6757622774' target='_blank' rel='noreferrer' className='button button-primary'>View on the App Store <span>↗</span></a><a href='#how' className='button button-secondary'>See how it works</a></div><Link href='/products/safestream/privacy-policy' className='privacy-link'>Privacy policy</Link></div><div className='safe-device-stack'><div className='safe-phone back-phone'><Image src='/assets/illustrations/preview2.PNG' alt='Safe Stream approved content screen' fill sizes='300px' /></div><div className='safe-phone front-phone'><Image src='/assets/illustrations/preview1.PNG' alt='Safe Stream profile screen' fill priority sizes='300px' /></div></div></div></section>
		<section className='content-section' id='how'><div className='shell'><div className='content-heading'><h2>A simple idea, carefully built.</h2><p>Parents decide what belongs. Children get a clean, focused place to watch it.</p></div><div className='feature-list'>{features.map(([number,title,text]) => <article className='feature-item' key={number}><small>{number}</small><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
		<section className='content-section light-content'><div className='shell safe-video-grid'><div><p className='section-kicker dark-kicker'>Guided setup</p><h2>Connect in a few clear steps.</h2><p>Safe Stream uses your own YouTube Data API key. Follow the walkthrough to create and connect it.</p></div><div className='video-frame'><iframe src='https://www.youtube.com/embed/dTVAPNoVrvs' title='Safe Stream setup guide' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen /></div></div></section>
		<section className='content-section'><div className='shell'><div className='content-heading'><h2>Built for the family, not the feed.</h2><p>Thoughtful controls stay out of the way once the library is ready.</p></div><div className='screenshot-grid'>{['preview1.PNG','preview2.PNG','preview3.PNG'].map((name,index) => <div className='screenshot-card' key={name}><Image src={`/assets/illustrations/${name}`} alt={`Safe Stream app screen ${index+1}`} fill sizes='(max-width: 700px) 90vw, 30vw' /></div>)}</div></div></section>
		<section className='section cta-section'><div className='shell cta-panel'><div><p className='section-kicker'>Ready for a calmer screen?</p><h2>Put parents back in control.</h2></div><a href='https://apps.apple.com/us/app/safe-stream-app/id6757622774' target='_blank' rel='noreferrer' className='button button-primary'>Get Safe Stream <span>↗</span></a></div></section>
	</main>;
}
