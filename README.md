🇵🇱 **Polski** | 🇬🇧 [English](README.en.md)

# 🔥 remontypiecow.pl

![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?logo=githubpages&logoColor=white)

Strona firmowa rodzinnej firmy zajmującej się **budową i remontami pieców przemysłowych**. Zastąpiła płatny kreator stron (WebWave) **statyczną stroną w Astro**, hostowaną za darmo na GitHub Pages.

## ✨ Co zawiera
- **SEO techniczne:** tytuł i opis meta, adres kanoniczny, Open Graph, **dane strukturalne schema.org `LocalBusiness`** z obszarem działania i listą usług, generowana `sitemap.xml` z wersjami językowymi, `robots.txt`
- **Automatyczna optymalizacja zdjęć:** konwersja do WebP i kilka rozmiarów (`srcset`) przy buildzie
- **Galeria** budowana automatycznie z folderu ze zdjęciami, z powiększeniem w natywnym `<dialog>`
- **Wersja mobilna** z przyklejonym przyciskiem „Zadzwoń” i menu działającym bez JavaScriptu
- Animacje przy przewijaniu w czystym CSS (`animation-timeline: view()`), z poszanowaniem `prefers-reduced-motion`
- **Trzy wersje językowe** (`/`, `/en`, `/de`) z przełącznikiem w nagłówku i znacznikami `hreflang`
- Dane firmy w `src/data/company.ts`, a wszystkie teksty (PL/EN/DE) w `src/data/content.ts` – wspólne dla strony i JSON-LD
- **CI/CD:** GitHub Actions buduje i publikuje stronę po każdym pushu

## 🛠 Technologie
Astro · Tailwind CSS 4 · TypeScript · sharp · GitHub Actions · GitHub Pages

## 🚀 Uruchomienie
```bash
npm install
npm run dev      # podgląd: http://localhost:4321
npm run build    # wynik w dist/
```
