import { TopicContent } from './contentMap';

export const htmlData: Record<string, TopicContent> = {
  introduction: {
    title: "HTML Introduction",
    description: "HTML is the standard language for creating web pages.",
    intro: "HTML describes the structure of web content using elements. An element represents content wrapped in tags, which are labels enclosed in angle brackets. Browsers read these elements and render them into a visual page.",
    syntax: {
      language: "html",
      code: `<!-- NOTE: reference file does not cover syntax fully — placeholder used -->\n<tagname>Content goes here...</tagname>`
    },
    example: {
      language: "html",
      code: `<!-- this defines a basic html file -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My Page</title>\n    <link rel="stylesheet" href="styles.css">\n  </head>\n  <body>\n    <h1>Hello, World!</h1>\n    <p>Welcome to my first web page.</p>\n    <script src="app.js"></script>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this defines a basic html file -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My Page</title>\n    <link rel="stylesheet" href="styles.css">\n  </head>\n  <body>\n    <h1>Hello, World!</h1>\n    <p>Welcome to my first web page.</p>\n    <script src="app.js"></script>\n  </body>\n</html>`
    },
    keyPoints: [
      "HTML stands for HyperText Markup Language.",
      "HTML defines the structure of a web page.",
      "Browsers render HTML into a visual page.",
      "CSS handles page styling.",
      "JavaScript handles page behavior."
    ]
  },
  editors: {
    title: "HTML Editors",
    description: "HTML files are plain text documents.",
    intro: "HTML files are plain text documents. A text editor creates and modifies these files. Browsers read the files and display the result.",
    syntax: {
      language: "html",
      code: `<!-- NOTE: reference file does not cover editors syntax template fully — placeholder used -->`
    },
    example: {
      language: "html",
      code: `<!-- NOTE: reference file does not cover editors fully — placeholder used -->`
    },
    tryItYourself: {
      html: `<!-- NOTE: reference file does not cover editors fully — placeholder used -->`
    },
    keyPoints: [
      "Editors create text files.",
      "HTML requires no special software.",
      "Browsers render the saved files."
    ]
  },
  basic: {
    title: "HTML Basic Examples",
    description: "HTML files require a specific structure to work correctly.",
    intro: "HTML files require a specific structure to work correctly. A doctype declaration tells the browser to expect HTML5. The html element wraps all other content on the page.",
    syntax: {
      language: "html",
      code: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n  </head>\n  <body>\n  </body>\n</html>`
    },
    example: {
      language: "html",
      code: `<!-- this defines a basic html file -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My Page</title>\n    <link rel="stylesheet" href="styles.css">\n  </head>\n  <body>\n    <h1>Hello, World!</h1>\n    <p>Welcome to my first web page.</p>\n    <script src="app.js"></script>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this defines a basic html file -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My Page</title>\n    <link rel="stylesheet" href="styles.css">\n  </head>\n  <body>\n    <h1>Hello, World!</h1>\n    <p>Welcome to my first web page.</p>\n    <script src="app.js"></script>\n  </body>\n</html>`
    },
    keyPoints: [
      "The doctype declares the document version.",
      "The html element contains all page content.",
      "The head holds hidden metadata.",
      "The body contains visible elements."
    ]
  },
  elements: {
    title: "HTML Elements",
    description: "HTML elements build the structure of a web page.",
    intro: "HTML elements build the structure of a web page. An element contains an opening tag, content, and a closing tag. Some elements do not have closing tags and are called void elements.",
    syntax: {
      language: "html",
      code: `<!-- anatomy of an element -->\n<p class="intro">Hello!</p>`
    },
    example: {
      language: "html",
      code: `<!-- this is a paragraph element -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Elements</title>\n  </head>\n  <body>\n    <p>Hello!</p>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this is a paragraph element -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Elements</title>\n  </head>\n  <body>\n    <p>Hello!</p>\n  </body>\n</html>`
    },
    keyPoints: [
      "Elements wrap content with tags.",
      "Block elements start on a new line.",
      "Inline elements flow with text.",
      "Void elements lack closing tags."
    ]
  },
  attributes: {
    title: "HTML Attributes",
    description: "HTML attributes provide extra information about elements.",
    intro: "HTML attributes provide extra information about elements. An attribute sits inside the opening tag and uses a name and value pair. They control things like links, images, and identifiers.",
    syntax: {
      language: "html",
      code: `<!-- attribute syntax -->\n<div id="main" class="container" style="color:red"></div>`
    },
    example: {
      language: "html",
      code: `<!-- this is a link with attributes -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Attributes</title>\n  </head>\n  <body>\n    <a href="https://example.com" target="_blank" rel="noopener">Link</a>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this is a link with attributes -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Attributes</title>\n  </head>\n  <body>\n    <a href="https://example.com" target="_blank" rel="noopener">Link</a>\n  </body>\n</html>`
    },
    keyPoints: [
      "Attributes add settings to elements.",
      "Attributes sit in the opening tag.",
      "Boolean attributes require no value.",
      "Quoted values prevent syntax errors."
    ]
  },
  headings: {
    title: "HTML Headings",
    description: "HTML headings define titles and subtitles on a webpage.",
    intro: "HTML headings define titles and subtitles on a webpage. They create the document structure and outline. The `<h1>` tag defines the most important heading, while `<h6>` defines the least important.",
    syntax: {
      language: "html",
      code: `<h1>Page Title — only ONE per page</h1>\n<h2>Section Heading</h2>\n<h3>Subsection</h3>\n<h4>Sub-subsection</h4>\n<h5>Rarely used</h5>\n<h6>Rarely used</h6>`
    },
    example: {
      language: "html",
      code: `<!-- this defines an article heading -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Headings</title>\n  </head>\n  <body>\n    <h1>HTML5 Notes</h1>\n    <h2>Syntax</h2>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this defines an article heading -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Headings</title>\n  </head>\n  <body>\n    <h1>HTML5 Notes</h1>\n    <h2>Syntax</h2>\n  </body>\n</html>`
    },
    keyPoints: [
      "Headings structure the document.",
      "Search engines index page headings.",
      "Browsers resize headings by default.",
      "Visual size does not replace headings."
    ]
  },
  paragraphs: {
    title: "HTML Paragraphs",
    description: "HTML paragraphs block chunks of text together.",
    intro: "HTML groups text blocks using paragraphs. A paragraph starts on a new line, and browsers add space above and below it. The browser removes extra spaces and line breaks in the source code.",
    syntax: {
      language: "html",
      code: `<p>This is a paragraph.</p>`
    },
    example: {
      language: "html",
      code: `<!-- this is a paragraph example -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Paragraphs</title>\n  </head>\n  <body>\n    <p>This is a paragraph.</p>\n    <br>\n    <p>This is another paragraph.</p>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this is a paragraph example -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Paragraphs</title>\n  </head>\n  <body>\n    <p>This is a paragraph.</p>\n    <br>\n    <p>This is another paragraph.</p>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<p>` tag creates paragraphs.",
      "Paragraphs start on a new line.",
      "Browsers collapse extra whitespace.",
      "The `<br>` tag forces line breaks."
    ]
  },
  styles: {
    title: "HTML Styles",
    description: "The HTML style attribute is used to add styles to an element.",
    intro: "Setting the style of an HTML element, can be done with the style attribute. You can change colors, fonts, size, and more.",
    syntax: {
      language: "html",
      code: `<tagname style="property:value;">`
    },
    tryItYourself: {
      html: `<p style="color:red; font-size:24px;">I am a red, large paragraph.</p>`
    }
  },
  formatting: {
    title: "HTML Formatting Elements",
    description: "HTML formatting elements apply semantic meaning to text.",
    intro: "HTML formats text to convey special meaning. Elements like `<strong>` and `<em>` highlight importance and emphasis. Browsers apply visual styles like bold or italic by default.",
    syntax: {
      language: "html",
      code: `<!-- formatting elements -->\n<p><strong>Strong</strong> and <em>emphasis</em>.</p>`
    },
    example: {
      language: "html",
      code: `<!-- this formats text inline -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Formatting</title>\n  </head>\n  <body>\n    <p>Use <strong>strong</strong> for importance and <em>em</em> for emphasis.</p>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this formats text inline -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Formatting</title>\n  </head>\n  <body>\n    <p>Use <strong>strong</strong> for importance and <em>em</em> for emphasis.</p>\n  </body>\n</html>`
    },
    keyPoints: [
      "Formatting elements give text meaning.",
      "The `<strong>` tag indicates strong importance.",
      "The `<em>` tag indicates emphasis.",
      "The `<mark>` tag highlights relevant text."
    ]
  },
  quotations: {
    title: "HTML Quotation Elements",
    description: "HTML quotation elements define quoted text and blockquotes.",
    intro: "HTML provides specific elements to cite and quote text. Elements like `<blockquote>` indent long quotations, while `<q>` handles short inline quotes. Browsers usually add quotation marks around inline quotes automatically.",
    syntax: {
      language: "html",
      code: `<!-- blockquote syntax -->\n<blockquote cite="https://example.com">\n  Quoted text goes here.\n</blockquote>`
    },
    example: {
      language: "html",
      code: `<!-- this defines quotations -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Quotations</title>\n  </head>\n  <body>\n    <p>She said, <q>HTML is awesome.</q></p>\n    <blockquote>HTML defines the web.</blockquote>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this defines quotations -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Quotations</title>\n  </head>\n  <body>\n    <p>She said, <q>HTML is awesome.</q></p>\n    <blockquote>HTML defines the web.</blockquote>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<blockquote>` tag indents block quotes.",
      "The `<q>` tag adds inline quotation marks.",
      "The `<cite>` tag defines the title of a work.",
      "The `<abbr>` tag defines abbreviations."
    ]
  },
  comments: {
    title: "HTML Comments",
    description: "HTML comments hide text from the browser display.",
    intro: "HTML comments leave notes inside your source code. Browsers ignore comments and do not display them on the screen. Developers use comments to explain code or temporarily hide elements during testing.",
    syntax: {
      language: "html",
      code: `<!-- NOTE: reference file does not cover comments fully — placeholder used -->\n<!-- Write your comment here -->`
    },
    example: {
      language: "html",
      code: `<!-- this is a comment example -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Comments</title>\n  </head>\n  <body>\n    <!-- This paragraph is hidden -->\n    <!-- <p>Hidden</p> -->\n    <p>Visible</p>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this is a comment example -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Comments</title>\n  </head>\n  <body>\n    <!-- This paragraph is hidden -->\n    <!-- <p>Hidden</p> -->\n    <p>Visible</p>\n  </body>\n</html>`
    },
    keyPoints: [
      "Comments hide text from users.",
      "Browsers ignore commented code completely.",
      "Comments help explain code logic.",
      "Comments span multiple lines easily."
    ]
  },
  colors: {
    title: "HTML Colors",
    description: "HTML colors define the visual color of elements.",
    intro: "HTML applies colors using names, HEX values, or RGB values. Developers mostly control colors through CSS rather than plain HTML. Browsers support standard color names like red, blue, or transparent.",
    syntax: {
      language: "html",
      code: `<!-- NOTE: reference file does not cover colors fully — placeholder used -->\n<p style="color: red;">Red text</p>`
    },
    example: {
      language: "html",
      code: `<!-- this sets inline colors -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Colors</title>\n  </head>\n  <body>\n    <h1 style="color: blue;">Blue Heading</h1>\n    <p style="background-color: black; color: white;">Dark mode</p>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this sets inline colors -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Colors</title>\n  </head>\n  <body>\n    <h1 style="color: blue;">Blue Heading</h1>\n    <p style="background-color: black; color: white;">Dark mode</p>\n  </body>\n</html>`
    },
    keyPoints: [
      "HTML supports standard color names.",
      "HEX and RGB values offer precise colors.",
      "CSS handles most color styling.",
      "Inline styles apply colors directly."
    ]
  },
  css: {
    title: "HTML CSS",
    description: "CSS handles the visual styling of HTML elements.",
    intro: "CSS formats the visual layout of an HTML page. HTML handles the structure, while CSS controls colors, fonts, and spacing. Developers link external CSS files inside the head element.",
    syntax: {
      language: "html",
      code: `<!-- NOTE: reference file does not cover CSS connection fully — placeholder used -->\n<link rel="stylesheet" href="styles.css">`
    },
    example: {
      language: "html",
      code: `<!-- this connects a stylesheet -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>CSS Link</title>\n    <link rel="stylesheet" href="styles.css">\n  </head>\n  <body>\n    <h1>Styled Heading</h1>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this connects a stylesheet -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>CSS Link</title>\n    <style>\n      h1 { color: red; }\n    </style>\n  </head>\n  <body>\n    <h1>Styled Heading</h1>\n  </body>\n</html>`
    },
    keyPoints: [
      "CSS stands for Cascading Style Sheets.",
      "CSS controls visual appearance.",
      "External stylesheets keep HTML clean.",
      "The `<link>` tag connects external CSS."
    ]
  },
  links: {
    title: "HTML Links",
    description: "HTML links connect web pages together.",
    intro: "HTML creates hyperlinks that let users navigate between pages. The `<a>` anchor tag defines a link, and the `href` attribute specifies the destination URL. External links should open in a new tab securely.",
    syntax: {
      language: "html",
      code: `<!-- external link -->\n<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit</a>`
    },
    example: {
      language: "html",
      code: `<!-- this creates a link -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Links</title>\n  </head>\n  <body>\n    <a href="/about">About Us</a>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this creates a link -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Links</title>\n  </head>\n  <body>\n    <a href="/about">About Us</a>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<a>` tag defines hyperlinks.",
      "The `href` attribute holds the destination address.",
      "Absolute URLs link to other websites.",
      "Relative URLs link to local pages."
    ]
  },
  images: {
    title: "HTML Images",
    description: "HTML images add visual content to web pages.",
    intro: "HTML embeds images using the `<img>` tag. This tag is a void element, so it requires no closing tag. The `src` attribute tells the browser where to find the image file.",
    syntax: {
      language: "html",
      code: `<!-- basic image syntax -->\n<img src="photo.jpg" alt="A description of the photo">`
    },
    example: {
      language: "html",
      code: `<!-- this embeds an image -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Images</title>\n  </head>\n  <body>\n    <img src="/hero.webp" alt="Hero banner" width="1200" height="600">\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this embeds an image -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Images</title>\n  </head>\n  <body>\n    <img src="/hero.webp" alt="Hero banner" width="1200" height="600">\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<img>` tag embeds images.",
      "The `src` attribute defines the file path.",
      "The `alt` attribute provides accessible text.",
      "Dimensions prevent layout shifts."
    ]
  },
  favicon: {
    title: "HTML Favicon",
    description: "HTML favicons display small icons in browser tabs.",
    intro: "HTML pages show a small icon next to the page title in the browser tab. Developers use the `<link>` tag to attach this icon. Browsers request standard formats like `.ico`, `.png`, or `.svg`.",
    syntax: {
      language: "html",
      code: `<!-- favicon syntax -->\n<link rel="icon" href="/favicon.ico" sizes="any">`
    },
    example: {
      language: "html",
      code: `<!-- this defines a favicon -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Favicon</title>\n    <link rel="icon" href="/icon.svg" type="image/svg+xml">\n  </head>\n  <body>\n    <h1>Check the tab icon</h1>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this defines a favicon -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Favicon</title>\n    <link rel="icon" href="/icon.svg" type="image/svg+xml">\n  </head>\n  <body>\n    <h1>Check the tab icon</h1>\n  </body>\n</html>`
    },
    keyPoints: [
      "Favicons appear in browser tabs.",
      "The `<link>` tag connects the icon file.",
      "The `href` attribute points to the image path.",
      "Browsers cache favicons aggressively."
    ]
  },
  "page-title": {
    title: "HTML Page Title",
    description: "HTML page titles name the browser tab and search result.",
    intro: "HTML uses the `<title>` tag to name the document. Browsers display this title in the tab bar and history logs. Search engines use the title to name search results.",
    syntax: {
      language: "html",
      code: `<!-- title syntax -->\n<title>Page Title | Site Name</title>`
    },
    example: {
      language: "html",
      code: `<!-- this defines a title -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>HTML5 Roadmap | DemonTech</title>\n  </head>\n  <body>\n    <h1>Main Content</h1>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this defines a title -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>HTML5 Roadmap | DemonTech</title>\n  </head>\n  <body>\n    <h1>Main Content</h1>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<title>` tag names the document.",
      "Browsers show titles in tabs.",
      "Search engines display titles in results.",
      "Each page requires one unique title."
    ]
  },
  tables: {
    title: "HTML Tables",
    description: "HTML tables organize structured data into rows and columns.",
    intro: "HTML tables display data in a grid format. The `<table>` element wraps rows, headers, and data cells. Developers organize complex tables with header, body, and footer sections.",
    syntax: {
      language: "html",
      code: `<!-- table structure -->\n<table>\n  <caption>Monthly Sales</caption>\n  <thead>\n    <tr>\n      <th scope="col">Month</th>\n    </tr>\n  </thead>\n</table>`
    },
    example: {
      language: "html",
      code: `<!-- this defines a table -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Tables</title>\n  </head>\n  <body>\n    <table>\n      <thead>\n        <tr><th scope="col">Name</th></tr>\n      </thead>\n      <tbody>\n        <tr><td>Alice</td></tr>\n      </tbody>\n    </table>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this defines a table -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Tables</title>\n  </head>\n  <body>\n    <table>\n      <thead>\n        <tr><th scope="col">Name</th></tr>\n      </thead>\n      <tbody>\n        <tr><td>Alice</td></tr>\n      </tbody>\n    </table>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<table>` element creates data grids.",
      "The `<tr>` tag defines table rows.",
      "The `<th>` tag defines header cells.",
      "The `<td>` tag defines data cells."
    ]
  },
  lists: {
    title: "HTML Lists",
    description: "HTML lists group related items together.",
    intro: "HTML organizes related text into lists. Unordered lists use the `<ul>` tag to display bullet points. Ordered lists use the `<ol>` tag to display numbers. List items always sit inside the `<li>` tag.",
    syntax: {
      language: "html",
      code: `<!-- lists syntax -->\n<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n</ul>\n<ol start="3" reversed type="A">\n  <li>Third item</li>\n</ol>`
    },
    example: {
      language: "html",
      code: `<!-- this creates lists -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Lists</title>\n  </head>\n  <body>\n    <ul>\n      <li>One</li>\n      <li>Two</li>\n    </ul>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this creates lists -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Lists</title>\n  </head>\n  <body>\n    <ul>\n      <li>One</li>\n      <li>Two</li>\n    </ul>\n  </body>\n</html>`
    },
    keyPoints: [
      "Unordered lists show bullet points.",
      "Ordered lists display numbers or letters.",
      "The `<li>` tag wraps every list item.",
      "Description lists group terms and details."
    ]
  },
  "block-inline": {
    title: "HTML Block and Inline Elements",
    description: "HTML elements display as block or inline by default.",
    intro: "HTML controls how elements sit on the page. Block-level elements take the full width and start on a new line. Inline elements only take as much width as their content needs.",
    syntax: {
      language: "html",
      code: `<!-- NOTE: reference file does not cover block-inline syntax template fully — placeholder used -->\n<div>Block</div>\n<span>Inline</span>`
    },
    example: {
      language: "html",
      code: `<!-- this shows element types -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Element Types</title>\n  </head>\n  <body>\n    <p>This is a block.</p>\n    <span>This is inline.</span>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this shows element types -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Element Types</title>\n  </head>\n  <body>\n    <p>This is a block.</p>\n    <span>This is inline.</span>\n  </body>\n</html>`
    },
    keyPoints: [
      "Block elements take full page width.",
      "Block elements stack vertically.",
      "Inline elements flow alongside text.",
      "Inline elements wrap their contents tightly."
    ]
  },
  div: {
    title: "HTML Div Element",
    description: "The HTML div element acts as a generic container.",
    intro: "HTML provides the `<div>` tag to group elements together. It holds no semantic meaning on its own. Developers use it to apply CSS styles or structure sections of a page.",
    syntax: {
      language: "html",
      code: `<!-- div syntax -->\n<div class="container">\n  <p>Grouped content</p>\n</div>`
    },
    example: {
      language: "html",
      code: `<!-- this defines a div -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Div Container</title>\n  </head>\n  <body>\n    <div id="main">\n      <h2>Section</h2>\n      <p>Content.</p>\n    </div>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this defines a div -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Div Container</title>\n  </head>\n  <body>\n    <div id="main">\n      <h2>Section</h2>\n      <p>Content.</p>\n    </div>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<div>` tag holds no semantic meaning.",
      "The `<div>` tag creates a block-level container.",
      "Classes and IDs style the container.",
      "Semantic tags replace `<div>` when possible."
    ]
  },
  classes: {
    title: "HTML Classes",
    description: "HTML classes assign reusable identifiers to elements.",
    intro: "HTML uses the `class` attribute to group elements. Multiple elements can share the exact same class name. CSS and JavaScript target these classes to apply styles or behavior.",
    syntax: {
      language: "html",
      code: `<!-- class syntax -->\n<p class="intro highlight">Text</p>`
    },
    example: {
      language: "html",
      code: `<!-- this applies classes -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Classes</title>\n  </head>\n  <body>\n    <p class="error">Something went wrong.</p>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this applies classes -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Classes</title>\n  </head>\n  <body>\n    <p class="error">Something went wrong.</p>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `class` attribute groups elements.",
      "Multiple elements share the same class.",
      "One element accepts multiple classes.",
      "CSS targets classes to style pages."
    ]
  },
  id: {
    title: "HTML Id Attribute",
    description: "The HTML id attribute uniquely identifies an element on a page.",
    intro: "HTML uses the `id` attribute to give an element a unique identifier. No two elements on the same page can share the same id. Developers use the id to target an element with CSS or JavaScript.",
    syntax: {
      language: "html",
      code: `<!-- id syntax -->\n<h1 id="main-title">Heading</h1>`
    },
    example: {
      language: "html",
      code: `<!-- this applies an id -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Id Attribute</title>\n  </head>\n  <body>\n    <p id="unique-paragraph">This is unique.</p>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this applies an id -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Id Attribute</title>\n  </head>\n  <body>\n    <p id="unique-paragraph">This is unique.</p>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `id` attribute is unique per page.",
      "Elements only accept one id.",
      "CSS selects IDs with a hash symbol.",
      "JavaScript finds elements using their id."
    ]
  },
  buttons: {
    title: "HTML Buttons",
    description: "HTML buttons trigger actions when clicked.",
    intro: "HTML provides the `<button>` element to create clickable buttons. These buttons submit forms or trigger JavaScript functions. Developers can put text, icons, or images inside a button element.",
    syntax: {
      language: "html",
      code: `<!-- button syntax -->\n<button type="button">Click Me</button>`
    },
    example: {
      language: "html",
      code: `<!-- this creates a button -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Buttons</title>\n  </head>\n  <body>\n    <button type="submit">Send Message</button>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this creates a button -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Buttons</title>\n  </head>\n  <body>\n    <button type="submit">Send Message</button>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<button>` tag creates clickable areas.",
      "Buttons accept child elements like images.",
      "The `type` attribute defines the button behavior.",
      "JavaScript attaches click events to buttons."
    ]
  },
  iframes: {
    title: "HTML Iframes",
    description: "HTML iframes display external web pages inside a page.",
    intro: "HTML embeds other documents using the `<iframe>` element. The `src` attribute points to the external URL. Developers set the width and height to control the frame size.",
    syntax: {
      language: "html",
      code: `<!-- iframe syntax -->\n<iframe src="https://example.com" width="500" height="400"></iframe>`
    },
    example: {
      language: "html",
      code: `<!-- this embeds an iframe -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Iframes</title>\n  </head>\n  <body>\n    <iframe src="https://example.com" width="100%" height="300" title="Example Site"></iframe>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this embeds an iframe -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Iframes</title>\n  </head>\n  <body>\n    <iframe src="https://example.com" width="100%" height="300" title="Example Site"></iframe>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<iframe>` tag embeds external content.",
      "The `src` attribute sets the URL.",
      "The `title` attribute improves accessibility.",
      "CSS controls the frame dimensions."
    ]
  },
  javascript: {
    title: "HTML JavaScript",
    description: "HTML JavaScript makes web pages interactive and dynamic.",
    intro: "HTML links JavaScript code using the `<script>` tag. The script tag either holds inline code or connects to an external file using the `src` attribute. Developers usually place scripts at the bottom of the body.",
    syntax: {
      language: "html",
      code: `<!-- script syntax -->\n<script src="app.js" defer></script>`
    },
    example: {
      language: "html",
      code: `<!-- this connects a script -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>JavaScript</title>\n  </head>\n  <body>\n    <h1>Interactive Page</h1>\n    <script src="main.js"></script>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this connects a script -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>JavaScript</title>\n    <script>\n      console.log('Hello World!');\n    </script>\n  </head>\n  <body>\n    <h1>Check the console</h1>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<script>` tag adds JavaScript.",
      "External scripts use the `src` attribute.",
      "Inline scripts sit inside the tags.",
      "The `defer` attribute optimizes loading times."
    ]
  },
  "file-paths": {
    title: "HTML File Paths",
    description: "HTML file paths locate files within a website.",
    intro: "HTML needs file paths to link images, styles, and scripts. Absolute URLs point to external websites, while relative paths point to local files. A slash indicates a folder level.",
    syntax: {
      language: "html",
      code: `<!-- file path syntax -->\n<img src="/images/photo.jpg" alt="Photo">`
    },
    example: {
      language: "html",
      code: `<!-- this uses relative paths -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Paths</title>\n  </head>\n  <body>\n    <img src="assets/logo.png" alt="Logo">\n    <a href="../index.html">Go Back</a>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this uses relative paths -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Paths</title>\n  </head>\n  <body>\n    <img src="assets/logo.png" alt="Logo">\n    <a href="../index.html">Go Back</a>\n  </body>\n</html>`
    },
    keyPoints: [
      "Absolute URLs link to other domains.",
      "Relative paths point to local website files.",
      "The `../` syntax moves up one folder.",
      "The `/` syntax starts at the root folder."
    ]
  },
  head: {
    title: "HTML Head Element",
    description: "The HTML head element stores hidden metadata for the page.",
    intro: "HTML uses the `<head>` element to hold information about the document. Browsers do not display this information on the screen. Developers use it to link styles, set the title, and add SEO data.",
    syntax: {
      language: "html",
      code: `<!-- head syntax -->\n<head>\n  <meta charset="UTF-8">\n  <title>Document</title>\n</head>`
    },
    example: {
      language: "html",
      code: `<!-- this defines a head section -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Head Section</title>\n    <link rel="stylesheet" href="style.css">\n  </head>\n  <body>\n    <p>Content</p>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this defines a head section -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Head Section</title>\n    <link rel="stylesheet" href="style.css">\n  </head>\n  <body>\n    <p>Content</p>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<head>` element contains metadata.",
      "Metadata does not show on the page.",
      "The `<title>` tag is required.",
      "Meta tags improve search rankings."
    ]
  },
  layout: {
    title: "HTML Layout Elements",
    description: "HTML layout elements define the structure of a web page.",
    intro: "HTML uses semantic elements to divide a page into logical sections. Elements like `<header>`, `<nav>`, and `<footer>` describe their purpose clearly. This helps search engines and screen readers understand the page layout.",
    syntax: {
      language: "html",
      code: `<!-- layout syntax -->\n<header>Top bar</header>\n<main>Core content</main>\n<footer>Bottom bar</footer>`
    },
    example: {
      language: "html",
      code: `<!-- this builds a page layout -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Layout</title>\n  </head>\n  <body>\n    <header><h1>Site Logo</h1></header>\n    <nav><a href="#">Home</a></nav>\n    <main><p>Content here.</p></main>\n    <footer><p>Copyright 2026</p></footer>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this builds a page layout -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Layout</title>\n  </head>\n  <body>\n    <header><h1>Site Logo</h1></header>\n    <nav><a href="#">Home</a></nav>\n    <main><p>Content here.</p></main>\n    <footer><p>Copyright 2026</p></footer>\n  </body>\n</html>`
    },
    keyPoints: [
      "Semantic tags name page sections clearly.",
      "The `<header>` tag holds the logo and nav.",
      "The `<main>` tag contains the primary content.",
      "The `<footer>` tag sits at the bottom."
    ]
  },
  responsive: {
    title: "HTML Responsive Web Design",
    description: "HTML responsive design adjusts pages to fit any screen size.",
    intro: "HTML pages must look good on phones, tablets, and desktops. Developers use a special viewport meta tag to control the page scaling. CSS media queries then adjust the layout based on the screen width.",
    syntax: {
      language: "html",
      code: `<!-- responsive meta tag -->\n<meta name="viewport" content="width=device-width, initial-scale=1.0">`
    },
    example: {
      language: "html",
      code: `<!-- this sets the viewport -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Responsive</title>\n  </head>\n  <body>\n    <p>This text fits the screen.</p>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this sets the viewport -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Responsive</title>\n  </head>\n  <body>\n    <p>This text fits the screen.</p>\n  </body>\n</html>`
    },
    keyPoints: [
      "Responsive design adapts to all screens.",
      "The viewport tag controls mobile scaling.",
      "CSS handles the actual visual changes.",
      "Modern sites must be responsive."
    ]
  },
  computercode: {
    title: "HTML Computer Code",
    description: "HTML formats computer code differently from normal text.",
    intro: "HTML provides the `<code>` element to display code snippets. Browsers render this text in a monospace font. Developers use it to share programming examples on web pages.",
    syntax: {
      language: "html",
      code: `<!-- code syntax -->\n<code>const x = 10;</code>`
    },
    example: {
      language: "html",
      code: `<!-- this displays code -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Code Content</title>\n  </head>\n  <body>\n    <p>Use the <code>let</code> keyword.</p>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this displays code -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Code Content</title>\n  </head>\n  <body>\n    <p>Use the <code>let</code> keyword.</p>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<code>` element wraps code snippets.",
      "Browsers use monospace fonts for code.",
      "It displays code inline with text.",
      "The `<pre>` tag preserves code formatting."
    ]
  },
  semantics: {
    title: "HTML Semantics",
    description: "HTML semantic elements describe their meaning clearly.",
    intro: "Semantic HTML elements explain their purpose to the browser and developer. A `<form>` element clearly holds input fields, while a `<div>` means nothing on its own. Using semantic tags improves accessibility and search engine ranking.",
    syntax: {
      language: "html",
      code: `<!-- semantic tags -->\n<article>\n  <h2>Post Title</h2>\n</article>`
    },
    example: {
      language: "html",
      code: `<!-- this uses semantic tags -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Semantics</title>\n  </head>\n  <body>\n    <header><h1>Blog</h1></header>\n    <article><p>First post!</p></article>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this uses semantic tags -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Semantics</title>\n  </head>\n  <body>\n    <header><h1>Blog</h1></header>\n    <article><p>First post!</p></article>\n  </body>\n</html>`
    },
    keyPoints: [
      "Semantic tags describe content clearly.",
      "Non-semantic tags tell nothing about content.",
      "Screen readers rely on semantic structure.",
      "Search engines rank semantic pages higher."
    ]
  },
  "style-guide": {
    title: "HTML Style Guide",
    description: "HTML style guides ensure clean and readable code.",
    intro: "A consistent coding style keeps HTML readable. Developers follow rules like using lowercase tags and double-quoting attributes. Clean code prevents rendering errors across different browsers.",
    syntax: {
      language: "html",
      code: `<!-- NOTE: reference file does not cover style-guide syntax template fully — placeholder used -->\n<img src="pic.jpg" alt="Description">`
    },
    example: {
      language: "html",
      code: `<!-- this shows clean code -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Clean HTML</title>\n  </head>\n  <body>\n    <!-- Use lowercase and quotes -->\n    <a href="/home">Home</a>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this shows clean code -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Clean HTML</title>\n  </head>\n  <body>\n    <!-- Use lowercase and quotes -->\n    <a href="/home">Home</a>\n  </body>\n</html>`
    },
    keyPoints: [
      "Lowercase element names prevent confusion.",
      "Always close HTML tags properly.",
      "Quote attribute values with double quotes.",
      "Indent nested elements logically."
    ]
  },
  entities: {
    title: "HTML Entities",
    description: "HTML entities safely display reserved characters.",
    intro: "HTML reserves specific characters like angle brackets for tags. If you type a less-than sign, the browser expects an HTML element. Entities use special codes to render these characters safely on the screen.",
    syntax: {
      language: "html",
      code: `<!-- entity syntax -->\n<p>5 &lt; 10</p>`
    },
    example: {
      language: "html",
      code: `<!-- this uses entities -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Entities</title>\n  </head>\n  <body>\n    <p>The &lt;h1&gt; tag creates a heading.</p>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this uses entities -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Entities</title>\n  </head>\n  <body>\n    <p>The &lt;h1&gt; tag creates a heading.</p>\n  </body>\n</html>`
    },
    keyPoints: [
      "Entities display reserved HTML characters.",
      "An entity begins with an ampersand.",
      "An entity ends with a semicolon.",
      "Non-breaking spaces prevent line breaks."
    ]
  },
  symbols: {
    title: "HTML Symbols",
    description: "HTML symbols display mathematical and currency characters.",
    intro: "HTML uses entity codes to display symbols missing from standard keyboards. The browser reads the entity code and outputs the visual symbol. Developers use these for currencies, arrows, and math symbols.",
    syntax: {
      language: "html",
      code: `<!-- symbol syntax -->\n<p>&euro; 50</p>`
    },
    example: {
      language: "html",
      code: `<!-- this shows symbols -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Symbols</title>\n  </head>\n  <body>\n    <p>Price: &euro; 100</p>\n    <p>Direction: &rarr;</p>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this shows symbols -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Symbols</title>\n  </head>\n  <body>\n    <p>Price: &euro; 100</p>\n    <p>Direction: &rarr;</p>\n  </body>\n</html>`
    },
    keyPoints: [
      "Symbols render special visual characters.",
      "Entity names make code readable.",
      "Entity numbers cover all Unicode symbols.",
      "Fonts determine the final symbol design."
    ]
  },
  emojis: {
    title: "HTML Emojis",
    description: "HTML emojis display visual icons using UTF-8 characters.",
    intro: "Emojis behave like regular text characters rather than images. Browsers render them natively from the UTF-8 character set. Developers can copy and paste emojis directly into the HTML source code.",
    syntax: {
      language: "html",
      code: `<!-- emoji syntax -->\n<p>I love coding 🚀</p>`
    },
    example: {
      language: "html",
      code: `<!-- this displays an emoji -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Emojis</title>\n  </head>\n  <body>\n    <h1>Welcome back 👋</h1>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this displays an emoji -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Emojis</title>\n  </head>\n  <body>\n    <h1>Welcome back 👋</h1>\n  </body>\n</html>`
    },
    keyPoints: [
      "Emojis function as standard text characters.",
      "UTF-8 encoding supports all emojis.",
      "Browsers render emojis differently based on the OS.",
      "Emojis scale precisely like font sizes."
    ]
  },
  charset: {
    title: "HTML Charset",
    description: "HTML charsets ensure the browser displays text correctly.",
    intro: "A web browser needs to know the correct character set to render text properly. HTML5 recommends the UTF-8 character set. This modern set covers almost all languages and symbols globally.",
    syntax: {
      language: "html",
      code: `<!-- charset syntax -->\n<meta charset="UTF-8">`
    },
    example: {
      language: "html",
      code: `<!-- this sets the charset -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Charset</title>\n  </head>\n  <body>\n    <p>Text displays correctly.</p>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this sets the charset -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Charset</title>\n  </head>\n  <body>\n    <p>Text displays correctly.</p>\n  </body>\n</html>`
    },
    keyPoints: [
      "Charset defines the text encoding.",
      "UTF-8 handles all global characters.",
      "The meta tag sets the charset.",
      "Missing charsets cause broken text symbols."
    ]
  },
  "url-encode": {
    title: "HTML URL Encode",
    description: "HTML URL encoding translates unsafe characters in web addresses.",
    intro: "URLs only accept specific ASCII characters over the internet. URL encoding replaces unsafe characters with a percent sign and hexadecimal digits. Browsers automatically encode URLs when submitting forms.",
    syntax: {
      language: "html",
      code: `<!-- url encode syntax -->\n<a href="/search?q=hello%20world">Search</a>`
    },
    example: {
      language: "html",
      code: `<!-- this encodes a URL -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>URL Encode</title>\n  </head>\n  <body>\n    <a href="/login?user=john%20doe">Login John Doe</a>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this encodes a URL -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>URL Encode</title>\n  </head>\n  <body>\n    <a href="/login?user=john%20doe">Login John Doe</a>\n  </body>\n</html>`
    },
    keyPoints: [
      "URLs require safe ASCII characters.",
      "Encoding replaces spaces with `%20`.",
      "Forms encode data upon submission.",
      "Unsafe symbols break URL navigation."
    ]
  },
  "html-vs-xhtml": {
    title: "HTML vs XHTML",
    description: "XHTML enforces strict rules on traditional HTML.",
    intro: "XHTML is a stricter version of HTML based on XML. It forces developers to close every tag and nest elements perfectly. Modern web development prefers HTML5 due to its flexibility and rich features.",
    syntax: {
      language: "html",
      code: `<!-- xhtml strictness -->\n<br />`
    },
    example: {
      language: "html",
      code: `<!-- this shows strict XHTML -->\n<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n  <head>\n    <meta charset="UTF-8" />\n    <title>XHTML</title>\n  </head>\n  <body>\n    <p>All tags must close.</p>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this shows strict XHTML -->\n<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n  <head>\n    <meta charset="UTF-8" />\n    <title>XHTML</title>\n  </head>\n  <body>\n    <p>All tags must close.</p>\n  </body>\n</html>`
    },
    keyPoints: [
      "XHTML requires perfectly closed tags.",
      "HTML5 allows more relaxed syntax.",
      "XHTML demands lowercase tag names.",
      "HTML5 replaced XHTML as the standard."
    ]
  },
  forms: {
    title: "HTML Forms",
    description: "HTML forms collect user input securely.",
    intro: "HTML uses the `<form>` element to gather data from the user. It wraps various input fields like text boxes and checkboxes. The browser sends this collected data to a server when the user clicks submit.",
    syntax: {
      language: "html",
      code: `<!-- form syntax -->\n<form action="/submit" method="POST">\n  <input type="text" name="user">\n</form>`
    },
    example: {
      language: "html",
      code: `<!-- this creates a form -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Forms</title>\n  </head>\n  <body>\n    <form action="/login" method="POST">\n      <label for="username">Name:</label>\n      <input type="text" id="username" name="username">\n      <button type="submit">Submit</button>\n    </form>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this creates a form -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Forms</title>\n  </head>\n  <body>\n    <form action="/login" method="POST">\n      <label for="username">Name:</label>\n      <input type="text" id="username" name="username">\n      <button type="submit">Submit</button>\n    </form>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<form>` tag wraps input elements.",
      "Forms collect data for processing.",
      "The `action` attribute sets the destination URL.",
      "The `method` attribute defines the HTTP request."
    ]
  },
  "form-attributes": {
    title: "HTML Form Attributes",
    description: "HTML form attributes control how forms submit data.",
    intro: "HTML forms require attributes to know where and how to send data. The `action` attribute specifies the server endpoint. The `method` attribute determines if the data is sent securely or appended to the URL.",
    syntax: {
      language: "html",
      code: `<!-- form attributes -->\n<form action="/save" method="POST" target="_blank"></form>`
    },
    example: {
      language: "html",
      code: `<!-- this uses form attributes -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Form Attributes</title>\n  </head>\n  <body>\n    <form action="/search" method="GET" autocomplete="off">\n      <input type="text" name="q">\n      <button type="submit">Search</button>\n    </form>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this uses form attributes -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Form Attributes</title>\n  </head>\n  <body>\n    <form action="/search" method="GET" autocomplete="off">\n      <input type="text" name="q">\n      <button type="submit">Search</button>\n    </form>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `action` attribute defines the URL endpoint.",
      "The `method` attribute specifies POST or GET.",
      "POST secures sensitive data submissions.",
      "GET attaches data to the URL visibly."
    ]
  },
  "form-elements": {
    title: "HTML Form Elements",
    description: "HTML form elements create different types of user inputs.",
    intro: "HTML forms house various elements to capture specific data types. The `<select>` tag creates dropdown menus, while `<textarea>` allows multi-line text. The `<label>` tag attaches descriptive text to these inputs.",
    syntax: {
      language: "html",
      code: `<!-- form elements -->\n<select name="cars">\n  <option value="volvo">Volvo</option>\n</select>`
    },
    example: {
      language: "html",
      code: `<!-- this uses form elements -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Form Elements</title>\n  </head>\n  <body>\n    <form>\n      <label for="bio">Bio:</label>\n      <textarea id="bio" name="bio"></textarea>\n    </form>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this uses form elements -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Form Elements</title>\n  </head>\n  <body>\n    <form>\n      <label for="bio">Bio:</label>\n      <textarea id="bio" name="bio"></textarea>\n    </form>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<label>` tag improves accessibility.",
      "The `<textarea>` allows multi-line input.",
      "The `<select>` creates dropdown menus.",
      "The `<option>` defines dropdown choices."
    ]
  },
  "input-types": {
    title: "HTML Input Types",
    description: "HTML input types change how the input field behaves.",
    intro: "The HTML `<input>` element transforms based on its `type` attribute. A `password` type hides text, while an `email` type validates the format. Developers use these types to ensure correct data entry.",
    syntax: {
      language: "html",
      code: `<!-- input types -->\n<input type="password" name="pass">\n<input type="date" name="day">`
    },
    example: {
      language: "html",
      code: `<!-- this uses input types -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Input Types</title>\n  </head>\n  <body>\n    <form>\n      <input type="email" name="email" required>\n      <input type="checkbox" name="agree">\n    </form>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this uses input types -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Input Types</title>\n  </head>\n  <body>\n    <form>\n      <input type="email" name="email" required>\n      <input type="checkbox" name="agree">\n    </form>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `type` attribute changes input behavior.",
      "The `email` type requires a valid address.",
      "The `password` type masks typed characters.",
      "The `radio` type limits to one selection."
    ]
  },
  "input-attributes": {
    title: "HTML Input Attributes",
    description: "HTML input attributes enforce rules and add hints to fields.",
    intro: "HTML input fields accept attributes that dictate how they behave. The `placeholder` attribute provides a hint inside an empty field. The `required` attribute stops the form from submitting until the field is filled.",
    syntax: {
      language: "html",
      code: `<!-- input attributes -->\n<input type="text" placeholder="Name" required maxlength="10">`
    },
    example: {
      language: "html",
      code: `<!-- this applies input attributes -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Input Attributes</title>\n  </head>\n  <body>\n    <form>\n      <input type="text" name="user" value="John" readonly>\n      <input type="number" min="1" max="5">\n    </form>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this applies input attributes -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Input Attributes</title>\n  </head>\n  <body>\n    <form>\n      <input type="text" name="user" value="John" readonly>\n      <input type="number" min="1" max="5">\n    </form>\n  </body>\n</html>`
    },
    keyPoints: [
      "Attributes configure input restrictions.",
      "The `placeholder` shows temporary hint text.",
      "The `required` prevents empty submissions.",
      "The `readonly` locks the input value."
    ]
  },
  canvas: {
    title: "HTML Canvas",
    description: "HTML canvas draws dynamic graphics on a web page.",
    intro: "HTML provides the `<canvas>` element as a blank container for graphics. Developers use JavaScript to draw shapes, lines, and text inside this container. It works well for interactive games and real-time animations.",
    syntax: {
      language: "html",
      code: `<!-- canvas syntax -->\n<canvas id="game" width="400" height="400"></canvas>`
    },
    example: {
      language: "html",
      code: `<!-- this creates a canvas -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Canvas</title>\n  </head>\n  <body>\n    <canvas id="board" width="200" height="100" style="border:1px solid black;"></canvas>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this creates a canvas -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Canvas</title>\n  </head>\n  <body>\n    <canvas id="board" width="200" height="100" style="border:1px solid black;"></canvas>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<canvas>` tag acts as a container.",
      "JavaScript handles all the actual drawing.",
      "Canvas renders pixels directly to the screen.",
      "It supports 2D and 3D graphics."
    ]
  },
  svg: {
    title: "HTML SVG",
    description: "HTML SVG renders scalable vector graphics directly in the browser.",
    intro: "HTML embeds SVG code to draw graphics using math rather than pixels. These images scale infinitely without losing quality. Developers use SVG for crisp logos, icons, and simple illustrations.",
    syntax: {
      language: "html",
      code: `<!-- svg syntax -->\n<svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" />\n</svg>`
    },
    example: {
      language: "html",
      code: `<!-- this draws an SVG shape -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>SVG</title>\n  </head>\n  <body>\n    <svg width="100" height="100">\n      <rect width="100" height="100" fill="blue" />\n    </svg>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this draws an SVG shape -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>SVG</title>\n  </head>\n  <body>\n    <svg width="100" height="100">\n      <rect width="100" height="100" fill="blue" />\n    </svg>\n  </body>\n</html>`
    },
    keyPoints: [
      "SVG uses math to draw crisp shapes.",
      "Vectors never lose quality when zoomed.",
      "The code lives directly inside the HTML file.",
      "CSS and JavaScript can animate SVG parts."
    ]
  },
  media: {
    title: "HTML Media",
    description: "HTML media elements embed audio and video into web pages.",
    intro: "Modern HTML supports rich media without external plugins. Developers embed video clips, songs, and background animations natively. Browsers support different file formats like MP4 and WebM.",
    syntax: {
      language: "html",
      code: `<!-- NOTE: reference file does not cover media syntax template fully — placeholder used -->\n<video src="clip.mp4"></video>`
    },
    example: {
      language: "html",
      code: `<!-- this shows media options -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Media</title>\n  </head>\n  <body>\n    <h2>Multimedia</h2>\n    <p>We use video and audio tags for this.</p>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this shows media options -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Media</title>\n  </head>\n  <body>\n    <h2>Multimedia</h2>\n    <p>We use video and audio tags for this.</p>\n  </body>\n</html>`
    },
    keyPoints: [
      "HTML5 plays media without flash plugins.",
      "MP4 dominates web video formats.",
      "MP3 dominates web audio formats.",
      "File sizes impact page loading speeds."
    ]
  },
  video: {
    title: "HTML Video",
    description: "HTML video tags embed playable movies onto the page.",
    intro: "HTML uses the `<video>` element to play motion pictures. Developers can provide multiple source files to support different browsers. The `controls` attribute adds a play button and volume slider for the user.",
    syntax: {
      language: "html",
      code: `<!-- video syntax -->\n<video controls>\n  <source src="vid.mp4" type="video/mp4">\n</video>`
    },
    example: {
      language: "html",
      code: `<!-- this embeds a video -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Video</title>\n  </head>\n  <body>\n    <video width="320" height="240" controls>\n      <source src="movie.mp4" type="video/mp4">\n    </video>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this embeds a video -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Video</title>\n  </head>\n  <body>\n    <video width="320" height="240" controls>\n      <source src="movie.mp4" type="video/mp4">\n    </video>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<video>` tag plays visual media natively.",
      "The `controls` attribute enables user interaction.",
      "The `autoplay` attribute starts playback immediately.",
      "Multiple `<source>` tags ensure browser compatibility."
    ]
  },
  audio: {
    title: "HTML Audio",
    description: "HTML audio tags embed playable sound files onto the page.",
    intro: "HTML uses the `<audio>` element to play music or sound effects. Like video, developers provide source files and optional controls. Background music generally frustrates users, so manual controls are preferred.",
    syntax: {
      language: "html",
      code: `<!-- audio syntax -->\n<audio controls>\n  <source src="song.mp3" type="audio/mpeg">\n</audio>`
    },
    example: {
      language: "html",
      code: `<!-- this embeds audio -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Audio</title>\n  </head>\n  <body>\n    <audio controls>\n      <source src="music.mp3" type="audio/mpeg">\n    </audio>\n  </body>\n</html>`
    },
    tryItYourself: {
      html: `<!-- this embeds audio -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Audio</title>\n  </head>\n  <body>\n    <audio controls>\n      <source src="music.mp3" type="audio/mpeg">\n    </audio>\n  </body>\n</html>`
    },
    keyPoints: [
      "The `<audio>` tag plays sound natively.",
      "The `controls` attribute adds a play button.",
      "The `loop` attribute restarts the track automatically.",
      "MP3 files offer the best cross-browser support."
    ]
  }
};
