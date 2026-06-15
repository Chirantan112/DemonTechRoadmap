import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';
import DocsHeader from '@/src/components/docs/DocsHeader';
import Playground from '@/src/components/docs/Playground';

export default function HtmlIntroduction() {
  return (
    <div>
      <DocsHeader 
        title="HTML Introduction"
        description="HTML is the standard markup language for creating Web pages. It defines the structure and layout of a web document by using various tags and attributes."
        category="Getting Started"
        readingTime="4 min read"
      />
      
      <h2 id="what-is-html">What is HTML?</h2>
      <p>HTML stands for Hyper Text Markup Language. It is the backbone of any website, providing the essential structure that browsers use to render content.</p>
      
      <ul>
        <li><strong>HyperText:</strong> Links that connect web pages to one another.</li>
        <li><strong>Markup Language:</strong> A way to annotate text so that a computer can understand and manipulate it.</li>
      </ul>

      <DocNote type="info" title="Why Learn HTML?">
        Every web developer starts with HTML. Whether you want to build simple websites or complex web applications like Facebook or Gmail, HTML is where it all begins.
      </DocNote>

      <h2 id="simple-document">A Simple HTML Document</h2>
      <p>Every HTML5 document follows a standard structure. Copy the code below and try it in our interactive playground.</p>

      <CodeBlock 
        language="html"
        title="index.html"
        code={`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`}
      />

      <h2 id="interactive-playground">Interactive Playground</h2>
      <p>Experiment with the code below. Change the heading text or add new elements to see them appear instantly in the live preview.</p>
      
      <Playground 
        title="HTML Basic Playground"
        initialHtml={`<h1>Hello DemonTech!</h1>
<p>Try changing this text in the editor to the left.</p>
<button class="btn">Click Me</button>`}
        initialCss={`.btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.btn:hover {
  background: #dc2626;
}`}
      />

      <h2 id="elements-explained">Elements Explained</h2>
      <ul>
        <li>The <code>&lt;!DOCTYPE html&gt;</code> declaration defines that this document is an HTML5 document.</li>
        <li>The <code>&lt;html&gt;</code> element is the root element of an HTML page.</li>
        <li>The <code>&lt;head&gt;</code> element contains meta information about the HTML page.</li>
        <li>The <code>&lt;body&gt;</code> element defines the document's body, and is a container for all the visible contents.</li>
      </ul>

      <DocNote type="tip">
        Always close your tags! While some browsers might fix missing tags for you, it can lead to unexpected layout issues and poor SEO.
      </DocNote>

      <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#0f0f0f] to-[#1a0a0a] border border-[#1f1f1f]">
        <h3 className="text-xl font-bold mb-2 text-[#ffffff]">What's Next?</h3>
        <p className="text-[#a1a1aa] mb-6">In the next chapter, we will deep dive into HTML Elements and how to use them effectively to build content.</p>
        <a href="/docs/html/elements" className="inline-flex items-center gap-2 text-[#ef4444] font-bold hover:underline">
          Go to HTML Elements ❯
        </a>
      </div>
    </div>
  );
}
