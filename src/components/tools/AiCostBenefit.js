'use client';

import { useMemo, useState } from 'react';

// All math is here so it can be read and checked. Months 1–3 ramp adoption linearly (1/3, 2/3, full).
const WEEKS_PER_MONTH = 52 / 12;
const HORIZON = 36;
const ramp = (month) => Math.min(1, month / 3);
const RAMP_SUM = Array.from({ length: HORIZON }, (_, i) => ramp(i + 1)).reduce((a, b) => a + b, 0);

function model(v) {
	const activeUsers = v.users * (v.adoption / 100);
	const hoursSavedPerMonth = activeUsers * v.hoursPerWeek * WEEKS_PER_MONTH * (v.timeSaved / 100) * (1 - v.reviewOverhead / 100);
	const monthlyValue = hoursSavedPerMonth * v.rate;
	const monthlyCost = v.users * v.license + v.maintenance;
	const trainingCost = v.users * v.trainingHours * v.rate;
	const oneTime = v.setup + v.securityReview + trainingCost;

	let cumulative = -oneTime;
	let payback = null;
	const series = [{ month: 0, value: cumulative }];
	for (let m = 1; m <= HORIZON; m += 1) {
		cumulative += monthlyValue * ramp(m) - monthlyCost;
		series.push({ month: m, value: cumulative });
		if (payback === null && cumulative >= 0) payback = m;
	}
	const totalCost36 = oneTime + monthlyCost * HORIZON;
	// Time saved (%) at which the 36-month cumulative net is exactly zero.
	const valuePerPctPoint = activeUsers * v.hoursPerWeek * WEEKS_PER_MONTH * 0.01 * (1 - v.reviewOverhead / 100) * v.rate;
	const breakEven = valuePerPctPoint > 0 ? totalCost36 / (RAMP_SUM * valuePerPctPoint) : Infinity;

	return {
		hoursSavedPerMonth,
		monthlyValue,
		monthlyCost,
		monthlyNet: monthlyValue - monthlyCost,
		oneTime,
		trainingCost,
		payback,
		net12: series[12].value,
		net36: series[HORIZON].value,
		roi36: totalCost36 > 0 ? series[HORIZON].value / totalCost36 : 0,
		breakEven,
		series,
	};
}

const defaults = {
	users: 25, hoursPerWeek: 8, timeSaved: 20, reviewOverhead: 25, adoption: 70, rate: 75,
	license: 30, setup: 15000, securityReview: 5000, maintenance: 500, trainingHours: 4,
};

const groups = [
	{ title: 'The work', note: 'Only count hours on tasks AI can realistically help with.', fields: [
		{ key: 'users', label: 'People in scope', unit: 'people', min: 1, max: 100000, step: 1 },
		{ key: 'hoursPerWeek', label: 'Hours per person per week on those tasks', unit: 'hrs/wk', min: 0, max: 60, step: 0.5 },
		{ key: 'rate', label: 'Loaded hourly cost', unit: '$/hr', min: 0, max: 1000, step: 1 },
	] },
	{ title: 'Realistic impact', note: 'Pilots usually land between 10% and 30% on suitable tasks.', fields: [
		{ key: 'timeSaved', label: 'Time saved on those tasks', unit: '%', min: 0, max: 100, step: 1 },
		{ key: 'reviewOverhead', label: 'Savings lost to checking and fixing output', unit: '%', min: 0, max: 100, step: 1 },
		{ key: 'adoption', label: 'People who actually use it', unit: '%', min: 0, max: 100, step: 1 },
	] },
	{ title: 'The full cost', note: 'The license is rarely the biggest number.', fields: [
		{ key: 'license', label: 'License per seat per month', unit: '$/mo', min: 0, max: 10000, step: 1 },
		{ key: 'setup', label: 'Integration & setup (one-time)', unit: '$', min: 0, max: 10000000, step: 500 },
		{ key: 'securityReview', label: 'Security & compliance review (one-time)', unit: '$', min: 0, max: 10000000, step: 500 },
		{ key: 'maintenance', label: 'Ongoing admin & upkeep', unit: '$/mo', min: 0, max: 1000000, step: 50 },
		{ key: 'trainingHours', label: 'Training time per person (one-time)', unit: 'hrs', min: 0, max: 200, step: 0.5 },
	] },
];

