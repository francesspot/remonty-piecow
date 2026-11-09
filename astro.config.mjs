// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Pełny adres strony – potrzebny do adresów kanonicznych, og:image i sitemap.
  // SITE_URL i BASE_PATH ustawia workflow na czas podglądu pod adresem GitHub Pages (bez własnej domeny).
  site: process.env.SITE_URL ?? 'https://remontypiecow.pl',
  base: process.env.BASE_PATH ?? '/',
  // Bez końcowego ukośnika w plikach: /404.html zamiast /404/index.html (wymóg GitHub Pages).
  build: { format: 'file' },
  vite: { plugins: [tailwindcss()] },
});
