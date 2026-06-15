import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocNote from '@/src/components/docs/DocNote';
import DocTable from '@/src/components/docs/DocTable';
import DocsHeader from '@/src/components/docs/DocsHeader';

export default function HtmlAttributes() {
  return (
    <div>
      <DocsHeader 
        title="HTML Attributes"
        description="Attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs."
        category="Core Elements"
        readingTime="5 min read"
      />
      
      <h2 id="href">The href Attribute</h2>
      <p>The <code>&lt;a&gt;</code> tag defines a hyperlink. The <code>href</code> attribute specifies the URL of the page the link goes to.</p>
      
      <CodeBlock 
        language="html"
        code={`<a href="https://demontech.com">Visit DemonTech</a>`}
      />

      <h2 id="src">The src Attribute</h2>
      <p>The <code>&lt;img&gt;</code> tag is used to embed an image in an HTML page. The <code>src</code> attribute specifies the path to the image to be displayed.</p>

      <CodeBlock 
        language="html"
        code={`<img src="img_demon.jpg" alt="DemonTech Mascot">`}
      />

      <DocNote type="tip">
        Always provide an <code>alt</code> attribute for images. This improves accessibility for screen readers and displays text if the image fails to load.
      </DocNote>

      <h2 id="common-attributes">Common Attributes Reference</h2>
      <p>Below is a list of commonly used attributes that apply to many HTML elements.</p>

      <DocTable 
        headers={["Attribute", "Description"]}
        rows={[
          ["class", "Specifies one or more classnames for an element (refers to a class in a style sheet)."],
          ["id", "Specifies a unique id for an element."],
          ["style", "Specifies an inline CSS style for an element."],
          ["title", "Specifies extra information about an element (displayed as a tooltip)."],
          ["lang", "Specifies the language of the element's content."]
        ]}
      />

      <DocNote type="info">
        HTML5 attributes are case-insensitive, but we recommend using lowercase for better consistency and readability.
      </DocNote>

      <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#0f0f0f] to-[#1a0a0a] border border-[#1f1f1f]">
        <h3 className="text-xl font-bold mb-2 text-[#ffffff]">Tutorial Complete</h3>
        <p className="text-[#a1a1aa] mb-6">You've mastered the basics of HTML! Now, level up your styling skills with CSS.</p>
        <a href="/docs/css/home" className="inline-flex items-center gap-2 text-[#ef4444] font-bold hover:underline">
          Start CSS Tutorial ❯
        </a>
      </div>
    </div>
  );
}
