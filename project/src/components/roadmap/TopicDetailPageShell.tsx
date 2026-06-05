"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { RoadmapNode, RoadmapPageShellProps, Stage, Difficulty } from "./RoadmapPageShell";

type TopicDetailPageShellProps = {
  currentIndex: number;
  nextNode?: RoadmapNode;
  previousNode?: RoadmapNode;
  roadmap: RoadmapPageShellProps;
  roadmapSlug: string;
  topic: RoadmapNode;
};

const icons = {
  arrow: <path d="m9 18 6-6-6-6" />,
  badge: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.2 6.4 20.2 7.5 14 3 9.6l6.2-.9L12 3Z" />,
  bookmark: <path d="M6 4h12v18l-6-4-6 4V4Z" />,
  check: <path d="m5 12 4 4L19 6" />,
  clock: <path d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  code: <path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 4l-4 16" />,
  lock: <path d="M6 11V8a6 6 0 0 1 12 0v3m-1 0H7a1 1 0 0 0-1 1v8h12v-8a1 1 0 0 0-1-1Z" />,
  note: <path d="M6 3h10l3 3v18H6V3Zm10 0v6h6M9 13h8M9 17h8" />,
  quiz: <path d="M10 9a3 3 0 1 1 4 2.83c-1.1.47-2 1.03-2 2.17m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  target: <path d="M21 12a9 9 0 1 1-9-9m6 3 3-3m0 0v5m0-5h-5M15 9l-3 3m3 0a3 3 0 1 1-3-3" />,
};

function Icon({ name, className = "" }: { name: keyof typeof icons; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  );
}

function loadSet(key: string) {
  if (typeof window === "undefined") return new Set<string>();
  const stored = window.localStorage.getItem(key);
  return stored ? new Set(JSON.parse(stored) as string[]) : new Set<string>();
}

function loadNotes(key: string) {
  if (typeof window === "undefined") return {};
  const stored = window.localStorage.getItem(key);
  return stored ? (JSON.parse(stored) as Record<string, string>) : {};
}

function difficultyClass(difficulty: Difficulty) {
  const classes: Record<Difficulty, string> = {
    Starter: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    Core: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    Applied: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    Advanced: "border-red-500/35 bg-red-500/10 text-red-300",
    Expert: "border-red-400/50 bg-red-500/15 text-red-200",
  };
  return classes[difficulty];
}

function stageClass(stage: Stage) {
  const classes: Record<Stage, string> = {
    Beginner: "border-zinc-700 bg-zinc-950 text-zinc-200",
    Intermediate: "border-red-950 bg-red-950/30 text-red-200",
    Advanced: "border-red-800 bg-red-950/50 text-red-100",
    Expert: "border-red-600 bg-red-600/15 text-white",
  };
  return classes[stage];
}

