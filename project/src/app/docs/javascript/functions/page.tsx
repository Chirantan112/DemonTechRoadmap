import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';

export default function JsFunctions() {
  return (
    <div>
      <h1>JavaScript Functions</h1>
      <p>A JavaScript function is a block of code designed to perform a particular task.</p>
      <p>A JavaScript function is executed when "something" invokes it (calls it).</p>

      <DocNote type="info" title="JavaScript Function Example">
        <CodeBlock 
          language="javascript"
          code={`function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}`}
        />
      </DocNote>

      <h2>JavaScript Function Syntax</h2>
      <p>A JavaScript function is defined with the <code>function</code> keyword, followed by a <strong>name</strong>, followed by parentheses <strong>()</strong>.</p>
      <p>Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).</p>
      <p>The parentheses may include parameter names separated by commas: <strong>(parameter1, parameter2, ...)</strong></p>
      <p>The code to be executed, by the function, is placed inside curly brackets: <strong>&#123;&#125;</strong></p>

      <h2>Function Return</h2>
      <p>When JavaScript reaches a <code>return</code> statement, the function will stop executing.</p>
      <p>If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.</p>

      <DocNote type="tip">
        Functions are used to define code once, and then use it many times. You can use the same code many times with different arguments, to produce different results.
      </DocNote>

      <div className="mt-8 p-4 bg-[#111] border border-[#333] rounded-lg">
        <h3 className="text-xl font-bold mb-2">What's Next?</h3>
        <p>Let's move on to TypeScript Introduction!</p>
      </div>
    </div>
  );
}
