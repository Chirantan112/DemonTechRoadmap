import { ResourceCard, SearchableResources } from "../components";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start py-16 px-6 bg-white dark:bg-black">
        <header className="w-full">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            Demon Tech Roadmap
          </h1>
          <p className="mt-3 text-lg text-zinc-700 dark:text-zinc-400 max-w-2xl">
            Community-driven learning roadmaps for students and aspiring
            developers. Find curated resources, projects, and community support
            to guide your learning journey.
          </p>
        </header>

        <div className="mt-8 w-full flex flex-col items-start">
          <a
            href="https://discord.gg/yWtjK2Tb8T"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700"
          >
            Join our Discord
          </a>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
            Join the community on Discord to discuss roadmaps, ask questions,
            and contribute to projects — we'd love to have you!
          </p>
        </div>

        <section className="mt-12 w-full">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
            Learning Resources
          </h2>
          <SearchableResources />
        </section>
      </main>
    </div>
  );
}
