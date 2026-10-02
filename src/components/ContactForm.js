'use client';

import { useState } from 'react';
import { submitContactForm } from '@/lib/firebase';

const initialState = { name: '', email: '', organization: '', market: '', message: '', website: '' };

export default function ContactForm() {
	const [form, setForm] = useState(initialState);
	const [status, setStatus] = useState('idle');
	const [error, setError] = useState('');

	function updateField(event) {
		setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
	}

	async function handleSubmit(event) {
		event.preventDefault();
		if (form.website) return;

		setStatus('submitting');
		setError('');

		try {
			await submitContactForm({
				name: form.name.trim(),
				email: form.email.trim(),
				organization: form.organization.trim(),
				market: form.market,
				message: form.message.trim(),
			});
			setForm(initialState);
			setStatus('success');
		} catch (submissionError) {
			console.error('Contact form submission failed', submissionError);
			setError('We couldn’t send your message. Please email contact@suddennorth.com instead.');
			setStatus('error');
		}
	}

	return <form className='contact-form' onSubmit={handleSubmit}>
		<div className='form-grid'>
			<label><span>Name</span><input name='name' value={form.name} onChange={updateField} autoComplete='name' minLength={2} maxLength={120} required /></label>
			<label><span>Work email</span><input type='email' name='email' value={form.email} onChange={updateField} autoComplete='email' maxLength={254} required /></label>
			<label><span>Organization</span><input name='organization' value={form.organization} onChange={updateField} autoComplete='organization' maxLength={180} /></label>
			<label><span>Working environment</span><select name='market' value={form.market} onChange={updateField} required><option value='' disabled>Select one</option><option value='Government'>Government / public sector</option><option value='Commercial'>Commercial / private sector</option><option value='Nonprofit'>Nonprofit</option><option value='Other'>Other</option></select></label>
		</div>
		<label className='message-field'><span>What are you trying to make possible?</span><textarea name='message' value={form.message} onChange={updateField} rows={7} minLength={10} maxLength={5000} required /></label>
		<label className='honeypot' aria-hidden='true'>Website<input name='website' value={form.website} onChange={updateField} tabIndex={-1} autoComplete='off' /></label>
		<div className='form-submit-row'><p>Please do not include classified, controlled, or otherwise sensitive information.</p><button className='button button-primary' type='submit' disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Send message'} <span aria-hidden='true'>↗</span></button></div>
		<div className='form-status' aria-live='polite'>
			{status === 'success' && <p className='success-message'>Message received. We’ll be in touch soon.</p>}
			{status === 'error' && <p className='error-message'>{error}</p>}
		</div>
	</form>;
}