const usd = (n) => `${n < 0 ? '−' : ''}$${Math.abs(Math.round(n)).toLocaleString('en-US')}`;
const compact = (n) => {
	const a = Math.abs(n);
	const s = a >= 1e6 ? `${(a / 1e6).toFixed(1)}M` : a >= 1e3 ? `${Math.round(a / 1e3)}k` : `${Math.round(a)}`;
	return `${n < 0 ? '−' : ''}$${s}`;
};

function Chart({ series }) {
	const [hover, setHover] = useState(null);
	const W = 640, H = 260, P = { l: 62, r: 18, t: 16, b: 32 };
	const values = series.map((p) => p.value);
	let lo = Math.min(0, ...values), hi = Math.max(0, ...values);
	if (hi === lo) hi = lo + 1;
	const pad = (hi - lo) * 0.08; lo -= pad; hi += pad;
	const x = (m) => P.l + (m / HORIZON) * (W - P.l - P.r);
	const y = (v) => P.t + (1 - (v - lo) / (hi - lo)) * (H - P.t - P.b);
	const path = series.map((p, i) => `${i ? 'L' : 'M'}${x(p.month).toFixed(1)},${y(p.value).toFixed(1)}`).join(' ');
	const ticks = Array.from({ length: 5 }, (_, i) => lo + ((hi - lo) * i) / 4);
	const active = hover !== null ? series[hover] : null;

	function onMove(event) {
		const rect = event.currentTarget.getBoundingClientRect();
		const px = ((event.clientX - rect.left) / rect.width) * W;
		const m = Math.round(((px - P.l) / (W - P.l - P.r)) * HORIZON);
		setHover(Math.max(0, Math.min(HORIZON, m)));
	}

	return (
		<figure className='calc-chart'>
			<figcaption>Cumulative net value over 36 months</figcaption>
			<svg viewBox={`0 0 ${W} ${H}`} role='img' aria-label={`Cumulative net value: ${usd(series[12].value)} at 12 months, ${usd(series[HORIZON].value)} at 36 months.`} onPointerMove={onMove} onPointerLeave={() => setHover(null)}>
				{ticks.map((t) => <g key={t}><line x1={P.l} x2={W - P.r} y1={y(t)} y2={y(t)} className='chart-grid' /><text x={P.l - 8} y={y(t) + 3} className='chart-tick' textAnchor='end'>{compact(t)}</text></g>)}
				<line x1={P.l} x2={W - P.r} y1={y(0)} y2={y(0)} className='chart-zero' />
				{[0, 12, 24, 36].map((m) => <text key={m} x={x(m)} y={H - 10} className='chart-tick' textAnchor='middle'>{m === 0 ? 'Start' : `Mo ${m}`}</text>)}
				<path d={path} className='chart-line' />
				{active && <g>
					<line x1={x(active.month)} x2={x(active.month)} y1={P.t} y2={H - P.b} className='chart-cross' />
					<circle cx={x(active.month)} cy={y(active.value)} r='5' className='chart-dot' />
				</g>}
				<rect x={P.l} y={P.t} width={W - P.l - P.r} height={H - P.t - P.b} fill='transparent' />
			</svg>
			<div className='chart-tooltip' aria-hidden='true' data-visible={active ? true : undefined}>
				{active ? <><span>{active.month === 0 ? 'Start' : `Month ${active.month}`}</span><strong>{usd(active.value)}</strong></> : <span>Hover or tap the chart for monthly values</span>}
			</div>
		</figure>
	);
}

