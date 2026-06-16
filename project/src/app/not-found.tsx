"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#030303] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_68%_12%,rgba(127,29,29,0.2),transparent_27%),radial-gradient(circle_at_80%_68%,rgba(127,29,29,0.16),transparent_28%),linear-gradient(180deg,#050505_0%,#030303_100%)]" />

      <div className="max-w-2xl text-center">
        <h1 className="text-9xl font-black text-red-500/20 mb-6">404</h1>
        <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Page Not Found</h2>
        <p className="text-lg text-zinc-400 mb-10 leading-relaxed max-w-lg mx-auto">
          The roadmap, resource, or page you&apos;re looking for has either been moved, deleted, or never existed in the first place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-500"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/docs/all-roadmaps"
            className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/50 px-6 py-3 text-sm font-bold text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
          >
            Browse Roadmaps
          </Link>
        </div>
      </div>
    </main>
  );
}
