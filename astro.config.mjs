import { defineConfig } from 'astro/config';
export default defineConfig({ site: 'https://kiajalali.com', output: 'static', trailingSlash: 'always', build: { assets: 'assets' } });
