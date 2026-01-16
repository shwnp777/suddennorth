'use client';

const EFFECTIVE_DATE = 'January 16, 2026'; // update as needed
const SUPPORT_EMAIL = 'suddennorth@gmail.com';
const COMPANY_NAME = 'Sudden North';
const APP_NAME = 'SafeStream';

function SectionTitle({ children }) {
	return (
		<h2 className='mt-10 scroll-mt-24 text-xl font-semibold tracking-tight'>
			{children}
		</h2>
	);
}

function Bullet({ children }) {
	return <li className='ml-5 list-disc leading-relaxed'>{children}</li>;
}

export default function PrivacyPolicyPage() {
	return (
		<main className='mx-auto max-w-3xl px-6 py-14 mt-24 sm:mt-32'>
			<header className='space-y-3'>
				<p className='text-sm text-neutral-200'>
					Effective date: {EFFECTIVE_DATE}
				</p>

				<h1 className='text-3xl font-bold tracking-tight'>
					Privacy Policy for {APP_NAME}
				</h1>

				<p className='text-base leading-relaxed text-neutral-300'>
					This Privacy Policy explains how {APP_NAME} (“the App”) handles
					information. Our goal is simple: help parents control what children
					watch and when they watch it—without collecting personal data.
				</p>
			</header>

			<SectionTitle>Quick summary</SectionTitle>
			<ul className='mt-3 space-y-2 text-neutral-300'>
				<Bullet>
					{APP_NAME} does <strong>not</strong> sell personal information.
				</Bullet>
				<Bullet>
					Profiles, approved content, and settings are stored{' '}
					<strong>on your device</strong>. If iCloud sync is enabled, Apple may
					sync this data using your iCloud account.
				</Bullet>
				<Bullet>
					If you add a YouTube API key, it is stored{' '}
					<strong>locally on your device</strong> and is never sent to us.
				</Bullet>
				<Bullet>
					The App uses YouTube/Google services only to fetch information you
					explicitly request.
				</Bullet>
			</ul>

			<SectionTitle>Who we are</SectionTitle>
			<p className='mt-3 leading-relaxed text-neutral-300'>
				{APP_NAME} is provided by {COMPANY_NAME}.
			</p>

			<SectionTitle>Information we collect</SectionTitle>
			<p className='mt-3 leading-relaxed text-neutral-300'>
				<strong>We do not collect personal information</strong> through the App
				and do not use analytics or advertising trackers.
			</p>

			<SectionTitle>Information stored on your device</SectionTitle>
			<p className='mt-3 leading-relaxed text-neutral-300'>
				To provide its features, {APP_NAME} stores the following data locally:
			</p>
			<ul className='mt-3 space-y-2 text-neutral-300'>
				<Bullet>Child profiles (name, emoji/avatar, optional color).</Bullet>
				<Bullet>
					Approved videos, playlists, and channels with basic metadata.
				</Bullet>
				<Bullet>Screen-time and bedtime rules per profile (if enabled).</Bullet>
				<Bullet>
					Usage tracking used only to enforce time limits (stored locally).
				</Bullet>
				<Bullet>Parent PIN stored securely in the iOS Keychain.</Bullet>
				<Bullet>
					Optional YouTube API key, stored locally if you add one.
				</Bullet>
			</ul>

			<SectionTitle>iCloud sync (optional)</SectionTitle>
			<p className='mt-3 leading-relaxed text-neutral-300'>
				If you enable iCloud sync, Apple may synchronize app data between your
				devices using your iCloud account. Apple manages this service, and their
				privacy policy applies.
			</p>

			<SectionTitle>YouTube / Google services</SectionTitle>
			<p className='mt-3 leading-relaxed text-neutral-300'>
				{APP_NAME} can connect to YouTube services to search for videos and
				fetch channel or playlist information you request. Requests are sent
				directly from your device to Google’s servers.
			</p>
			<p className='mt-3 leading-relaxed text-neutral-300'>
				If you supply your own YouTube API key, usage is governed by Google’s
				policies. We do not receive or store your API key.
			</p>

			<SectionTitle>Advertising & tracking</SectionTitle>
			<p className='mt-3 leading-relaxed text-neutral-300'>
				{APP_NAME} does not show third-party ads and does not track users for
				advertising purposes.
			</p>

			<SectionTitle>Children’s privacy</SectionTitle>
			<p className='mt-3 leading-relaxed text-neutral-300'>
				{APP_NAME} is designed for parents and guardians. We do not knowingly
				collect personal information from children.
			</p>

			<SectionTitle>Security</SectionTitle>
			<p className='mt-3 leading-relaxed text-neutral-300'>
				We rely on iOS security features, including the Keychain, to protect
				sensitive data such as the parent PIN.
			</p>

			<SectionTitle>Your choices</SectionTitle>
			<ul className='mt-3 space-y-2 text-neutral-300'>
				<Bullet>Remove profiles or approved content within the App.</Bullet>
				<Bullet>Disable iCloud sync in device settings.</Bullet>
				<Bullet>Clear your YouTube API key at any time.</Bullet>
				<Bullet>Delete the App to remove locally stored data.</Bullet>
			</ul>

			<SectionTitle>Contact</SectionTitle>
			<p className='mt-3 leading-relaxed text-neutral-300'>
				For questions, contact us at{' '}
				<a className='underline' href={`mailto:${SUPPORT_EMAIL}`}>
					{SUPPORT_EMAIL}
				</a>
				.
			</p>

			<SectionTitle>Changes to this policy</SectionTitle>
			<p className='mt-3 leading-relaxed text-neutral-300'>
				We may update this Privacy Policy from time to time. Updates will be
				reflected by the effective date above.
			</p>

			<footer className='mt-14 border-t pt-6 text-sm text-neutral-500'>
				© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
			</footer>
		</main>
	);
}
