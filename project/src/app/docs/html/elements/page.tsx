import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';
import DocsHeader from '@/src/components/docs/DocsHeader';

export default function HtmlElements() {
  return (
    <div>
      <DocsHeader 
        title="HTML Elements"
        description="HTML elements are the building blocks of HTML pages. An element is usually composed of a start tag, content, and an end tag."
        category="Core Elements"
        readingTime="3 min read"
      />
      
      <h2 id="syntax">Element Syntax</h2>
      <p>An HTML element is defined by a start tag, some content, and an end tag:</p>
      
      <div className="bg-[#0f0f0f] border border-[#1f1f1f] p-8 rounded-xl font-mono text-center my-8 shadow-inner">
        <span className="text-[#ef4444]">&lt;tagname&gt;</span>
        <span className="text-[#ffffff]"> Content goes here... </span>
        <span className="text-[#ef4444]">&lt;/tagname&gt;</span>
      </div>

      <h2 id="nested">Nested Elements</h2>
      <p>HTML elements can be nested, meaning elements can contain other elements. All HTML documents consist of nested HTML elements.</p>

      <CodeBlock 
        language="html"
        title="Nested Elements"
        code={`<body>
  <h1>My Main Title</h1>
  <div>
    <p>This is a paragraph inside a div.</p>
  </div>
</body>`}
      />

      <DocNote type="warning" title="Don't Forget the End Tag!">
        Some HTML elements will display correctly even if you forget the end tag, but this is not recommended and can break your layout in modern browsers.
      </DocNote>

      <h2 id="empty-elements">Empty Elements</h2>
      <p>HTML elements with no content are called empty elements. Empty elements do not have an end tag, such as the <code>&lt;br&gt;</code> element (which indicates a line break).</p>

      <DocNote type="success">
        In HTML5, it is not required to close empty elements. But if you want stricter validation (like XML/XHTML), you should use <code>&lt;br /&gt;</code>.
      </DocNote>

      <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#0f0f0f] to-[#1a0a0a] border border-[#1f1f1f]">
        <h3 className="text-xl font-bold mb-2 text-[#ffffff]">Up Next</h3>
        <p className="text-[#a1a1aa] mb-6">Master HTML Attributes to add metadata and properties to your elements.</p>
        <a href="/docs/html/attributes" className="inline-flex items-center gap-2 text-[#ef4444] font-bold hover:underline">
          Go to HTML Attributes ❯
        </a>
      </div>
    </div>
  );
}
