export default function Testimonials() {
  const testimonials = [
    {
      quote: "DemonTech roadmaps finally gave me the structure I was missing. It's not just a list of topics, the project ideas are incredibly practical.",
      author: "Alex Rivera",
      role: "Frontend Developer",
    },
    {
      quote: "I've been trying to learn Backend for months. This is the first roadmap that actually made the pieces click together.",
      author: "Sarah Chen",
      role: "Self-taught Engineer",
    },
    {
      quote: "The visual tracking and bookmarks make it so easy to pick up where I left off after work. Huge time saver.",
      author: "David Kim",
      role: "Student",
    },
  ];

  return (
    <section className="border-t border-zinc-900 bg-[#050505] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-3xl font-black text-white text-center mb-12">
          What early learners are saying
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-lg border border-zinc-800 bg-[#090909] p-6 flex flex-col justify-between">
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-bold text-white text-sm">{t.author}</p>
                <p className="text-zinc-500 text-xs mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
