import { VIEWBOX, CURSOR, CHAR_ADVANCE, COMMAND, PROMPT_PATH, WORDMARK_PATH, COMMAND_PATHS } from './terminalLogoPaths';

// Inline SVG so CSS can reach the cursor: it blinks at rest and, on hover/focus of the
// parent link (.terminal-link), "types" COMMAND, then backspaces it on leave. Pure CSS.
export default function TerminalLogo({ className = '' }) {
	return (
		<svg
			className={`terminal-logo ${className}`.trim()}
			viewBox={VIEWBOX}
			aria-hidden='true'
			focusable='false'
			style={{ '--chars': COMMAND.length, '--advance': CHAR_ADVANCE }}
		>
			<path className='terminal-logo-prompt' d={PROMPT_PATH} />
			<path className='terminal-logo-word' d={WORDMARK_PATH} />
			<g className='terminal-logo-command'>
				{COMMAND_PATHS.map((d, i) => d && <path key={i} d={d} style={{ '--i': i }} />)}
			</g>
			<rect className='terminal-logo-cursor' x={CURSOR.x} y={CURSOR.y} width={CURSOR.width} height={CURSOR.height} />
		</svg>
	);
}
