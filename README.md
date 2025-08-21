## PrimeEvils Monorepo

React + TypeScript frontend (Vite).

### Requirements

- Node.js 18+ and npm

### Project structure

```
primeevils/
  frontend/                 # React + TS app (Vite)
    index.html
    package.json
    tsconfig.json
    vite.config.ts
    src/
      main.tsx
      App.tsx
      ...
```

### Run the frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

The dev server URL will be printed by Vite (usually `http://localhost:5173`).

### Frontend assets: public vs src/assets

- **public/**
  - **Not bundled** by Vite; files are copied as-is to the server root.
  - Reference with absolute URLs like `/logo.png`.
  - Use for favicons, `robots.txt`, `manifest.json`, or large static files that don't need hashing.
  - Example (in HTML):

```html
<img src="/logo.png" alt="Logo" />
```

- **src/assets/**
  - **Processed** by Vite (hashing, optimization, tree-shaking when imported).
  - Import into TS/TSX/CSS so Vite can manage them.
  - Use for images that are part of the app UI.
  - Example (in TSX):

```ts
import logoUrl from "./assets/logo.png";

export function Header() {
  return <img src={logoUrl} alt="Logo" />;
}
```

- Example (in CSS):

```css
.hero {
  background: url("./assets/hero.jpg") center/cover no-repeat;
}
```

- **Recommendation**: keep root-static files (favicon, manifest, robots) in `public/`. Put UI images in `src/assets/` and import them.
