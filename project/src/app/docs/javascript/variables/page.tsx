import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';

export default function JsVariables() {
  return (
    <div>
      <h1>JavaScript Variables</h1>
      <p>Variables are containers for storing data (storing data values).</p>

      <h2>4 Ways to Declare a JavaScript Variable:</h2>
      <ul>
        <li>Using <code>var</code></li>
        <li>Using <code>let</code></li>
        <li>Using <code>const</code></li>
        <li>Using nothing</li>
      </ul>

      <h2>What are Variables?</h2>
      <p>Variables are containers for storing data (storing data values).</p>
      <p>In this example, <code>x</code>, <code>y</code>, and <code>z</code>, are variables, declared with the <code>var</code> keyword:</p>
      <CodeBlock 
        language="javascript"
        code={`var x = 5;
var y = 6;
var z = x + y;`}
      />

      <h2>The Assignment Operator</h2>
      <p>In JavaScript, the equal sign (<code>=</code>) is an "assignment" operator, not an "equal to" operator.</p>

      <DocNote type="note">
        Always declare JavaScript variables with <code>var</code>, <code>let</code>, or <code>const</code>. 
        The <code>let</code> and <code>const</code> keywords were added to JavaScript in 2015 (ES6).
      </DocNote>

      <h2>When to Use JavaScript const?</h2>
      <p>If you want a general rule: always declare variables with <code>const</code>. If you think the value of the variable can change, use <code>let</code>.</p>

      <div className="mt-8 p-4 bg-[#111] border border-[#333] rounded-lg">
        <h3 className="text-xl font-bold mb-2">What's Next?</h3>
        <p>Learn about JavaScript Functions in the next chapter.</p>
      </div>
    </div>
  );
}
