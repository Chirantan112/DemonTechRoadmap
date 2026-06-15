import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';

export default function TsIntroduction() {
  return (
    <div>
      <h1>TypeScript Introduction</h1>
      <p>TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.</p>

      <h2>What is TypeScript?</h2>
      <ul>
        <li>TypeScript is a superset of JavaScript</li>
        <li>TypeScript adds static typing to JavaScript</li>
        <li>TypeScript code is converted to JavaScript so it can run anywhere JavaScript runs</li>
        <li>TypeScript makes it easier to find and fix bugs before you run your code</li>
      </ul>

      <DocNote type="example" title="TypeScript Example">
        <CodeBlock 
          language="typescript"
          code={`interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Hayes",
  id: 0,
};`}
        />
      </DocNote>

      <h2>Why Use TypeScript?</h2>
      <p>JavaScript is a loosely typed language. It can be tricky to understand what types of data are being passed around in JavaScript.</p>
      <p>In JavaScript, function arguments and variables do not have any information. So developers need to look at documentation or guess based on the implementation.</p>
      <p>TypeScript allows you to specify the types of data being passed around within your code, and has the ability to report errors when the types don't match.</p>

      <DocNote type="note">
        TypeScript is developed and maintained by Microsoft.
      </DocNote>

      <div className="mt-8 p-4 bg-[#111] border border-[#333] rounded-lg">
        <h3 className="text-xl font-bold mb-2">What's Next?</h3>
        <p>Learn about TypeScript Types in the next chapter.</p>
      </div>
    </div>
  );
}
