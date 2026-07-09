// All site copy lives here. Everything below is strong placeholder copy —
// swap in real numbers, testimonials, and contact details before launch.
// Positioning: Granvy is a front-desk operating platform for owner-operated
// service businesses. AI Voice Reception is module one / the entry point,
// not the whole product. Tone: confident, operator-to-operator, no hype.

export const brand = {
  name: "Granvy",
  tagline: "Automate tasks. Save time. Grow smarter.",
  legalName: "Granvy",
  domain: "granvy.com",
  contactEmail: "hello@granvy.com", // placeholder
  contactPhone: "+1 (416) 555-0123", // placeholder
};

export const nav = {
  links: [
    { label: "Platform", href: "#platform" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Who it's for", href: "#who-its-for" },
  ],
  cta: "Book a demo",
};

export const hero = {
  pillBadge: "New",
  pillText: "AI Voice Reception is live",
  headlineLine1: "Your Front Desk.",
  headlineAccent: "Automatic.",
  headlinePrefix: "Finally",
  subtitle:
    "Granvy answers every call, books the job, and keeps your records straight,",
  subtitleLine2: "so nothing falls through the cracks while you're busy running the business.",
  primaryCta: "Book a demo",
  secondaryCta: "See how it works",
  secondaryCtaHref: "#voice",
};

export const heroDashboard = {
  title: "Front Desk — Live",
  status: "All systems answering",
  stats: [
    { label: "Calls answered", value: "312", sub: "this week" },
    { label: "Bookings captured", value: "128", sub: "this week" },
    { label: "Avg. response time", value: "1.8s", sub: "24/7" },
  ],
  activity: [
    {
      type: "call",
      text: "Incoming call — (555) 013-2201",
      result: "Booked: Consultation, Tue 2:00 PM",
    },
    {
      type: "message",
      text: "Follow-up sent to Dana M.",
      result: "Invoice paid",
    },
    {
      type: "call",
      text: "Incoming call — (555) 048-9910",
      result: "Booked: Quote visit, Thu 10:30 AM",
    },
  ],
};

export const voiceModule = {
  eyebrow: "Module 01 — Start Here",
  heading: "Your Front Desk Starts With a Voice",
  body: "Most Granvy accounts start with one thing: a phone number that never goes to voicemail. Granvy answers every call, understands what the customer needs, and books it straight into your calendar — day or night, whether you're on a ladder, in a treatment room, or closed for the weekend.",
  features: [
    "Answers on the first ring, every time",
    "Understands your services, hours, and pricing",
    "Books directly into your calendar",
    "Sends a confirmation automatically",
    "Escalates real emergencies straight to you",
  ],
  transcript: [
    { from: "caller", text: "Hi, do you have anything open this Thursday afternoon?" },
    { from: "granvy", text: "Yes — 2:30 or 4:00 PM both work. Which is better for you?" },
    { from: "caller", text: "4:00 works great." },
    { from: "granvy", text: "Booked for Thursday at 4:00 PM. Confirmation sent." },
  ],
};

export type PlatformModule = {
  name: string;
  description: string;
  entry?: boolean;
};

export const platform = {
  eyebrow: "The Full Platform",
  heading: "Everything Your Front Desk Touches, In One System",
  subheading:
    "Voice reception is where most businesses start. From there, turn on the rest of your front desk whenever you're ready — no new software, no new login.",
  modules: [
    {
      name: "AI Voice Reception",
      description: "Answers every call and books the job.",
      entry: true,
    },
    {
      name: "Appointment Scheduling",
      description: "A calendar that fills itself and never double-books.",
    },
    {
      name: "CRM & Customer Records",
      description: "Every customer, every visit, every note, in one place.",
    },
    {
      name: "Customer Messaging",
      description: "Text and email customers without leaving Granvy.",
    },
    {
      name: "Estimates & Quotations",
      description: "Send a professional quote before you leave the driveway.",
    },
    {
      name: "Invoicing",
      description: "Turn a finished job into an invoice in one tap.",
    },
    {
      name: "Payments",
      description: "Get paid on the spot, or send a link.",
    },
    {
      name: "Staff Scheduling",
      description: "Know who's where, and who's free for the next job.",
    },
    {
      name: "Analytics & Reporting",
      description: "See what's actually driving revenue.",
    },
    {
      name: "Marketing & Reviews",
      description: "Turn happy customers into 5-star reviews and repeat bookings.",
    },
    {
      name: "Workflow Automation",
      description: "Set the rules once; Granvy runs them every time.",
    },
  ] satisfies PlatformModule[],
};

export const howItWorks = {
  eyebrow: "How It Works",
  heading: "Up and Running Before Your Next Shift",
  steps: [
    {
      number: "01",
      title: "Connect your front desk",
      description:
        "Give Granvy your business number (or get a new one), your calendar, and your service list. Takes about 15 minutes.",
    },
    {
      number: "02",
      title: "Turn on what you need",
      description:
        "Start with voice reception. Switch on scheduling, CRM, invoicing, or the rest whenever you're ready.",
    },
    {
      number: "03",
      title: "It runs your front desk",
      description:
        "Calls get answered, jobs get booked, customers get followed up with — automatically, 24/7.",
    },
  ],
};

export const verticals = {
  eyebrow: "Built for Owner-Operators",
  heading: "Granvy Runs the Front Desk For",
  industries: [
    {
      name: "Medical Aesthetics Clinics",
      description:
        "Book consultations, answer treatment questions, and keep client records tidy without a full-time front desk.",
    },
    {
      name: "Escape Rooms & Experiences",
      description:
        "Take bookings around the clock, answer group-size questions instantly, and fill every time slot.",
    },
    {
      name: "Electrical & Trades",
      description:
        "Capture the call while you're mid-job, quote fast, and never lose a lead to voicemail again.",
    },
    {
      name: "Salons & Studios",
      description:
        "Fill the chair, manage no-shows, and keep clients coming back with automatic follow-ups.",
    },
  ],
};

export const ctaBand = {
  heading: "Ready to Stop Missing Calls?",
  subheading:
    "Book a 20-minute demo and see Granvy answer, book, and follow up — using your actual services and calendar.",
  primaryCta: "Book a demo",
  secondaryCta: "Talk to us",
};

export const footer = {
  tagline: brand.tagline,
  columns: [
    {
      heading: "Platform",
      links: [
        { label: "Voice Reception", href: "#voice" },
        { label: "All modules", href: "#platform" },
        { label: "How it works", href: "#how-it-works" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Who it's for", href: "#who-its-for" },
        { label: "Contact", href: `mailto:${brand.contactEmail}` },
      ],
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
