import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';

export default function CssIntroduction() {
  return (
    <div>
      <h1>CSS Introduction</h1>
      <p>CSS is the language we use to style a Web page.</p>

      <h2>What is CSS?</h2>
      <ul>
        <li>CSS stands for Cascading Style Sheets</li>
        <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
        <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>
        <li>External stylesheets are stored in CSS files</li>
      </ul>

      <DocNote type="example" title="CSS Example">
        <CodeBlock 
          language="css"
          code={`body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}`}
        />
      </DocNote>

      <h2>Why Use CSS?</h2>
      <p>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</p>

      <DocNote type="note">
        The word <strong>cascading</strong> means that a style applied to a parent element will also apply to all children elements within the parent. So, if you set the color of the body text to "blue", all headings, paragraphs, and other text elements within the body will also get the same color (unless you specify something else)!
      </DocNote>

      <div className="mt-8 p-4 bg-[#111] border border-[#333] rounded-lg">
        <h3 className="text-xl font-bold mb-2">What's Next?</h3>
        <p>Learn about CSS Selectors in the next chapter.</p>
      </div>
    </div>
  );
}
