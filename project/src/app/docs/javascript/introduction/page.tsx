import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';

export default function JsIntroduction() {
  return (
    <div>
      <h1>JavaScript Introduction</h1>
      <p>JavaScript is the world's most popular programming language.</p>
      <p>JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.</p>

      <h2>Why Study JavaScript?</h2>
      <p>JavaScript is one of the <strong>3 languages</strong> all web developers <strong>must</strong> learn:</p>
      <ul>
        <li><strong>HTML</strong> to define the content of web pages</li>
        <li><strong>CSS</strong> to specify the layout of web pages</li>
        <li><strong>JavaScript</strong> to program the behavior of web pages</li>
      </ul>

      <DocNote type="info" title="JavaScript Example">
        <p>JavaScript can change HTML content:</p>
        <CodeBlock 
          language="javascript"
          code={`document.getElementById("demo").innerHTML = "Hello JavaScript";`}
        />
      </DocNote>

      <h2>JavaScript Can Change HTML Styles (CSS)</h2>
      <p>Changing the style of an HTML element, is a variant of changing an HTML attribute:</p>
      <CodeBlock 
        language="javascript"
        code={`document.getElementById("demo").style.fontSize = "35px";
document.getElementById("demo").style.color = "red";`}
      />

      <DocNote type="tip">
        JavaScript and Java are completely different languages, both in concept and design.
      </DocNote>

      <div className="mt-8 p-4 bg-[#111] border border-[#333] rounded-lg">
        <h3 className="text-xl font-bold mb-2">What's Next?</h3>
        <p>Learn about JavaScript Variables in the next chapter.</p>
      </div>
    </div>
  );
}
