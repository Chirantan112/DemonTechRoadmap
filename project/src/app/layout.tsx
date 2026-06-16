import type { Metadata } from "next";
import KeyboardShortcuts from "@/src/components/KeyboardShortcuts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://demontech-roadmap.vercel.app"),
  title: {
    default: "Demon Tech Roadmap",
    template: "%s | Demon Tech Roadmap",
  },

  description:
    "Community-driven roadmaps that help beginners learn technology through clear learning paths, curated resources, and project-focused growth.",

  keywords: [
    "Demon Tech Roadmap",
    "developer roadmap",
    "learning roadmap",
    "web development roadmap",
    "programming roadmap",
    "technology learning path",
    "beginner developers",
    "software engineering",
  ],

  applicationName: "Demon Tech Roadmap",

  openGraph: {
    title: "Demon Tech Roadmap",
    description:
      "Community-driven roadmaps that help beginners learn technology through clear learning paths, curated resources, and project-focused growth.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "DemonTech Roadmap preview",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Demon Tech Roadmap",
  },

  twitter: {
    card: "summary_large_image",
    title: "Demon Tech Roadmap",
    description:
      "Community-driven roadmaps that help beginners learn technology through clear learning paths, curated resources, and project-focused growth.",
    images: ["/og-image.svg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Demon Tech Roadmap",
    url: "https://demontech-roadmap.vercel.app",
    description:
      "Community-driven roadmaps that help beginners learn technology through clear learning paths, curated resources, and project-focused growth.",
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
          type="application/ld+json"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <KeyboardShortcuts />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[999] focus:p-4 focus:bg-black focus:text-white">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
