import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';

export default function TsTypes() {
  return (
    <div>
      <h1>TypeScript Types</h1>
      <p>TypeScript supports the same types as JavaScript, with an extra enumeration type.</p>

      <h2>Boolean</h2>
      <p>The most basic data type is the simple true/false value, which JavaScript and TypeScript call a <code>boolean</code> value.</p>
      <CodeBlock 
        language="typescript"
        code={`let isDone: boolean = false;`}
      />

      <h2>Number</h2>
      <p>As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating point numbers get the type <code>number</code>.</p>
      <CodeBlock 
        language="typescript"
        code={`let decimal: number = 6;
let hex: number = 0xf00d;`}
      />

      <h2>String</h2>
      <p>Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. You use the type <code>string</code> to refer to these textual types.</p>
      <CodeBlock 
        language="typescript"
        code={`let color: string = "blue";
color = 'red';`}
      />

      <DocNote type="tip">
        You can also use template strings, which can span multiple lines and have embedded expressions. These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form <code>{`\${expression}`}</code>.
      </DocNote>

      <div className="mt-8 p-4 bg-[#111] border border-[#333] rounded-lg">
        <h3 className="text-xl font-bold mb-2">What's Next?</h3>
        <p>Let's dive into React Introduction!</p>
      </div>
    </div>
  );
}
