🇵🇱 [Polski](README.md) | 🇬🇧 **English**

# 🔥 remontypiecow.pl

![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?logo=githubpages&logoColor=white)

Website for a family business that **builds and repairs industrial furnaces**. I replaced a paid website builder (WebWave) with a **static Astro site** hosted for free on GitHub Pages.

## ✨ Features
- **Technical SEO:** meta title and description, canonical URL, Open Graph, **schema.org `LocalBusiness` structured data** with service area and service list, generated `sitemap.xml` with language versions, `robots.txt`
- **Automatic image optimization:** WebP conversion and multiple sizes (`srcset`) at build time
- **Gallery** built automatically from a photo folder, with a lightbox using native `<dialog>`
- **Mobile layout** with a sticky "Call" button and a menu that works without JavaScript
- Scroll animations in pure CSS (`animation-timeline: view()`), respecting `prefers-reduced-motion`
- **Three language versions** (`/`, `/en`, `/de`) with a switcher in the header and `hreflang` tags
- Business data in `src/data/company.ts` and all copy (PL/EN/DE) in `src/data/content.ts`, shared by the page and JSON-LD
- **CI/CD:** GitHub Actions builds and deploys the site on every push

## 🛠 Tech stack
Astro · Tailwind CSS 4 · TypeScript · sharp · GitHub Actions · GitHub Pages

## 🚀 Getting started
```bash
npm install
npm run dev      # preview: http://localhost:4321
npm run build    # output in dist/
```
