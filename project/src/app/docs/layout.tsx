"use client";

import React from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { DOC_LANGUAGES } from '@/src/config/docs-content';
import DocsSidebar from '@/src/components/docs/DocsSidebar';
import TableOfContents from '@/src/components/docs/TableOfContents';
import DocsNavbar from '@/src/components/docs/DocsNavbar';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const pathname = usePathname();
  
  const pathParts = pathname.split('/');
  const langId = (params.lang as string) || pathParts[2];
  const topicSlug = (params.topic as string) || pathParts[3];

  const currentLanguage = DOC_LANGUAGES.find(l => l.id === langId);
  
  if (!currentLanguage && pathname !== '/docs') {
    return <>{children}</>;
  }

  const activeLanguage = currentLanguage || DOC_LANGUAGES[0];
  const flatTopics = activeLanguage.topics;
  const currentTopic = flatTopics.find(t => t.slug === topicSlug) || flatTopics[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#ffffff] selection:bg-[#ef4444]/30">
      
      {/* Premium SaaS Navbar */}
      <DocsNavbar 
        langId={activeLanguage.label} 
        topicTitle={currentTopic.title.replace(`${activeLanguage.label} `, '')} 
      />

      {/* Secondary Language Switcher (Sub-nav) */}
      <div className="sticky top-[73px] z-40 w-full bg-[#050505]/60 backdrop-blur-md border-b border-[#1f1f1f]">
        <div className="max-w-[1600px] mx-auto flex min-w-max px-6">
          {DOC_LANGUAGES.map((lang) => (
            <Link
              key={lang.id}
              href={`/docs/${lang.id}/home`}
              className={`px-5 py-3 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${
                langId === lang.id
                  ? 'text-[#ffffff]'
                  : 'text-[#444] hover:text-[#a1a1aa]'
              }`}
            >
              {lang.label}
              {langId === lang.id && (
                <motion.span 
                  layoutId="activeLangTab"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ef4444] rounded-t-full shadow-[0_-5px_15px_rgba(239,68,68,0.5)]" 
                />
              )}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center w-full max-w-[1600px] mx-auto relative">
        {/* Left Sidebar */}
        <DocsSidebar language={activeLanguage} activeTopicSlug={topicSlug} />

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 flex justify-center">
          <div className="w-full max-w-[850px] px-6 py-12 md:px-12 md:py-16">
            <article className="prose prose-invert max-w-none 
              prose-h1:text-5xl prose-h1:font-black prose-h1:tracking-tight prose-h1:text-[#ffffff] prose-h1:mb-10
              prose-h2:text-3xl prose-h2:font-black prose-h2:mt-20 prose-h2:mb-8 prose-h2:text-[#ffffff] prose-h2:tracking-tight
              prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-[#ffffff]
              prose-p:text-[#a1a1aa] prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
              prose-ul:text-[#a1a1aa] prose-ul:leading-relaxed prose-ul:mb-8
              prose-li:marker:text-[#ef4444] prose-li:mb-2
              prose-strong:text-[#ffffff] prose-strong:font-bold
              prose-code:text-[#ef4444] prose-code:bg-[#ef4444]/5 prose-code:border prose-code:border-[#ef4444]/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
              prose-a:text-[#ef4444] prose-a:no-underline prose-a:font-bold hover:prose-a:text-white transition-colors
              prose-blockquote:border-[#ef4444] prose-blockquote:bg-[#0f0f0f] prose-blockquote:py-1 prose-blockquote:rounded-r-xl
            ">
              {children}
            </article>

            {/* Pagination Cards (Related/Next) */}
            <div className="mt-24 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RelatedCards activeLanguage={activeLanguage} topicSlug={topicSlug} />
              </div>
              <NextLessonCTA activeLanguage={activeLanguage} topicSlug={topicSlug} />
            </div>
          </div>
        </main>

        {/* Right Sidebar (Table of Contents) */}
        <TableOfContents />
      </div>
    </div>
  );
}

function RelatedCards({ activeLanguage, topicSlug }: { activeLanguage: any, topicSlug: string }) {
  const topics = activeLanguage.topics;
  const currentIndex = topics.findIndex((t: any) => t.slug === topicSlug);
  
  const prev = topics[currentIndex - 1];
  const next = topics[currentIndex + 1];

  return (
    <>
      {prev && (
        <Link 
          href={prev.path}
          className="group p-6 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] hover:border-[#ef4444]/50 hover:bg-[#ef4444]/5 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-2">
             <ChevronLeft className="h-3 w-3 text-[#555] group-hover:text-[#ef4444] transition-colors" />
             <span className="text-[10px] font-black uppercase tracking-widest text-[#555] group-hover:text-[#ef4444] transition-colors">
               Previous Chapter
             </span>
          </div>
          <h4 className="text-lg font-bold text-white group-hover:translate-x-1 transition-transform">
            {prev.title}
          </h4>
        </Link>
      )}
      {next && (
        <Link 
          href={next.path}
          className="group p-6 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] hover:border-[#ef4444]/50 hover:bg-[#ef4444]/5 transition-all duration-300"
        >
          <div className="flex items-center justify-end gap-2 mb-2">
             <span className="text-[10px] font-black uppercase tracking-widest text-[#555] group-hover:text-[#ef4444] transition-colors">
               Next Up
             </span>
             <ChevronRight className="h-3 w-3 text-[#555] group-hover:text-[#ef4444] transition-colors" />
          </div>
          <h4 className="text-lg font-bold text-white group-hover:-translate-x-1 transition-transform text-right">
            {next.title}
          </h4>
        </Link>
      )}
    </>
  );
}

function NextLessonCTA({ activeLanguage, topicSlug }: { activeLanguage: any, topicSlug: string }) {
  const topics = activeLanguage.topics;
  const currentIndex = topics.findIndex((t: any) => t.slug === topicSlug);
  const next = topics[currentIndex + 1];

  if (!next) return null;

  return (
    <Link
      href={next.path}
      className="relative overflow-hidden block p-10 rounded-3xl border border-[#1f1f1f] bg-gradient-to-br from-[#0f0f0f] to-[#1a0a0a] group hover:border-[#ef4444] transition-all duration-500 shadow-2xl"
    >
      <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#ef4444]/5 rounded-full blur-[80px] group-hover:bg-[#ef4444]/10 transition-colors" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-[#ef4444]/10 border border-[#ef4444]/20 text-[#ef4444] text-[10px] font-black uppercase tracking-widest mb-4">
            Next Lesson
          </span>
          <h2 className="text-4xl font-black text-white mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
            {next.title}
          </h2>
          <p className="text-[#a1a1aa] font-medium">Continue your journey and master the next concept.</p>
        </div>
        <div className="w-16 h-16 rounded-2xl bg-[#ef4444] flex items-center justify-center text-white shadow-[0_0_30px_rgba(239,68,68,0.4)] group-hover:scale-110 transition-transform duration-500">
          <ChevronRight className="h-8 w-8 stroke-[3]" />
        </div>
      </div>
    </Link>
  );
}
