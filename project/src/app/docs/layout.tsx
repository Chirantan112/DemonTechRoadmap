"use client";

import React from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { DOC_LANGUAGES } from '@/src/config/docs-content';
import DocsSidebar from '@/src/components/docs/DocsSidebar';
import TableOfContents from '@/src/components/docs/TableOfContents';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const pathname = usePathname();
  
  // Extract lang and topic from pathname
  const pathParts = pathname.split('/');
  const langId = (params.lang as string) || pathParts[2];
  const topicSlug = (params.topic as string) || pathParts[3];

  const currentLanguage = DOC_LANGUAGES.find(l => l.id === langId);
  
  // If we're not in a supported language doc, just render children
  if (!currentLanguage && pathname !== '/docs') {
    return <>{children}</>;
  }

  // Fallback to HTML if we're at /docs exactly
  const activeLanguage = currentLanguage || DOC_LANGUAGES[0];
  const flatTopics = activeLanguage.topics;
  
  const currentIndex = flatTopics.findIndex(t => t.slug === topicSlug);
  const prevTopic = currentIndex > 0 ? flatTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < flatTopics.length - 1 ? flatTopics[currentIndex + 1] : null;

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#ffffff] selection:bg-[#ef4444]/30">
      
      {/* Sticky Language Tab Bar */}
      <div className="sticky top-0 z-40 w-full bg-[#050505]/90 backdrop-blur-xl border-b border-[#1f1f1f]">
        <div className="flex min-w-max px-4">
          {DOC_LANGUAGES.map((lang) => (
            <Link
              key={lang.id}
              href={`/docs/${lang.id}/home`}
              className={`px-6 py-4 text-sm font-bold transition-all relative ${
                langId === lang.id
                  ? 'text-[#ffffff]'
                  : 'text-[#a1a1aa] hover:text-[#ffffff]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={langId === lang.id ? "text-[#ef4444]" : ""}>{lang.icon}</span>
                {lang.label}
              </div>
              {langId === lang.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ef4444] shadow-[0_0_12px_rgba(239,68,68,0.8)] rounded-t-full" />
              )}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center w-full max-w-[1536px] mx-auto">
        {/* Left Sidebar */}
        <DocsSidebar language={activeLanguage} activeTopicSlug={topicSlug} />

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-6 py-8 md:px-12 md:py-12 lg:max-w-4xl relative">
          
          {/* Top Navigation Buttons - Subtle Version */}
          <div className="flex justify-between items-center mb-10 pb-4 border-b border-[#1f1f1f] text-sm font-bold text-[#a1a1aa]">
            {prevTopic ? (
              <Link href={prevTopic.path} className="hover:text-[#ef4444] transition-colors flex items-center gap-2">
                ❮ {prevTopic.title}
              </Link>
            ) : <div />}
            {nextTopic ? (
              <Link href={nextTopic.path} className="hover:text-[#ef4444] transition-colors flex items-center gap-2">
                {nextTopic.title} ❯
              </Link>
            ) : <div />}
          </div>

          <article className="prose prose-invert max-w-none 
            prose-h1:text-4xl prose-h1:font-black prose-h1:tracking-tight prose-h1:text-[#ffffff]
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-[#ffffff] prose-h2:border-b prose-h2:border-[#1f1f1f] prose-h2:pb-2
            prose-h3:text-xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-[#ffffff]
            prose-p:text-[#a1a1aa] prose-p:leading-relaxed prose-p:text-[16px]
            prose-ul:text-[#a1a1aa] prose-ul:leading-relaxed
            prose-li:marker:text-[#ef4444]
            prose-strong:text-[#ffffff] prose-strong:font-bold
            prose-code:text-[#ef4444] prose-code:bg-[#ef4444]/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
            prose-a:text-[#ef4444] prose-a:no-underline hover:prose-a:underline hover:prose-a:underline-offset-4
          ">
            {children}
          </article>

          {/* Bottom Pagination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 pt-8 border-t border-[#1f1f1f]">
            {prevTopic ? (
              <Link
                href={prevTopic.path}
                className="flex flex-col items-start p-4 rounded-xl border border-[#1f1f1f] bg-[#0f0f0f] hover:border-[#ef4444] hover:bg-[#ef4444]/5 transition-all group"
              >
                <span className="text-xs font-bold text-[#a1a1aa] uppercase tracking-wider mb-1">Previous</span>
                <span className="text-sm font-bold text-[#ffffff] group-hover:text-[#ef4444] transition-colors">
                  {prevTopic.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextTopic ? (
              <Link
                href={nextTopic.path}
                className="flex flex-col items-end text-right p-4 rounded-xl border border-[#1f1f1f] bg-[#0f0f0f] hover:border-[#ef4444] hover:bg-[#ef4444]/5 transition-all group"
              >
                <span className="text-xs font-bold text-[#a1a1aa] uppercase tracking-wider mb-1">Next</span>
                <span className="text-sm font-bold text-[#ffffff] group-hover:text-[#ef4444] transition-colors">
                  {nextTopic.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </main>

        {/* Right Sidebar (Table of Contents) */}
        <TableOfContents />
      </div>
    </div>
  );
}
