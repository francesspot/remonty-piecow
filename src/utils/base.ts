// Ścieżki z prefiksem `base` z astro.config.mjs. Na domenie base = „/”, a na podglądzie
// pod adresem francesspot.github.io/remonty-piecow strona leży w podfolderze /remonty-piecow.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

// Podgląd (strona w podfolderze) nie powinien trafić do Google zamiast wersji na domenie.
export const isPreview = base !== '';

// „/en” → „/remonty-piecow/en” na podglądzie, bez zmian na domenie.
export const withBase = (path: string) => base + path;
