// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Pełny adres strony – potrzebny do adresów kanonicznych, og:image i sitemap.
  site: 'https://remontypiecow.pl',
  // Bez końcowego ukośnika w plikach: /404.html zamiast /404/index.html (wymóg GitHub Pages).
  build: { format: 'file' },
  vite: { plugins: [tailwindcss()] },
});