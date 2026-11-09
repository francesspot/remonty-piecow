# Wdrożenie remontypiecow.pl na GitHub Pages

## 0. Zanim cokolwiek wygaśnie
- Opłać **domenę** w WebWave na rok. Bez tego adres przepadnie.
- Jeśli nie zdążysz z przenosinami w ciągu 8 dni, dokup **OnePager na 1 miesiąc (39 zł)**, żeby stara strona działała do czasu przełączenia.

## 1. Zdjęcia
Zdjęcia są już w `src/assets/photos/`. Wszystko, co jest w tym folderze, automatycznie pojawia się w galerii (w kolejności nazw plików), a przy buildzie jest przeskalowane i skonwertowane do WebP.

- **Nowe zdjęcie:** wrzuć plik do folderu i dopisz jego opis w trzech językach w `src/data/photos.ts` (`'nazwa-pliku.jpg': { pl: '…', en: '…', de: '…' }`).
- **Teksty na stronie** (PL, EN, DE) są w `src/data/content.ts`, a telefon, e-mail i marki w `src/data/company.ts`.
- **Tło sekcji powitalnej i zdjęcie w „O firmie”:** ustawiasz je w tym samym pliku (`heroPhotoFile`, `aboutPhotoFile`). Na tło najlepiej nadaje się zdjęcie poziome. Te dwa zdjęcia nie powtarzają się w galerii.
- **Logo:** `src/assets/logo.png` (nagłówek) i `public/logo.png` (dane strukturalne). Ikony przeglądarki to `public/favicon.png` i `public/apple-touch-icon.png`.
- **Usunięcie zdjęcia ze strony:** wystarczy skasować plik z folderu.

## 2. Podgląd lokalny
```bash
npm install
npm run dev        # http://localhost:4321
```

## 3. Repozytorium i GitHub Pages
1. Utwórz repozytorium na GitHubie i wypchnij do niego projekt (gałąź `main`).
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. Workflow `.github/workflows/deploy.yml` przy każdym pushu do `main` zbuduje stronę i ją opublikuje. Postęp widać w zakładce **Actions**.
4. **Settings → Pages → Custom domain:** wpisz `remontypiecow.pl` i zapisz.

## 4. DNS w panelu domeny (WebWave)
Usuń stare rekordy A/CNAME wskazujące na WebWave i dodaj:

| Typ   | Nazwa | Wartość                  |
|-------|-------|--------------------------|
| A     | @     | 185.199.108.153          |
| A     | @     | 185.199.109.153          |
| A     | @     | 185.199.110.153          |
| A     | @     | 185.199.111.153          |
| CNAME | www   | TWOJ-LOGIN.github.io.    |

- **Nie usuwaj** rekordu TXT `google-site-verification`, jeśli taki jest.
- Jeśli panel WebWave nie pozwala edytować DNS: poproś o kod **authinfo** i przenieś domenę do innego rejestratora, a tam ustaw powyższe rekordy.
- Propagacja trwa zwykle od kilku minut do kilku godzin.

## 5. HTTPS
Gdy GitHub wyda certyfikat, w Settings → Pages zaznacz **Enforce HTTPS**.

## 6. Google
1. **Google Search Console:** dodaj usługę `remontypiecow.pl` (typ *Domena*, weryfikacja rekordem TXT) i w *Mapy witryn* wyślij `https://remontypiecow.pl/sitemap.xml`.
2. Dane strukturalne sprawdzisz w **Rich Results Test** (search.google.com/test/rich-results).
3. Warto założyć bezpłatny **Profil Firmy w Google** z obszarem działania „Polska” i linkiem do strony.

## 7. Na koniec
Gdy nowa strona działa pod `https://remontypiecow.pl`, wyłącz odnawianie planu OnePager w WebWave.
