"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need prior coding experience?",
    answer: "No, our beginner roadmaps start from absolute zero, covering HTML, CSS, and basic programming logic before moving to advanced topics."
  },
  {
    question: "Is this really 100% free?",
    answer: "Yes. We believe education should be accessible. All our roadmaps and curated resources are completely free and open source."
  },
  {
    question: "How long does a roadmap take to complete?",
    answer: "It depends on your pace. A dedicated learner spending 15-20 hours a week might complete a core roadmap in 4 to 6 months."
  },
  {
    question: "Do I need to build projects?",
    answer: "Absolutely. Tutorials teach syntax, but building projects teaches software engineering. Each phase includes mandatory project checkpoints."
  }
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-5 py-16 lg:px-8 bg-[#050505]">
      <div className="mx-auto max-w-[800px]">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Common Questions</h2>
          <p className="mt-4 text-sm text-zinc-400 sm:text-base">Everything you need to know about getting started.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="rounded-lg border border-zinc-800 bg-[#090909] transition-colors hover:border-zinc-700"
              >
                <button
                  type="button"
                  id={`faq-btn-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]"
                >
                  <span className="text-base font-bold text-white sm:text-lg">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-red-500" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id={`faq-content-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-6 text-zinc-400 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
