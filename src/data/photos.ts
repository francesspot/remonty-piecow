import type { ImageMetadata } from 'astro';
import type { Lang } from './content';

// Opisy zdjęć w trzech językach (atrybut alt i podpis w powiększeniu). Klucz = nazwa pliku w src/assets/photos/.
// Dobre opisy mówią, co widać na zdjęciu – pomagają w Google Grafika i osobom niewidomym.
export const descriptions: Record<string, Record<Lang, string>> = {
  '00-sklepiona-komora-pieca-przemyslowego.jpg': {
    pl: 'Sklepiona komora pieca przemysłowego',
    en: 'Vaulted chamber of an industrial furnace',
    de: 'Gewölbte Brennkammer eines Industrieofens',
  },
  '00-murowanie-sklepienia-pieca.jpg': {
    pl: 'Murowanie sklepienia pieca',
    en: 'Bricklaying of a furnace vault',
    de: 'Mauern des Ofengewölbes',
  },
  '01-nowy-piec-komora-z-rusztem.jpg': {
    pl: 'Nowy piec przemysłowy – sklepiona komora z rusztem',
    en: 'New industrial furnace – vaulted chamber with a grate',
    de: 'Neuer Industrieofen – gewölbte Brennkammer mit Rost',
  },
  '02-murowanie-walcowej-czesci-pieca.jpg': {
    pl: 'Murowanie walcowej części pieca',
    en: 'Bricklaying of the cylindrical section of a furnace',
    de: 'Mauern des zylindrischen Ofenteils',
  },
  '03-lukowe-sklepienia-nad-rusztem.jpg': {
    pl: 'Łukowe sklepienia nad rusztem w nowym piecu',
    en: 'Arched vaults above the grate in a new furnace',
    de: 'Bogengewölbe über dem Rost in einem neuen Ofen',
  },
  '04-montaz-numerowanych-elementow-rusztu.jpg': {
    pl: 'Montaż numerowanych elementów rusztu',
    en: 'Installation of numbered grate elements',
    de: 'Montage nummerierter Rostelemente',
  },
  '05-nowy-piec-widok-komory.jpg': {
    pl: 'Nowy piec przemysłowy – widok komory z rusztem',
    en: 'New industrial furnace – view of the chamber with a grate',
    de: 'Neuer Industrieofen – Blick in die Brennkammer mit Rost',
  },
  '06-budowa-konstrukcji-pieca.jpg': {
    pl: 'Budowa konstrukcji pieca przemysłowego',
    en: 'Construction of an industrial furnace structure',
    de: 'Bau der Konstruktion eines Industrieofens',
  },
  '07-sklepienie-komory-nowego-pieca.jpg': {
    pl: 'Sklepienie komory nowego pieca',
    en: 'Vault of a new furnace chamber',
    de: 'Gewölbe der Brennkammer eines neuen Ofens',
  },
  '08-komora-pieca-z-rusztami.jpg': {
    pl: 'Sklepiona komora pieca z rusztami',
    en: 'Vaulted furnace chamber with grates',
    de: 'Gewölbte Ofenkammer mit Rosten',
  },
  '09-kanal-pieca-z-rusztem.jpg': {
    pl: 'Sklepiony kanał pieca z rusztem',
    en: 'Vaulted furnace flue with a grate',
    de: 'Gewölbter Ofenkanal mit Rost',
  },
};

const DEFAULT_DESCRIPTION: Record<Lang, string> = {
  pl: 'Realizacja – piec przemysłowy',
  en: 'Project – industrial furnace',
  de: 'Referenz – Industrieofen',
};

// Tło sekcji powitalnej (najlepiej zdjęcie poziome) i zdjęcie w sekcji „O firmie”.
// Te dwa zdjęcia nie są powtarzane w galerii.
export const heroPhotoFile = '00-sklepiona-komora-pieca-przemyslowego.jpg';
export const aboutPhotoFile = '00-murowanie-sklepienia-pieca.jpg';

export type Photo = { file: string; src: ImageMetadata; description: Record<Lang, string> };

// Wszystkie zdjęcia z folderu, posortowane po nazwie pliku (prefiks numeryczny ustala kolejność).
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
  { eager: true },
);

const all: Photo[] = Object.entries(files)
  .map(([path, mod]) => {
    const file = path.split('/').pop()!;
    return { file, src: mod.default, description: descriptions[file] ?? DEFAULT_DESCRIPTION };
  })
  .sort((a, b) => a.file.localeCompare(b.file, 'pl', { numeric: true }));

const findByFile = (file: string) => all.find((p) => p.file === file);

export const heroPhoto: Photo | undefined = findByFile(heroPhotoFile) ?? all[0];
export const aboutPhoto: Photo | undefined = findByFile(aboutPhotoFile) ?? all[1];

// Galeria = pozostałe zdjęcia; gdyby zostało za mało, pokazywane są wszystkie.
const rest = all.filter((p) => p !== heroPhoto && p !== aboutPhoto);
export const gallery: Photo[] = rest.length >= 3 ? rest : all;
