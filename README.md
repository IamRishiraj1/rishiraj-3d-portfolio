# Rishi Raj Biswas — Portfolio

A dark, futuristic developer portfolio built with **React + Vite**, **Three.js / React Three Fiber**, **Tailwind CSS**, and **Framer Motion** — showcasing full-stack and AI-automation engineering work through real, in-depth case studies rather than a static project list.

**Live site:** [rishiraj-3d-portfolio.vercel.app](https://rishiraj-3d-portfolio.vercel.app)

---

## About

This is my personal developer portfolio, and also a working example of the kind of application I build for clients: a production React app with real routing, a 3D interactive hero, a light/dark theme system, a working contact pipeline, and native in-app case study pages instead of a PDF bolted onto a template.

I'm a **Full-Stack Developer building AI-powered business applications** — React/TypeScript on the frontend, Node.js/Python and PostgreSQL on the backend, with LLM APIs (Gemini, Groq) wired into real workflows like lead capture and task automation rather than just a chat widget. This portfolio is built to prove that directly: the two flagship projects featured here, **DineFlow** and **GariGhor Motors**, each have a full native case-study page covering the actual problem, architecture, engineering decisions, bugs found and fixed, and security measures — not just a screenshot and a one-line description.

I'm based in Chattogram, Bangladesh, and currently taking on freelance and full-time work as a full-stack / AI automation developer.

## Features

- 🪐 **Interactive 3D hero** — a floating holographic "dev console" scene built with React Three Fiber, orbiting tech nodes, mouse parallax, and bloom post-processing, lazy-loaded and auto-downgraded on mobile
- 📄 **Native case study pages** — `/case-studies/dineflow` and `/case-studies/garighor` are real in-app routes (React Router), not static HTML or a PDF viewer, covering architecture, key engineering decisions, real bugs found & fixed, and security checklists
- 🎯 **Flagship + supporting project structure** — DineFlow and GariGhor get full rich cards with live metrics; other projects (Do-ers, and more) sit in a secondary grid so they don't compete for attention
- 🌗 **Light/dark theme toggle** — a complete theme system, not just an inverted background
- ✉️ **Working contact form** — EmailJS-powered, with a `mailto:` fallback if it isn't configured
- 🧠 **3D skills orbit** — tech stack rendered as an orbiting fibonacci-sphere of labels
- ⚡ **Performance-conscious** — heavy 3D dependencies are code-split and lazy-loaded via `React.lazy`/`Suspense` so they never block first paint
- 📱 Fully responsive, with a custom cursor and canvas starfield background on desktop

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | React 18, Vite |
| Routing | React Router v6 |
| 3D | Three.js, @react-three/fiber, @react-three/drei, @react-three/postprocessing |
| Styling | Tailwind CSS (custom design tokens: neon cyan/violet on a near-black base) |
| Animation | Framer Motion, GSAP-style scroll reveals |
| Forms | EmailJS |
| Icons | react-icons |
| Deployment | Vercel |

## Project Structure

```
portfolio/
├── public/
│   ├── case-studies/          # Downloadable case-study PDFs
│   ├── images/
│   │   ├── projects/          # Project screenshots
│   │   └── case-studies/      # Curated case-study screenshots (by project)
│   └── resume.pdf
├── src/
│   ├── components/            # Navbar, Loader, CustomCursor, StarfieldBackground, Reveal, ScrollToTop
│   ├── sections/               # Hero, WhatIBuild, FeaturedWork, Projects, Capabilities,
│   │                           # Skills, HowIWork, About, Certificates, Contact, Footer
│   ├── pages/                  # Home.jsx, CaseStudyPage.jsx (routed pages)
│   ├── models/                  # HeroScene.jsx, SkillsOrbit.jsx (React Three Fiber)
│   ├── data/                    # projects.js, caseStudies.js, skills.js, capabilities.js, etc.
│   ├── hooks/                   # useTheme.js
│   ├── App.jsx                  # BrowserRouter + route definitions
│   └── main.jsx
├── vercel.json                  # SPA rewrite so /case-studies/* work on direct load
└── package.json
```

## Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

### Configuration

- **Resume**: drop your PDF at `public/resume.pdf`
- **Contact form**: add your EmailJS Service ID, Template ID, and Public Key in `src/sections/Contact.jsx` (falls back to a `mailto:` link if left unconfigured)
- **Content**: project data, skills, and case-study content all live in `src/data/` as plain JS objects — no CMS needed

## Case Studies

Unlike a typical portfolio project list, the two flagship projects here each get a dedicated page under `/case-studies/<slug>` covering:

- The problem, goal, and solution
- System architecture and data flow
- Key engineering decisions and trade-offs
- Real challenges found during development/QA and how they were fixed
- Security and reliability measures
- A product walkthrough with real screenshots
- Current project status

The full write-ups are also available as downloadable PDFs from each case study page.

## Deployment

Deployed on [Vercel](https://vercel.com) with zero-config Vite detection. `vercel.json` includes a catch-all rewrite so client-side routes (`/case-studies/*`) resolve correctly on direct navigation and refresh.

## Contact

- **Email**: rjrishiraj3@gmail.com
- **GitHub**: [@IamRishiraj1](https://github.com/IamRishiraj1)
- **LinkedIn**: [linkedin.com/in/iamrishiraj01](https://www.linkedin.com/in/iamrishiraj01)

---

© Rishi Raj Biswas. Built with React, Three.js, and a lot of coffee.
