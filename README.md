# MB Bauausfuehrungen GmbH Website

Moderne, SEO-optimierte Next.js Website (App Router, TypeScript, Tailwind) fuer ein Berliner Bauunternehmen.

## Voraussetzungen

- Node.js 20+
- npm 10+

## Entwicklung starten

```bash
npm install
npm run dev
```

Build pruefen:

```bash
npm run build
npm start
```

## Inhalte pflegen

Alle Inhalte liegen im Repository und werden statisch generiert.

- Leistungen: `src/content/services/*.md`
- Referenzen: `src/content/projects/*.md`

### Neue Leistung anlegen

1. Neue Markdown-Datei in `src/content/services/` erstellen, z. B. `fassadenarbeiten.md`.
2. Frontmatter setzen (`title`, `excerpt`, `order`, `image`, optionale SEO-Felder).
3. Bild in `public/placeholders/` oder finalen Asset-Ordner legen und im Frontmatter referenzieren.

### Neue Referenz anlegen

1. Neue Markdown-Datei in `src/content/projects/` erstellen.
2. Frontmatter setzen (`title`, `location`, `excerpt`, `imageBefore`, `imageAfter`, `year`, optionale SEO-Felder).
3. Bilder in `public/placeholders/` austauschen oder neue Dateien anlegen.

## Domain und Firmendaten zentral konfigurieren

Zentrale Konfiguration: `src/config/site.ts`

Hier werden gepflegt:

- Domain (`domain`)
- Firmenname, Adresse, Telefon, E-Mail
- Default-SEO (Titel/Beschreibung)

Die Werte werden automatisch in Metadata, Canonical, Open Graph, JSON-LD, Sitemap und Robots verwendet.

## Deployment auf Vercel

1. Repository zu GitHub pushen.
2. In Vercel neues Projekt importieren.
3. Build Command: `npm run build`
4. Output: Standard Next.js
5. Nach Deployment Domain in `src/config/site.ts` auf produktive URL setzen.

## SEO-Umsetzung

- Page-Metadata pro Route
- Dynamische Metadata via `generateMetadata` fuer Service-/Projektdetailseiten
- Canonical URLs
- Open Graph Defaults + Overrides
- JSON-LD (`ConstructionCompany`) im Layout
- `src/app/sitemap.ts` und `src/app/robots.ts`

## Tech-Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- gray-matter + remark (Markdown Content)
- ESLint + Prettier
