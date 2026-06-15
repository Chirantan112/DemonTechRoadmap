"use client";

import React from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { DOC_LANGUAGES } from '@/src/config/docs-content';

export default function LanguageHome() {
  const params = useParams();
  const pathname = usePathname();
  
  // Extract lang from pathname if params.lang is missing (for static routes)
  const pathParts = pathname.split('/');
  const langId = (params.lang as string) || (pathParts[2]);
  
  const currentLanguage = DOC_LANGUAGES.find(l => l.id === langId) || DOC_LANGUAGES[0];
  const firstTutorial = currentLanguage.topics[1]; // Usually introduction is at index 1 after home

  const contentMap: Record<string, { desc: string, points: string[] }> = {
    html: {
      desc: "HTML is the standard markup language for Web pages.",
      points: [
        "With HTML you can create your own Website.",
        "HTML is easy to learn - You will enjoy it!",
        "Study our free HTML Tutorial and start building a project now!"
      ]
    },
    css: {
      desc: "CSS is the language we use to style an HTML document.",
      points: [
        "CSS describes how HTML elements should be displayed.",
        "This tutorial will teach you CSS from basic to advanced.",
        "Style your own website with beautiful layouts and colors!"
      ]
    },
    javascript: {
      desc: "JavaScript is the world's most popular programming language.",
      points: [
        "JavaScript is the programming language of the Web.",
        "JavaScript is easy to learn.",
        "This tutorial will teach you JavaScript from basic to advanced."
      ]
    },
    typescript: {
      desc: "TypeScript is JavaScript with syntax for types.",
      points: [
        "TypeScript is a strongly typed programming language.",
        "TypeScript is a superset of JavaScript.",
        "Improve your developer experience with type safety!"
      ]
    },
    react: {
      desc: "React is a JavaScript library for building user interfaces.",
      points: [
        "React is used to build single-page applications.",
        "React allows us to create reusable UI components.",
        "Master the most popular frontend framework today!"
      ]
    },
    nodejs: {
      desc: "Node.js is an open-source, cross-platform JavaScript runtime environment.",
      points: [
        "Node.js runs the V8 JavaScript engine outside of the browser.",
        "Build scalable network applications with ease.",
        "Use JavaScript for your entire tech stack!"
      ]
    }
  };

  const content = contentMap[langId] || contentMap.html;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{currentLanguage.label} Tutorial</h1>
      <p className="text-xl text-gray-400 mb-8">{content.desc}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Left Card */}
        <div className="bg-[#111] border border-[#333] p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Learn {currentLanguage.label}</h2>
          <ul className="space-y-3 mb-8">
            {content.points.map((point, i) => (
              <li key={i} className="flex items-start">
                <span className="text-[#22c55e] mr-2">✓</span>
                <span className="text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
          <Link
            href={firstTutorial.path}
            className="inline-block bg-[#22c55e] hover:bg-[#1ea34d] text-white px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105"
          >
            Learn {currentLanguage.label} now »
          </Link>
        </div>

        {/* Right Card */}
        <div className="bg-[#111] border border-[#333] p-8 rounded-lg shadow-xl flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-bold mb-4">{currentLanguage.label} Quiz</h2>
          <p className="text-gray-400 mb-8">Test your {currentLanguage.label} skills with our quiz!</p>
          <button className="bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105">
            Start {currentLanguage.label} Quiz!
          </button>
        </div>
      </div>

      <div className="bg-[#1a0a0a] border-l-4 border-[#ef4444] p-6 rounded-r-lg">
        <h3 className="text-xl font-bold mb-2">Why Learn {currentLanguage.label}?</h3>
        <p className="text-gray-300 leading-relaxed">
          {currentLanguage.label} is a core technology used by millions of developers worldwide. 
          Whether you are looking to build modern web applications, scalable backends, or mobile apps, 
          mastering {currentLanguage.label} is an essential step in your journey as a developer.
        </p>
      </div>
    </div>
  );
}
