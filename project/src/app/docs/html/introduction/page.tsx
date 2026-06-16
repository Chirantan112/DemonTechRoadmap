import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';
import DocsHeader from '@/src/components/docs/DocsHeader';
import Playground from '@/src/components/docs/Playground';
import LearningOutcomes from '@/src/components/docs/LearningOutcomes';

export default function HtmlIntroduction() {
  return (
    <div>
      <DocsHeader 
        title="HTML Introduction"
        description="Master the essential building blocks of the web. Learn how to structure documents with HTML5, the foundational language for every website on the internet."
        category="Getting Started"
        difficulty="Beginner"
        readingTime="6 min read"
        prerequisites={["Basic Computer Literacy", "Text Editor Knowledge"]}
      />

      <LearningOutcomes 
        outcomes={[
          "Understand the core purpose of HTML",
          "Identify basic HTML5 document structure",
          "Write your first semantic HTML elements",
          "Differentiate between tags and attributes",
          "Build and preview a simple webpage"
        ]}
      />
      
      <h2 id="what-is-html">What is HTML?</h2>
      <p>
        HTML stands for <strong>Hyper Text Markup Language</strong>. It is not a programming language; 
        it is a markup language that tells web browsers how to structure the web pages you visit. 
        It can be as complicated or as simple as the web developer wants it to be.
      </p>
      
      <ul>
        <li><strong>HyperText:</strong> Refers to the way in which Web pages (HTML documents) are linked together. Thus, the link available on a webpage is called Hypertext.</li>
        <li><strong>Markup Language:</strong> Refers to the way tags are used to define the page layout and elements within the page.</li>
      </ul>

      <DocNote type="info" title="Hacker Insight">
        Every single website you've ever visited—from Google to DemonTech—is built on a foundation of HTML. 
        JavaScript and CSS are powerful, but they both rely on the structure that HTML provides.
      </DocNote>

      <h2 id="simple-document">A Simple HTML Document</h2>
      <p>
        To create a basic web page, you need to follow a standard structure. This structure ensures 
        that browsers can interpret your content correctly and consistently across different devices.
      </p>

      <CodeBlock 
        language="html"
        title="index.html"
        code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Webpage</title>
</head>
<body>

  <h1>Leveling Up with DemonTech</h1>
  <p>The journey to becoming a world-class engineer starts here.</p>

</body>
</html>`}
      />

      <h2 id="interactive-playground">Interactive Playground</h2>
      <p>
        Experience the power of real-time editing. Modify the heading or style the button below to see 
        how HTML and CSS work together in a production environment.
      </p>
      
      <Playground 
        title="HTML5 Live Editor"
        initialHtml={`<div class="card">
  <h1>Welcome, Developer</h1>
  <p>Modify this code to start your journey.</p>
  <button class="cta-btn">Access Terminal</button>
</div>`}
        initialCss={`.card {
  background: #0a0a0a;
  padding: 3rem;
  border-radius: 2rem;
  border: 1px solid #1f1f1f;
  text-align: center;
}

h1 {
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  color: #a1a1aa;
  margin-bottom: 2rem;
}

.cta-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 0 20px rgba(239,68,68,0.2);
}

.cta-btn:hover {
  background: #dc2626;
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(239,68,68,0.4);
}`}
      />

      <h2 id="elements-explained">Core Elements Breakdown</h2>
      <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code>: Tells the browser that this is an HTML5 document.</li>
        <li><code>&lt;html&gt;</code>: The root element that wraps all your content.</li>
        <li><code>&lt;head&gt;</code>: Contains meta-information like titles, character sets, and links to styles.</li>
        <li><code>&lt;body&gt;</code>: Everything inside this tag is what the user actually sees on their screen.</li>
      </ul>

      <DocNote type="tip">
        Search engines like Google use your HTML structure to understand what your page is about. 
        Using correct tags (Semantic HTML) is the secret to ranking higher in search results.
      </DocNote>

      <DocNote type="warning">
        Browsers are very forgiving. If you forget to close a tag, it might still look fine, 
        but it can cause "ghost" bugs that are incredibly hard to debug later. Always close your tags!
      </DocNote>
    </div>
  );
}