export function TopicDetailPageShell({ currentIndex, nextNode, previousNode, roadmap, roadmapSlug, topic }: TopicDetailPageShellProps) {
  const storageKeys = useMemo(
    () => ({
      bookmarked: `${roadmap.storageKey}-bookmarked`,
      completed: `${roadmap.storageKey}-completed`,
      notes: `${roadmap.storageKey}-notes`,
      practice: `${roadmap.storageKey}-${topic.id}-practice`,
      quiz: `${roadmap.storageKey}-${topic.id}-quiz`,
    }),
    [roadmap.storageKey, topic.id],
  );
  const [completedIds, setCompletedIds] = useState<Set<string>>(() => loadSet(storageKeys.completed));
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(() => loadSet(storageKeys.bookmarked));
  const [notes, setNotes] = useState<Record<string, string>>(() => loadNotes(storageKeys.notes));
  const [practiceDone, setPracticeDone] = useState<Set<string>>(() => loadSet(storageKeys.practice));
  const [quizDone, setQuizDone] = useState<Set<string>>(() => loadSet(storageKeys.quiz));

  const completed = completedIds.has(topic.id);
  const bookmarked = bookmarkedIds.has(topic.id);
  const topicNote = notes[topic.id] ?? "";
  const topicHrefBase = roadmap.detailBasePath ?? `/roadmaps/${roadmapSlug}`;
  const progressPercentage = Math.round(((currentIndex + 1) / roadmap.roadmapNodes.length) * 100);
  const resourceGroups = Array.from(new Set(topic.resources.map((resource) => resource.category))).map((category) => ({
    category,
    resources: topic.resources.filter((resource) => resource.category === category),
  }));
  const quizItems = topic.quiz ? [topic.quiz, "Explain the answer with one real-world example.", "List one mistake a beginner might make here."] : ["Write three review questions for this topic.", "Answer each question without checking notes.", "Document one follow-up question to research."];

  useEffect(() => {
    window.localStorage.setItem(storageKeys.completed, JSON.stringify(Array.from(completedIds)));
  }, [completedIds, storageKeys.completed]);

  useEffect(() => {
    window.localStorage.setItem(storageKeys.bookmarked, JSON.stringify(Array.from(bookmarkedIds)));
  }, [bookmarkedIds, storageKeys.bookmarked]);

  useEffect(() => {
    window.localStorage.setItem(storageKeys.notes, JSON.stringify(notes));
  }, [notes, storageKeys.notes]);

  useEffect(() => {
    window.localStorage.setItem(storageKeys.practice, JSON.stringify(Array.from(practiceDone)));
  }, [practiceDone, storageKeys.practice]);

  useEffect(() => {
    window.localStorage.setItem(storageKeys.quiz, JSON.stringify(Array.from(quizDone)));
  }, [quizDone, storageKeys.quiz]);

  const toggleSet = (setter: (value: Set<string>) => void, current: Set<string>, id: string) => {
    const next = new Set(current);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setter(next);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(180deg,#050505_0%,#090909_48%,#050505_100%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(239,68,68,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <header className="border-b border-zinc-900 bg-[#050505]/95">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-4 lg:px-6">
          <Link className="text-sm font-black text-red-400 transition hover:text-red-300" href={topicHrefBase}>
            Back to roadmap
          </Link>
          <Link className="text-sm font-bold text-zinc-500 transition hover:text-zinc-200" href="/dashboard">
            Dashboard
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1180px] gap-6 px-5 py-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-6">
        <section className="min-w-0">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
            <Link className="hover:text-red-400" href="/">Home</Link>
            <Icon className="h-3.5 w-3.5" name="arrow" />
            <Link className="hover:text-red-400" href={topicHrefBase}>{roadmap.breadcrumb}</Link>
            <Icon className="h-3.5 w-3.5" name="arrow" />
            <span className="font-bold text-zinc-300">{topic.title}</span>
          </nav>

          <section className="mt-6 rounded-md border border-zinc-800 bg-zinc-950 p-5 lg:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-md border px-2.5 py-1 text-xs font-bold ${stageClass(topic.stage)}`}>{topic.stage}</span>
              <span className={`rounded-md border px-2.5 py-1 text-xs font-bold ${difficultyClass(topic.difficulty)}`}>{topic.difficulty}</span>
              <span className="inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-black px-2.5 py-1 text-xs font-bold text-zinc-400">
                <Icon className="h-3.5 w-3.5 text-red-400" name="clock" />
                {topic.duration}
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight text-white lg:text-5xl">{topic.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-300">{topic.description}</p>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-zinc-900">
              <div className="h-full rounded-full bg-red-500" style={{ width: `${progressPercentage}%` }} />
            </div>
            <p className="mt-2 text-xs font-bold uppercase text-zinc-500">
              Topic {currentIndex + 1} of {roadmap.roadmapNodes.length}
            </p>
          </section>

          <section className="mt-6 grid gap-5 xl:grid-cols-2">
            <TopicPanel icon="lock" title="Prerequisites" items={topic.prerequisites} />
            <TopicPanel icon="check" title="Skills You Gain" items={topic.skillsGained} />
          </section>

          <section className="mt-6 rounded-md border border-zinc-800 bg-zinc-950 p-5">
            <h2 className="text-2xl font-black text-white">Learning Plan</h2>
            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <TopicPanel icon="badge" title="Key Concepts" items={topic.topics} compact />
              {topic.learningOutcomes?.length ? <TopicPanel icon="target" title="Learning Outcomes" items={topic.learningOutcomes} compact /> : <TopicPanel icon="target" title="Learning Outcomes" items={topic.skillsGained.map((skill) => `Apply ${skill.toLowerCase()} in a project context.`)} compact />}
            </div>
          </section>

          <section className="mt-6 rounded-md border border-zinc-800 bg-zinc-950 p-5">
            <h2 className="text-2xl font-black text-white">Resources</h2>
            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              {resourceGroups.map(({ category, resources }) => (
                <section className="rounded-md border border-zinc-800 bg-[#050505] p-4" key={category}>
                  <h3 className="text-sm font-black text-white">{category}</h3>
                  <div className="mt-3 space-y-2">
                    {resources.map((resource) => (
                      <a className="flex items-center justify-between gap-3 rounded-md border border-zinc-800 bg-black px-3 py-2 text-sm font-bold text-zinc-300 transition hover:border-red-500/60 hover:text-white" href={resource.href} key={`${resource.href}-${resource.label}`} rel={resource.href.startsWith("http") ? "noreferrer" : undefined} target={resource.href.startsWith("http") ? "_blank" : undefined}>
                        <span>{resource.label}</span>
                        <Icon className="h-4 w-4 shrink-0 text-red-400" name="arrow" />
                      </a>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-6 rounded-md border border-zinc-800 bg-zinc-950 p-5">
            <h2 className="text-2xl font-black text-white">Practice Exercises</h2>
            <Checklist items={topic.practiceExercises} checkedIds={practiceDone} idPrefix="practice" onToggle={(id) => toggleSet(setPracticeDone, practiceDone, id)} />
          </section>

          <section className="mt-6 grid gap-5 xl:grid-cols-2">
            <section className="rounded-md border border-red-500/25 bg-red-500/10 p-5">
              <h2 className="flex items-center gap-2 text-xl font-black text-white">
                <Icon className="h-5 w-5 text-red-300" name="code" />
                Project Task
              </h2>
              <p className="mt-3 text-sm leading-6 text-red-100">{topic.miniProject}</p>
            </section>
            <section className="rounded-md border border-zinc-800 bg-zinc-950 p-5">
              <h2 className="flex items-center gap-2 text-xl font-black text-white">
                <Icon className="h-5 w-5 text-red-400" name="quiz" />
                Quiz
              </h2>
              <Checklist items={quizItems} checkedIds={quizDone} idPrefix="quiz" onToggle={(id) => toggleSet(setQuizDone, quizDone, id)} />
            </section>
          </section>

          <section className="mt-6 rounded-md border border-zinc-800 bg-zinc-950 p-5">
            <label className="flex items-center gap-2 text-xl font-black text-white" htmlFor={`${topic.id}-detail-notes`}>
              <Icon className="h-5 w-5 text-red-400" name="note" />
              Notes
            </label>
            <textarea
              className="mt-4 min-h-40 w-full resize-y rounded-md border border-zinc-800 bg-black p-4 text-sm leading-6 text-zinc-200 outline-none transition placeholder:text-zinc-600 focus:border-red-500/70"
              id={`${topic.id}-detail-notes`}
              onChange={(event) => setNotes((current) => ({ ...current, [topic.id]: event.target.value }))}
              placeholder={roadmap.notesPlaceholder ?? "Write implementation notes, links, decisions, and questions for this topic."}
              value={topicNote}
            />
          </section>
        </section>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <section className="rounded-md border border-zinc-800 bg-zinc-950 p-5">
            <h2 className="text-sm font-black uppercase text-zinc-500">Topic Actions</h2>
            <div className="mt-4 grid gap-2">
              <button aria-pressed={completed} className={`flex h-10 items-center justify-center gap-2 rounded-md border px-3 text-sm font-bold transition ${completed ? "border-red-500 bg-red-500 text-white" : "border-zinc-800 bg-black text-zinc-300 hover:border-red-500/70"}`} onClick={() => toggleSet(setCompletedIds, completedIds, topic.id)} type="button">
                <Icon className="h-4 w-4" name="check" />
                {completed ? "Completed" : "Mark complete"}
              </button>
              <button aria-pressed={bookmarked} className={`flex h-10 items-center justify-center gap-2 rounded-md border px-3 text-sm font-bold transition ${bookmarked ? "border-red-500/70 bg-red-500/15 text-red-200" : "border-zinc-800 bg-black text-zinc-300 hover:border-red-500/70"}`} onClick={() => toggleSet(setBookmarkedIds, bookmarkedIds, topic.id)} type="button">
                <Icon className="h-4 w-4" name="bookmark" />
                {bookmarked ? "Bookmarked" : "Bookmark"}
              </button>
            </div>
          </section>

          <section className="rounded-md border border-zinc-800 bg-zinc-950 p-5">
            <h2 className="text-sm font-black uppercase text-zinc-500">Next Step</h2>
            {nextNode ? (
              <Link className="mt-3 block rounded-md border border-red-500/30 bg-red-500/10 p-4 transition hover:border-red-500/70" href={`${topicHrefBase}/${nextNode.id}`}>
                <span className="text-sm font-black text-white">{nextNode.title}</span>
                <span className="mt-2 block text-xs leading-5 text-red-100">{nextNode.stage} • {nextNode.difficulty} • {nextNode.duration}</span>
              </Link>
            ) : (
              <p className="mt-3 text-sm leading-6 text-zinc-400">You are at the final topic in this roadmap. Review projects, finish notes, and mark the roadmap complete from the dashboard.</p>
            )}
            {previousNode ? (
              <Link className="mt-3 flex items-center gap-2 text-sm font-bold text-zinc-500 transition hover:text-red-400" href={`${topicHrefBase}/${previousNode.id}`}>
                Previous: {previousNode.title}
              </Link>
            ) : null}
          </section>

          <section className="rounded-md border border-zinc-800 bg-zinc-950 p-5">
            <h2 className="text-sm font-black uppercase text-zinc-500">Real-World Use</h2>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-zinc-300">
              {(topic.realWorldApplications?.length ? topic.realWorldApplications : ["Portfolio projects", "Interview preparation", "Production engineering judgment"]).map((application) => (
                <li className="flex gap-2" key={application}>
                  <Icon className="mt-1 h-4 w-4 shrink-0 text-red-400" name="target" />
                  {application}
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}

function TopicPanel({ compact = false, icon, items, title }: { compact?: boolean; icon: keyof typeof icons; items: string[]; title: string }) {
  return (
    <section className="rounded-md border border-zinc-800 bg-zinc-950 p-5">
      <h2 className="flex items-center gap-2 text-lg font-black text-white">
        <Icon className="h-5 w-5 text-red-400" name={icon} />
        {title}
      </h2>
      <ul className={`mt-4 grid gap-3 ${compact ? "sm:grid-cols-2" : ""}`}>
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-6 text-zinc-300" key={item}>
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-red-400" name="check" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Checklist({ checkedIds, idPrefix, items, onToggle }: { checkedIds: Set<string>; idPrefix: string; items: string[]; onToggle: (id: string) => void }) {
  return (
    <div className="mt-4 space-y-3">
      {items.map((item, index) => {
        const id = `${idPrefix}-${index}`;
        const checked = checkedIds.has(id);
        return (
          <label className={`flex cursor-pointer gap-3 rounded-md border p-3 transition ${checked ? "border-red-500/50 bg-red-500/10" : "border-zinc-800 bg-[#050505] hover:border-red-500/40"}`} key={item}>
            <input checked={checked} className="mt-1 h-4 w-4 accent-red-500" onChange={() => onToggle(id)} type="checkbox" />
            <span className={checked ? "text-sm leading-6 text-red-100" : "text-sm leading-6 text-zinc-300"}>{item}</span>
          </label>
        );
      })}
    </div>
  );
}
