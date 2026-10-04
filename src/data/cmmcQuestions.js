// Readiness snapshot questions.
// Level 1 = the 15 basic safeguarding requirements in FAR 52.204-21(b)(1), which CMMC Level 1 adopts.
// Level 2 = a representative two-question snapshot per NIST SP 800-171 Rev. 2 family (not all 110 requirements),
// plus DFARS items most small contractors miss. Each item carries a plain-English "fix" hint.

export const STATUS_NOTE = {
	asOf: 'October 2026',
	text: 'DoD suspended CMMC Phase 2 (mandatory third-party Level 2 certification) on July 13, 2026 while a reform task force reviews the program. Self-assessment requirements, SPRS postings, FAR 52.204-21, and DFARS 252.204-7012 still apply wherever they are in your contract.',
	source: 'https://dodcio.defense.gov/CMMC/',
};

export const scopes = [
	{ id: 'none', label: 'No DoD contract information', detail: 'We don’t hold, or plan to bid on, DoD contracts or subcontracts.' },
	{ id: 'fci', label: 'Federal Contract Information (FCI) only', detail: 'Contract details, schedules, or deliverables not meant for public release — but no CUI.' },
	{ id: 'cui', label: 'Controlled Unclassified Information (CUI)', detail: 'Our contract includes DFARS 252.204-7012, or we receive marked CUI (drawings, specs, technical data).' },
	{ id: 'unsure', label: 'Not sure', detail: 'We do defense work but don’t know what kind of information we handle.' },
];

export const answers = [
	{ id: 'yes', label: 'Yes', score: 1 },
	{ id: 'partial', label: 'Partly', score: 0.5 },
	{ id: 'no', label: 'No', score: 0 },
	{ id: 'unsure', label: 'Not sure', score: 0 },
];

export const level1 = {
	id: 'l1',
	title: 'Level 1 — Basic safeguarding',
	summary: 'The 15 requirements in FAR 52.204-21 that apply to any contractor handling FCI.',
	domains: [
		{ code: 'AC', name: 'Access control', items: [
			{ id: 'l1-1', ref: '52.204-21(b)(1)(i)', q: 'Only authorized people, processes, and devices can access your company systems.', fix: 'Keep a current list of user accounts; remove anyone who has left; require sign-in on every device.' },
			{ id: 'l1-2', ref: '52.204-21(b)(1)(ii)', q: 'Users can only do what their role requires (e.g. not everyone is an administrator).', fix: 'Remove admin rights from daily-use accounts and grant access by role.' },
			{ id: 'l1-3', ref: '52.204-21(b)(1)(iii)', q: 'Connections to outside systems (personal devices, third-party services) are known and controlled.', fix: 'List the external services and devices that connect to company data and block the rest.' },
			{ id: 'l1-4', ref: '52.204-21(b)(1)(iv)', q: 'You control what is posted on public websites and social media so no contract information leaks.', fix: 'Name who may post publicly and review posts for contract details first.' },
		] },
		{ code: 'IA', name: 'Identification & authentication', items: [
			{ id: 'l1-5', ref: '52.204-21(b)(1)(v)', q: 'Every user, process, and device has a unique identity — no shared accounts.', fix: 'Replace shared logins with named accounts.' },
			{ id: 'l1-6', ref: '52.204-21(b)(1)(vi)', q: 'Identities are verified (password or stronger) before access is granted, and default passwords are changed.', fix: 'Change all default passwords on routers, printers, and software; enforce sign-in everywhere.' },
		] },
		{ code: 'MP', name: 'Media protection', items: [
			{ id: 'l1-7', ref: '52.204-21(b)(1)(vii)', q: 'Drives, laptops, and paper with contract information are wiped or destroyed before disposal or reuse.', fix: 'Adopt a simple sanitization procedure (NIST SP 800-88) and keep a record of what was destroyed.' },
		] },
		{ code: 'PE', name: 'Physical protection', items: [
			{ id: 'l1-8', ref: '52.204-21(b)(1)(viii)', q: 'Physical access to offices, equipment, and devices is limited to authorized people.', fix: 'Lock rooms and equipment; control who has keys or badges.' },
			{ id: 'l1-9', ref: '52.204-21(b)(1)(ix)', q: 'Visitors are escorted and logged, and keys, badges, and codes are tracked and recovered.', fix: 'Start a visitor log and a key/badge inventory; change codes when people leave.' },
		] },
		{ code: 'SC', name: 'System & communications protection', items: [
			{ id: 'l1-10', ref: '52.204-21(b)(1)(x)', q: 'A firewall or equivalent monitors and controls traffic at the edge of your network.', fix: 'Turn on and configure the firewall on your router and on each computer.' },
			{ id: 'l1-11', ref: '52.204-21(b)(1)(xi)', q: 'Anything public-facing (website, guest Wi-Fi) is separated from internal systems.', fix: 'Put guest Wi-Fi and public servers on a separate network segment.' },
		] },
		{ code: 'SI', name: 'System & information integrity', items: [
			{ id: 'l1-12', ref: '52.204-21(b)(1)(xii)', q: 'Security updates are applied promptly and flaws are tracked until fixed.', fix: 'Turn on automatic updates and review monthly for anything that failed.' },
			{ id: 'l1-13', ref: '52.204-21(b)(1)(xiii)', q: 'Anti-malware protection runs on every computer.', fix: 'Enable built-in protection (e.g. Microsoft Defender) on every endpoint.' },
			{ id: 'l1-14', ref: '52.204-21(b)(1)(xiv)', q: 'Anti-malware definitions update automatically.', fix: 'Confirm automatic definition updates are on and not blocked.' },
			{ id: 'l1-15', ref: '52.204-21(b)(1)(xv)', q: 'Systems are scanned periodically, and files from outside sources are scanned when opened or downloaded.', fix: 'Schedule weekly full scans and enable real-time scanning.' },
		] },
	],
};

