// Edit this file to update project cards.
// GitHub links intentionally aren't per-project — every card links to
// the full repository list at https://github.com/IamRishiraj1?tab=repositories
// Screenshots live in public/images/projects/
// NOTE: DineFlow and GariGhor are flagship projects — they live in
// src/data/caseStudies.js and render via the FeaturedWork section, not here.

export const projects = [
   {
  id: 'Doers-AI-Task-Manager',
  title: 'Do-ers — AI-Powered Task Manager',
  description:
    'An AI-powered productivity application that helps users organize tasks, generate intelligent task suggestions, and sync tasks with Todoist. Built with React and JavaScript, using Netlify serverless functions to securely communicate with external APIs while keeping sensitive credentials out of the client.',
  tags: [
    'React',
    'JavaScript',
    'AI Integration',
    'Groq API',
    'Todoist API',
    'Netlify Functions',
    'REST APIs',
    'Serverless Architecture'
  ],
  live: 'https://do-ers.netlify.app',
  github: 'https://github.com/IamRishiraj1/task-manager-ai',
  image: '/images/projects/Doers-AI-Task-Manager.png',
  proof: {
    image: '/images/projects/do-ers-proof.png',
    caption: 'Real browser notifications — task deadline reminders firing on schedule, not a mockup.',
  },
  featured: true,
},

   {
    id: 'portfolio-v2',
    title: 'Portfolio V2 — Editorial Style',
    description:
      'A second personal portfolio design — bold typography, black/white alternating sections and GSAP scroll animations, built with Next.js and TypeScript.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    live: 'https://rishiraj-portfolio-v2.vercel.app',
    image: '/images/projects/portfolio-v2.png',
    featured: true,
  },

{
    id: 'cine-vault-pro',
    title: 'CineVault Pro',
    description:
      'A premium movie discovery platform — browse trending titles, view details and build a personal watchlist.',
    tags: ['React', 'Movie API', 'UI Design'],
    live: 'https://cine-vault-pro.vercel.app',
    image: '/images/projects/cine-vault-pro.png',
    featured: true,
  },

  {
    id: 'yumyum-recipe',
    title: 'YumYum Recipe',
    description:
      'A recipe discovery app with a playful UI — browse dishes, view ingredients and follow step-by-step instructions.',
    tags: ['React', 'UI/UX', 'Recipe API'],
    live: 'https://yumyum-recipe.netlify.app',
    image: '/images/projects/yumyum-recipe.png',
    featured: true,
  },

  {
    id: 'weather-showcase',
    title: 'Weather Showcase',
    description:
      'A real-time weather app with live conditions, forecasts and a clean, glanceable UI powered by a public weather API.',
    tags: ['React', 'API Integration', 'CSS'],
    live: 'https://weathershowcase.vercel.app',
    image: '/images/projects/weather-showcase.png',
    featured: false,
  },
  {
    id: 'isobar-dashboard',
    title: 'Isobar Dashboard',
    description:
      'A data-dense weather & pressure dashboard, visualizing atmospheric metrics with interactive charts and live updates.',
    tags: ['React', 'Dashboard', 'Data Viz'],
    live: 'https://isobardashboard.netlify.app',
    image: '/images/projects/isobar-dashboard.png',
    featured: false,
  },
  
  {
    id: 'recipe-findero',
    title: 'Recipe Findero',
    description:
      'Search thousands of recipes by ingredient or cuisine, with a fast, responsive browsing experience.',
    tags: ['React', 'Recipe API', 'Search'],
    live: 'https://recipefindero.netlify.app',
    image: '/images/projects/recipe-findero.png',
    featured: false,
  },
  {
    id: 'pulse-crypto-tracker',
    title: 'Pulse Crypto Tracker',
    description:
      'A live cryptocurrency tracker with real-time prices, market caps and trend indicators for top coins.',
    tags: ['React', 'Crypto API', 'Real-time Data'],
    live: 'https://pulse-crypto-tracker.netlify.app',
    image: '/images/projects/pulse-crypto-tracker.png',
    featured: false,
  },
  {
    id: 'crypto-tracker',
    title: 'Crypto Tracker',
    description:
      'A streamlined crypto price tracker with sortable market data and a fast, distraction-free interface.',
    tags: ['React', 'Crypto API'],
    live: 'https://crypto-tracker-two-blond.vercel.app',
    image: '/images/projects/crypto-tracker.png',
    featured: false,
  },
  {
    id: 'cc-currency-converter',
    title: 'CC Currency Converter',
    description:
      'A snappy currency converter supporting live exchange rates across major global currencies.',
    tags: ['JavaScript', 'Exchange Rate API'],
    live: 'https://cc-currencyconverter.netlify.app',
    image: '/images/projects/cc-currency-converter.png',
    featured: false,
  },
  {
    id: 'currency-value-online',
    title: 'Currency Value Online',
    description:
      'A lightweight tool for checking live currency values and conversions on the go.',
    tags: ['JavaScript', 'API Integration'],
    live: 'https://currencyvalueonline.netlify.app',
    image: '/images/projects/currency-value-online.png',
    featured: false,
  },
  
  
];
