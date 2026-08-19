// All site copy lives here. Every component under components/ imports from
// this file, so the whole page's argument can be read (and edited) top to
// bottom right here.
//
// Positioning: Granvy is the front-desk operating system for owner-operated
// service businesses. The owner is usually the one doing the work, so nobody
// is answering the phone, chasing deposits, or sending follow-ups. Granvy is
// the front desk they never hired. Voice is one door into the system, not the
// whole product: booking, deposits/payments, records/forms, and follow-ups
// all carry equal weight.
//
// Tone: operator to operator. Concrete nouns, no hype-speak, no filler.
// Every number on this page is either a product fact (22 modules, 15-minute
// setup, 24/7 answering) or clearly part of an illustrative UI mockup.
//
// TODO: real customer proof (named clients, quotes, before/after numbers)
// would be the single biggest upgrade to this page. Mo/Reza have real
// customers; publishing names or quotes needs their explicit sign-off, so
// nothing is invented here in the meantime.

export const brand = {
  name: "Granvy",
  tagline:
    "The front-desk operating system for owner-operated service businesses.",
  legalName: "Granvy",
  domain: "granvy.com",
  contactEmail: "reza@granvy.com",
  contactPhone: "+1 (647) 526-7076",
};

export const nav = {
  links: [
    { label: "Platform", href: "/#platform" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Who it's for", href: "/#who-its-for" },
  ],
  cta: "Book a demo",
};

export const hero = {
  eyebrow: "The front-desk operating system",
  headlineLine1: "The front desk you",
  headlinePrefix: "don't",
  headlineAccent: "have to hire",
  subtitle:
    "Granvy picks up your calls, books the appointment, takes the deposit, and sends the intake form.",
  subtitleLine2: "You hear about it after it's done.",
  primaryCta: "Book a demo",
  secondaryCta: "See how it works",
  trust: "Built for owner-operated salons, clinics, studios, and trades",
  stats: [
    { value: "24/7", label: "Calls answered" },
    { value: "22", label: "Modules, one login" },
    { value: "15 min", label: "To set up" },
  ],
};

// Illustrative product mockup. These numbers show what the dashboard looks
// like in use; they are not customer results and must not be presented as such.
export const heroDashboard = {
  title: "Front Desk",
  status: "This week",
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
  eyebrow: "The phone",
  heading: "Your phone rings. Granvy answers.",
  body: "It checks your real calendar, offers real openings, and books the appointment while you finish the client in front of you. No voicemail, no callback list, no lead calling the next name on Google while they wait for you to phone back.",
  features: [
    "Answers around the clock, including mid-appointment and after close",
    "Takes a card deposit before the slot is confirmed",
    "Puts genuine emergencies straight through to you",
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

export const platformPillars = [
  {
    name: "Never miss a customer",
    description:
      "Phone, website chat, and online booking, answered and scheduled at 2 PM or 2 AM.",
  },
  {
    name: "Get paid without chasing",
    description:
      "Deposits before the visit, checkout after it, memberships and invoices in between.",
  },
  {
    name: "Keep clients coming back",
    description:
      "Reminders, aftercare follow-ups, and campaigns that rebook regulars before they drift.",
  },
  {
    name: "See everything it did",
    description:
      "Every call, booking, and dollar in one log, with reporting that shows what fills the calendar.",
  },
];

export const platform = {
  eyebrow: "The platform",
  heading: "One system runs the whole front desk",
  subheading:
    "Phones, booking, payments, records, and follow-ups in one place, so nothing gets lost between apps.",
  groups: [
    {
      name: "Front doors",
      modules: [
        {
          name: "AI Voice Reception",
          description:
            "Answers every call, books the job, puts real emergencies through to you.",
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
          description: "Text and email reminders that cut no-shows.",
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
          description: "Ask for the review while the visit is still fresh.",
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
  eyebrow: "How it works",
  heading: "Live before your next shift",
  steps: [
    {
      number: "01",
      title: "Point your number at Granvy",
      description:
        "Forward your business line (or take a new number), connect your calendar, and load your services and prices. About 15 minutes.",
    },
    {
      number: "02",
      title: "Switch on what you need",
      description:
        "Start with call answering and booking. Add deposits, forms, memberships, and follow-ups whenever you're ready. One login for all of it.",
    },
    {
      number: "03",
      title: "Get back to the work",
      description:
        "Calls answered, jobs booked, deposits held, reminders sent, follow-ups delivered. You get a clear log of everything it did.",
    },
  ],
};

export const verticals = {
  eyebrow: "Who it's for",
  heading: "For owners whose hands are literally full",
  industries: [
    {
      name: "Medical Aesthetics Clinics",
      description:
        "Consults booked, consent and intake signed before the patient arrives, deposits holding every slot, charts and photos where you can find them. No coordinator required.",
    },
    {
      name: "Escape Rooms & Experiences",
      description:
        "Group-size questions answered at 11 PM, weekend slots kept full, and a deposit on file so the party of eight actually shows up.",
    },
    {
      name: "Electrical & Trades",
      description:
        "You're in a panel with both hands busy. Granvy takes the call, gets the address, and books the estimate before the customer tries the next name on Google.",
    },
    {
      name: "Salons & Studios",
      description:
        "Deposits that make no-shows rare, a waitlist that refills cancellations, and follow-ups that rebook regulars before they drift.",
    },
  ],
};

export const ctaBand = {
  heading: "Watch it book a job on your actual calendar",
  subheading:
    "A 20-minute demo set up with your services, your hours, and your calendar. See it answer the call, take the deposit, and send the form.",
  primaryCta: "Book a demo",
};

export const footer = {
  tagline: brand.tagline,
  columns: [
    {
      heading: "Platform",
      links: [
        { label: "All modules", href: "/#platform" },
        { label: "How it works", href: "/#how-it-works" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Who it's for", href: "/#who-its-for" },
        { label: "Contact", href: `mailto:${brand.contactEmail}` },
      ],
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
