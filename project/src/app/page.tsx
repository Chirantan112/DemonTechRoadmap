import Link from "next/link";
import type { ReactNode } from "react";
import HomeHeader, { Logo } from "@/src/components/HomeHeader";
import RoadmapQuiz from "@/src/components/RoadmapQuiz";
import NewsletterForm from "@/src/components/NewsletterForm";

const icons: Record<string, ReactNode> = {
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  book: <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Zm0 0A2.5 2.5 0 0 1 6.5 8H20" />,
  chart: <path d="M5 19V9m5 10V5m5 14v-7m5 7V3" />,
  check: <path d="M20 7 9 18l-5-5" />,
  code: <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-8-4 10" />,
  community: <path d="M16 19c0-2.2-1.8-4-4-4s-4 1.8-4 4m8-9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm4 9c0-1.7-1-3.2-2.4-3.8M6.4 15.2A4.2 4.2 0 0 0 4 19" />,
  database: <path d="M4 6c0 1.7 3.6 3 8 3s8-1.3 8-3-3.6-3-8-3-8 1.3-8 3Zm0 0v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />,
  globe: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-8-9h16M12 3c2.2 2.5 3.3 5.5 3.3 9S14.2 18.5 12 21c-2.2-2.5-3.3-5.5-3.3-9S9.8 5.5 12 3Z" />,
  rocket: <path d="M5 15c-1 1-1.5 3-1.5 5.5C6 20.5 8 20 9 19m6-14c3-1.5 5.5-1.5 5.5-1.5S20.5 6 19 9c-1.8 3.7-5.3 7-9 8l-3-3c1-3.7 4.3-7.2 8-9Zm-1 4h.01" />,
  target: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />,
  zap: <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />,
  bell: <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Zm-4 12a2.5 2.5 0 0 1-4 0" />,
  bookmark: <path d="M6 3h12v18l-6-4-6 4V3Z" />,
  pen: <path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Zm11-13 3 3" />,
  trophy: <path d="M8 21h8m-4-4v4m6-18v4a6 6 0 0 1-12 0V3h12Zm0 2h3v2a4 4 0 0 1-4 4M6 5H3v2a4 4 0 0 0 4 4" />,
};

function Icon({ className = "", name }: { className?: string; name: keyof typeof icons }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  );
}

const stats = [
  { icon: "book", value: "8+", label: "Roadmaps", note: "Across core tech tracks" },
  { icon: "book", value: "150+", label: "Resources", note: "Curated and tested" },
  { icon: "zap", value: "100%", label: "Free & Open Source", note: "Forever" },
  { icon: "community", value: "15K+", label: "Learners", note: "Growing community" },
] as const;

const audience = [
  { icon: "target", title: "Choose a path", text: "Pick a roadmap that matches your goal and follow a step-by-step path." },
  { icon: "code", title: "Build projects", text: "Turn concepts into real projects with prompts and practical checkpoints." },
  { icon: "community", title: "Grow with feedback", text: "Use notes, bookmarks, and community support to stay consistent." },
] as const;

const journey = [
  { n: "01", title: "HTML & CSS", detail: "Build the foundation", icon: "code", color: "text-red-300 border-red-500/70 shadow-red-500/30", href: "/roadmaps/html5", offset: false },
  { n: "02", title: "JavaScript", detail: "Learn the language", icon: "code", color: "text-amber-300 border-amber-500/70 shadow-amber-500/30", href: "/roadmaps/javascript", offset: true },
  { n: "03", title: "React", detail: "Build interactive UIs", icon: "code", color: "text-orange-300 border-orange-500/70 shadow-orange-500/30", href: "/roadmaps/react", offset: false },
  { n: "04", title: "Next.js", detail: "Full-stack React framework", icon: "globe", color: "text-purple-300 border-purple-500/70 shadow-purple-500/30", href: "/roadmaps/nextjs", offset: true },
  { n: "05", title: "Backend", detail: "APIs, Databases & Auth", icon: "database", color: "text-sky-300 border-sky-500/70 shadow-sky-500/30", href: "/roadmaps/backend-developer", offset: false },
  { n: "06", title: "Projects", detail: "Build real-world projects", icon: "rocket", color: "text-emerald-300 border-emerald-500/70 shadow-emerald-500/30", href: "/docs/project-ideas", offset: true },
  { n: "", title: "Job Ready", detail: "Apply with confidence", icon: "trophy", color: "text-orange-300 border-orange-500/70 shadow-orange-500/30", href: "/docs/study-guide", offset: false },
] as const;

const features = [
  { icon: "check", title: "Track Your Progress", text: "Mark topics as complete and visualize your learning journey.", href: "/dashboard" },
  { icon: "bookmark", title: "Save & Organize", text: "Bookmark resources and keep everything in one place.", href: "/dashboard" },
  { icon: "pen", title: "Notes & Reflections", text: "Write notes, save learnings, and reinforce your knowledge.", href: "/dashboard" },
  { icon: "bell", title: "Stay Updated", text: "Get notified when new roadmaps and resources are added.", href: "#newsletter" },
  { icon: "code", title: "100% Free", text: "No paywalls. No premium tier. Just learning.", href: "/docs/about-demontech" },
] as const;

