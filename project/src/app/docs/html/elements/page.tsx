import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';
import ExampleOutput from '@/src/components/docs/ExampleOutput';

export default function HtmlElements() {
  return (
    <div>
      <h1>HTML Elements</h1>
      <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
      
      <div className="bg-[#1e1e1e] p-6 rounded-lg font-mono text-center my-6 border border-[#333]">
        <span className="text-blue-400">&lt;tagname&gt;</span>
        <span className="text-white"> Content goes here... </span>
        <span className="text-blue-400">&lt;/tagname&gt;</span>
      </div>

      <p>The HTML <strong>element</strong> is everything from the start tag to the end tag:</p>
      
      <ul className="space-y-2">
        <li><code>&lt;h1&gt;My First Heading&lt;/h1&gt;</code></li>
        <li><code>&lt;p&gt;My first paragraph.&lt;/p&gt;</code></li>
      </ul>

      <DocNote type="example" title="HTML Elements Example">
        <CodeBlock 
          language="html"
          code={`<h1>My First Heading</h1>
<p>My first paragraph.</p>`}
        />
        <ExampleOutput html="<h1>My First Heading</h1><p>My first paragraph.</p>" />
      </DocNote>

      <h2>Nested HTML Elements</h2>
      <p>HTML elements can be nested (this means that elements can contain other elements).</p>
      <p>All HTML documents consist of nested HTML elements.</p>

      <DocNote type="note">
        Some HTML elements have no content (like the <code>&lt;br&gt;</code> element). These elements are called empty elements. Empty elements do not have an end tag!
      </DocNote>

      <div className="mt-8 p-4 bg-[#111] border border-[#333] rounded-lg">
        <h3 className="text-xl font-bold mb-2">What's Next?</h3>
        <p>Learn about HTML Attributes in the next chapter.</p>
      </div>
    </div>
  );
}
