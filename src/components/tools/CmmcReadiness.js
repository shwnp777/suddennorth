'use client';

import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { answers, bands, level1, level2, scopes, technicalItems } from '@/data/cmmcQuestions';

const scoreOf = Object.fromEntries(answers.map((a) => [a.id, a.score]));

function domainScore(domain, responses) {
	const scored = domain.items.filter((item) => responses[item.id]);
	const total = domain.items.length;
	const points = domain.items.reduce((sum, item) => sum + (scoreOf[responses[item.id]] ?? 0), 0);
	return { answered: scored.length, total, pct: Math.round((points / total) * 100) };
}

function Question({ item, value, onChange, index }) {
	const name = `q-${item.id}`;
	return (
		<fieldset className='assess-q' data-answered={value ? true : undefined}>
			<legend><span className='assess-q-num'>{String(index).padStart(2, '0')}</span><span>{item.q}</span></legend>
			<div className='assess-q-meta'>{item.ref}</div>
			<div className='assess-options'>
				{answers.map((a) => (
					<label key={a.id} className='assess-option'>
						<input type='radio' name={name} value={a.id} checked={value === a.id} onChange={() => onChange(item.id, a.id)} />
						<span>{a.label}</span>
					</label>
				))}
			</div>
		</fieldset>
	);
}

