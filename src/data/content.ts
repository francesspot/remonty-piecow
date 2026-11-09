// Wszystkie teksty strony w trzech językach: treść, SEO i dane strukturalne (JSON-LD).
import { company } from './company';

export type Lang = 'pl' | 'en' | 'de';

// Kolejność = kolejność w przełączniku języka. Polski jest domyślny (x-default).
export const langs: Lang[] = ['pl', 'en', 'de'];

// Adresy stron; bez końcowego ukośnika, bo build tworzy pliki en.html i de.html.
export const paths: Record<Lang, string> = { pl: '/', en: '/en', de: '/de' };

export type Service = { name: string; description: string; icon: string };

type Content = {
  locale: string;
  // Tytuł do ~65 znaków, opis do ~160 – dłuższe Google ucina w wynikach.
  seo: { title: string; description: string };
  tagline: string;
  area: string;
  expertise: string[];
  menu: {
    services: string;
    about: string;
    projects: string;
    contact: string;
    navigation: string;
    toggle: string;
    home: string;
    language: string;
  };
  call: string;
  write: string;
  emailSubject: string;
  hero: { eyebrow: string; title: string; description: string; facts: string[] };
  // Kolejność usług ma znaczenie: pierwsza jest wyróżniona na stronie.
  services: { title: string; description: string; highlights: string[]; list: Service[] };
  about: {
    title: string;
    paragraphs: string[];
    brands: string;
    brandsLabel: string;
    experience: string;
    years: string;
    area: string;
    areaValue: string;
  };
  gallery: { title: string; description: string; enlarged: string; close: string };
  contact: { title: string; description: string; phone: string; email: string; area: string; areaValue: string };
  // Pasek z propozycją tej wersji językowej, pokazywany osobom z przeglądarką w tym języku.
  hint: { text: string; link: string; close: string };
};

const years = company.yearsOfExperience;

