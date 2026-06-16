import React from 'react';
import { notFound } from 'next/navigation';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';
import DocsHeader from '@/src/components/docs/DocsHeader';
import Playground from '@/src/components/docs/Playground';
import LearningOutcomes from '@/src/components/docs/LearningOutcomes';
import { getTopicContent } from '@/src/data/docs/contentMap';
import { DOC_LANGUAGES } from '@/src/config/docs-content';

export async function generateStaticParams() {
  const params = [];
  for (const lang of DOC_LANGUAGES) {
    for (const topic of lang.topics) {
      params.push({ lang: lang.id, topic: topic.slug });
    }
  }
  return params;
}

export default async function TopicPage({ params }: { params: Promise<{ lang: string, topic: string }> }) {
  const { lang, topic } = await params;
  
  const content = getTopicContent(lang, topic);
  if (!content) {
    notFound();
  }

  // Find next topic
  const language = DOC_LANGUAGES.find(l => l.id === lang);
  let nextTopic = null;
  if (language) {
    const currentIndex = language.topics.findIndex(t => t.slug === topic);
    if (currentIndex >= 0 && currentIndex < language.topics.length - 1) {
      nextTopic = language.topics[currentIndex + 1];
    }
  }

  return (
    <div>
      <DocsHeader 
        title={content.title}
        description={content.description}
        category={content.category || language?.label || ""}
        readingTime={content.readingTime || "5 min read"}
      />

      {content.outcomes && content.outcomes.length > 0 && (
        <LearningOutcomes outcomes={content.outcomes} />
      )}
      
      <h2 id="introduction">Introduction</h2>
      <div className="prose prose-invert prose-red max-w-none text-zinc-300" dangerouslySetInnerHTML={{ __html: content.intro }} />
      
      {content.syntax && (
        <>
          <h2 id="syntax" className="text-2xl font-black text-white mt-12 mb-4">Syntax</h2>
          <CodeBlock 
            language={content.syntax.language}
            title={content.syntax.title || "Syntax"}
            code={content.syntax.code}
          />
        </>
      )}

      {content.example && (
        <>
          <h2 id="example" className="text-2xl font-black text-white mt-12 mb-4">Example</h2>
          <CodeBlock 
            language={content.example.language}
            title={content.example.title || "Example"}
            code={content.example.code}
          />
        </>
      )}

      {content.tryItYourself && (content.tryItYourself.html || content.tryItYourself.css || content.tryItYourself.js) && (
        <>
          <h2 id="try-it" className="text-2xl font-black text-white mt-12 mb-4">Try it Yourself</h2>
          <DocNote type="info" title="Hands-on Practice">
            Modify the code below to see how it affects the output. This is the best way to learn!
          </DocNote>
          <Playground 
            title="Interactive Editor"
            initialHtml={content.tryItYourself.html || ""}
            initialCss={content.tryItYourself.css || ""}
            initialJs={content.tryItYourself.js || ""}
          />
        </>
      )}

      {content.keyPoints && content.keyPoints.length > 0 && (
        <>
          <h2 id="key-points" className="text-2xl font-black text-white mt-12 mb-4">Key Points</h2>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            {content.keyPoints.map((point, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </>
      )}

      {content.referenceTable && (
        <>
          <h2 id="reference" className="text-2xl font-black text-white mt-12 mb-4">Reference</h2>
          <div className="overflow-x-auto my-6 rounded-xl border border-[#1f1f1f]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0f0f0f] border-b border-[#1f1f1f]">
                <tr>
                  {content.referenceTable.headers.map((h, i) => (
                    <th key={i} className="p-4 font-bold text-white">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1f1f1f]">
                {content.referenceTable.rows.map((row, i) => (
                  <tr key={i} className="hover:bg-[#0f0f0f]/50 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className="p-4 text-zinc-300" dangerouslySetInnerHTML={{ __html: cell }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {nextTopic && (
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#0f0f0f] to-[#1a0a0a] border border-[#1f1f1f]">
          <h3 className="text-xl font-bold mb-2 text-[#ffffff]">Up Next</h3>
          <p className="text-[#a1a1aa] mb-6">Continue your journey with the next topic.</p>
          <a href={nextTopic.path} className="inline-flex items-center gap-2 text-[#ef4444] font-bold hover:underline transition-colors hover:text-[#dc2626]">
            Go to {nextTopic.title} ❯
          </a>
        </div>
      )}
    </div>
  );
}
