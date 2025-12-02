## GPSS Investor Showcase

- `npm install` to install dependencies.
- `npm run dev` starts Vite dev server on `http://localhost:5173`.
- `npm run build` creates production build; `npm run preview` serves it.
- `npm run lint` runs ESLint for JSX files.
- `npm run html:export` copies the built `dist/index.html` to `public/investor.html`.

This project uses Tailwind CSS and `react-i18next` with English/Arabic translations sourced from the GPSS brochure. Use the header toggle to switch languages; the preference is stored via `i18next-browser-languagedetector`. When running locally, ensure the brochure PDF is available at `public/GPSS final 24pages (1).pdf` for the download link in the hero section.

