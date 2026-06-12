"use client";

import { useState } from "react";
import { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  mail: <path d="M4 6h16v12H4V6Zm0 0 8 7 8-7" />,
  check: <path d="m5 12 4 4L19 6" />,
};

function Icon({ className = "", name }: { className?: string; name: keyof typeof icons }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {icons[name]}
    </svg>
  );
}

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-zinc-800 bg-[#090909] p-6">
      <Icon className={`h-8 w-8 ${subscribed ? 'text-emerald-400' : 'text-amber-300'}`} name={subscribed ? 'check' : 'mail'} />
      <h2 className="mt-5 text-2xl font-black text-white">
        {subscribed ? "You're on the list!" : "Get notified when new roadmaps drop"}
      </h2>
      
      {subscribed ? (
        <p className="mt-5 text-sm text-zinc-400">
          Thanks for subscribing. We'll let you know when new roadmaps and major features are released.
        </p>
      ) : (
        <>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              required
              className="h-11 min-w-0 flex-1 rounded-md border border-zinc-800 bg-black px-4 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-red-500"
              id="newsletter-email"
              placeholder="you@example.com"
              type="email"
            />
            <button className="h-11 rounded-md bg-red-500 px-5 text-sm font-black text-white transition hover:bg-red-400" type="submit">
              Notify Me
            </button>
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            No spam. Unsubscribe at any time.
          </p>
        </>
      )}
    </form>
  );
}
