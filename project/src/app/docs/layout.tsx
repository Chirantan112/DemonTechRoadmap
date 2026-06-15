"use client";

import React from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { DOC_LANGUAGES } from '@/src/config/docs-content';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const pathname = usePathname();
  
  // Extract lang and topic from pathname if params are missing (for static routes)
  // Path format: /docs/[lang]/[topic]
  const pathParts = pathname.split('/');
  const langId = (params.lang as string) || pathParts[2];
  const topicSlug = (params.topic as string) || pathParts[3];

  const currentLanguage = DOC_LANGUAGES.find(l => l.id === langId);
  
  // If we're not in a supported language doc, just render children without the W3Schools layout
  if (!currentLanguage && pathname !== '/docs') {
    return <>{children}</>;
  }

  // Fallback to HTML if we're at /docs exactly
  const activeLanguage = currentLanguage || DOC_LANGUAGES[0];
  const topics = activeLanguage.topics;
  
  const currentIndex = topics.findIndex(t => t.slug === topicSlug);
  const prevTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      {/* Mobile Sidebar Toggle (Floating button) */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 bg-[#ef4444] text-white p-4 rounded-full shadow-lg"
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      {/* Language Tab Bar */}
      <div className="sticky top-0 z-30 w-full bg-[#111] border-b border-[#333] overflow-x-auto no-scrollbar">
        <div className="flex min-w-max">
          {DOC_LANGUAGES.map((lang) => (
            <Link
              key={lang.id}
              href={`/docs/${lang.id}/home`}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                langId === lang.id
                  ? 'bg-[#ef4444] text-white'
                  : 'text-gray-300 hover:bg-[#222] hover:text-white'
              }`}
            >
              {lang.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-1 relative">
        {/* Left Sidebar */}
        <aside className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 transition-transform duration-300
          w-[200px] fixed top-[45px] bottom-0 bg-[#111] border-r border-[#333] overflow-y-auto no-scrollbar z-40
        `}>
          <nav className="py-4">
            <div className="px-4 mb-4">
              <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                {activeLanguage.label} Tutorial
              </h2>
            </div>
            <div className="flex flex-col">
              {topics.map((topic) => {
                const isActive = topicSlug === topic.slug;
                return (
                  <Link
                    key={topic.slug}
                    href={topic.path}
                    className={`px-4 py-2 text-sm transition-all border-l-4 ${
                      isActive
                        ? 'border-[#ef4444] text-[#ef4444] bg-[#1a0a0a] font-medium'
                        : 'border-transparent text-gray-400 hover:bg-[#1a1a1a] hover:text-white'
                    }`}
                  >
                    {topic.title}
                  </Link>
                );
              })}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-[200px] p-4 md:p-8 flex justify-center">
          <div className="w-full max-w-[900px]">
            {/* Top Navigation Buttons */}
            <div className="flex justify-between items-center mb-8">
              {prevTopic ? (
                <Link
                  href={prevTopic.path}
                  className="bg-[#22c55e] hover:bg-[#1ea34d] text-white px-6 py-2 rounded font-medium text-sm transition-colors"
                >
                  ❮ Previous
                </Link>
              ) : (
                <div />
              )}
              {nextTopic ? (
                <Link
                  href={nextTopic.path}
                  className="bg-[#22c55e] hover:bg-[#1ea34d] text-white px-6 py-2 rounded font-medium text-sm transition-colors"
                >
                  Next ❯
                </Link>
              ) : (
                <div />
              )}
            </div>

            <article className="prose prose-invert max-w-none prose-h1:text-4xl prose-h1:font-bold prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-300 prose-code:text-red-400 prose-code:bg-red-950/30 prose-code:px-1 prose-code:rounded">
              {children}
            </article>

            {/* Bottom Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-[#333]">
              {prevTopic ? (
                <Link
                  href={prevTopic.path}
                  className="bg-[#22c55e] hover:bg-[#1ea34d] text-white px-6 py-2 rounded font-medium text-sm transition-colors"
                >
                  ❮ Previous
                </Link>
              ) : (
                <div />
              )}
              {nextTopic ? (
                <Link
                  href={nextTopic.path}
                  className="bg-[#22c55e] hover:bg-[#1ea34d] text-white px-6 py-2 rounded font-medium text-sm transition-colors"
                >
                  Next ❯
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
