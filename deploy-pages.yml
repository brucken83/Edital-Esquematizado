import { cpSync, existsSync, mkdirSync, rmSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const publicDir = resolve(root, 'public');
const distDir = resolve(root, 'dist');

if (!existsSync(publicDir)) {
  throw new Error('Pasta public não encontrada.');
}

if (existsSync(distDir)) rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });
cpSync(publicDir, distDir, { recursive: true });

const indexPath = resolve(distDir, 'index.html');
let html = readFileSync(indexPath, 'utf8');
html = html.replace(/__BUILD_DATE__/g, new Date().toISOString());
writeFileSync(indexPath, html, 'utf8');

console.log('Build concluído em dist/.');
