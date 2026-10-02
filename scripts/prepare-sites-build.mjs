import { cp, mkdir } from 'node:fs/promises';

await mkdir('dist/server', { recursive: true });
await cp('dist/rsc/index.mjs', 'dist/server/index.js');
await cp('out', 'dist/client', { recursive: true, force: true });
