// All site copy lives here. Everything below is strong placeholder copy.
// Swap in real numbers, testimonials, and contact details before launch.
// Positioning: Granvy is the front-desk operating system for owner-operated
// service businesses. Voice is one door into the system, not the whole
// product: booking, deposits/payments, records/forms, and follow-ups all
// carry equal weight. Tone: confident, operator-to-operator, no hype.

export const brand = {
  name: "Granvy",
  tagline: "Automate tasks. Save time. Grow smarter.",
  legalName: "Granvy",
  domain: "granvy.com",
  contactEmail: "reza@granvy.com",
  contactPhone: "+1 (647) 526-7076",
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
  eyebrow: "The complete front-desk operating system",
  headlineLine1: "Your Front Desk.",
  headlineAccent: "Automatic.",
  headlinePrefix: "Finally",
  subtitle:
    "Granvy runs the whole thing: bookings, deposits, forms, reminders, follow-ups, payments,",
  subtitleLine2:
    "and every call, text, and click a customer sends your way, so the business runs itself while you do the work.",
  primaryCta: "Book a demo",
};

export const heroDashboard = {
  title: "Front Desk · Live",
  status: "All systems answering",
  stats: [
    { label: "Bookings captured", value: "128", sub: "this week" },
    { label: "No-shows prevented", value: "24", sub: "this week" },
    { label: "Payments collected", value: "$8,240", sub: "this week" },
  ],
  activity: [
    {
      type: "call",
      text: "Incoming call, booked",
      result: "Consultation, Tue 2:00 PM",
    },
    {
      type: "deposit",
      text: "Deposit collected",
      result: "$50 hold",
    },
    {
      type: "form",
      text: "Intake form completed",
      result: "Before appointment",
    },
    {
      type: "followup",
      text: "Aftercare follow-up sent",
      result: "To Dana M.",
    },
    {
      type: "payment",
      text: "Payment received",
      result: "Invoice paid",
    },
  ],
};

export const voiceModule = {
  eyebrow: "One System, Not Eleven Tools",
  heading: "Everything Your Front Desk Does, Running Itself",
  body: "The front desk isn't just the phone. It's every booking, every deposit, every form, every reminder, every follow-up. That's the whole nerve center of your business, and Granvy runs all of it, in one system, on autopilot, so nothing slips while you're doing the actual work.",
  features: [
    "Every call, text, and booking answered automatically",
    "Deposits and payments collected without a follow-up call",
    "Forms and consent completed before the appointment",
    "Reminders and follow-ups sent without anyone lifting a finger",
    "Real emergencies escalated straight to you",
  ],
  transcript: [
    { from: "caller", text: "Hi, do you have anything open this Thursday afternoon?" },
    { from: "granvy", text: "Yes, 2:30 or 4:00 PM both work. Which is better for you?" },
    { from: "caller", text: "4:00 works great." },
    { from: "granvy", text: "Booked for Thursday at 4:00 PM. Confirmation sent." },
  ],
  vignettes: [
    { label: "Deposit collected", detail: "$50 hold on Thursday's booking" },
    { label: "Intake form completed", detail: "Submitted before the appointment" },
  ],
};

export type PlatformModule = {
  name: string;
  description: string;
};

export type PlatformGroup = {
  name: string;
  modules: PlatformModule[];
};

export const platform = {
  eyebrow: "The Full Platform",
  heading: "Everything Your Front Desk Touches, In One System",
  subheading:
    "One system for your entire front desk, organized into the layers that actually run your business. Every part talks to every other part. No new software, no new login.",
  groups: [
    {
      name: "Front doors",
      modules: [
        {
          name: "AI Voice Reception",
          description: "Answers every call, books the job, escalates real emergencies to you.",
        },
        {
          name: "Website Chat",
          description: "Answers questions and books visitors right on your site.",
        },
        {
          name: "24/7 Online Booking",
          description: "A booking page that takes appointments day or night.",
        },
      ],
    },
    {
      name: "Booking & calendar",
      modules: [
        {
          name: "Smart Scheduling",
          description: "A calendar that fills itself and never double-books.",
        },
        {
          name: "Smart Waitlist",
          description: "Fills a cancellation before you even notice it.",
        },
        {
          name: "Staff Scheduling",
          description: "Know who's where and who's free.",
        },
        {
          name: "Automatic Reminders",
          description: "Cut no-shows before they happen.",
        },
      ],
    },
    {
      name: "Getting paid",
      modules: [
        {
          name: "Deposits & No-Show Protection",
          description: "Hold the slot with a deposit; stop giving away paid time.",
        },
        {
          name: "Payments & Checkout",
          description: "Get paid on the spot, or send a link.",
        },
        {
          name: "Memberships & Packages",
          description: "Recurring revenue, handled for you.",
        },
        {
          name: "Estimates & Invoicing",
          description: "Quote fast, turn a job into an invoice in one tap.",
        },
        {
          name: "Gift Cards & Retail",
          description: "Sell products and gift cards without another system.",
        },
      ],
    },
    {
      name: "Client records",
      modules: [
        {
          name: "Client Profiles & History",
          description: "Every customer, visit, and note in one place.",
        },
        {
          name: "Intake & Consent Forms",
          description: "Sent and completed before the appointment.",
        },
        {
          name: "Medical Forms & Charting",
          description: "Consent, treatment notes, and photos, kept safe and compliant.",
        },
      ],
    },
    {
      name: "Keeping them coming back",
      modules: [
        {
          name: "Two-Way Messaging",
          description: "Text and email customers without leaving Granvy.",
        },
        {
          name: "Aftercare Follow-Ups",
          description: "Automatic check-ins that bring clients back.",
        },
        {
          name: "Campaigns",
          description: "Email and text promotions that fill the calendar.",
        },
        {
          name: "Review Requests",
          description: "Turn happy customers into 5-star reviews.",
        },
      ],
    },
    {
      name: "See everything",
      modules: [
        {
          name: "Analytics & Reporting",
          description: "See what's actually driving revenue.",
        },
        {
          name: "Call Recording & Analytics",
          description: "Every call captured and searchable.",
        },
      ],
    },
    {
      name: "Run it on autopilot",
      modules: [
        {
          name: "Workflow Automation",
          description: "Set the rules once; Granvy runs them every time.",
        },
      ],
    },
  ] satisfies PlatformGroup[],
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
        "Turn on what you need: booking, payments, deposits, forms, records, follow-ups, and more. No new software, no new login.",
    },
    {
      number: "03",
      title: "It runs your front desk",
      description:
        "Calls get answered, jobs get booked, deposits get taken, customers get followed up with, all automatically, 24/7.",
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
        "Book consultations, send intake and consent forms before the visit, take deposits, keep charts and photos organized, and run memberships, all without a full-time front desk.",
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
  heading: "Ready to Let Your Front Desk Run Itself?",
  subheading:
    "Book a 20-minute demo and watch Granvy book, take payment, send forms, and follow up, using your actual services and calendar.",
  primaryCta: "Book a demo",
};

export const footer = {
  tagline: brand.tagline,
  columns: [
    {
      heading: "Platform",
      links: [
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
