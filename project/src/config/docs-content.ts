import { DocLanguage } from "@/src/types/docs";

export const DOC_LANGUAGES: DocLanguage[] = [
  {
    id: "html",
    label: "HTML",
    color: "#f97316",
    icon: "⬡",
    sections: [
      {
        title: "HTML Tutorial",
        items: [
          { title: "HTML Introduction", slug: "introduction", path: "/docs/html/introduction" },
          { title: "HTML Editors", slug: "editors", path: "/docs/html/editors" },
          { title: "HTML Basic", slug: "basic", path: "/docs/html/basic" },
          { title: "HTML Elements", slug: "elements", path: "/docs/html/elements" },
          { title: "HTML Attributes", slug: "attributes", path: "/docs/html/attributes" },
          { title: "HTML Headings", slug: "headings", path: "/docs/html/headings" },
          { title: "HTML Paragraphs", slug: "paragraphs", path: "/docs/html/paragraphs" },
          { title: "HTML Styles", slug: "styles", path: "/docs/html/styles" },
          { title: "HTML Formatting", slug: "formatting", path: "/docs/html/formatting" },
          { title: "HTML Quotations", slug: "quotations", path: "/docs/html/quotations" },
          { title: "HTML Comments", slug: "comments", path: "/docs/html/comments" },
          { title: "HTML Colors", slug: "colors", path: "/docs/html/colors" },
          { title: "HTML CSS", slug: "css", path: "/docs/html/css" },
          { title: "HTML Links", slug: "links", path: "/docs/html/links" },
          { title: "HTML Images", slug: "images", path: "/docs/html/images" },
          { title: "HTML Favicon", slug: "favicon", path: "/docs/html/favicon" },
          { title: "HTML Page Title", slug: "page-title", path: "/docs/html/page-title" },
          { title: "HTML Tables", slug: "tables", path: "/docs/html/tables" },
          { title: "HTML Lists", slug: "lists", path: "/docs/html/lists" },
          { title: "HTML Block & Inline", slug: "block-inline", path: "/docs/html/block-inline" },
          { title: "HTML Div", slug: "div", path: "/docs/html/div" },
          { title: "HTML Classes", slug: "classes", path: "/docs/html/classes" },
          { title: "HTML Id", slug: "id", path: "/docs/html/id" },
          { title: "HTML Buttons", slug: "buttons", path: "/docs/html/buttons" },
          { title: "HTML Iframes", slug: "iframes", path: "/docs/html/iframes" },
          { title: "HTML JavaScript", slug: "javascript", path: "/docs/html/javascript" },
          { title: "HTML File Paths", slug: "file-paths", path: "/docs/html/file-paths" },
          { title: "HTML Head", slug: "head", path: "/docs/html/head" },
          { title: "HTML Layout", slug: "layout", path: "/docs/html/layout" },
          { title: "HTML Responsive", slug: "responsive", path: "/docs/html/responsive" },
          { title: "HTML Computercode", slug: "computercode", path: "/docs/html/computercode" },
          { title: "HTML Semantics", slug: "semantics", path: "/docs/html/semantics" },
          { title: "HTML Style Guide", slug: "style-guide", path: "/docs/html/style-guide" },
          { title: "HTML Entities", slug: "entities", path: "/docs/html/entities" },
          { title: "HTML Symbols", slug: "symbols", path: "/docs/html/symbols" },
          { title: "HTML Emojis", slug: "emojis", path: "/docs/html/emojis" },
          { title: "HTML Charset", slug: "charset", path: "/docs/html/charset" },
          { title: "HTML URL Encode", slug: "url-encode", path: "/docs/html/url-encode" },
          { title: "HTML vs XHTML", slug: "html-vs-xhtml", path: "/docs/html/html-vs-xhtml" },
        ]
      },
      {
        title: "HTML Forms",
        items: [
          { title: "HTML Forms", slug: "forms", path: "/docs/html/forms" },
          { title: "HTML Form Attributes", slug: "form-attributes", path: "/docs/html/form-attributes" },
          { title: "HTML Form Elements", slug: "form-elements", path: "/docs/html/form-elements" },
          { title: "HTML Input Types", slug: "input-types", path: "/docs/html/input-types" },
          { title: "HTML Input Attributes", slug: "input-attributes", path: "/docs/html/input-attributes" },
        ]
      },
      {
        title: "HTML Graphics",
        items: [
          { title: "HTML Canvas", slug: "canvas", path: "/docs/html/canvas" },
          { title: "HTML SVG", slug: "svg", path: "/docs/html/svg" },
        ]
      },
      {
        title: "HTML Media",
        items: [
          { title: "HTML Media", slug: "media", path: "/docs/html/media" },
          { title: "HTML Video", slug: "video", path: "/docs/html/video" },
          { title: "HTML Audio", slug: "audio", path: "/docs/html/audio" },
        ]
      }
    ],
    topics: []
  },
  {
    id: "css",
    label: "CSS",
    color: "#3b82f6",
    icon: "＃",
    sections: [
      {
        title: "CSS Tutorial",
        items: [
          { title: "CSS Introduction", slug: "introduction", path: "/docs/css/introduction" },
          { title: "CSS Syntax", slug: "syntax", path: "/docs/css/syntax" },
          { title: "CSS Selectors", slug: "selectors", path: "/docs/css/selectors" },
          { title: "CSS How To", slug: "how-to", path: "/docs/css/how-to" },
          { title: "CSS Comments", slug: "comments", path: "/docs/css/comments" },
          { title: "CSS Colors", slug: "colors", path: "/docs/css/colors" },
          { title: "CSS Backgrounds", slug: "backgrounds", path: "/docs/css/backgrounds" },
          { title: "CSS Borders", slug: "borders", path: "/docs/css/borders" },
          { title: "CSS Margins", slug: "margins", path: "/docs/css/margins" },
          { title: "CSS Padding", slug: "padding", path: "/docs/css/padding" },
          { title: "CSS Height/Width", slug: "height-width", path: "/docs/css/height-width" },
          { title: "CSS Box Model", slug: "box-model", path: "/docs/css/box-model" },
          { title: "CSS Outline", slug: "outline", path: "/docs/css/outline" },
          { title: "CSS Text", slug: "text", path: "/docs/css/text" },
          { title: "CSS Fonts", slug: "fonts", path: "/docs/css/fonts" },
          { title: "CSS Icons", slug: "icons", path: "/docs/css/icons" },
          { title: "CSS Links", slug: "links", path: "/docs/css/links" },
          { title: "CSS Lists", slug: "lists", path: "/docs/css/lists" },
          { title: "CSS Tables", slug: "tables", path: "/docs/css/tables" },
          { title: "CSS Display", slug: "display", path: "/docs/css/display" },
          { title: "CSS Position", slug: "position", path: "/docs/css/position" },
          { title: "CSS Z-index", slug: "z-index", path: "/docs/css/z-index" },
          { title: "CSS Overflow", slug: "overflow", path: "/docs/css/overflow" },
          { title: "CSS Float", slug: "float", path: "/docs/css/float" },
          { title: "CSS Inline-block", slug: "inline-block", path: "/docs/css/inline-block" },
          { title: "CSS Align", slug: "align", path: "/docs/css/align" },
          { title: "CSS Combinators", slug: "combinators", path: "/docs/css/combinators" },
          { title: "CSS Pseudo-classes", slug: "pseudo-classes", path: "/docs/css/pseudo-classes" },
          { title: "CSS Pseudo-elements", slug: "pseudo-elements", path: "/docs/css/pseudo-elements" },
          { title: "CSS Opacity", slug: "opacity", path: "/docs/css/opacity" },
          { title: "CSS Attribute Selectors", slug: "attribute-selectors", path: "/docs/css/attribute-selectors" },
        ]
      },
      {
        title: "CSS Advanced",
        items: [
          { title: "CSS Flexbox", slug: "flexbox", path: "/docs/css/flexbox" },
          { title: "CSS Grid", slug: "grid", path: "/docs/css/grid" },
          { title: "CSS Responsive", slug: "responsive", path: "/docs/css/responsive" },
          { title: "CSS Media Queries", slug: "media-queries", path: "/docs/css/media-queries" },
          { title: "CSS Variables", slug: "variables", path: "/docs/css/variables" },
          { title: "CSS Animations", slug: "animations", path: "/docs/css/animations" },
          { title: "CSS Transitions", slug: "transitions", path: "/docs/css/transitions" },
          { title: "CSS Transforms", slug: "transforms", path: "/docs/css/transforms" },
        ]
      }
    ],
    topics: []
  },
  {
    id: "javascript",
    label: "JavaScript",
    color: "#eab308",
    icon: "JS",
    sections: [
      {
        title: "JS Tutorial",
        items: [
          { title: "JS Introduction", slug: "introduction", path: "/docs/javascript/introduction" },
          { title: "JS Where To", slug: "where-to", path: "/docs/javascript/where-to" },
          { title: "JS Output", slug: "output", path: "/docs/javascript/output" },
          { title: "JS Statements", slug: "statements", path: "/docs/javascript/statements" },
          { title: "JS Syntax", slug: "syntax", path: "/docs/javascript/syntax" },
          { title: "JS Comments", slug: "comments", path: "/docs/javascript/comments" },
          { title: "JS Variables", slug: "variables", path: "/docs/javascript/variables" },
          { title: "JS Let", slug: "let", path: "/docs/javascript/let" },
          { title: "JS Const", slug: "const", path: "/docs/javascript/const" },
          { title: "JS Operators", slug: "operators", path: "/docs/javascript/operators" },
          { title: "JS Arithmetic", slug: "arithmetic", path: "/docs/javascript/arithmetic" },
          { title: "JS Assignment", slug: "assignment", path: "/docs/javascript/assignment" },
          { title: "JS Data Types", slug: "data-types", path: "/docs/javascript/data-types" },
          { title: "JS Functions", slug: "functions", path: "/docs/javascript/functions" },
          { title: "JS Objects", slug: "objects", path: "/docs/javascript/objects" },
          { title: "JS Events", slug: "events", path: "/docs/javascript/events" },
          { title: "JS Strings", slug: "strings", path: "/docs/javascript/strings" },
          { title: "JS String Methods", slug: "string-methods", path: "/docs/javascript/string-methods" },
          { title: "JS Arrays", slug: "arrays", path: "/docs/javascript/arrays" },
          { title: "JS Array Methods", slug: "array-methods", path: "/docs/javascript/array-methods" },
          { title: "JS Conditions", slug: "conditions", path: "/docs/javascript/conditions" },
          { title: "JS Switch", slug: "switch", path: "/docs/javascript/switch" },
          { title: "JS For Loop", slug: "for-loop", path: "/docs/javascript/for-loop" },
          { title: "JS While Loop", slug: "while-loop", path: "/docs/javascript/while-loop" },
          { title: "JS Break", slug: "break", path: "/docs/javascript/break" },
          { title: "JS Type Conversion", slug: "type-conversion", path: "/docs/javascript/type-conversion" },
          { title: "JS Typeof", slug: "typeof", path: "/docs/javascript/typeof" },
          { title: "JS Scope", slug: "scope", path: "/docs/javascript/scope" },
          { title: "JS Hoisting", slug: "hoisting", path: "/docs/javascript/hoisting" },
          { title: "JS Closures", slug: "closures", path: "/docs/javascript/closures" },
        ]
      },
      {
        title: "JS Advanced",
        items: [
          { title: "JS Callbacks", slug: "callbacks", path: "/docs/javascript/callbacks" },
          { title: "JS Promises", slug: "promises", path: "/docs/javascript/promises" },
          { title: "JS Async/Await", slug: "async-await", path: "/docs/javascript/async-await" },
          { title: "JS DOM", slug: "dom", path: "/docs/javascript/dom" },
          { title: "JS DOM Methods", slug: "dom-methods", path: "/docs/javascript/dom-methods" },
          { title: "JS DOM Events", slug: "dom-events", path: "/docs/javascript/dom-events" },
          { title: "JS Fetch API", slug: "fetch-api", path: "/docs/javascript/fetch-api" },
          { title: "JS JSON", slug: "json", path: "/docs/javascript/json" },
          { title: "JS Error Handling", slug: "error-handling", path: "/docs/javascript/error-handling" },
          { title: "JS Classes", slug: "classes", path: "/docs/javascript/classes" },
          { title: "JS Modules", slug: "modules", path: "/docs/javascript/modules" },
          { title: "JS ES6+ Features", slug: "es6-features", path: "/docs/javascript/es6-features" },
        ]
      }
    ],
    topics: []
  },
  {
    id: "typescript",
    label: "TypeScript",
    color: "#2563eb",
    icon: "TS",
    sections: [
      {
        title: "TypeScript Tutorial",
        items: [
          { title: "TS Introduction", slug: "introduction", path: "/docs/typescript/introduction" },
          { title: "TS Setup", slug: "setup", path: "/docs/typescript/setup" },
          { title: "TS Types", slug: "types", path: "/docs/typescript/types" },
          { title: "TS Type Inference", slug: "type-inference", path: "/docs/typescript/type-inference" },
          { title: "TS Interfaces", slug: "interfaces", path: "/docs/typescript/interfaces" },
          { title: "TS Type Aliases", slug: "type-aliases", path: "/docs/typescript/type-aliases" },
          { title: "TS Union Types", slug: "union-types", path: "/docs/typescript/union-types" },
          { title: "TS Intersection Types", slug: "intersection-types", path: "/docs/typescript/intersection-types" },
          { title: "TS Generics", slug: "generics", path: "/docs/typescript/generics" },
          { title: "TS Enums", slug: "enums", path: "/docs/typescript/enums" },
          { title: "TS Tuples", slug: "tuples", path: "/docs/typescript/tuples" },
          { title: "TS Type Assertions", slug: "type-assertions", path: "/docs/typescript/type-assertions" },
          { title: "TS Functions", slug: "functions", path: "/docs/typescript/functions" },
          { title: "TS Classes", slug: "classes", path: "/docs/typescript/classes" },
          { title: "TS Access Modifiers", slug: "access-modifiers", path: "/docs/typescript/access-modifiers" },
          { title: "TS Decorators", slug: "decorators", path: "/docs/typescript/decorators" },
          { title: "TS Modules", slug: "modules", path: "/docs/typescript/modules" },
          { title: "TS Utility Types", slug: "utility-types", path: "/docs/typescript/utility-types" },
          { title: "TS tsconfig", slug: "tsconfig", path: "/docs/typescript/tsconfig" },
          { title: "TS Strict Mode", slug: "strict-mode", path: "/docs/typescript/strict-mode" },
        ]
      }
    ],
    topics: []
  },
  {
    id: "react",
    label: "React",
    color: "#06b6d4",
    icon: "⚛",
    sections: [
      {
        title: "React Tutorial",
        items: [
          { title: "React Introduction", slug: "introduction", path: "/docs/react/introduction" },
          { title: "React Setup", slug: "setup", path: "/docs/react/setup" },
          { title: "React JSX", slug: "jsx", path: "/docs/react/jsx" },
          { title: "React Components", slug: "components", path: "/docs/react/components" },
          { title: "React Props", slug: "props", path: "/docs/react/props" },
          { title: "React State", slug: "state", path: "/docs/react/state" },
          { title: "React useState", slug: "use-state", path: "/docs/react/use-state" },
          { title: "React useEffect", slug: "use-effect", path: "/docs/react/use-effect" },
          { title: "React useContext", slug: "use-context", path: "/docs/react/use-context" },
          { title: "React useRef", slug: "use-ref", path: "/docs/react/use-ref" },
          { title: "React useMemo", slug: "use-memo", path: "/docs/react/use-memo" },
          { title: "React useCallback", slug: "use-callback", path: "/docs/react/use-callback" },
          { title: "React Custom Hooks", slug: "custom-hooks", path: "/docs/react/custom-hooks" },
          { title: "React Event Handling", slug: "event-handling", path: "/docs/react/event-handling" },
          { title: "React Conditional Rendering", slug: "conditional-rendering", path: "/docs/react/conditional-rendering" },
          { title: "React Lists & Keys", slug: "lists-keys", path: "/docs/react/lists-keys" },
          { title: "React Forms", slug: "forms", path: "/docs/react/forms" },
        ]
      },
      {
        title: "React Advanced",
        items: [
          { title: "React Context API", slug: "context-api", path: "/docs/react/context-api" },
          { title: "React Router", slug: "router", path: "/docs/react/router" },
          { title: "React Code Splitting", slug: "code-splitting", path: "/docs/react/code-splitting" },
          { title: "React Error Boundaries", slug: "error-boundaries", path: "/docs/react/error-boundaries" },
          { title: "React Performance", slug: "performance", path: "/docs/react/performance" },
          { title: "React Testing Basics", slug: "testing-basics", path: "/docs/react/testing-basics" },
        ]
      }
    ],
    topics: []
  },
  {
    id: "nodejs",
    label: "Node.js",
    color: "#22c55e",
    icon: "⬢",
    sections: [
      {
        title: "Node.js Tutorial",
        items: [
          { title: "Node Introduction", slug: "introduction", path: "/docs/nodejs/introduction" },
          { title: "Node Setup", slug: "setup", path: "/docs/nodejs/setup" },
          { title: "Node Modules", slug: "modules", path: "/docs/nodejs/modules" },
          { title: "Node File System", slug: "file-system", path: "/docs/nodejs/file-system" },
          { title: "Node HTTP Module", slug: "http-module", path: "/docs/nodejs/http-module" },
          { title: "Node URL Module", slug: "url-module", path: "/docs/nodejs/url-module" },
          { title: "Node NPM", slug: "npm", path: "/docs/nodejs/npm" },
          { title: "Node Events", slug: "events", path: "/docs/nodejs/events" },
          { title: "Node Streams", slug: "streams", path: "/docs/nodejs/streams" },
        ]
      },
      {
        title: "Node.js Advanced",
        items: [
          { title: "Express Intro", slug: "express-intro", path: "/docs/nodejs/express-intro" },
          { title: "Express Routing", slug: "express-routing", path: "/docs/nodejs/express-routing" },
          { title: "Express Middleware", slug: "express-middleware", path: "/docs/nodejs/express-middleware" },
          { title: "REST APIs", slug: "rest-apis", path: "/docs/nodejs/rest-apis" },
          { title: "MongoDB with Node", slug: "mongodb", path: "/docs/nodejs/mongodb" },
          { title: "Environment Variables", slug: "env-vars", path: "/docs/nodejs/env-vars" },
          { title: "Authentication Basics", slug: "auth-basics", path: "/docs/nodejs/auth-basics" },
          { title: "Error Handling", slug: "error-handling", path: "/docs/nodejs/error-handling" },
          { title: "Deployment", slug: "deployment", path: "/docs/nodejs/deployment" },
        ]
      }
    ],
    topics: []
  }
];

// Populate flattened topics array for easy next/prev navigation
DOC_LANGUAGES.forEach(lang => {
  lang.topics = lang.sections.flatMap(section => section.items);
});
