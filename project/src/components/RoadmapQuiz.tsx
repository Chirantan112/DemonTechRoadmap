"use client";

import { useState } from "react";
import Link from "next/link";
import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  chart: <path d="M5 19V9m5 10V5m5 14v-7m5 7V3" />,
  cloud: <path d="M18 17H8a5 5 0 1 1 1.3-9.8A6 6 0 0 1 21 10.5 3.5 3.5 0 0 1 18 17Z" />,
  globe: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-8-9h16M12 3c2.2 2.5 3.3 5.5 3.3 9S14.2 18.5 12 21c-2.2-2.5-3.3-5.5-3.3-9S9.8 5.5 12 3Z" />,
  phone: <path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm3 17h2" />,
  spark: <path d="m13 2-2 7H4l6 4-2 7 6-4 6 4-2-7 6-4h-7l-2-7Z" />,
};

function Icon({ className = "", name }: { className?: string; name: keyof typeof icons }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  );
}

type Question = {
  id: string;
  question: string;
  options: { label: string; icon: keyof typeof icons; score: Record<string, number> }[];
};

const questions: Question[] = [
  {
    id: "q1",
    question: "What is your primary goal?",
    options: [
      { label: "Build websites", icon: "globe", score: { frontend: 3, mobile: 1 } },
      { label: "Build mobile apps", icon: "phone", score: { mobile: 3, frontend: 1 } },
      { label: "Work with DevOps", icon: "cloud", score: { devops: 3, backend: 1 } },
      { label: "Work with data", icon: "chart", score: { data: 3, python: 2 } },
    ],
  },
  {
    id: "q2",
    question: "How do you like to learn?",
    options: [
      { label: "Visual interfaces", icon: "globe", score: { frontend: 2, mobile: 1 } },
      { label: "System design", icon: "cloud", score: { backend: 2, devops: 2 } },
      { label: "Projects first", icon: "spark", score: { frontend: 1, backend: 1, mobile: 1 } },
      { label: "Analysis", icon: "chart", score: { data: 2, python: 1 } },
    ],
  },
  {
    id: "q3",
    question: "What is your current level?",
    options: [
      { label: "Complete beginner", icon: "spark", score: { frontend: 1, python: 3 } },
      { label: "Know basics", icon: "globe", score: { frontend: 1, backend: 1 } },
      { label: "Ready to specialize", icon: "cloud", score: { devops: 1, data: 1, backend: 1 } },
      { label: "Building apps", icon: "phone", score: { mobile: 2, frontend: 1 } },
    ],
  },
];

const roadmaps = {
  frontend: { title: "Frontend Developer", href: "/roadmaps/frontend-developer", detail: "HTML, CSS, React, Next.js" },
  backend: { title: "Backend Developer", href: "/roadmaps/backend-developer", detail: "APIs, databases, auth" },
  devops: { title: "DevOps Engineer", href: "/roadmaps/devops-engineer", detail: "Linux, Docker, CI/CD" },
  mobile: { title: "Mobile Developer", href: "/roadmaps/mobile-developer", detail: "Mobile UI and app delivery" },
  data: { title: "Data Scientist", href: "/roadmaps/data-scientist", detail: "Python, ML, data analysis" },
  python: { title: "Python Developer", href: "/roadmaps/python", detail: "Python fundamentals to projects" },
};

export default function RoadmapQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [result, setResult] = useState<keyof typeof roadmaps | null>(null);

  const handleSelect = (optionScore: Record<string, number>) => {
    const newScores = { ...scores };
    Object.entries(optionScore).forEach(([key, value]) => {
      newScores[key] = (newScores[key] || 0) + value;
    });
    setScores(newScores);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      return;
    }

    let topRoadmap = "frontend";
    let maxScore = -1;
    Object.entries(newScores).forEach(([key, value]) => {
      if (value > maxScore) {
        maxScore = value;
        topRoadmap = key;
      }
    });
    setResult(topRoadmap as keyof typeof roadmaps);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScores({});
    setResult(null);
  };

  const progress = Math.round(((currentStep + 1) / questions.length) * 100);

  return (
    <section className="rounded-lg border border-zinc-800 bg-[#08090f]/90 p-6">
      <div className="text-center">
        <h2 className="text-2xl font-black text-white">Which roadmap is right for me?</h2>
        <p className="mt-2 text-sm text-zinc-400">Take this quick quiz to get a personalized recommendation.</p>
      </div>

      {!result ? (
        <div className="mt-6">
          <div className="flex items-center justify-between text-[11px] font-black uppercase text-zinc-500">
            <span>Question {currentStep + 1} of {questions.length}</span>
            <span>{progress}%</span>
          </div>
          <div className="mt-3 h-1.5 rounded-full bg-zinc-900">
            <div className="h-full rounded-full bg-red-500 transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>

          <h3 className="mt-6 text-base font-black text-white">{questions[currentStep].question}</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {questions[currentStep].options.map((option, idx) => (
              <button
                className="group grid min-h-[82px] place-items-center rounded-md border border-zinc-800 bg-black/30 p-3 text-center transition hover:border-red-500 hover:bg-red-500/10"
                key={idx}
                onClick={() => handleSelect(option.score)}
                type="button"
              >
                <Icon className="h-6 w-6 text-red-400 group-hover:text-red-300" name={option.icon} />
                <span className="mt-2 text-[12px] font-black text-white">{option.label}</span>
              </button>
            ))}
          </div>
          <button className="mt-5 inline-flex items-center gap-2 text-sm font-black text-red-400 transition hover:text-red-300" onClick={() => handleSelect(questions[currentStep].options[0].score)} type="button">
            Next Question <Icon className="h-4 w-4" name="arrow" />
          </button>
        </div>
      ) : (
        <div className="mt-6 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-red-500/15 text-red-400">
            <Icon className="h-7 w-7" name="spark" />
          </div>
          <p className="mt-4 text-sm font-bold text-zinc-400">We recommend</p>
          <h3 className="mt-1 text-2xl font-black text-white">{roadmaps[result].title}</h3>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-zinc-400">This path matches your answers and focuses on {roadmaps[result].detail}.</p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <Link className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-red-500 px-5 text-sm font-black text-white transition hover:bg-red-400" href={roadmaps[result].href}>
              Start Roadmap <Icon className="h-4 w-4" name="arrow" />
            </Link>
            <button className="h-11 rounded-md border border-zinc-700 px-5 text-sm font-black text-white transition hover:border-zinc-500" onClick={resetQuiz} type="button">
              Retake
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