export default function CmmcReadiness() {
	const [scope, setScope] = useState('');
	const [includeL2, setIncludeL2] = useState(false);
	const [responses, setResponses] = useState({});
	const [showResults, setShowResults] = useState(false);
	const resultsRef = useRef(null);

	const levels = useMemo(() => {
		if (!scope || scope === 'none') return [];
		return scope === 'cui' || includeL2 ? [level1, level2] : [level1];
	}, [scope, includeL2]);

	const allItems = levels.flatMap((level) => level.domains.flatMap((d) => d.items.map((item) => ({ ...item, domain: d, level }))));
	const answeredCount = allItems.filter((item) => responses[item.id]).length;
	const progress = allItems.length ? Math.round((answeredCount / allItems.length) * 100) : 0;

	function answer(id, value) {
		setResponses((current) => ({ ...current, [id]: value }));
	}

	function pickScope(id) {
		setScope(id);
		setShowResults(false);
		if (id === 'cui') setIncludeL2(true);
	}

	function reveal() {
		setShowResults(true);
		window.requestAnimationFrame(() => resultsRef.current?.focus());
	}

	function reset() {
		setResponses({});
		setShowResults(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	const results = useMemo(() => {
		if (!allItems.length) return null;
		const points = allItems.reduce((sum, item) => sum + (scoreOf[responses[item.id]] ?? 0), 0);
		const overall = Math.round((points / allItems.length) * 100);
		const band = bands.find((b) => overall >= b.min);
		const gaps = allItems.filter((item) => responses[item.id] !== 'yes');
		const unsure = allItems.filter((item) => !responses[item.id] || responses[item.id] === 'unsure').length;
		const technicalGaps = gaps.filter((item) => technicalItems.has(item.id)).length;
		return { overall, band, gaps, unsure, technicalGaps };
	}, [allItems, responses]);

	let counter = 0;

	return (
		<div className='assess'>
			<section className='assess-step' aria-labelledby='scope-title'>
				<div className='assess-step-head'><span>STEP 01</span><h2 id='scope-title'>What information do you handle?</h2></div>
				<div className='scope-grid' role='radiogroup' aria-labelledby='scope-title'>
					{scopes.map((s) => (
						<label key={s.id} className='scope-card' data-selected={scope === s.id || undefined}>
							<input type='radio' name='scope' value={s.id} checked={scope === s.id} onChange={() => pickScope(s.id)} />
							<strong>{s.label}</strong>
							<span>{s.detail}</span>
						</label>
					))}
				</div>
				{scope === 'none' && <div className='assess-callout' role='status'>
					<strong>Good news: you probably don’t need this.</strong>
					<p>CMMC and NIST SP 800-171 obligations come from DoD contract clauses. Without DoD work, a general baseline such as the <a href='https://www.nist.gov/itl/smallbusinesscyber' target='_blank' rel='noopener noreferrer'>NIST Small Business Cybersecurity Corner</a> is a better fit. If you plan to pursue defense work, choose another option to preview the requirements.</p>
				</div>}
				{scope === 'unsure' && <div className='assess-callout' role='status'>
					<strong>Start with Level 1, then check your contract.</strong>
					<p>Look for DFARS 252.204-7012 in your contract or subcontract, or CUI markings on documents you receive. If you see either, include Level 2.</p>
				</div>}
				{(scope === 'fci' || scope === 'unsure') && <label className='assess-toggle'>
					<input type='checkbox' checked={includeL2} onChange={(e) => { setIncludeL2(e.target.checked); setShowResults(false); }} />
					<span>Also include the Level 2 (CUI) snapshot</span>
				</label>}
			</section>

			{levels.length > 0 && <>
				<div className='assess-progress' aria-hidden='true'>
					<div className='shell-inner'>
						<span>{answeredCount} / {allItems.length} answered</span>
						<div className='assess-progress-bar'><i style={{ width: `${progress}%` }} /></div>
						<span>{progress}%</span>
					</div>
				</div>

				{levels.map((level, levelIndex) => (
					<section className='assess-step' key={level.id} aria-labelledby={`${level.id}-title`}>
						<div className='assess-step-head'><span>STEP 0{levelIndex + 2}</span><h2 id={`${level.id}-title`}>{level.title}</h2><p>{level.summary}</p></div>
						{level.domains.map((domain) => (
							<div className='assess-domain' key={`${level.id}-${domain.code}`}>
								<h3><span>{domain.code}</span>{domain.name}</h3>
								{domain.items.map((item) => {
									counter += 1;
									return <Question key={item.id} item={item} index={counter} value={responses[item.id]} onChange={answer} />;
								})}
							</div>
						))}
					</section>
				))}

				<div className='assess-actions'>
					<button type='button' className='button button-primary' onClick={reveal}>See my results <span aria-hidden='true'>↓</span></button>
					<p>{allItems.length - answeredCount > 0 ? `${allItems.length - answeredCount} unanswered — these count as gaps.` : 'All questions answered.'}</p>
				</div>
			</>}

			{showResults && results && (
				<section className='assess-results' ref={resultsRef} tabIndex={-1} aria-labelledby='results-title'>
					<div className='results-head'>
						<div>
							<p className='section-kicker'>Your readiness snapshot</p>
							<h2 id='results-title'><span className='results-score'>{results.overall}%</span> {results.band.label}</h2>
							<p className='results-band-text'>{results.band.text}</p>
						</div>
						<div className='results-actions'>
							<button type='button' className='button button-secondary' onClick={() => window.print()}>Print / save PDF</button>
							<button type='button' className='button button-secondary' onClick={reset}>Start over</button>
						</div>
					</div>

					<div className='results-domains'>
						{levels.map((level) => (
							<div key={level.id} className='results-level'>
								<h3>{level.title}</h3>
								<ul>
									{level.domains.map((domain) => {
										const s = domainScore(domain, responses);
										return <li key={domain.code}>
											<span className='results-code'>{domain.code}</span>
											<span className='results-name'>{domain.name}</span>
											<span className='results-meter' role='img' aria-label={`${s.pct} percent`}><i style={{ width: `${s.pct}%` }} data-tone={s.pct >= 90 ? 'good' : s.pct >= 50 ? 'ok' : 'low'} /></span>
											<span className='results-pct'>{s.pct}%</span>
										</li>;
									})}
								</ul>
							</div>
						))}
					</div>

					<div className='results-verdict'>
						<div>
							<h3>Can you do this yourself?</h3>
							{results.gaps.length === 0
								? <p>Yes. Keep your documentation current and re-run this check after any major change to your systems.</p>
								: results.technicalGaps >= 3
									? <p>Possibly, but {results.technicalGaps} of your gaps are engineering-heavy (encryption, MFA, logging, boundary protection). Those usually go faster with experienced help. Policy and documentation gaps are very doable in-house.</p>
									: <p>Most likely. Your gaps are mainly process and documentation. Work through the list below with the free references; bring in help only if a deadline is at stake.</p>}
							{results.unsure > 0 && <p className='results-note'>{results.unsure} item{results.unsure === 1 ? ' is' : 's are'} “not sure” or unanswered. Confirming those is the cheapest next step — some may already be in place.</p>}
						</div>
						<div className='results-next'>
							<Link href='/resources' className='text-link light-link'>Free references <span>↗</span></Link>
							<Link href='/contact' className='text-link light-link'>Talk it through with us <span>↗</span></Link>
						</div>
					</div>

					{results.gaps.length > 0 && <div className='results-gaps'>
						<h3>Your gap list <span>({results.gaps.length})</span></h3>
						<ol>
							{results.gaps.map((item) => (
								<li key={item.id}>
									<div className='gap-head'><span className='results-code'>{item.domain.code}</span><span className='gap-ref'>{item.ref}</span><span className='gap-status'>{answers.find((a) => a.id === responses[item.id])?.label ?? 'Unanswered'}</span>{technicalItems.has(item.id) && <span className='gap-flag'>Technical</span>}</div>
									<p>{item.q}</p>
									<p className='gap-fix'><strong>Next step:</strong> {item.fix}</p>
								</li>
							))}
						</ol>
					</div>}

					<p className='results-disclaimer'>This is a readiness snapshot for planning, not an official assessment, certification, or SPRS score. Level 2 results sample each family rather than covering all 110 requirements.</p>
				</section>
			)}
		</div>
	);
}
