import type { APIRoute } from 'astro';
import { langs, paths, type Lang } from '../data/content';

// Mapa witryny: każda wersja językowa z odnośnikami do pozostałych (hreflang).
// Bez <lastmod> – data buildu zmieniałaby się przy każdym wdrożeniu, nawet bez zmian w treści.
export const GET: APIRoute = ({ site }) => {
  const url = (lang: Lang) => new URL(paths[lang], site).href;
  const alternates = langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l)}"/>`).join('\n');
  const urls = langs
    .map(
      (l) => `  <url>
    <loc>${url(l)}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${url('pl')}"/>
  </url>`,
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