export const level2 = {
	id: 'l2',
	title: 'Level 2 — Protecting CUI (snapshot)',
	summary: 'Two representative questions per NIST SP 800-171 Rev. 2 family, plus DFARS items small contractors often miss. A snapshot, not all 110 requirements.',
	domains: [
		{ code: 'AC', name: 'Access control', items: [
			{ id: 'l2-ac1', ref: '3.1.5–3.1.7', q: 'Least privilege is enforced, and admins use separate accounts only for admin tasks.', fix: 'Create separate admin accounts and review privileged access quarterly.' },
			{ id: 'l2-ac2', ref: '3.1.12–3.1.14', q: 'Remote access is routed through managed access points and monitored.', fix: 'Require VPN or zero-trust access with logging for all remote connections.' },
		] },
		{ code: 'AT', name: 'Awareness & training', items: [
			{ id: 'l2-at1', ref: '3.2.1–3.2.2', q: 'Everyone receives security awareness training, with role-specific training for admins.', fix: 'Run annual training (Project Spectrum offers free courses) and keep completion records.' },
			{ id: 'l2-at2', ref: '3.2.3', q: 'Training covers recognizing and reporting insider-threat indicators.', fix: 'Add an insider-threat module and a clear reporting path.' },
		] },
		{ code: 'AU', name: 'Audit & accountability', items: [
			{ id: 'l2-au1', ref: '3.3.1–3.3.2', q: 'Systems create and retain audit logs that trace actions to individual users.', fix: 'Turn on audit logging in your identity provider, endpoints, and cloud services; define retention.' },
			{ id: 'l2-au2', ref: '3.3.5', q: 'Logs are reviewed and correlated to spot suspicious activity.', fix: 'Centralize logs and set a weekly review or automated alerting.' },
		] },
		{ code: 'CM', name: 'Configuration management', items: [
			{ id: 'l2-cm1', ref: '3.4.1–3.4.2', q: 'You keep a hardware/software inventory and documented secure baseline configurations.', fix: 'Build an asset inventory and adopt a hardening baseline (e.g. CIS Benchmarks).' },
			{ id: 'l2-cm2', ref: '3.4.8', q: 'Only approved software can run (allow-listing or deny-by-exception).', fix: 'Use application control in your endpoint management tool.' },
		] },
		{ code: 'IA', name: 'Identification & authentication', items: [
			{ id: 'l2-ia1', ref: '3.5.3', q: 'Multi-factor authentication is required for privileged accounts and all network access.', fix: 'Enforce MFA for every user, not just admins; prefer phishing-resistant methods.' },
			{ id: 'l2-ia2', ref: '3.5.10', q: 'Passwords are only stored and transmitted in cryptographically protected form.', fix: 'Eliminate plaintext credentials in scripts, spreadsheets, and shared files; use a password manager.' },
		] },
		{ code: 'IR', name: 'Incident response', items: [
			{ id: 'l2-ir1', ref: '3.6.1–3.6.3', q: 'You have a written, tested incident response plan.', fix: 'Write a short plan and run a one-hour tabletop exercise.' },
			{ id: 'l2-ir2', ref: 'DFARS 252.204-7012(c)', q: 'You can report a cyber incident to DoD within 72 hours, including holding the required medium-assurance certificate.', fix: 'Obtain a DoD-approved medium-assurance certificate now and bookmark dibnet.dod.mil.' },
		] },
		{ code: 'MA', name: 'Maintenance', items: [
			{ id: 'l2-ma1', ref: '3.7.1–3.7.2', q: 'System maintenance is performed and controlled, including tools used by maintainers.', fix: 'Log maintenance activity and control which tools and vendors may perform it.' },
			{ id: 'l2-ma2', ref: '3.7.5', q: 'Remote (nonlocal) maintenance sessions require MFA and are terminated when done.', fix: 'Require MFA for vendor remote-support tools and disable standing access.' },
		] },
		{ code: 'MP', name: 'Media protection', items: [
			{ id: 'l2-mp1', ref: '3.8.1–3.8.3', q: 'Media containing CUI is protected, access-limited, and sanitized before disposal or reuse.', fix: 'Mark and store CUI media securely and sanitize with NIST SP 800-88 methods.' },
			{ id: 'l2-mp2', ref: '3.8.6–3.8.7', q: 'Removable media is controlled, and CUI on portable media is encrypted.', fix: 'Block USB storage by default and require encrypted devices where needed.' },
		] },
		{ code: 'PS', name: 'Personnel security', items: [
			{ id: 'l2-ps1', ref: '3.9.1', q: 'People are screened before they are given access to CUI.', fix: 'Document your screening process (background checks appropriate to the role).' },
			{ id: 'l2-ps2', ref: '3.9.2', q: 'Access is removed promptly when people leave or change roles.', fix: 'Use an offboarding checklist that disables accounts the same day.' },
		] },
		{ code: 'PE', name: 'Physical protection', items: [
			{ id: 'l2-pe1', ref: '3.10.1–3.10.2', q: 'Physical access to CUI systems is limited and the facility is monitored.', fix: 'Restrict and monitor spaces where CUI is processed.' },
			{ id: 'l2-pe2', ref: '3.10.6', q: 'CUI is safeguarded at alternate work sites, including home offices.', fix: 'Write telework rules: managed devices, no CUI on personal equipment, screen privacy.' },
		] },
		{ code: 'RA', name: 'Risk assessment', items: [
			{ id: 'l2-ra1', ref: '3.11.1', q: 'You periodically assess risk to operations, assets, and people from handling CUI.', fix: 'Run and document a yearly risk assessment.' },
			{ id: 'l2-ra2', ref: '3.11.2–3.11.3', q: 'You scan for vulnerabilities regularly and remediate based on risk.', fix: 'Schedule recurring scans (CISA offers free external scanning) and track remediation.' },
		] },
		{ code: 'CA', name: 'Security assessment', items: [
			{ id: 'l2-ca1', ref: '3.12.4', q: 'You have a current System Security Plan (SSP) describing your CUI boundary and how each requirement is met.', fix: 'Write the SSP first — it scopes everything else. Templates are available from NIST.' },
			{ id: 'l2-ca2', ref: '3.12.2', q: 'Open gaps are tracked in a Plan of Action & Milestones (POA&M) with owners and dates.', fix: 'List every unmet requirement with an owner, a fix, and a target date.' },
			{ id: 'l2-ca3', ref: 'DFARS 252.204-7019/-7020', q: 'You have a current NIST SP 800-171 assessment score posted in SPRS.', fix: 'Score yourself with the DoD Assessment Methodology and post the result in SPRS.' },
		] },
		{ code: 'SC', name: 'System & communications protection', items: [
			{ id: 'l2-sc1', ref: '3.13.11', q: 'CUI is encrypted with FIPS-validated cryptography, at rest and in transit.', fix: 'Confirm your encryption modules hold a current FIPS 140 validation; many consumer tools do not.' },
			{ id: 'l2-sc2', ref: 'DFARS 252.204-7012(b)(2)(ii)(D)', q: 'Any cloud service that stores or processes CUI meets FedRAMP Moderate or equivalent.', fix: 'Move CUI to a FedRAMP Moderate (or equivalent) environment, such as government cloud tenants.' },
		] },
		{ code: 'SI', name: 'System & information integrity', items: [
			{ id: 'l2-si1', ref: '3.14.1', q: 'Flaws are identified, reported, and corrected on a defined timeline.', fix: 'Set patch timelines by severity and report on them monthly.' },
			{ id: 'l2-si2', ref: '3.14.6–3.14.7', q: 'Systems are monitored for attacks and unauthorized use, including inbound and outbound traffic.', fix: 'Use endpoint detection and response (EDR) with alerting that someone actually watches.' },
		] },
	],
};

// Requirements that are engineering-heavy; gaps here are the usual reason to bring in help.
export const technicalItems = new Set(['l2-ac2', 'l2-au1', 'l2-au2', 'l2-cm2', 'l2-ia1', 'l2-sc1', 'l2-sc2', 'l2-si2', 'l1-10', 'l1-11']);

export const bands = [
	{ min: 90, label: 'Strong foundation', tone: 'good', text: 'You are in good shape. Close the remaining items, confirm your documentation matches reality, and keep it current. You likely do not need outside help.' },
	{ min: 70, label: 'Close — targeted gaps', tone: 'ok', text: 'Most of the foundation is there. The gaps below are specific and fixable; many teams close them in-house with the free references.' },
	{ min: 40, label: 'Meaningful gaps', tone: 'warn', text: 'Several families need work. Start with the System Security Plan and a POA&M so effort goes where it counts.' },
	{ min: 0, label: 'Early stage', tone: 'low', text: 'Start by scoping where contract information lives — the smaller the boundary, the smaller the job. Free APEX Accelerator and Project Spectrum help is a good first step.' },
];
