import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';

export default function ReactComponents() {
  return (
    <div>
      <h1>React Components</h1>
      <p>Components are like functions that return HTML elements.</p>
      <p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.</p>
      <p>Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.</p>

      <h2>Create Your First Component</h2>
      <p>When creating a React component, the component's name MUST start with an upper case letter.</p>
      
      <h3>Function Component</h3>
      <p>Here is a function component called <code>Car</code>:</p>
      <CodeBlock 
        language="jsx"
        code={`function Car() {
  return <h2>Hi, I am a Car!</h2>;
}`}
      />

      <h2>Rendering a Component</h2>
      <p>Now your React application has a component called <code>Car</code>, which returns an <code>&lt;h2&gt;</code> element.</p>
      <p>To use this component in your application, use similar syntax as normal HTML: <code>&lt;Car /&gt;</code></p>
      <CodeBlock 
        language="jsx"
        code={`const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);`}
      />

      <DocNote type="tip">
        Components can be passed as props, which stands for properties. Props are like function arguments, and you send them into the component as attributes.
      </DocNote>

      <div className="mt-8 p-4 bg-[#111] border border-[#333] rounded-lg">
        <h3 className="text-xl font-bold mb-2">What's Next?</h3>
        <p>Let's move on to Node.js Introduction!</p>
      </div>
    </div>
  );
}