const footerGroups = [
  { title: "Explore", links: [["Roadmaps", "/docs/all-roadmaps"], ["Resources", "/docs/resources"], ["Guides", "/docs/study-guide"], ["Docs", "/docs/quick-start"]] },
  { title: "Community", links: [["GitHub", "https://github.com/Demon-Die/DemonTechRoadmap"], ["Discord", "https://discord.gg/yWtjK2Tb8T"], ["Twitter", "https://twitter.com"], ["Contribute", "/docs/contributing"]] },
  { title: "Legal", links: [["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["MIT License", "https://github.com/Demon-Die/DemonTechRoadmap/blob/main/LICENSE"]] },
] as const;

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[#030409] text-zinc-100">
      <HomeHeader />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_48%_20%,rgba(129,16,23,0.28),transparent_34%),radial-gradient(circle_at_78%_46%,rgba(25,68,115,0.15),transparent_28%),linear-gradient(180deg,#020308_0%,#05050a_52%,#030306_100%)]" />

      <section className="mx-auto max-w-[1540px] px-5 pb-5 pt-8 lg:px-8 lg:pt-10">
        <div className="grid gap-8 lg:grid-cols-[1.14fr_0.86fr] lg:items-center">
          <div className="relative isolate overflow-hidden rounded-md lg:rounded-none">
            <div className="pointer-events-none absolute inset-y-[-15%] right-[-14%] -z-10 w-[58%] bg-[radial-gradient(circle,rgba(244,39,53,0.22),transparent_58%)]" />
            <span className="inline-flex rounded-md border border-red-500/55 bg-red-500/10 px-3 py-1 text-[12px] font-black text-red-300 shadow-[0_0_25px_rgba(239,68,68,0.12)]">
              Structured. Focused. Practical.
            </span>
            <h1 className="mt-5 max-w-[720px] text-[44px] font-black leading-[1.05] tracking-normal text-white sm:text-[58px] lg:text-[60px] xl:text-[64px]">
              Learn with structure.<br />Build with <span className="bg-gradient-to-r from-orange-400 via-red-500 to-rose-500 bg-clip-text text-transparent">confidence.</span>
            </h1>
            <p className="mt-6 max-w-[700px] text-[18px] leading-8 text-zinc-300">
              DemonTech Roadmap helps beginners go from zero to job-ready with curated roadmaps, hand-picked resources, and real projects.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-red-500 px-7 text-sm font-black text-white shadow-[0_0_30px_rgba(239,68,68,0.28)] transition hover:bg-red-400" href="/docs/all-roadmaps">
                Browse Roadmaps <Icon className="h-4 w-4" name="arrow" />
              </Link>
              <Link className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-zinc-700 bg-black/35 px-7 text-sm font-black text-white transition hover:border-zinc-500 hover:bg-white/5" href="/dashboard">
                Track Progress <Icon className="h-4 w-4" name="chart" />
              </Link>
            </div>

            <div className="mt-8 grid rounded-lg border border-zinc-800/90 bg-[#0a0a10]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:grid-cols-2 lg:max-w-[760px] xl:grid-cols-4">
              {stats.map((item) => (
                <div className="flex min-h-[88px] gap-4 border-zinc-800/80 p-5 xl:border-r xl:last:border-r-0" key={item.label}>
                  <Icon className="mt-1 h-7 w-7 shrink-0 text-red-500" name={item.icon} />
                  <div>
                    <div className="text-2xl font-black text-white">{item.value}</div>
                    <div className="text-xs text-zinc-400">{item.label}</div>
                    <div className="mt-1 text-[11px] text-zinc-500">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-7 text-sm text-zinc-500">
              Built by developers, for developers. Open source on <Link className="text-red-400 underline-offset-4 hover:underline" href="https://github.com/Demon-Die/DemonTechRoadmap">GitHub</Link> <span className="text-red-500">♥</span>
            </p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-zinc-800 bg-[#070811] p-5 shadow-2xl shadow-black/50 lg:min-h-[510px]">
            <div className="absolute inset-0 bg-[url('/roadmap-journey-bg.png')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(239,68,68,0.24),transparent_22%),linear-gradient(90deg,rgba(5,5,12,0.74),rgba(5,5,12,0.9))]" />
            <h2 className="relative z-10 text-center text-sm font-black text-white">Your journey from beginner to job-ready</h2>
            <div className="relative z-10 mx-auto mt-5 max-w-[420px] space-y-3">
              <div className="absolute left-9 top-6 h-[86%] w-[2px] bg-gradient-to-b from-red-500 via-purple-500 to-orange-500 opacity-80" />
              {journey.map((step) => (
                <Link className="group relative flex min-h-[58px] items-center gap-3 rounded-full border border-zinc-800/90 bg-black/45 px-4 py-2 backdrop-blur transition hover:-translate-y-0.5 hover:border-red-500/70" href={step.href} key={step.title} style={{ marginLeft: step.offset ? 58 : 0 }}>
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border bg-black text-base font-black shadow-[0_0_24px] ${step.color}`}>
                    {step.n || <Icon className="h-6 w-6" name="trophy" />}
                  </span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-zinc-700/80 bg-black/70">
                    <Icon className={`h-5 w-5 ${step.color.split(" ")[0]}`} name={step.icon} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-black text-white">{step.title}</span>
                    <span className="block text-[11px] text-zinc-400">{step.detail}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-[0.95fr_1fr_0.95fr]">
          <section className="rounded-lg border border-zinc-800 bg-[#08090f]/90 p-6">
            <p className="text-[11px] font-black uppercase text-red-500">Who is this for?</p>
            <h2 className="mt-3 text-2xl font-black text-white">A practical path for self-taught builders</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3 lg:grid-cols-3">
              {audience.map((item) => (
                <article className="border-zinc-800/80 sm:border-r sm:pr-5 sm:last:border-r-0" key={item.title}>
                  <Icon className="h-8 w-8 text-red-500" name={item.icon} />
                  <h3 className="mt-4 text-sm font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-[12px] leading-6 text-zinc-400">{item.text}</p>
                </article>
              ))}
            </div>
            <Link className="mt-6 inline-flex items-center gap-2 text-sm font-black text-red-400 hover:text-red-300" href="/docs/common-questions">
              Read FAQ <Icon className="h-4 w-4" name="arrow" />
            </Link>
          </section>

          <RoadmapQuiz />

          <section className="rounded-lg border border-zinc-800 bg-[#08090f]/90 p-6">
            <p className="text-[11px] font-black uppercase text-red-500">Community Impact</p>
            <h2 className="mt-3 text-2xl font-black text-white">Open source & community driven</h2>
            <p className="mt-2 text-sm text-zinc-400">We learn, build, and grow together.</p>
            <div className="mt-7 grid grid-cols-4 divide-x divide-zinc-800 text-center">
              {[["20+", "Contributors"], ["500+", "GitHub Stars"], ["100+", "Pull Requests"], ["50+", "Roadmap Updates"]].map(([value, label]) => (
                <div className="px-2" key={label}>
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="mt-2 text-[11px] text-zinc-500">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center">
              {["RS", "AK", "JD", "MP", "SN", "LV", "RT", "YU", "GH"].map((avatar, index) => (
                <span className="-ml-2 grid h-9 w-9 place-items-center rounded-full border-2 border-[#08090f] bg-gradient-to-br from-zinc-200 to-zinc-700 text-[10px] font-black text-black first:ml-0" key={avatar + index}>{avatar}</span>
              ))}
              <span className="-ml-2 grid h-9 w-9 place-items-center rounded-full border-2 border-[#08090f] bg-zinc-900 text-[11px] font-black text-white">+15</span>
            </div>
            <Link className="mt-6 inline-flex items-center gap-2 text-sm font-black text-red-400 hover:text-red-300" href="https://github.com/Demon-Die/DemonTechRoadmap">
              View on GitHub <Icon className="h-4 w-4" name="arrow" />
            </Link>
          </section>
        </div>

        <section className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <Link className="flex min-h-[86px] items-center gap-4 rounded-lg border border-zinc-800 bg-[#08090f]/90 p-4 transition hover:border-red-500/60 hover:bg-[#0d0e15]" href={feature.href} key={feature.title}>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-red-500/12 text-red-400">
                <Icon className="h-6 w-6" name={feature.icon} />
              </span>
              <span>
                <span className="block text-sm font-black text-white">{feature.title}</span>
                <span className="mt-1 block text-[12px] leading-5 text-zinc-400">{feature.text}</span>
              </span>
            </Link>
          ))}
        </section>
      </section>

      <footer className="border-t border-zinc-900 bg-black/70 px-5 py-5 lg:px-8">
        <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[1.6fr_2fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[300px] text-sm leading-6 text-zinc-400">Open-source learning roadmaps for developers who want structure, projects, and community.</p>
            <div className="mt-4 flex gap-2">
              {["GH", "TW", "DC", "YT", "IG"].map((item) => <span className="grid h-8 w-8 place-items-center rounded-full bg-zinc-900 text-[10px] font-black text-zinc-400" key={item}>{item}</span>)}
            </div>
          </div>
          <nav className="grid grid-cols-3 gap-6">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-black text-white">{group.title}</h3>
                <div className="mt-3 grid gap-2 text-sm text-zinc-400">
                  {group.links.map(([label, href]) => <Link className="hover:text-white" href={href} key={label}>{label}</Link>)}
                </div>
              </div>
            ))}
          </nav>
          <div id="newsletter">
            <NewsletterForm />
          </div>
        </div>
        <p className="mx-auto mt-5 max-w-[1540px] text-center text-sm text-zinc-500">© 2024 DemonTech. Built with <span className="text-red-500">♥</span> for developers.</p>
      </footer>
    </main>
  );
}
