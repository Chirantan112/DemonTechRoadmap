import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';
import DocTable from '@/src/components/docs/DocTable';

export default function HtmlAttributes() {
  return (
    <div>
      <h1>HTML Attributes</h1>
      <p>Attributes provide additional information about HTML elements.</p>
      
      <ul>
        <li>All HTML elements can have <strong>attributes</strong></li>
        <li>Attributes provide <strong>additional information</strong> about elements</li>
        <li>Attributes are always specified in <strong>the start tag</strong></li>
        <li>Attributes usually come in name/value pairs like: <strong>name="value"</strong></li>
      </ul>

      <h2>The href Attribute</h2>
      <p>The <code>&lt;a&gt;</code> tag defines a hyperlink. The <code>href</code> attribute specifies the URL of the page the link goes to:</p>
      <CodeBlock 
        language="html"
        code={`<a href="https://www.google.com">Visit Google</a>`}
      />

      <h2>The src Attribute</h2>
      <p>The <code>&lt;img&gt;</code> tag is used to embed an image in an HTML page. The <code>src</code> attribute specifies the path to the image to be displayed:</p>
      <CodeBlock 
        language="html"
        code={`<img src="img_girl.jpg">`}
      />

      <h2>The width and height Attributes</h2>
      <p>The <code>&lt;img&gt;</code> tag should also contain the <code>width</code> and <code>height</code> attributes, which specifies the width and height of the image (in pixels):</p>
      <CodeBlock 
        language="html"
        code={`<img src="img_girl.jpg" width="500" height="600">`}
      />

      <DocTable 
        headers={["Attribute", "Description"]}
        rows={[
          ["href", "Specifies the URL of a page"],
          ["src", "Specifies the path to an image"],
          ["width", "Specifies the width of an image"],
          ["height", "Specifies the height of an image"],
          ["alt", "Specifies an alternate text for an image"],
          ["style", "Specifies an inline CSS style for an element"],
          ["lang", "Specifies the language of the element"],
          ["title", "Specifies extra information about an element"]
        ]}
      />

      <DocNote type="tip">
        The HTML standard does not require lowercase attribute names, but we recommend lowercase in HTML, and demands lowercase for stricter document types like XHTML.
      </DocNote>

      <div className="mt-8 p-4 bg-[#111] border border-[#333] rounded-lg">
        <h3 className="text-xl font-bold mb-2">What's Next?</h3>
        <p>Let's move on to CSS Introduction!</p>
      </div>
    </div>
  );
}
