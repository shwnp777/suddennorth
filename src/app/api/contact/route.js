import nodemailer from 'nodemailer';

export async function POST(req) {
	try {
		const data = await req.json();

		const firstName = (data.firstName || '').trim();
		const lastName = (data.lastName || '').trim();
		const email = (data.email || '').trim();
		const phone = (data.phone || '').trim();
		const message = (data.message || '').trim();

		// Basic validation
		if (!email || !message) {
			return new Response(
				JSON.stringify({ ok: false, error: 'Email and message are required.' }),
				{
					status: 400,
					headers: { 'Content-Type': 'application/json' },
				},
			);
		}

		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT || 587),
			secure: false, // true for 465, false for 587
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		const subject =
			`Sudden North Contact Form: ${firstName} ${lastName}`.trim();

		const textBody = `
New contact form submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}
`.trim();

		await transporter.sendMail({
			from: `"Sudden North Website" <${process.env.SMTP_USER}>`,
			to: process.env.CONTACT_TO,
			replyTo: email, // so you can hit Reply and respond to the sender
			subject,
			text: textBody,
		});

		return new Response(JSON.stringify({ ok: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (err) {
		return new Response(
			JSON.stringify({ ok: false, error: 'Failed to send message.' }),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			},
		);
	}
}
