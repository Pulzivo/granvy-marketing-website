import type { Metadata } from "next";
import { Poppins, Instrument_Serif } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Granvy — AI Automation Solutions for Small Businesses",
  description:
    "Granvy is the front-desk operating platform for owner-operated service businesses. Start with AI voice reception, then run booking, CRM, invoicing, and more from one system.",
  metadataBase: new URL("https://granvy.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Granvy — Your business. Running better. Automatically.",
    description:
      "The front-desk operating platform for owner-operated service businesses. Automate tasks. Save time. Grow smarter.",
    url: "https://granvy.com",
    siteName: "Granvy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Granvy — Your business. Running better. Automatically.",
    description:
      "The front-desk operating platform for owner-operated service businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${instrumentSerif.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-ink text-white font-sans">
        {children}
      </body>
    </html>
  );
}
