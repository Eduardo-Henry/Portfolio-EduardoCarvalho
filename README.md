# Minimal Portfolio (React + Vite + TypeScript)

A simple, minimalist portfolio in English built with React, Vite, and TypeScript following Atomic Design (atoms, molecules, organisms).

## Features
- Clean typography and layout
- Sections: Hero, About, Projects, Contact
- Responsive grid for projects

## Requirements
- Node.js 18 or newer
- npm (comes with Node)

## Getting Started (Windows CMD)

```bat
cd c:\Users\duhco\Portfolio2025
npm install
npm run dev
```

- Open the local URL shown (e.g., http://localhost:5173).

## Build & Preview

```bat
cd c:\Users\duhco\Portfolio2025
npm run build
npm run preview
```

## Customize
- Change text and links in src/App.tsx.
- Update your name in src/components/organisms/Header.tsx and src/components/organisms/Footer.tsx.
- Replace placeholder project links in src/App.tsx.

## Atomic Structure
- Atoms: src/components/atoms
- Molecules: src/components/molecules
- Organisms: src/components/organisms

## Assets (drop your images)
- Folder: src/assets
- Hero photo: add hero.jpg and it will appear on the hero section.
- Project thumbnails: add files and reference their URLs in your project links (or leave as text-only cards).
- You can change classes .avatar and layout in src/styles.css.
