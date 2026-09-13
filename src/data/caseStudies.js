// Sourced directly from the DineFlow and GariGhor case studies.
// caseStudy: '/case-studies/<file>.html' points to the full case study page
// copied into public/case-studies/ — hosted as static pages.

export const flagshipProjects = [
  {
    id: 'dineflow',
    title: 'DineFlow',
    subtitle: 'Full-Stack Restaurant Ordering Platform',
    description:
      'A production-ready restaurant ordering platform with authentication, PostgreSQL, admin operations, payments, email notifications, order tracking, and server-side business logic.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'SSLCommerz', 'Resend', 'Supabase'],
    metrics: [
      { value: '17', label: 'API routes' },
      { value: '9', label: 'database models' },
      { value: '4', label: '3rd-party integrations' },
      { value: '0', label: 'known vulnerabilities' },
    ],
    problem:
      'A restaurant website needs to do more than display a menu. Customers need to browse, order, pay, and track orders while administrators need reliable operational workflows.',
    solution:
      'Built a complete ordering platform connecting customer workflows, server-side business logic, PostgreSQL persistence, authentication, payments, email, and restaurant administration.',
    result: 'A complete business application rather than a static restaurant website.',
    image: '/images/projects/Dineflow-Restaurant.png',
    live: 'https://dineflowrestaurantplatform.vercel.app',
    github: 'https://github.com/IamRishiraj1/Dineflow_Restaurant',
    caseStudy: '/case-studies/dineflow.html',
  },
  {
    id: 'garighor',
    title: 'GariGhor Motors',
    subtitle: 'AI-Powered Dealership & Lead Automation Platform',
    description:
      'A full-stack dealership platform with live vehicle inventory, admin management, AI-powered customer assistance, structured lead capture, appointment workflows, and PostgreSQL persistence.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Gemini', 'Cloudinary'],
    metrics: [
      { value: '35+', label: 'React components' },
      { value: '9', label: 'API endpoints' },
      { value: '4', label: 'DB models' },
      { value: '2', label: 'lead-capture paths' },
    ],
    problem:
      'Dealership visitors could browse vehicles but needed a faster way to get answers and submit qualified test-drive requests.',
    solution:
      'Built an AI front desk that uses structured responses, validates lead information, checks vehicle inventory, and stores qualified leads in PostgreSQL.',
    result: 'A dealership workflow that turns website conversations into structured business leads.',
    image: '/images/projects/GHARIGHOR.png',
    live: 'https://garighor-motors.vercel.app',
    github: 'https://github.com/IamRishiraj1/-garighor-motors',
    caseStudy: '/case-studies/garighor.html',
  },
];
