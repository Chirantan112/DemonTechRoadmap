import { TopicContent } from './contentMap';

export const htmlData: Record<string, TopicContent> = {
  introduction: {
    title: "HTML Introduction",
    description: "HTML is the standard markup language for creating Web pages.",
    intro: "HTML stands for Hyper Text Markup Language. It describes the structure of a Web page using markup. HTML elements are the building blocks of HTML pages, represented by tags.",
    syntax: {
      language: "html",
      code: `<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n\n</body>\n</html>`
    },
    example: {
      language: "html",
      code: `<h1>Hello World</h1>\n<p>Welcome to HTML.</p>`
    },
    tryItYourself: {
      html: `<h1>Hello World</h1>\n<p>Modify this text.</p>`
    },
    keyPoints: [
      "The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document.",
      "The `<html>` element is the root element of an HTML page.",
      "The `<head>` element contains meta information about the HTML page."
    ]
  },
  editors: {
    title: "HTML Editors",
    description: "Write HTML using Notepad, TextEdit, or VS Code.",
    intro: "Web pages can be created and modified by using professional HTML editors like VS Code, WebStorm, or Sublime Text. However, for learning HTML, a simple text editor like Notepad (PC) or TextEdit (Mac) works fine.",
    keyPoints: [
      "Step 1: Open your text editor.",
      "Step 2: Write some HTML.",
      "Step 3: Save the HTML page as index.html.",
      "Step 4: View the HTML page in your browser."
    ]
  },
  basic: {
    title: "HTML Basic Examples",
    description: "Basic HTML examples including documents, headings, paragraphs, and links.",
    intro: "All HTML documents must start with a document type declaration: `<!DOCTYPE html>`. The HTML document itself begins with `<html>` and ends with `</html>`. The visible part of the HTML document is between `<body>` and `</body>`.",
    syntax: {
      language: "html",
      code: `<body>\n  <h2>Subheading</h2>\n  <a href="https://example.com">This is a link</a>\n</body>`
    },
    tryItYourself: {
      html: `<h1>Heading 1</h1>\n<p>Paragraph</p>\n<a href="#">Link</a>`
    }
  },
  elements: {
    title: "HTML Elements",
    description: "An HTML element is defined by a start tag, some content, and an end tag.",
    intro: "The HTML element is everything from the start tag to the end tag. Some HTML elements have no content (like the `<br>` element) and are called empty elements.",
    syntax: {
      language: "html",
      code: `<tagname>Content goes here...</tagname>`
    },
    keyPoints: [
      "HTML elements can be nested.",
      "Never skip the end tag.",
      "Empty HTML elements are not closed."
    ]
  },
  attributes: {
    title: "HTML Attributes",
    description: "Attributes provide additional information about HTML elements.",
    intro: "All HTML elements can have attributes. They provide additional information about elements. Attributes are always specified in the start tag and usually come in name/value pairs like: name=\"value\".",
    example: {
      language: "html",
      code: `<a href="https://demontech.vercel.app">DemonTech</a>\n<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">`
    },
    referenceTable: {
      headers: ["Attribute", "Description"],
      rows: [
        ["href", "Specifies the URL of the page the link goes to"],
        ["src", "Specifies the path to the image to be displayed"],
        ["alt", "Specifies an alternate text for an image"],
        ["style", "Specifies an inline CSS style for an element"]
      ]
    }
  },
  headings: {
    title: "HTML Headings",
    description: "HTML headings are defined with the <h1> to <h6> tags.",
    intro: "HTML headings are titles or subtitles that you want to display on a webpage. `<h1>` defines the most important heading. `<h6>` defines the least important heading.",
    syntax: {
      language: "html",
      code: `<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>`
    },
    tryItYourself: {
      html: `<h1>Main Title</h1>\n<h2>Subtitle</h2>\n<p>Content goes here.</p>`
    },
    keyPoints: [
      "Search engines use the headings to index the structure and content of your web pages.",
      "Use HTML headings for headings only. Don't use headings to make text BIG or bold."
    ]
  },
  paragraphs: {
    title: "HTML Paragraphs",
    description: "The HTML <p> element defines a paragraph.",
    intro: "A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.",
    syntax: {
      language: "html",
      code: `<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>`
    },
    keyPoints: [
      "You cannot be sure how HTML will be displayed with large or small screens.",
      "Extra spaces and extra lines inside a paragraph will be removed by the browser when rendered."
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
    description: "Formatting elements were designed to display special types of text.",
    intro: "HTML contains several elements for defining text with a special meaning, like bold or italic.",
    example: {
      language: "html",
      code: `<b>Bold text</b>\n<i>Italic text</i>\n<mark>Marked text</mark>\n<del>Deleted text</del>\n<ins>Inserted text</ins>\n<sub>Subscript</sub>\n<sup>Superscript</sup>`
    },
    tryItYourself: {
      html: `<p>This is <b>bold</b> and this is <i>italic</i>.</p>`
    }
  },
  quotations: {
    title: "HTML Quotation Elements",
    description: "HTML elements for quoting and citing.",
    intro: "HTML provides specific elements for short quotes, block quotes, abbreviations, and citations.",
    syntax: {
      language: "html",
      code: `<blockquote cite="http://www.worldwildlife.org/who/index.html">\n  For 50 years, WWF has been protecting the future of nature.\n</blockquote>`
    },
    referenceTable: {
      headers: ["Tag", "Description"],
      rows: [
        ["&lt;blockquote&gt;", "Defines a section that is quoted from another source"],
        ["&lt;q&gt;", "Defines a short inline quotation"],
        ["&lt;abbr&gt;", "Defines an abbreviation or acronym"]
      ]
    }
  },
  comments: {
    title: "HTML Comments",
    description: "HTML comments are not displayed in the browser.",
    intro: "You can add comments to your HTML source by using the following syntax. Comments are ignored by the browser, but they can help document your HTML source code.",
    syntax: {
      language: "html",
      code: `<!-- Write your comments here -->`
    },
    tryItYourself: {
      html: `<!-- This is a comment -->\n<p>This is a paragraph.</p>\n<!-- Comments can also span\nmultiple lines -->`
    }
  },
  colors: {
    title: "HTML Colors",
    description: "HTML colors are specified with predefined color names, or RGB, HEX, HSL.",
    intro: "In HTML, a color can be specified by using a color name (like \"red\"), an RGB value (like \"rgb(255, 0, 0)\"), or a HEX value (like \"#ff0000\").",
    example: {
      language: "html",
      code: `<h1 style="background-color:Tomato;">Tomato</h1>\n<h1 style="background-color:DodgerBlue;">DodgerBlue</h1>\n<h1 style="color:#ff0000;">Hex Red</h1>`
    }
  },
  css: {
    title: "HTML CSS",
    description: "CSS is used to format the layout of a webpage.",
    intro: "CSS stands for Cascading Style Sheets. CSS can be added to HTML documents in 3 ways: Inline (using the style attribute), Internal (using a `<style>` element in the `<head>`), and External (using a `<link>` element).",
    syntax: {
      language: "html",
      code: `<!-- External CSS -->\n<link rel="stylesheet" href="styles.css">`
    },
    keyPoints: [
      "External CSS is the most common and practical way to style HTML."
    ]
  },
  links: {
    title: "HTML Links",
    description: "Links are found in nearly all web pages. Links allow users to click their way from page to page.",
    intro: "HTML links are hyperlinks. You can click on a link and jump to another document. The HTML `<a>` tag defines a hyperlink.",
    syntax: {
      language: "html",
      code: `<a href="url">link text</a>`
    },
    tryItYourself: {
      html: `<a href="https://example.com" target="_blank">Visit Example.com (opens in new tab)</a>`
    },
    keyPoints: [
      "The `href` attribute specifies the destination address.",
      "The `target` attribute specifies where to open the linked document (e.g. `_blank` for a new window)."
    ]
  },
  images: {
    title: "HTML Images",
    description: "Images can improve the design and the appearance of a web page.",
    intro: "In HTML, images are defined with the `<img>` tag. The `<img>` tag is empty, it contains attributes only, and does not have a closing tag.",
    syntax: {
      language: "html",
      code: `<img src="url" alt="alternatetext">`
    },
    tryItYourself: {
      html: `<img src="https://via.placeholder.com/150" alt="Placeholder image" width="150" height="150">`
    },
    keyPoints: [
      "The `src` attribute specifies the path to the image.",
      "The `alt` attribute specifies an alternate text for the image, if the image for some reason cannot be displayed."
    ]
  },
  favicon: {
    title: "HTML Favicon",
    description: "A favicon is a small image displayed next to the page title in the browser tab.",
    intro: "To add a favicon to your website, you use the `<link>` tag inside the `<head>` element. The image file should ideally be a .ico, .png, or .svg file.",
    syntax: {
      language: "html",
      code: `<head>\n  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">\n</head>`
    }
  },
  "page-title": {
    title: "HTML Page Title",
    description: "The <title> element defines the title of the document.",
    intro: "The `<title>` element must be text-only, and it is shown in the browser's title bar or in the page's tab. It is very important for Search Engine Optimization (SEO).",
    syntax: {
      language: "html",
      code: `<head>\n  <title>HTML Page Title</title>\n</head>`
    }
  },
  tables: {
    title: "HTML Tables",
    description: "HTML tables allow web developers to arrange data into rows and columns.",
    intro: "An HTML table consists of one `<table>` element and one or more `<tr>`, `<th>`, and `<td>` elements.",
    example: {
      language: "html",
      code: `<table>\n  <tr>\n    <th>Company</th>\n    <th>Contact</th>\n  </tr>\n  <tr>\n    <td>Alfreds Futterkiste</td>\n    <td>Maria Anders</td>\n  </tr>\n</table>`
    },
    tryItYourself: {
      html: `<table border="1">\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>John</td><td>25</td></tr>\n</table>`
    }
  },
  lists: {
    title: "HTML Lists",
    description: "HTML lists allow web developers to group a set of related items in lists.",
    intro: "An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag. An ordered list starts with the `<ol>` tag.",
    syntax: {
      language: "html",
      code: `<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n</ul>\n\n<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>`
    },
    tryItYourself: {
      html: `<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n</ul>`
    }
  },
  "block-inline": {
    title: "HTML Block and Inline",
    description: "Every HTML element has a default display value, depending on what type of element it is.",
    intro: "There are two display values: block and inline. A block-level element always starts on a new line and takes up the full width available. An inline element does not start on a new line and only takes up as much width as necessary.",
    keyPoints: [
      "Block examples: `<div>`, `<h1>` - `<h6>`, `<p>`, `<ul>`, `<li>`",
      "Inline examples: `<span>`, `<a>`, `<img>`, `<strong>`"
    ]
  },
  div: {
    title: "HTML Div",
    description: "The <div> element is often used as a container for other HTML elements.",
    intro: "The `<div>` element has no special meaning at all. It represents its children. It is easily styled by using the class or id attribute.",
    syntax: {
      language: "html",
      code: `<div class="container">\n  <h2>Heading</h2>\n  <p>Paragraph</p>\n</div>`
    }
  },
  classes: {
    title: "HTML Classes",
    description: "The HTML class attribute is used to specify a class for an HTML element.",
    intro: "Multiple HTML elements can share the same class. The class attribute is often used to point to a class name in a style sheet.",
    example: {
      language: "html",
      code: `<style>\n.city {\n  background-color: tomato;\n  color: white;\n}\n</style>\n\n<h2 class="city">Paris</h2>\n<p class="city">Paris is the capital of France.</p>`
    }
  },
  id: {
    title: "HTML Id",
    description: "The HTML id attribute is used to specify a unique id for an HTML element.",
    intro: "You cannot have more than one element with the same id in an HTML document. The id attribute is used to point to a specific style declaration in a style sheet or used by JavaScript to access the element.",
    example: {
      language: "html",
      code: `<h1 id="myHeader">My Header</h1>`
    }
  },
  buttons: {
    title: "HTML Buttons",
    description: "The <button> element represents a clickable button.",
    intro: "Inside a `<button>` element you can put content, like text or images. This is the difference between this element and buttons created with the `<input>` element.",
    syntax: {
      language: "html",
      code: `<button type="button" onclick="alert('Hello World!')">Click Me!</button>`
    },
    tryItYourself: {
      html: `<button type="button">Submit</button>`
    }
  },
  iframes: {
    title: "HTML Iframes",
    description: "An HTML iframe is used to display a web page within a web page.",
    intro: "The `<iframe>` tag specifies an inline frame. An inline frame is used to embed another document within the current HTML document.",
    syntax: {
      language: "html",
      code: `<iframe src="https://www.w3schools.com" width="100%" height="300" title="W3Schools Free Online Web Tutorials"></iframe>`
    }
  },
  javascript: {
    title: "HTML JavaScript",
    description: "JavaScript makes HTML pages more dynamic and interactive.",
    intro: "The HTML `<script>` tag is used to define a client-side script (JavaScript). The `<script>` element either contains scripting statements, or it points to an external script file through the src attribute.",
    syntax: {
      language: "html",
      code: `<script>\ndocument.getElementById("demo").innerHTML = "Hello JavaScript!";\n</script>`
    }
  },
  "file-paths": {
    title: "HTML File Paths",
    description: "A file path describes the location of a file in a web site's folder structure.",
    intro: "File paths are used when linking to external files, like Web pages, Images, Style sheets, or JavaScripts. An absolute file path is the full URL. A relative file path points to a file relative to the current page.",
    referenceTable: {
      headers: ["Path", "Description"],
      rows: [
        ["`<img src=\"picture.jpg\">`", "The picture.jpg file is located in the same folder as the current page"],
        ["`<img src=\"images/picture.jpg\">`", "The picture.jpg file is located in the images folder in the current folder"],
        ["`<img src=\"/images/picture.jpg\">`", "The picture.jpg file is located in the images folder at the root of the current web"]
      ]
    }
  },
  head: {
    title: "HTML Head",
    description: "The HTML <head> element is a container for metadata.",
    intro: "The `<head>` element is a container for the following elements: `<title>`, `<style>`, `<meta>`, `<link>`, `<script>`, and `<base>`.",
    keyPoints: [
      "Metadata is data about the HTML document. Metadata is not displayed.",
      "Metadata typically define the document title, character set, styles, scripts, and other meta information."
    ]
  },
  layout: {
    title: "HTML Layout Elements",
    description: "Websites often display content in multiple columns, like a magazine or newspaper.",
    intro: "HTML has several semantic elements that define the different parts of a web page: `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<details>`, `<summary>`."
  },
  responsive: {
    title: "HTML Responsive Web Design",
    description: "Responsive web design is about creating web pages that look good on all devices.",
    intro: "Responsive web design will automatically adjust for different screen sizes and viewports. To create a responsive website, add the following `<meta>` tag to all your web pages.",
    syntax: {
      language: "html",
      code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
    }
  },
  computercode: {
    title: "HTML Computer Code Elements",
    description: "HTML contains several elements for defining user input and computer code.",
    intro: "Elements like `<code>`, `<kbd>`, `<samp>`, `<var>`, and `<pre>` are used to display computer code or user input with fixed letter size and spacing.",
    example: {
      language: "html",
      code: `<code>\nx = 5;\ny = 6;\nz = x + y;\n</code>`
    }
  },
  semantics: {
    title: "HTML Semantics",
    description: "Semantic HTML elements clearly describe their meaning in a human- and machine-readable way.",
    intro: "Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content. Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.",
    keyPoints: [
      "Semantic elements help search engines and screen readers understand your page."
    ]
  },
  "style-guide": {
    title: "HTML Style Guide",
    description: "Consistent coding style makes HTML readable and easier to maintain.",
    intro: "Always declare document type. Use lowercase element names. Close all HTML elements. Use lowercase attribute names. Always quote attribute values. Always specify alt, width, and height for images."
  },
  entities: {
    title: "HTML Entities",
    description: "Some characters are reserved in HTML.",
    intro: "If you use the less than (<) or greater than (>) signs in your text, the browser might mix them with tags. Character entities are used to display reserved characters in HTML.",
    referenceTable: {
      headers: ["Result", "Description", "Entity Name", "Entity Number"],
      rows: [
        ["&nbsp;", "non-breaking space", "&amp;nbsp;", "&amp;#160;"],
        ["&lt;", "less than", "&amp;lt;", "&amp;#60;"],
        ["&gt;", "greater than", "&amp;gt;", "&amp;#62;"],
        ["&amp;", "ampersand", "&amp;amp;", "&amp;#38;"],
        ["&quot;", "double quotation mark", "&amp;quot;", "&amp;#34;"]
      ]
    }
  },
  symbols: {
    title: "HTML Symbols",
    description: "Many mathematical, technical, and currency symbols, are not present on a normal keyboard.",
    intro: "To add such symbols to an HTML page, you can use an HTML entity name or number. If no entity name exists, you can use an entity number.",
    example: {
      language: "html",
      code: `<p>I will display &euro;</p>\n<p>I will display &#8364;</p>`
    }
  },
  emojis: {
    title: "HTML Emojis",
    description: "Emojis are characters from the UTF-8 character set.",
    intro: "Emojis look like images, or icons, but they are not. They are letters (characters) from the UTF-8 (Unicode) character set.",
    syntax: {
      language: "html",
      code: `<meta charset="UTF-8">\n<p>I will display &#128512;</p>`
    }
  },
  charset: {
    title: "HTML Charset",
    description: "To display an HTML page correctly, a web browser must know the character set used.",
    intro: "The HTML5 specification encourages web developers to use the UTF-8 character set, which covers almost all of the characters and symbols in the world.",
    syntax: {
      language: "html",
      code: `<meta charset="UTF-8">`
    }
  },
  "url-encode": {
    title: "HTML URL Encode",
    description: "URLs can only be sent over the Internet using the ASCII character-set.",
    intro: "If a URL contains characters outside the ASCII set, the URL has to be converted. URL encoding converts non-ASCII characters into a format that can be transmitted over the Internet. URL encoding replaces unsafe ASCII characters with a \"%\" followed by two hexadecimal digits.",
    keyPoints: [
      "Spaces are typically replaced with a plus (+) sign or with %20."
    ]
  },
  "html-vs-xhtml": {
    title: "HTML vs XHTML",
    description: "XHTML is a stricter, more XML-based version of HTML.",
    intro: "XHTML stands for EXtensible HyperText Markup Language. It is almost identical to HTML but is stricter. All elements must have an end tag, and all elements must be nested correctly.",
    keyPoints: [
      "HTML5 is generally preferred over XHTML today due to its simplicity and rich features."
    ]
  },
  forms: {
    title: "HTML Forms",
    description: "An HTML form is used to collect user input.",
    intro: "The `<form>` element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.",
    syntax: {
      language: "html",
      code: `<form action="/action_page.php">\n  <label for="fname">First name:</label><br>\n  <input type="text" id="fname" name="fname" value="John"><br>\n  <input type="submit" value="Submit">\n</form>`
    },
    tryItYourself: {
      html: `<form>\n  <input type="text" placeholder="Username">\n  <button type="submit">Go</button>\n</form>`
    }
  },
  "form-attributes": {
    title: "HTML Form Attributes",
    description: "The <form> element can have several attributes.",
    intro: "The `action` attribute defines the action to be performed when the form is submitted. The `method` attribute specifies the HTTP method to be used when submitting the form data (GET or POST).",
    example: {
      language: "html",
      code: `<form action="/submit" method="POST" target="_blank">\n  ...\n</form>`
    }
  },
  "form-elements": {
    title: "HTML Form Elements",
    description: "The <form> element can contain one or more of the following form elements.",
    intro: "Form elements include `<input>`, `<label>`, `<select>`, `<textarea>`, `<button>`, `<fieldset>`, `<legend>`, `<datalist>`, `<output>`, `<option>`, and `<optgroup>`.",
    example: {
      language: "html",
      code: `<select id="cars" name="cars">\n  <option value="volvo">Volvo</option>\n  <option value="saab">Saab</option>\n</select>`
    }
  },
  "input-types": {
    title: "HTML Input Types",
    description: "The <input> element can be displayed in several ways, depending on the type attribute.",
    intro: "Here are the different input types you can use in HTML: `<input type=\"button\">`, `<input type=\"checkbox\">`, `<input type=\"color\">`, `<input type=\"date\">`, `<input type=\"email\">`, `<input type=\"file\">`, `<input type=\"password\">`, `<input type=\"radio\">`, `<input type=\"text\">`, etc.",
    tryItYourself: {
      html: `<input type="color">\n<input type="date">\n<input type="range" min="1" max="100">`
    }
  },
  "input-attributes": {
    title: "HTML Input Attributes",
    description: "Input elements can have many attributes that change their behavior.",
    intro: "Common input attributes include `value`, `readonly`, `disabled`, `size`, `maxlength`, `min`, `max`, `multiple`, `pattern`, `placeholder`, `required`, `step`, and `autofocus`.",
    example: {
      language: "html",
      code: `<input type="text" id="fname" name="fname" placeholder="First Name" required>`
    }
  },
  canvas: {
    title: "HTML Canvas",
    description: "The HTML <canvas> element is used to draw graphics, on the fly, via JavaScript.",
    intro: "The `<canvas>` element is only a container for graphics. You must use JavaScript to actually draw the graphics. Canvas has several methods for drawing paths, boxes, circles, text, and adding images.",
    syntax: {
      language: "html",
      code: `<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">\n</canvas>`
    }
  },
  svg: {
    title: "HTML SVG",
    description: "SVG stands for Scalable Vector Graphics.",
    intro: "SVG is used to define graphics for the Web. SVG graphics do NOT lose any quality if they are zoomed or resized.",
    example: {
      language: "html",
      code: `<svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />\n</svg>`
    }
  },
  media: {
    title: "HTML Media",
    description: "Multimedia on the web is sound, music, videos, movies, and animations.",
    intro: "Web browsers have supported multimedia in many formats. Today, modern HTML uses the `<video>` and `<audio>` elements.",
    keyPoints: [
      "The most common video formats are MP4, WebM, and Ogg.",
      "The most common audio formats are MP3, WAV, and Ogg."
    ]
  },
  video: {
    title: "HTML Video",
    description: "The HTML <video> element is used to show a video on a web page.",
    intro: "The `<video>` element supports MP4, WebM, and Ogg. You can add controls so users can play, pause, and adjust volume.",
    syntax: {
      language: "html",
      code: `<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4">\n  Your browser does not support the video tag.\n</video>`
    }
  },
  audio: {
    title: "HTML Audio",
    description: "The HTML <audio> element is used to play an audio file on a web page.",
    intro: "The `<audio>` element supports MP3, WAV, and Ogg formats. It can be controlled with the `controls` attribute.",
    syntax: {
      language: "html",
      code: `<audio controls>\n  <source src="horse.ogg" type="audio/ogg">\n  <source src="horse.mp3" type="audio/mpeg">\n  Your browser does not support the audio element.\n</audio>`
    }
  }
};
