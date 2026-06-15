import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';

export default function ReactIntroduction() {
  return (
    <div>
      <h1>React Introduction</h1>
      <p>React is a JavaScript library for building user interfaces.</p>
      <p>React is used to build single-page applications.</p>
      <p>React allows us to create reusable UI components.</p>

      <h2>How does React Work?</h2>
      <p>React creates a VIRTUAL DOM in memory.</p>
      <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
      <p>React only changes what needs to be changed!</p>

      <DocNote type="example" title="React Example">
        <CodeBlock 
          language="jsx"
          code={`import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);`}
        />
      </DocNote>

      <h2>React.js History</h2>
      <p>Current version of React.js is V18.0.0 (April 2022).</p>
      <p>Initial Release to the Public (V0.3.0) was in July 2013.</p>
      <p>React.js was first used in Facebook's Newsfeed in 2011 and Instagram.com in 2012.</p>
      <p>React.js was developed by Jordan Walke, a software engineer at Facebook.</p>

      <DocNote type="note">
        React is not a framework. It is a library.
      </DocNote>

      <div className="mt-8 p-4 bg-[#111] border border-[#333] rounded-lg">
        <h3 className="text-xl font-bold mb-2">What's Next?</h3>
        <p>Learn about React Components in the next chapter.</p>
      </div>
    </div>
  );
}
