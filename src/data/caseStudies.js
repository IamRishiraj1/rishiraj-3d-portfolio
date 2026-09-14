// Full case-study content, sourced directly from the DineFlow and GariGhor
// case study documents. Native pages render this at /case-studies/<slug>.
// PDFs remain available as a separate "Download" CTA — see section 45/46
// of the spec: native page is the primary experience, not the PDF/HTML.

export const flagshipProjects = [
  {
    id: 'dineflow',
    slug: 'dineflow',
    title: 'DineFlow',
    subtitle: 'Full-Stack Restaurant Ordering Platform',
    tagline: 'I can engineer the complete system.',
    description:
      'A production-ready restaurant ordering platform with authentication, PostgreSQL, admin operations, payments, email notifications, order tracking, and server-side business logic.',
    role: 'Full-Stack Developer (solo)',
    stack: 'Next.js 16 · TypeScript · PostgreSQL',
    integrations: 'SSLCommerz · Resend · Supabase',
    status: 'Live in production',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'PostgreSQL (Supabase)', 'Supabase Storage', 'NextAuth.js', 'SSLCommerz', 'Resend', 'Zod', 'Recharts', 'Vercel'],
    metrics: [
      { value: '17', label: 'API routes' },
      { value: '9', label: 'database models' },
      { value: '4', label: '3rd-party integrations' },
      { value: '0', label: 'known vulnerabilities (current)' },
    ],
    image: '/images/projects/Dineflow-Restaurant.png',
    live: 'https://dineflowrestaurantplatform.vercel.app',
    github: 'https://github.com/IamRishiraj1/Dineflow_Restaurant',
    caseStudyPdf: '/case-studies/dineflow.pdf',

    preview: {
      problem:
        'A restaurant website needs to do more than display a menu. Customers need to browse, order, pay, and track orders while administrators need reliable operational workflows.',
      solution:
        'Built a complete ordering platform connecting customer workflows, server-side business logic, PostgreSQL persistence, authentication, payments, email, and restaurant administration.',
      result: 'A complete business application rather than a static restaurant website.',
    },

    problem:
      'Most restaurant websites stop at displaying a menu. Customers need to browse, order, pay, and track orders in real time — while the restaurant needs reliable operational workflows, not a static brochure site.',
    goal:
      'Find out what it actually takes to go from a polished frontend to a working business application — persistent data, server-side logic, authentication, and real operational workflows, not just a UI that looks finished.',
    solution:
      'A complete ordering platform connecting customer workflows, server-side business logic, PostgreSQL persistence, authentication, payments, transactional email, and restaurant administration — all behind real authentication, not a hidden link.',

    demo: {
      note: "The actual engineering in DineFlow lives in the admin dashboard — real order management, live payment reconciliation, analytics computed from real data — so there's a public demo login. No signup required.",
      email: 'demo@dineflow.example',
      password: 'TryMeOut2026',
      open: 'Full order pipeline, payment reconciliation, analytics, every page',
      restricted: 'Editing the menu, categories, settings, and image uploads — so the demo stays intact for the next visitor',
    },

    architecture: {
      description:
        "Customer actions are processed through server-side logic before anything is written to persistent storage — the frontend never talks to the database directly. Prisma enforces structured relationships between users, menu items, categories, and orders, while every route handler validates the request shape and checks authorization before executing a mutation. External services are each isolated behind their own module, so a failure in one — an email provider outage, for instance — can never cascade into blocking a core business action like checkout.",
      flow: [
        'Customer (Browser)',
        'React UI — Next.js App Router',
        'API / Server Logic — route handlers, middleware, Zod validation',
        'PostgreSQL + Prisma — orders, users, menu (relational data)',
        'External Services — SSLCommerz · Resend · Supabase Storage',
        'Admin Dashboard',
      ],
    },

    keyDecisions: [
      {
        title: 'Protecting business logic from the client',
        description:
          "The client submits which items and quantities were selected — never what they cost. Every order's item prices, subtotal, and delivery fee are recalculated server-side from the live database at the moment the order is created. An item deleted or marked unavailable since being added to the cart blocks the order outright rather than silently accepting stale data.",
      },
      {
        title: 'Modeling the order lifecycle as two independent states',
        description:
          'An order has a fulfillment status (Placed → Confirmed → Preparing → Ready → Completed, or Cancelled) and a payment status (Pending, Paid, Failed) — two separate fields rather than one combined status. That represents a real Cash on Delivery order correctly: fully confirmed and being prepared, while payment is still genuinely pending until the driver collects it.',
      },
      {
        title: 'Authentication & authorization for two different audiences',
        description:
          "Customers and restaurant staff share the same login system but not the same permissions — checked at two independent layers: route middleware that redirects non-admin visitors before an admin page ever renders, and a server-side check on every mutating admin API route underneath it. Guest checkout deliberately doesn't require an account.",
      },
      {
        title: 'Handling failure in three external integrations',
        description:
          "A payment gateway, an email provider, and cloud storage all sit outside this app's control, and each is isolated so a failure in one can't cascade. Payment confirmation doesn't rely solely on the customer's browser redirecting back — a server-to-server webhook runs independently as a fallback, sharing the same idempotency guard so a payment can never be double-processed.",
      },
    ],

    challenges: [
      {
        title: 'Caught while writing this case study',
        description:
          'Checking the "protected business logic" claim against the actual code found it wasn\'t fully true yet — prices were trusted directly from the checkout request, with nothing re-validating them against the database.',
        fix: 'Every price is now recalculated server-side from the database at order creation, and an item deleted or marked unavailable blocks the order outright.',
      },
      {
        title: 'Caught by automated security scan',
        description:
          "Every database table was publicly readable through Supabase's auto-generated API — including password hashes and customer data — despite the app never using that API. The gap existed purely because Row Level Security wasn't enabled.",
        fix: 'Row Level Security enabled across all nine tables with zero application code changes, verified clean on a follow-up scan.',
      },
      {
        title: 'Caught in QA — silent login error',
        description:
          'A toast meant to show "incorrect email or password" never appeared, in any browser. The actual cause was a single missing folder in the Tailwind build config\'s content-scanning list — a component living just outside the scanned paths, so its styles were never generated.',
        fix: 'One-line config change, verified by confirming the component\'s other styles rendered correctly afterward.',
      },
      {
        title: 'Caught in QA — unreachable feature',
        description:
          'Restaurants had no way to mark a Cash on Delivery payment as collected from the Payments page — the backend function existed and was wired to the Orders page, but the more natural place to look was read-only.',
        fix: 'The same reconciliation action now lives on both pages, restricted only to pending Cash on Delivery orders.',
      },
      {
        title: 'Caught in review — premature payment state',
        description:
          'Order creation was briefly marking online payments as "paid" immediately at checkout, before the customer had even reached the payment gateway.',
        fix: 'Every order now starts pending regardless of payment method; only a validated gateway confirmation marks it paid.',
      },
    ],

    security: [
      'Every API route validates its input shape with Zod before touching the database — malformed requests are rejected with a 400, not silently coerced',
      'Order pricing is recalculated server-side from the database at checkout — client-submitted prices are never trusted for anything financial',
      'Admin-only actions are checked at two independent layers: route middleware, and a server-side role check on every mutating API route',
      "Payment confirmation requires SSLCommerz's own server-to-server validation of both the transaction and the amount paid",
      'Row Level Security is enabled on every database table, closing Supabase\'s public REST API even though the app never uses it',
      'Secrets — database credentials, API keys, the service-role key — live only in server-side environment variables',
      "Order lookups by the public order number require the order's own email as a second factor",
      'Login, registration, checkout, and the contact form are rate-limited at the edge against scripted abuse',
      'The framework is kept current — a routine dependency audit surfacing a known vulnerability is treated as urgent, not backlogged',
    ],

    screenshots: [
      {
        src: '/images/case-studies/dineflow/05-admin-dashboard.png',
        title: 'Admin analytics dashboard',
        explanation: 'Revenue and order trends computed from real orders, not seeded demo numbers — what a restaurant owner would actually check every morning.',
      },
      {
        src: '/images/case-studies/dineflow/03-checkout.png',
        title: 'Checkout — real price validation',
        explanation: 'This is the request that hits the server-side price-validation logic described above — real customer data, recalculated pricing, not a trusted client total.',
      },
      {
        src: '/images/case-studies/dineflow/04-payment.png',
        title: 'Payment workflow',
        explanation: 'Online payment through SSLCommerz, validated server-to-server before an order is ever marked paid — never a client-side redirect alone.',
      },
      {
        src: '/images/case-studies/dineflow/06-order-management.png',
        title: 'Admin order management',
        explanation: 'The one action in this app that must never be automatic — a human confirming cash actually changed hands, deliberately walled off from ever touching an online payment\'s status.',
      },
      {
        src: '/images/case-studies/dineflow/01-homepage.png',
        title: 'Customer homepage',
        explanation: 'The public storefront customers land on — menu browsing, search, and a checkout flow built to reduce friction from a few taps to a fresh order.',
      },
      {
        src: '/images/case-studies/dineflow/07-order-track.png',
        title: 'Live order tracking',
        explanation: 'This view polls the same database row the admin\'s status dropdown writes to — what the customer sees is never stale, tested on a real phone.',
      },
      {
        src: '/images/case-studies/dineflow/08-architecture.png',
        title: 'System architecture',
        explanation: 'How the pieces connect — from the browser through server-side logic and validation to PostgreSQL and the three external services.',
      },
      {
        src: '/images/case-studies/dineflow/09-customer-email-proof.png',
        title: 'Verified in production — customer email',
        explanation: 'A real automated status-update email, received in a real inbox, generated by a real order placed through the live checkout flow — not a mockup.',
      },
      {
        src: '/images/case-studies/dineflow/10-admin-email-proof.png',
        title: 'Verified in production — restaurant alert',
        explanation: 'Sent automatically the moment an order is placed, confirmed with a live delivery — not a mocked network request.',
      },
    ],

    statusTable: [
      { area: 'Frontend UI (customer + admin)', status: 'Live' },
      { area: 'Database & API layer (PostgreSQL + Prisma)', status: 'Live' },
      { area: 'Authentication & role-based admin access', status: 'Live' },
      { area: 'Payment gateway (SSLCommerz, sandbox)', status: 'Live & verified' },
      { area: 'Image uploads (Supabase Storage)', status: 'Live & verified' },
      { area: 'Transactional email (Resend)', status: 'Live & verified' },
      { area: 'Security hardening (rate limiting, RLS, validation)', status: 'Complete' },
      { area: 'Framework currency (Next.js 16, zero known vulnerabilities)', status: 'Complete' },
      { area: 'Full QA pass with real outside testers', status: 'Complete' },
      { area: 'Handover documentation', status: 'Complete' },
    ],

    improveNext: [
      'Automated testing — the QA pass to date has been entirely manual; a real test suite around order-pricing and validation logic would catch regressions before a human has to.',
      'A CI pipeline — Vercel\'s preview deployments catch build failures, but there\'s no automated lint/test gate before a pull request is reviewable.',
      'Structured observability — a production issue would need a human to notice it today; real error tracking would surface problems before a user reports them.',
      'Verifying the payment integration line-by-line against SSLCommerz\'s current API docs before any real transaction runs through it.',
      'More granular admin roles — a real restaurant likely wants a kitchen-staff view that can update order status without touching settings or financials.',
    ],
  },

  {
    id: 'garighor',
    slug: 'garighor',
    title: 'GariGhor Motors',
    subtitle: 'AI-Powered Dealership & Lead Automation Platform',
    tagline: 'I can connect AI to an actual business workflow.',
    description:
      'A full-stack dealership platform with live vehicle inventory, admin management, AI-powered customer assistance, structured lead capture, appointment workflows, and PostgreSQL persistence.',
    role: 'Full-Stack Developer + AI Automation (solo)',
    stack: 'React · Node.js · Express · PostgreSQL',
    integrations: 'Google Gemini · Cloudinary · Prisma',
    status: 'Live in production',
    tech: ['React 18', 'Vite', 'Node.js', 'Express.js', 'Prisma ORM', 'JWT', 'bcrypt', 'Multer', 'Neon PostgreSQL', 'Cloudinary', 'Google Gemini', 'Vercel', 'Render'],
    metrics: [
      { value: '35+', label: 'React components' },
      { value: '9', label: 'API endpoints' },
      { value: '4', label: 'DB models' },
      { value: '2', label: 'lead-capture paths' },
    ],
    image: '/images/projects/GHARIGHOR.png',
    live: 'https://garighor-motors.vercel.app',
    github: 'https://github.com/IamRishiraj1/-garighor-motors',
    caseStudyPdf: '/case-studies/garighor.pdf',

    preview: {
      problem:
        'Dealership visitors could browse vehicles but needed a faster way to get answers and submit qualified test-drive requests.',
      solution:
        'Built an AI front desk that uses structured responses, validates lead information, checks vehicle inventory, and stores qualified leads in PostgreSQL.',
      result: 'A dealership workflow that turns website conversations into structured business leads.',
    },

    problem:
      'Most dealership websites are digital brochures. A customer gets curious, doesn\'t get an answer fast enough, and leaves — and enquiries that do come in often depend on someone checking an inbox at the right moment.',
    goal:
      'Build a production-ready dealership website that could be handed directly to the showroom owner — a public site that builds trust and drives enquiries, a private admin console non-technical staff can actually use, and a system that doesn\'t let leads fall through the cracks at 11 PM.',
    solution:
      'An AI front desk that uses structured responses, validates lead information independently in code (never trusting the model\'s word alone), checks live vehicle inventory, prevents duplicates, and writes qualified leads straight into PostgreSQL — with a deterministic 4-step booking form as a fallback whenever the AI is unavailable.',

    architecture: {
      description:
        "Using responseSchema in the Gemini API call forces typed JSON on every message — not just when the model decides to use a tool. The backend always receives a predictable structure it can parse and act on. Critically, the system prompt asks the model to verify contact completeness, but LLM compliance is probabilistic — so the Node.js backend independently re-validates that data in code before anything touches the database.",
      flow: [
        'Customer sends a message',
        'Node.js API builds context',
        'Gemini returns typed JSON (responseSchema)',
        'Code-level validation — contact format + duplicate check',
        'PostgreSQL — lead written',
        'Admin dashboard — ready to call',
      ],
    },

    keyDecisions: [
      {
        title: 'Code-enforced validation, not prompt-enforced',
        description:
          "The system prompt asks the model to verify contact completeness, but LLM compliance is probabilistic. The backend enforces it again independently — a regex-based check for email-like or phone-like contact info — before anything touches the database.",
      },
      {
        title: 'AI as an interface, not a single point of failure',
        description:
          'Gemini 503 errors were silently dropping leads. Fixed by separating the LLM (interface) from the backend (source of truth): when Gemini is unavailable, the chat widget surfaces a 4-step booking wizard inline — no redirect — posting to the exact same /api/leads endpoint. Two paths, same database.',
      },
      {
        title: 'Duplicate lead prevention',
        description:
          'A dedup query checks for a lead with the same name, car, and source in the past 10 minutes before writing — added after a customer saying "yes, correct" after booking caused the model to re-emit a duplicate trigger.',
      },
      {
        title: 'Auto-retry before fallback',
        description:
          "Gemini's free tier returns 503 \"high demand\" errors under load. The backend retries up to 3 times with exponential backoff (1s/2s) before ever showing the customer a fallback — verified with a mock fetch test, so brief demand spikes recover invisibly.",
      },
    ],

    challenges: [
      {
        title: 'Incomplete contact accepted',
        description: 'Gemini set triggerBooking: true when a customer gave "prasomiy" as an email.',
        fix: "Code-level regex validation added — the model's verdict is double-checked in code before any DB write.",
      },
      {
        title: 'Duplicate leads on confirmation',
        description: 'Customer said "yes, correct" after booking — the model re-emitted triggerBooking: true, creating duplicate rows.',
        fix: '10-minute dedup window added per name + car + source.',
      },
      {
        title: 'Server crash on async errors',
        description: "Express 4 doesn't catch thrown errors inside async handlers — a single bad request could take down the process.",
        fix: 'An asyncHandler wrapper added to every route.',
      },
      {
        title: 'AI as a single point of failure',
        description: 'Gemini 503 errors were silently dropping leads if the AI failed mid-booking.',
        fix: 'Chat widget now falls back to a structured booking wizard posting directly to /api/leads — two paths, same database.',
      },
      {
        title: 'Non-deterministic demo experience',
        description: 'A multi-turn Gemini conversation is probabilistic — showing it to a recruiter depended on the AI holding context across several messages.',
        fix: 'A guaranteed 4-step wizard in the demo console that always works, shown alongside the AI chat as a parallel path.',
      },
    ],

    security: [
      'Helmet.js and CORS restricted to the frontend origin',
      'bcrypt password hashing (cost 10) and 30-day JWT sessions',
      'Admin role gates the dealer console server-side, not just in the UI',
      'Rate limiting on public write endpoints against scripted abuse',
      'No API keys shipped in frontend code',
      'Custom backup script: pg_dump + Cloudinary uploads zipped, auto-rotating the last 14 backups, restore-tested against a live Neon branch',
      'UptimeRobot pings /api/health every 5 minutes, with email alerts on downtime',
    ],

    screenshots: [
      {
        src: '/images/case-studies/garighor/05-ai-lead-capture.png',
        title: 'AI-powered lead capture',
        explanation: 'The assistant collects customer information, validates the request, checks vehicle inventory, and stores the structured lead for the dealership workflow.',
      },
      {
        src: '/images/case-studies/garighor/06-leads-dashboard.png',
        title: 'Leads dashboard',
        explanation: 'Every enquiry and AI-captured booking in one pipeline — source badge (form vs. AI-captured), car, contact, timestamp, and status, ready for the dealer to call.',
      },
      {
        src: '/images/case-studies/garighor/04-ai-assistant.png',
        title: 'AI front-desk assistant',
        explanation: "Answers customer questions and moves qualified conversations toward a booking — with a guaranteed structured form always available as a fallback.",
      },
      {
        src: '/images/case-studies/garighor/01-homepage.png',
        title: 'Dealership homepage',
        explanation: 'The public storefront — built to build trust and drive enquiries rather than function as a digital brochure.',
      },
      {
        src: '/images/case-studies/garighor/02-inventory.png',
        title: 'Vehicle inventory',
        explanation: 'Search and filter by brand, body type, fuel, and price — the brand filter auto-builds from live inventory, no hardcoded list.',
      },
      {
        src: '/images/case-studies/garighor/07-admin-inventory.png',
        title: 'Admin inventory management',
        explanation: 'Full CRUD on listings with photo upload to Cloudinary — status changes (available/reserved/sold) update in one click.',
      },
      {
        src: '/images/case-studies/garighor/08-ai-architecture.png',
        title: 'AI lead-capture architecture',
        explanation: 'Message → API context → Gemini structured output → independent code validation → PostgreSQL → admin dashboard.',
      },
    ],

    statusTable: [
      { area: 'Public inventory site + search/filter', status: 'Live' },
      { area: 'Admin console (inventory, leads, settings)', status: 'Live' },
      { area: 'Authentication (JWT + bcrypt)', status: 'Live' },
      { area: 'AI lead-capture pipeline (Gemini)', status: 'Live & verified' },
      { area: 'Deterministic booking-wizard fallback', status: 'Live & verified' },
      { area: 'Image uploads (Cloudinary)', status: 'Live & verified' },
      { area: 'Automated backups + restore-tested', status: 'Complete' },
      { area: 'Uptime monitoring + alerts', status: 'Complete' },
      { area: 'Client handover documentation', status: 'Complete' },
    ],

    improveNext: [
      'Automated testing around the lead-validation and dedup logic specifically.',
      'A CI pipeline gating merges on lint/test before a Render/Vercel deploy.',
      'Structured observability — right now a production issue needs a human to notice it.',
      'More granular admin roles for dealership staff vs. owner-level settings access.',
    ],
  },
];
