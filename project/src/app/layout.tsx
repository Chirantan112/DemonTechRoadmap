import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
    "python roadmap",
    "AI roadmap",
    "machine learning roadmap",
    "open source roadmap",
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
    type: "website",
    locale: "en_US",
    siteName: "Demon Tech Roadmap",
  },

  twitter: {
    card: "summary_large_image",
    title: "Demon Tech Roadmap",
    description:
      "Community-driven roadmaps that help beginners learn technology through clear learning paths, curated resources, and project-focused growth.",
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
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}