export default function AiCostBenefit() {
	const [values, setValues] = useState(defaults);
	const r = useMemo(() => model(values), [values]);

	function update(key, raw, field) {
		const n = raw === '' ? 0 : Number(raw);
		if (Number.isNaN(n)) return;
		setValues((current) => ({ ...current, [key]: Math.max(field.min, Math.min(field.max, n)) }));
	}

	const verdict = r.payback === null
		? { tone: 'low', label: 'Does not pay back in 36 months', text: 'At these numbers the costs outrun the savings. Narrow the scope to the highest-volume task, or revisit whether this needs AI at all.' }
		: r.payback <= 6
			? { tone: 'good', label: `Pays back in ${r.payback} month${r.payback === 1 ? '' : 's'}`, text: 'Strong case — if the time-saved estimate holds. Prove it with a small pilot before scaling.' }
			: r.payback <= 18
				? { tone: 'ok', label: `Pays back in ${r.payback} months`, text: 'Reasonable, but sensitive to adoption and review overhead. Measure both during a pilot.' }
				: { tone: 'warn', label: `Pays back in ${r.payback} months`, text: 'Marginal. Small changes in usage could erase the return. Pilot first and set a clear stop condition.' };

	return (
		<div className='calc'>
			<form className='calc-inputs' onSubmit={(e) => e.preventDefault()} aria-label='Calculator inputs'>
				{groups.map((group, gi) => (
					<fieldset key={group.title} className='calc-group'>
						<legend><span>0{gi + 1}</span>{group.title}</legend>
						<p className='calc-note'>{group.note}</p>
						{group.fields.map((field) => (
							<label key={field.key} className='calc-field'>
								<span>{field.label}</span>
								<span className='calc-input-wrap'>
									<input type='number' inputMode='decimal' min={field.min} max={field.max} step={field.step} value={values[field.key]} onChange={(e) => update(field.key, e.target.value, field)} />
									<em>{field.unit}</em>
								</span>
							</label>
						))}
					</fieldset>
				))}
				<button type='button' className='calc-reset' onClick={() => setValues(defaults)}>Reset to example values</button>
			</form>

			<section className='calc-results' aria-live='polite' aria-labelledby='calc-results-title'>
				<p className='section-kicker' id='calc-results-title'>Results</p>
				<div className='calc-verdict' data-tone={verdict.tone}><strong>{verdict.label}</strong><p>{verdict.text}</p></div>
				<dl className='calc-stats'>
					<div><dt>Hours saved / month</dt><dd>{Math.round(r.hoursSavedPerMonth).toLocaleString('en-US')}</dd></div>
					<div><dt>Net / month (full adoption)</dt><dd>{usd(r.monthlyNet)}</dd></div>
					<div><dt>One-time cost</dt><dd>{usd(r.oneTime)}</dd></div>
					<div><dt>36-month net</dt><dd>{usd(r.net36)}</dd></div>
					<div><dt>36-month ROI</dt><dd>{Math.round(r.roi36 * 100)}%</dd></div>
					<div><dt>Break-even time saved</dt><dd>{Number.isFinite(r.breakEven) && r.breakEven <= 100 ? `${r.breakEven.toFixed(1)}%` : 'Not reachable'}</dd></div>
				</dl>
				<Chart series={r.series} />
				<details className='calc-math'>
					<summary>Show the math</summary>
					<ul>
						<li>Hours saved = people × adoption × hours/week × 4.33 × time saved × (1 − review overhead)</li>
						<li>Monthly value = hours saved × loaded rate = {usd(r.monthlyValue)}</li>
						<li>Monthly cost = seats × license + upkeep = {usd(r.monthlyCost)}</li>
						<li>One-time = setup + security review + training ({usd(r.trainingCost)}) = {usd(r.oneTime)}</li>
						<li>Adoption ramps over the first three months (⅓, ⅔, full).</li>
					</ul>
				</details>
			</section>
		</div>
	);
}
