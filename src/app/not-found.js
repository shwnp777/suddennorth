import Link from 'next/link';

export default function NotFound() {
	return (
		<main className='page-main not-found'>
			<section className='page-hero not-found-hero'>
				<div className='shell'>
					<div className='terminal-card' aria-hidden='true'>
						<div className='terminal-card-bar'><i /><i /><i /><span>sudden_north — zsh</span></div>
						<pre><span className='t-prompt'>$</span> cd ./requested-page{'\n'}<span className='t-error'>cd: no such file or directory</span>{'\n'}<span className='t-prompt'>$</span> <span className='t-cursor' /></pre>
					</div>
					<p className='section-kicker'>Error 404</p>
					<h1>That path doesn’t <span>exist.</span></h1>
					<p className='page-hero-copy'>The page may have moved, or the link may be out of date. Let’s get you back on course.</p>
					<div className='hero-actions'>
						<Link href='/' className='button button-primary'>Back to home <span aria-hidden='true'>↗</span></Link>
						<Link href='/contact' className='button button-secondary'>Contact us</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
