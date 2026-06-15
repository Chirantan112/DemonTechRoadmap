import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';
import ExampleOutput from '@/src/components/docs/ExampleOutput';

export default function HtmlIntroduction() {
  return (
    <div>
      <h1>HTML Introduction</h1>
      <p>HTML is the standard markup language for creating Web pages.</p>
      
      <h2>What is HTML?</h2>
      <ul>
        <li>HTML stands for Hyper Text Markup Language</li>
        <li>HTML is the standard markup language for creating Web pages</li>
        <li>HTML describes the structure of a Web page</li>
        <li>HTML consists of a series of elements</li>
        <li>HTML elements tell the browser how to display the content</li>
      </ul>

      <DocNote type="example">
        <h3>A Simple HTML Document</h3>
        <CodeBlock 
          language="html"
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
        <ExampleOutput html="<h1>My First Heading</h1><p>My first paragraph.</p>" />
      </DocNote>

      <h2>Example Explained</h2>
      <ul>
        <li>The <code>&lt;!DOCTYPE html&gt;</code> declaration defines that this document is an HTML5 document</li>
        <li>The <code>&lt;html&gt;</code> element is the root element of an HTML page</li>
        <li>The <code>&lt;head&gt;</code> element contains meta information about the HTML page</li>
        <li>The <code>&lt;title&gt;</code> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
        <li>The <code>&lt;body&gt;</code> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
        <li>The <code>&lt;h1&gt;</code> element defines a large heading</li>
        <li>The <code>&lt;p&gt;</code> element defines a paragraph</li>
      </ul>

      <DocNote type="tip">
        HTML tags are not case sensitive: <code>&lt;P&gt;</code> means the same as <code>&lt;p&gt;</code>.
      </DocNote>

      <div className="mt-8 p-4 bg-[#111] border border-[#333] rounded-lg">
        <h3 className="text-xl font-bold mb-2">What's Next?</h3>
        <p>In the next chapter, we will look at HTML Elements.</p>
      </div>
    </div>
  );
}
