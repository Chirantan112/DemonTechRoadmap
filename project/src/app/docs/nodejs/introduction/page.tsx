import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';

export default function NodeIntroduction() {
  return (
    <div>
      <h1>Node.js Introduction</h1>
      <p>Node.js is an open source server environment.</p>
      <p>Node.js allows you to run JavaScript on the server.</p>

      <h2>What is Node.js?</h2>
      <ul>
        <li>Node.js is an open source server environment</li>
        <li>Node.js is free</li>
        <li>Node.js runs on various platforms (Windows, Linux, Unix, macOS, etc.)</li>
        <li>Node.js uses JavaScript on the server</li>
      </ul>

      <h2>Why Node.js?</h2>
      <p>Node.js uses asynchronous programming!</p>
      <p>A common task for a web server can be to open a file on the server and return the content to the client.</p>
      <p>Here is how PHP or ASP handles a file request:</p>
      <ol>
        <li>Sends a task to the computer's file system.</li>
        <li>Waits while the file system opens and reads the file.</li>
        <li>Returns the content to the client.</li>
        <li>Ready to handle the next request.</li>
      </ol>
      <p>Here is how Node.js handles a file request:</p>
      <ol>
        <li>Sends a task to the computer's file system.</li>
        <li>Ready to handle the next request.</li>
        <li>When the file system has opened and read the file, the server returns the content to the client.</li>
      </ol>
      <p>Node.js eliminates the waiting, and simply continues with the next request.</p>

      <DocNote type="example" title="Node.js Example">
        <CodeBlock 
          language="javascript"
          code={`var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);`}
        />
      </DocNote>

      <div className="mt-8 p-4 bg-[#111] border border-[#333] rounded-lg">
        <h3 className="text-xl font-bold mb-2">What's Next?</h3>
        <p>You've completed the basic introduction to several technologies! Check out the other chapters in the sidebar.</p>
      </div>
    </div>
  );
}
