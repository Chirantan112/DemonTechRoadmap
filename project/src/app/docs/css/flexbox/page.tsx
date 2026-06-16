import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';

export default function CssFlexbox() {
  return (
    <div>
      <h1>CSS Flexbox</h1>
      <p>The Flexbox Layout Module makes it easier to design flexible responsive layout structure without using float or positioning.</p>

      <h2>The Flexbox Element</h2>
      <p>To start using the Flexbox model, you need to first define a flex container.</p>
      <CodeBlock 
        language="css"
        code={`.flex-container {
  display: flex;
  background-color: DodgerBlue;
}`}
      />

      <h2>The flex-direction Property</h2>
      <p>The <code>flex-direction</code> property defines in which direction the container wants to stack the flex items.</p>
      
      <h3>column</h3>
      <p>The <code>column</code> value stacks the flex items vertically (from top to bottom):</p>
      <CodeBlock 
        language="css"
        code={`.flex-container {
  display: flex;
  flex-direction: column;
}`}
      />

      <h3>row</h3>
      <p>The <code>row</code> value stacks the flex items horizontally (from left to right):</p>
      <CodeBlock 
        language="css"
        code={`.flex-container {
  display: flex;
  flex-direction: row;
}`}
      />

      <h2>justify-content</h2>
      <p>The <code>justify-content</code> property is used to align the flex items horizontally:</p>
      <CodeBlock 
        language="css"
        code={`.flex-container {
  display: flex;
  justify-content: center;
}`}
      />

      <DocNote type="tip">
        Flexbox is perfect for small-scale layouts, while CSS Grid is better for large-scale layouts.
      </DocNote>

      <div className="mt-8 p-4 bg-[#111] border border-[#333] rounded-lg">
        <h3 className="text-xl font-bold mb-2">What's Next?</h3>
        <p>Let's dive into JavaScript Introduction!</p>
      </div>
    </div>
  );
}
