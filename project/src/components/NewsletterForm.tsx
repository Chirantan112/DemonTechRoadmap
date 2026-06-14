"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <form className="max-w-md" onSubmit={handleSubmit}>
      <h3 className="text-sm font-black text-white">Stay in the loop</h3>
      <p className="mt-2 text-sm text-zinc-400">Get updates on new roadmaps and features.</p>
      {subscribed ? (
        <p className="mt-4 rounded-md border border-emerald-500/35 bg-emerald-500/10 px-4 py-3 text-sm font-bold text-emerald-300">You are subscribed. Thanks for joining.</p>
      ) : (
        <>
          <div className="mt-4 flex gap-2">
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input className="h-10 min-w-0 flex-1 rounded-md border border-zinc-800 bg-[#07070c] px-4 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-red-500" id="newsletter-email" placeholder="you@example.com" required type="email" />
            <button className="h-10 rounded-md bg-red-500 px-5 text-sm font-black text-white transition hover:bg-red-400" type="submit">Subscribe</button>
          </div>
          <p className="mt-3 text-xs text-zinc-500">No spam. Unsubscribe anytime.</p>
        </>
      )}
    </form>
  );
}
