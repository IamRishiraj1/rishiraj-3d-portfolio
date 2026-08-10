# Rishi Raj Biswas — 3D Portfolio

A dark, futuristic 3D developer portfolio built with **React + Vite**, **React Three Fiber**,
**Framer Motion** and **Tailwind CSS**.

## ✨ What's inside

- Cinematic boot-sequence loader
- Custom neon cursor (desktop)
- Hero section with a lazy-loaded 3D scene — a floating holographic "dev console"
  orbited by tech nodes, parallax on mouse move, starfield + bloom postprocessing
- Full-page canvas starfield background with mouse parallax (lightweight, always-on)
- About section with animated glass cards
- Skills section with a 3D fibonacci-sphere orbit of your tech stack + category cards
- Projects grid (10 of your live projects wired in), hover animations, live/GitHub links
- Animated vertical experience timeline
- Certificates section linking directly to your 4 uploaded certificate PDFs
  (already copied into `public/certificates/`)
- Contact form wired for EmailJS, with a working `mailto:` fallback if you skip setup
- Dark/light theme toggle, resume download button, responsive nav with mobile drawer
- Fully responsive, SEO meta tags, `robots.txt`

## 🚀 Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## 🔧 Things to customize

1. **Resume** — drop your PDF at `public/resume.pdf` (the "Download Resume" buttons
   already point there).
2. **EmailJS (contact form)** — create a free account at https://www.emailjs.com,
   set up an email service + template, then open `src/sections/Contact.jsx` and
   replace:
   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```
   Until you do, the form still works — it opens the visitor's email client with a
   pre-filled message to `rjrishiraj3@gmail.com`.
3. **Certificates** — already wired to the 4 PDFs you uploaded, copied into
   `public/certificates/`. Add more by editing `src/data/certificates.js`.
4. **Colors / fonts** — edit the design tokens in `tailwind.config.js`
   (`cyan.neon`, `violet.neon`, `void`, `font.display`, `font.mono`, etc).
5. **og-cover image** — add a `public/og-cover.jpg` (1200×630) and re-add the
   `<meta property="og:image">` tag in `index.html` if you want a social share preview.

## 📦 Deploying

This is a static Vite build — deploy the `dist/` folder to **Vercel**, **Netlify**,
**GitHub Pages**, or any static host.

- **Vercel**: `vercel` (framework auto-detected)
- **Netlify**: build command `npm run build`, publish directory `dist`

## ⚡ Performance notes

- The heavy 3D hero scene and skills orbit are both **lazy-loaded** (`React.lazy` +
  `Suspense`) so they don't block first paint.
- Hero scene automatically drops resolution/particle count and disables
  postprocessing on small screens / touch devices (see `quality` prop in
  `Hero.jsx` → `HeroScene.jsx`).
- The full-page starfield uses plain Canvas 2D (not WebGL) so it's cheap to keep
  running behind every section.

## 📁 Folder structure

```
portfolio/
├── public/
│   ├── certificates/       ← your 4 certificate PDFs
│   ├── favicon.svg
│   ├── robots.txt
│   └── resume.pdf          ← add this yourself
├── src/
│   ├── components/         Navbar, Loader, CustomCursor, StarfieldBackground, Reveal
│   ├── sections/           Hero, About, Skills, Projects, Experience, Certificates, Contact, Footer
│   ├── models/              HeroScene.jsx, SkillsOrbit.jsx (R3F)
│   ├── data/                projects.js, skills.js, certificates.js, experience.js
│   ├── hooks/                useTheme.js
│   ├── styles/index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🧩 Suggested next additions (not built in yet)

- Multi-language toggle (i18n)
- AI chatbot assistant widget
- Visitor analytics (e.g. Plausible or Vercel Analytics — one script tag)
- Background music toggle
