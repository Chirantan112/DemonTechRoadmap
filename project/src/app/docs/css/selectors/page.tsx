import React from 'react';
import CodeBlock from '@/src/components/docs/CodeBlock';
import DocTable from '@/src/components/docs/DocTable';

export default function CssSelectors() {
  return (
    <div>
      <h1>CSS Selectors</h1>
      <p>A CSS selector selects the HTML element(s) you want to style.</p>

      <p>CSS selectors are used to "find" (or select) the HTML elements you want to style.</p>
      <p>We can divide CSS selectors into five categories:</p>
      <ul>
        <li><strong>Simple selectors</strong> (select elements based on name, id, class)</li>
        <li><strong>Combinator selectors</strong> (select elements based on a specific relationship between them)</li>
        <li><strong>Pseudo-class selectors</strong> (select elements based on a certain state)</li>
        <li><strong>Pseudo-elements selectors</strong> (select and style a part of an element)</li>
        <li><strong>Attribute selectors</strong> (select elements based on an attribute or attribute value)</li>
      </ul>

      <h2>The CSS element Selector</h2>
      <p>The element selector selects HTML elements based on the element name.</p>
      <CodeBlock 
        language="css"
        code={`p {
  text-align: center;
  color: red;
}`}
      />

      <h2>The CSS id Selector</h2>
      <p>The id selector uses the id attribute of an HTML element to select a specific element. The id of an element is unique within a page, so the id selector is used to select one unique element!</p>
      <CodeBlock 
        language="css"
        code={`#para1 {
  text-align: center;
  color: red;
}`}
      />

      <h2>The CSS class Selector</h2>
      <p>The class selector selects HTML elements with a specific class attribute.</p>
      <CodeBlock 
        language="css"
        code={`.center {
  text-align: center;
  color: red;
}`}
      />

      <DocTable 
        headers={["Selector", "Example", "Description"]}
        rows={[
          [".class", ".intro", "Selects all elements with class=\"intro\""],
          ["#id", "#firstname", "Selects the element with id=\"firstname\""],
          ["*", "*", "Selects all elements"],
          ["element", "p", "Selects all <p> elements"],
          ["element,element", "div, p", "Selects all <div> elements and all <p> elements"]
        ]}
      />

      <div className="mt-8 p-4 bg-[#111] border border-[#333] rounded-lg">
        <h3 className="text-xl font-bold mb-2">What's Next?</h3>
        <p>Master CSS Flexbox in the next chapter!</p>
      </div>
    </div>
  );
}