export const content: Record<Lang, Content> = {
  pl: {
    locale: 'pl_PL',
    seo: {
      title: 'Budowa i remonty pieców przemysłowych – cała Polska | Jerzy Pora',
      description: 'Budowa pieców przemysłowych i piekarniczych od podstaw, remonty i modernizacja palenisk. Ponad 30 lat doświadczenia, realizacje na terenie całej Polski.',
    },
    tagline: 'Budowa i remonty pieców przemysłowych',
    area: 'Polska',
    expertise: ['budowa pieców przemysłowych', 'piece piekarnicze', 'remonty palenisk', 'modernizacja pieców', 'wymiana rusztów'],
    menu: {
      services: 'Usługi',
      about: 'O firmie',
      projects: 'Realizacje',
      contact: 'Kontakt',
      navigation: 'Główna nawigacja',
      toggle: 'Menu',
      home: 'strona główna',
      language: 'Język',
    },
    call: 'Zadzwoń',
    write: 'Napisz do nas',
    emailSubject: 'Zapytanie o piec przemysłowy',
    hero: {
      eyebrow: 'Mistrzowie palenisk przemysłowych',
      title: 'Budowa i remonty pieców przemysłowych',
      description: `Budujemy piece przemysłowe i piekarnicze od podstaw, a także remontujemy i modernizujemy istniejące paleniska. Ponad ${years} lat doświadczenia, realizacje na terenie całej Polski.`,
      facts: [`Ponad ${years} lat doświadczenia`, 'Budowa od podstaw', 'Cała Polska', 'Naprawy awaryjne'],
    },
    services: {
      title: 'Zakres usług',
      description: 'Budujemy nowe piece od podstaw oraz remontujemy i modernizujemy istniejące – na terenie całej Polski.',
      highlights: ['Budowa od podstaw', 'Konstrukcje na zamówienie', 'Montaż pieców', `Ponad ${years} lat doświadczenia`],
      list: [
        {
          name: 'Budowa pieców przemysłowych',
          description: 'Budujemy i montujemy piece przemysłowe od podstaw, także jako konstrukcje wykonywane na indywidualne zamówienie.',
          icon: 'build',
        },
        { name: 'Piece piekarnicze', description: 'Wykonujemy także piece piekarnicze.', icon: 'oven' },
        {
          name: 'Remonty pieców i palenisk',
          description: 'Wymiana cegieł, rusztów i uszczelnień. Pracujemy m.in. na piecach MAWERA, Hajnówka, SWD, Ferroli i INTERMET.',
          icon: 'repair',
        },
        {
          name: 'Modernizacja',
          description: 'Usprawnienia poprawiające sprawność spalania i obniżające koszty eksploatacji pieca.',
          icon: 'upgrade',
        },
        {
          name: 'Naprawy awaryjne',
          description: 'Szybka reakcja przy awarii, żeby jak najbardziej skrócić przestój produkcji.',
          icon: 'emergency',
        },
        {
          name: 'Przeglądy i ekspertyzy',
          description: 'Przeglądy techniczne, ekspertyzy, wstępne wyceny i doradztwo.',
          icon: 'inspection',
        },
      ],
    },
    about: {
      title: 'O firmie',
      paragraphs: [
        `${company.name} od ponad ${years} lat buduje piece przemysłowe od podstaw – w tym konstrukcje nietypowe, wykonywane na indywidualne zamówienie, oraz piece piekarnicze.`,
        'Remontujemy i modernizujemy też istniejące piece i paleniska, wykonujemy naprawy awaryjne, przeglądy techniczne i ekspertyzy oraz przygotowujemy wstępne wyceny.',
      ],
      brands: 'Pracujemy m.in. na piecach marek:',
      brandsLabel: 'Obsługiwane marki pieców',
      experience: 'Doświadczenie',
      years: `${years}+ lat`,
      area: 'Obszar działania',
      areaValue: 'cała Polska',
    },
    gallery: {
      title: 'Realizacje',
      description: 'Zdjęcia z budowy pieców i gotowe realizacje.',
      enlarged: 'Powiększone zdjęcie',
      close: 'Zamknij',
    },
    contact: {
      title: 'Porozmawiajmy o Twoim piecu',
      description: 'Zadzwoń albo napisz, czego potrzebujesz: budowy nowego pieca, remontu czy przeglądu. Możesz też przesłać zdjęcia pieca.',
      phone: 'Telefon',
      email: 'E-mail',
      area: 'Obszar działania',
      areaValue: 'Cała Polska',
    },
    hint: { text: 'Ta strona jest dostępna także po polsku.', link: 'Przejdź do wersji polskiej', close: 'Zamknij' },
  },

  en: {
    locale: 'en_GB',
    seo: {
      title: 'Industrial Furnace Construction & Repair – Poland | Jerzy Pora',
      description: 'Construction of industrial and bakery ovens from scratch, repair and modernisation of furnaces. Over 30 years of experience, projects across Poland.',
    },
    tagline: 'Industrial furnace construction and repair',
    area: 'Poland',
    expertise: ['industrial furnace construction', 'bakery ovens', 'firebox repair', 'furnace modernisation', 'grate replacement'],
    menu: {
      services: 'Services',
      about: 'About us',
      projects: 'Projects',
      contact: 'Contact',
      navigation: 'Main navigation',
      toggle: 'Menu',
      home: 'home page',
      language: 'Language',
    },
    call: 'Call',
    write: 'Email us',
    emailSubject: 'Enquiry about an industrial furnace',
    hero: {
      eyebrow: 'Industrial furnace specialists',
      title: 'Construction and repair of industrial furnaces',
      description: `We build industrial and bakery ovens from scratch, and repair and modernise existing fireboxes. Over ${years} years of experience, projects across Poland.`,
      facts: [`Over ${years} years of experience`, 'Built from scratch', 'All of Poland', 'Emergency repairs'],
    },
    services: {
      title: 'Our services',
      description: 'We build new furnaces from scratch and repair and modernise existing ones – anywhere in Poland.',
      highlights: ['Built from scratch', 'Custom-made designs', 'Furnace installation', `Over ${years} years of experience`],
      list: [
        {
          name: 'Industrial furnace construction',
          description: 'We build and install industrial furnaces from scratch, including custom-made designs.',
          icon: 'build',
        },
        { name: 'Bakery ovens', description: 'We also build bakery ovens.', icon: 'oven' },
        {
          name: 'Furnace and firebox repair',
          description: 'Replacement of bricks, grates and seals. We work on furnaces by MAWERA, Hajnówka, SWD, Ferroli, INTERMET and others.',
          icon: 'repair',
        },
        {
          name: 'Modernisation',
          description: 'Upgrades that improve combustion efficiency and lower the running costs of the furnace.',
          icon: 'upgrade',
        },
        {
          name: 'Emergency repairs',
          description: 'Fast response to breakdowns to keep production downtime as short as possible.',
          icon: 'emergency',
        },
        {
          name: 'Inspections and assessments',
          description: 'Technical inspections, expert assessments, preliminary quotes and advice.',
          icon: 'inspection',
        },
      ],
    },
    about: {
      title: 'About us',
      paragraphs: [
        `${company.name} has been building industrial furnaces from scratch for over ${years} years – including non-standard, custom-made designs – as well as bakery ovens.`,
        'We also repair and modernise existing furnaces and fireboxes, carry out emergency repairs, technical inspections and expert assessments, and prepare preliminary quotes.',
      ],
      brands: 'We work on furnaces by brands including:',
      brandsLabel: 'Supported furnace brands',
      experience: 'Experience',
      years: `${years}+ years`,
      area: 'Area served',
      areaValue: 'all of Poland',
    },
    gallery: {
      title: 'Projects',
      description: 'Photos from furnace construction and completed projects.',
      enlarged: 'Enlarged photo',
      close: 'Close',
    },
    contact: {
      title: 'Let’s talk about your furnace',
      description: 'Call or email us and tell us what you need: a new furnace, a repair or an inspection. You can also send us photos of your furnace.',
      phone: 'Phone',
      email: 'Email',
      area: 'Area served',
      areaValue: 'All of Poland',
    },
    hint: { text: 'This page is also available in English.', link: 'Switch to English', close: 'Close' },
  },

  de: {
    locale: 'de_DE',
    seo: {
      title: 'Bau und Reparatur von Industrieöfen – Polen | Jerzy Pora',
      description: 'Bau von Industrie- und Backöfen von Grund auf, Reparatur und Modernisierung von Feuerungen. Über 30 Jahre Erfahrung, Aufträge in ganz Polen.',
    },
    tagline: 'Bau und Reparatur von Industrieöfen',
    area: 'Polen',
    expertise: ['Bau von Industrieöfen', 'Backöfen', 'Reparatur von Feuerungen', 'Modernisierung von Öfen', 'Austausch von Rosten'],
    menu: {
      services: 'Leistungen',
      about: 'Über uns',
      projects: 'Referenzen',
      contact: 'Kontakt',
      navigation: 'Hauptnavigation',
      toggle: 'Menü',
      home: 'Startseite',
      language: 'Sprache',
    },
    call: 'Anrufen',
    write: 'Schreiben Sie uns',
    emailSubject: 'Anfrage zu einem Industrieofen',
    hero: {
      eyebrow: 'Spezialisten für Industriefeuerungen',
      title: 'Bau und Reparatur von Industrieöfen',
      description: `Wir bauen Industrie- und Backöfen von Grund auf und reparieren und modernisieren bestehende Feuerungen. Über ${years} Jahre Erfahrung, Aufträge in ganz Polen.`,
      facts: [`Über ${years} Jahre Erfahrung`, 'Bau von Grund auf', 'Ganz Polen', 'Notfallreparaturen'],
    },
    services: {
      title: 'Unsere Leistungen',
      description: 'Wir bauen neue Öfen von Grund auf und reparieren und modernisieren bestehende – in ganz Polen.',
      highlights: ['Bau von Grund auf', 'Sonderanfertigungen', 'Montage von Öfen', `Über ${years} Jahre Erfahrung`],
      list: [
        {
          name: 'Bau von Industrieöfen',
          description: 'Wir bauen und montieren Industrieöfen von Grund auf, auch als Sonderanfertigungen nach individuellem Auftrag.',
          icon: 'build',
        },
        { name: 'Backöfen', description: 'Wir bauen auch Backöfen.', icon: 'oven' },
        {
          name: 'Reparatur von Öfen und Feuerungen',
          description: 'Austausch von Steinen, Rosten und Dichtungen. Wir arbeiten u. a. an Öfen von MAWERA, Hajnówka, SWD, Ferroli und INTERMET.',
          icon: 'repair',
        },
        {
          name: 'Modernisierung',
          description: 'Verbesserungen, die den Verbrennungswirkungsgrad erhöhen und die Betriebskosten des Ofens senken.',
          icon: 'upgrade',
        },
        {
          name: 'Notfallreparaturen',
          description: 'Schnelle Reaktion bei Störungen, damit der Produktionsausfall so kurz wie möglich bleibt.',
          icon: 'emergency',
        },
        {
          name: 'Inspektionen und Gutachten',
          description: 'Technische Inspektionen, Gutachten, erste Kostenvoranschläge und Beratung.',
          icon: 'inspection',
        },
      ],
    },
    about: {
      title: 'Über uns',
      paragraphs: [
        `${company.name} baut seit über ${years} Jahren Industrieöfen von Grund auf – darunter auch Sonderkonstruktionen nach individuellem Auftrag – sowie Backöfen.`,
        'Außerdem reparieren und modernisieren wir bestehende Öfen und Feuerungen, führen Notfallreparaturen, technische Inspektionen und Gutachten durch und erstellen erste Kostenvoranschläge.',
      ],
      brands: 'Wir arbeiten u. a. an Öfen folgender Marken:',
      brandsLabel: 'Unterstützte Ofenmarken',
      experience: 'Erfahrung',
      years: `${years}+ Jahre`,
      area: 'Einsatzgebiet',
      areaValue: 'ganz Polen',
    },
    gallery: {
      title: 'Referenzen',
      description: 'Fotos vom Ofenbau und abgeschlossene Projekte.',
      enlarged: 'Vergrößertes Foto',
      close: 'Schließen',
    },
    contact: {
      title: 'Sprechen wir über Ihren Ofen',
      description: 'Rufen Sie an oder schreiben Sie uns, was Sie brauchen: einen neuen Ofen, eine Reparatur oder eine Inspektion. Sie können uns auch Fotos Ihres Ofens schicken.',
      phone: 'Telefon',
      email: 'E-Mail',
      area: 'Einsatzgebiet',
      areaValue: 'Ganz Polen',
    },
    hint: { text: 'Diese Seite gibt es auch auf Deutsch.', link: 'Zur deutschen Version', close: 'Schließen' },
  },
};
