import { TopicContent } from './contentMap';

export const cssData: Record<string, TopicContent> = {
  introduction: {
    title: "CSS Introduction",
    description: "CSS controls the visual design of an HTML document.",
    intro: "CSS determines how HTML elements look on the screen. It stands for Cascading Style Sheets. Developers use CSS to set colors, fonts, layouts, and animations across entire websites.",
    keyPoints: [
      "CSS saves time by styling multiple pages at once.",
      "External stylesheets live in separate CSS files.",
      "It separates content (HTML) from design (CSS).",
      "CSS handles layouts for different screen sizes."
    ]
  },
  syntax: {
    title: "CSS Syntax",
    description: "CSS syntax connects styling rules to HTML elements.",
    intro: "A CSS rule needs a selector and a declaration block. The selector targets the specific HTML element. The declaration block holds properties and values to style that element.",
    syntax: {
      language: "css",
      code: `/* css syntax */\nselector {\n  property: value;\n}`
    },
    tryItYourself: {
      html: `<!-- this links to the css -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>CSS Syntax</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n    <p>This text uses CSS.</p>\n  </body>\n</html>`,
      css: `/* this styles the elements */\nh1 {\n  color: blue;\n  text-align: center;\n}\n\np {\n  font-size: 20px;\n}`
    },
    keyPoints: [
      "The selector targets the HTML tag.",
      "Curly braces surround the declaration block.",
      "A colon separates properties and values.",
      "Every declaration ends with a semicolon."
    ]
  },
  selectors: {
    title: "CSS Selectors",
    description: "CSS selectors target the HTML elements you want to style.",
    intro: "CSS uses selectors to find elements on the page. You can target elements by their tag name, class, or id. This allows developers to style specific sections without affecting the entire site.",
    example: {
      language: "css",
      code: `/* this shows different selectors */\np {\n  color: red;\n}\n\n#special {\n  color: blue;\n}\n\n.highlight {\n  color: yellow;\n}`
    },
    keyPoints: [
      "Element selectors target specific HTML tags.",
      "ID selectors target one unique element.",
      "Class selectors target a group of elements.",
      "The asterisk targets every element on the page."
    ]
  },
  "how-to": {
    title: "CSS How To",
    description: "CSS connects to HTML documents in three different ways.",
    intro: "Developers attach CSS to HTML using external files, internal style tags, or inline attributes. External stylesheets keep code organized and cacheable. Inline styles mix design with content and should be avoided.",
    keyPoints: [
      "External CSS uses the `<link>` tag inside the head.",
      "Internal CSS uses the `<style>` tag inside the head.",
      "Inline CSS uses the `style` attribute directly on elements.",
      "External stylesheets end with a `.css` file extension."
    ]
  },
  comments: {
    title: "CSS Comments",
    description: "CSS comments leave helpful notes inside the code.",
    intro: "CSS comments explain styling choices to other developers. The browser completely ignores these comments when rendering the page. Developers use them to organize large files or temporarily disable code.",
    syntax: {
      language: "css",
      code: `/* css comment syntax */\n/* this is a comment */`
    },
    example: {
      language: "css",
      code: `/* this shows a css comment */\np {\n  color: red; /* makes text red */\n}`
    }
  },
  colors: {
    title: "CSS Colors",
    description: "CSS colors change the background and text colors of elements.",
    intro: "CSS applies colors using predefined names, HEX codes, or RGB values. Developers change the background color to define sections or change the text color to improve readability.",
    example: {
      language: "css",
      code: `/* this applies colors */\nbody {\n  background-color: black;\n}\n\nh1 {\n  color: white;\n}`
    },
    keyPoints: [
      "CSS supports standard color names like red.",
      "HEX codes provide millions of exact colors.",
      "RGB values control red, green, and blue levels.",
      "The `color` property changes text color."
    ]
  },
  backgrounds: {
    title: "CSS Backgrounds",
    description: "CSS backgrounds add colors and images behind elements.",
    intro: "CSS controls the background area of any HTML element. Developers set solid colors, attach background images, or create smooth gradients. The background properties handle how these images repeat and position.",
    example: {
      language: "css",
      code: `/* this sets a background */\nbody {\n  background-color: black;\n  background-image: url('stars.png');\n  background-repeat: no-repeat;\n}`
    },
    keyPoints: [
      "The `background-color` property sets a solid color.",
      "The `background-image` property links an image file.",
      "The `background-repeat` property prevents tiling.",
      "The `background-size` property scales the image."
    ]
  },
  borders: {
    title: "CSS Borders",
    description: "CSS borders draw lines around HTML elements.",
    intro: "CSS border properties control the style, width, and color of an element's border. Developers create solid boxes, dashed outlines, or thick dividing lines. A border sits between the padding and the margin.",
    syntax: {
      language: "css",
      code: `/* border syntax */\ndiv {\n  border: 2px solid red;\n}`
    },
    example: {
      language: "css",
      code: `/* this creates borders */\np.solid {\n  border-style: solid;\n  border-width: 5px;\n  border-color: blue;\n}`
    },
    keyPoints: [
      "The `border-style` property is required to show a border.",
      "The `border-width` property changes the thickness.",
      "The `border-color` property sets the line color.",
      "The `border` shorthand property combines all three."
    ]
  },
  margins: {
    title: "CSS Margins",
    description: "CSS margins create empty space completely outside an element.",
    intro: "CSS creates transparent space around the outside of an element's border. Developers use margins to push elements apart from each other on the page. You can set the margin for all four sides independently.",
    example: {
      language: "css",
      code: `/* this sets margins */\ndiv {\n  margin-top: 50px;\n  margin-bottom: 20px;\n  margin-right: 10px;\n  margin-left: 10px;\n}`
    },
    keyPoints: [
      "Margins sit outside the element's border.",
      "The space is completely transparent.",
      "Margins push neighboring elements away.",
      "The \`margin\` shorthand sets all four sides at once."
    ]
  },
  padding: {
    title: "CSS Padding",
    description: "CSS padding creates empty space inside an element.",
    intro: "CSS generates transparent space inside the border of an element, pushing its content inward. Developers use padding to give text breathing room so it doesn't touch the borders. You can set padding for all four sides.",
    syntax: {
      language: "css",
      code: `/* padding syntax */\ndiv {\n  padding: 20px;\n}`
    },
    example: {
      language: "css",
      code: `/* this adds padding */\np {\n  padding-top: 10px;\n  padding-left: 15px;\n  border: 1px solid black;\n}`
    },
    keyPoints: [
      "Padding sits inside the element's border.",
      "The padding area inherits the background color.",
      "Padding pushes the inner content inward.",
      "The \`padding\` shorthand sets all four sides at once."
    ]
  },
  "height-width": {
    title: "CSS Height and Width",
    description: "CSS controls the exact height and width of an element.",
    intro: "CSS defines the physical dimensions of an element's content area. These properties do not include padding, borders, or margins. Setting these values ensures an element takes up the correct amount of space on the screen.",
    example: {
      language: "css",
      code: `/* this sets dimensions */\ndiv {\n  width: 50%;\n  height: 200px;\n  background-color: blue;\n}`
    },
    keyPoints: [
      "The \`width\` sets the horizontal size.",
      "The \`height\` sets the vertical size.",
      "Dimensions exclude padding and borders by default.",
      "You can use pixels or percentages."
    ]
  },
  "box-model": {
    title: "CSS Box Model",
    description: "The CSS box model wraps every HTML element.",
    intro: "The CSS box model is a conceptual box wrapping all HTML elements. It consists of the content itself, padding, borders, and margins. Understanding this model is the most important part of building accurate layouts.",
    keyPoints: [
      "Content sits directly in the center.",
      "Padding surrounds the content area.",
      "Borders wrap around the padding area.",
      "Margins create space outside the borders."
    ]
  },
  outline: {
    title: "CSS Outline",
    description: "CSS outlines draw a line outside the border.",
    intro: "CSS draws outlines outside an element's border to make it stand out. Unlike borders, outlines do not take up space or affect the layout of surrounding elements. Browsers use outlines to highlight focused inputs.",
    syntax: {
      language: "css",
      code: `/* outline syntax */\ninput:focus {\n  outline: 2px solid blue;\n}`
    },
    example: {
      language: "css",
      code: `/* this draws an outline */\np {\n  border: 1px solid black;\n  outline: 3px dashed red;\n  outline-offset: 5px;\n}`
    },
    keyPoints: [
      "Outlines sit completely outside the border.",
      "Outlines do not affect the element's physical size.",
      "Outlines can overlap other elements.",
      "The \`outline-offset\` property adds space before the outline."
    ]
  },
  text: {
    title: "CSS Text",
    description: "CSS formats the layout and spacing of text.",
    intro: "CSS provides numerous properties to control how text sits on the screen. Developers use these properties to align text, add underlines, transform case, and adjust spacing. This gives complete control over typography.",
    example: {
      language: "css",
      code: `/* this formats text */\nh1 {\n  text-align: center;\n  text-decoration: underline;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}`
    },
    keyPoints: [
      "The \`text-align\` property centers or justifies text.",
      "The \`text-decoration\` property adds or removes underlines.",
      "The \`text-transform\` property forces uppercase or lowercase.",
      "The \`letter-spacing\` property changes character gaps."
    ]
  },
  fonts: {
    title: "CSS Fonts",
    description: "CSS changes the font family, size, and weight of text.",
    intro: "CSS controls the actual typography used to display text. Developers can select specific font families, increase the font size, or make the text bold. Choosing the right font drastically impacts readability and design.",
    example: {
      language: "css",
      code: `/* this changes fonts */\np {\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n}`
    },
    keyPoints: [
      "The \`font-family\` property sets the typeface.",
      "The \`font-size\` property controls text scaling.",
      "The \`font-weight\` property makes text bold.",
      "Fallback fonts ensure the text always renders."
    ]
  },
  icons: {
    title: "CSS Icons",
    description: "CSS imports and styles vector icons on the page.",
    intro: "CSS adds visual icons using third-party libraries like Font Awesome or Google Icons. These libraries provide vector shapes that developers insert into the HTML. You can then style these icons exactly like text fonts.",
    syntax: {
      language: "css",
      code: `/* icon syntax */\ni.fas {\n  color: red;\n  font-size: 24px;\n}`
    },
    example: {
      language: "html",
      code: `<!-- this displays an icon -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">\n  </head>\n  <body>\n    <i class="fas fa-heart" style="color:red;"></i>\n  </body>\n</html>`
    },
    keyPoints: [
      "Icons load from external stylesheets.",
      "Developers style icons using standard text properties.",
      "The \`font-size\` property changes the icon size.",
      "The \`color\` property changes the icon color."
    ]
  },
  links: {
    title: "CSS Links",
    description: "CSS styles clickable anchor links in different states.",
    intro: "CSS targets anchor tags to change how links look. Because users interact with links, CSS provides pseudo-classes to style them when hovered, clicked, or previously visited. This gives users visual feedback while navigating.",
    example: {
      language: "css",
      code: `/* this styles links */\na:link { color: blue; }\na:visited { color: purple; }\na:hover { color: red; }\na:active { color: yellow; }`
    },
    keyPoints: [
      "The \`:link\` pseudo-class styles unvisited links.",
      "The \`:visited\` pseudo-class styles clicked links.",
      "The \`:hover\` pseudo-class triggers when the mouse is over the link.",
      "The \`:active\` pseudo-class triggers during the exact moment of a click."
    ]
  },
  lists: {
    title: "CSS Lists",
    description: "CSS customizes the bullet points and numbers of lists.",
    intro: "CSS controls the marker style of both ordered and unordered lists. Developers change standard bullets into squares, Roman numerals, or completely custom images. You can also remove the markers entirely for navigation menus.",
    example: {
      language: "css",
      code: `/* this styles lists */\nul {\n  list-style-type: square;\n}\n\nol {\n  list-style-type: lower-alpha;\n}`
    },
    keyPoints: [
      "The \`list-style-type\` property changes the marker shape.",
      "The \`list-style-image\` property uses a custom image.",
      "The \`list-style-position\` controls whether markers sit inside or outside the text block.",
      "Setting \`list-style-type: none\` removes the markers entirely."
    ]
  },
  tables: {
    title: "CSS Tables",
    description: "CSS formats the borders, alignment, and spacing of HTML tables.",
    intro: "CSS transforms basic HTML tables into readable data grids. Developers use properties like borders, padding, and text alignment to space out the content. You can collapse the double borders into a single clean line.",
    example: {
      language: "css",
      code: `/* this styles tables */\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth, td {\n  border: 1px solid black;\n  padding: 8px;\n}`
    },
    keyPoints: [
      "The \`border-collapse\` property merges double table borders.",
      "Padding inside \`<th>\` and \`<td>\` adds breathing room.",
      "Text aligns left by default in data cells.",
      "The \`nth-child\` selector creates striped rows."
    ]
  },
  display: {
    title: "CSS Display",
    description: "CSS display changes how elements flow in the document layout.",
    intro: "The CSS `display` property dictates whether an element acts as a block, inline text, or a flex container. Every HTML element has a default display value. Developers change this property to build complex page structures.",
    example: {
      language: "css",
      code: `/* this changes display behavior */\nli {\n  display: inline;\n}\n\nspan {\n  display: block;\n}`
    },
    keyPoints: [
      "Block elements take up the full width of the page.",
      "Inline elements only take up as much space as their content.",
      "The \`none\` value hides the element completely from the page.",
      "Flex and grid values enable advanced layout systems."
    ]
  },
  position: {
    title: "CSS Position",
    description: "CSS position changes where an element sits on the screen.",
    intro: "CSS removes elements from the normal document flow to place them exactly where you want. You can lock navigation bars to the top of the screen or layer images over one another. Top, bottom, left, and right properties adjust the final spot.",
    example: {
      language: "css",
      code: `/* this locks an element in place */\n.nav {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}`
    },
    keyPoints: [
      "The \`static\` value is the default document flow.",
      "The \`relative\` value moves an element from its normal spot.",
      "The \`absolute\` value positions an element inside its nearest positioned parent.",
      "The \`fixed\` value locks the element to the browser window."
    ]
  },
  "z-index": {
    title: "CSS Z-Index",
    description: "CSS z-index controls the vertical stacking order of elements.",
    intro: "CSS layers elements on top of each other when they overlap. The `z-index` property tells the browser which element sits in front. Higher numbers stay on top, while negative numbers sink to the back.",
    syntax: {
      language: "css",
      code: `/* z-index syntax */\ndiv {\n  z-index: 10;\n}`
    },
    example: {
      language: "css",
      code: `/* this puts an image behind text */\nimg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: -1;\n}`
    },
    keyPoints: [
      "Elements with a higher \`z-index\` sit in front.",
      "Elements with a lower \`z-index\` hide behind.",
      "The property only works on positioned elements.",
      "It accepts positive and negative whole numbers."
    ]
  },
  overflow: {
    title: "CSS Overflow",
    description: "CSS overflow handles content that spills out of its container.",
    intro: "CSS controls what happens when a box contains too much text or media. By default, content visibly spills out. Developers can hide this extra content or add scrollbars to keep the layout neat.",
    example: {
      language: "css",
      code: `/* this adds a scrollbar */\ndiv {\n  width: 200px;\n  height: 100px;\n  overflow: scroll;\n}`
    },
    keyPoints: [
      "The \`visible\` value shows content outside the box.",
      "The \`hidden\` value clips overflowing content completely.",
      "The \`scroll\` value adds permanent scrollbars.",
      "The \`auto\` value adds scrollbars only when needed."
    ]
  },
  float: {
    title: "CSS Float",
    description: "CSS float wraps text around images and block elements.",
    intro: "CSS originally used float to push images to the side and let text flow around them. While flexbox replaced it for main page layouts, developers still use float for its original purpose. Floating elements removes them from the normal document flow.",
    syntax: {
      language: "css",
      code: `/* float syntax */\nimg {\n  float: right;\n}`
    },
    example: {
      language: "css",
      code: `/* this wraps text around an image */\nimg {\n  float: left;\n  margin-right: 15px;\n}`
    },
    keyPoints: [
      "Float pushes elements to the left or right.",
      "Text wraps around floated elements automatically.",
      "The \`clear\` property stops the floating behavior below.",
      "Flexbox and Grid offer better modern layout controls."
    ]
  },
  "inline-block": {
    title: "CSS Inline-Block",
    description: "CSS inline-block combines inline flow with block dimensions.",
    intro: "CSS `inline-block` lets elements sit side-by-side like text while accepting exact width and height values. Standard inline elements ignore physical dimensions. Developers use this heavily for navigation links and buttons.",
    example: {
      language: "css",
      code: `/* this styles a button grid */\n.btn {\n  display: inline-block;\n  width: 120px;\n  padding: 10px;\n}`
    },
    keyPoints: [
      "Elements flow horizontally like text.",
      "Elements accept specific width and height values.",
      "Top and bottom margins apply properly.",
      "It prevents unexpected line breaks."
    ]
  },
  align: {
    title: "CSS Align",
    description: "CSS centers and aligns elements horizontally and vertically.",
    intro: "CSS provides multiple ways to center text and elements. You can center text easily using text alignment. To center a physical block element, developers set an exact width and use auto margins.",
    syntax: {
      language: "css",
      code: `/* center alignment */\n.box {\n  margin: 0 auto;\n  width: 50%;\n}`
    },
    example: {
      language: "css",
      code: `/* this centers a container */\ndiv.center {\n  margin: auto;\n  width: 300px;\n  border: 2px solid blue;\n}`
    },
    keyPoints: [
      "The \`text-align: center\` property centers inner text.",
      "The \`margin: auto\` property horizontally centers block elements.",
      "Centering a block requires a defined width.",
      "Flexbox provides simpler centering tools today."
    ]
  },
  combinators: {
    title: "CSS Combinators",
    description: "CSS combinators target elements based on their relationships.",
    intro: "CSS targets elements based on where they live inside the HTML structure. Combinators connect simple selectors together. This allows developers to style all paragraphs inside a specific section without needing extra class names.",
    example: {
      language: "css",
      code: `/* this styles direct children */\ndiv > p {\n  background-color: yellow;\n}`
    },
    keyPoints: [
      "The space targets all descendants inside an element.",
      "The \`>\` targets only direct children.",
      "The \`+\` targets the very next adjacent sibling.",
      "The \`~\` targets all subsequent general siblings."
    ]
  },
  "pseudo-classes": {
    title: "CSS Pseudo-Classes",
    description: "CSS pseudo-classes style elements based on their current state.",
    intro: "CSS pseudo-classes change an element's appearance when a user interacts with it. A common example is changing a button's color when the mouse hovers over it. They attach to regular selectors using a single colon.",
    syntax: {
      language: "css",
      code: `/* pseudo-class syntax */\nselector:pseudo-class {\n  property: value;\n}`
    },
    example: {
      language: "css",
      code: `/* this changes color on hover */\nbutton:hover {\n  background-color: green;\n}`
    },
    keyPoints: [
      "Pseudo-classes reflect user interactions.",
      "The \`:hover\` pseudo-class triggers on mouse over.",
      "The \`:focus\` pseudo-class triggers when clicking an input field.",
      "The \`:nth-child()\` pseudo-class targets specific items in a list."
    ]
  },
  "pseudo-elements": {
    title: "CSS Pseudo-Elements",
    description: "CSS pseudo-elements style specific parts of an element.",
    intro: "CSS pseudo-elements target sub-sections of an HTML element without needing extra tags. Developers use them to style just the first letter of a paragraph or inject decorative icons before a heading. They use a double colon syntax.",
    syntax: {
      language: "css",
      code: `/* pseudo-element syntax */\nselector::pseudo-element {\n  property: value;\n}`
    },
    example: {
      language: "css",
      code: `/* this styles the first line */\np::first-line {\n  font-weight: bold;\n  color: red;\n}`
    },
    keyPoints: [
      "Pseudo-elements target partial element contents.",
      "The \`::first-letter\` creates drop caps.",
      "The \`::before\` injects visual content before the element.",
      "The \`::after\` injects visual content after the element."
    ]
  },
  opacity: {
    title: "CSS Opacity",
    description: "CSS opacity controls the transparency of an entire element.",
    intro: "CSS opacity makes elements see-through. Developers use it to fade images or create subtle overlay effects. The property affects the element and everything inside it, including text and children elements.",
    example: {
      language: "css",
      code: `/* this makes an image transparent */\nimg {\n  opacity: 0.5;\n}\n\nimg:hover {\n  opacity: 1.0;\n}`
    },
    keyPoints: [
      "Opacity values range from 0.0 to 1.0.",
      "A value of 0.0 makes the element completely invisible.",
      "A value of 1.0 makes the element fully solid.",
      "Child elements inherit the transparency."
    ]
  },
  "attribute-selectors": {
    title: "CSS Attribute Selectors",
    description: "CSS attribute selectors target elements by their HTML attributes.",
    intro: "CSS styles elements based on the specific attributes they carry. Developers can target all links that open in a new tab or all input fields of a certain type. This avoids cluttering the HTML with extra class names.",
    example: {
      language: "css",
      code: `/* this targets target attributes */\na[target="_blank"] {\n  background-color: yellow;\n}\n\ninput[type="text"] {\n  border: 1px solid black;\n}`
    },
    keyPoints: [
      "Square brackets define an attribute selector.",
      "You can target the mere presence of an attribute.",
      "You can target an exact attribute value.",
      "You can target partial attribute values."
    ]
  },
  flexbox: {
    title: "CSS Flexbox",
    description: "CSS Flexbox builds flexible one-dimensional layouts easily.",
    intro: "CSS Flexbox organizes elements in a single row or column. It automatically handles spacing, alignment, and responsiveness without relying on float hacks. Developers define a flex container, and the browser positions the child items perfectly.",
    syntax: {
      language: "css",
      code: `/* flexbox syntax */\n.container {\n  display: flex;\n  justify-content: center;\n}`
    },
    example: {
      language: "css",
      code: `/* this creates a flex row */\n.row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}`
    },
    keyPoints: [
      "The \`display: flex\` property activates the layout mode.",
      "The \`flex-direction\` determines row or column flow.",
      "The \`justify-content\` aligns items along the main axis.",
      "The \`align-items\` aligns items along the cross axis."
    ]
  },
  grid: {
    title: "CSS Grid Layout",
    description: "CSS Grid builds complex two-dimensional layouts easily.",
    intro: "CSS Grid creates exact rows and columns for advanced page structures. While Flexbox handles single rows, Grid manages the entire page layout at once. Developers can precisely place elements into specific cells or stretch them across multiple tracks.",
    syntax: {
      language: "css",
      code: `/* grid syntax */\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}`
    },
    example: {
      language: "css",
      code: `/* this creates a simple grid */\n.container {\n  display: grid;\n  grid-template-columns: 200px auto;\n  gap: 15px;\n}`
    },
    keyPoints: [
      "The \`display: grid\` property activates the layout mode.",
      "The \`grid-template-columns\` defines column widths.",
      "The \`grid-template-rows\` defines row heights.",
      "The \`gap\` property creates spacing between grid cells."
    ]
  },
  responsive: {
    title: "CSS Responsive Web Design",
    description: "Responsive web design adapts layouts to any screen size.",
    intro: "Responsive CSS ensures a website looks perfect on phones, tablets, and massive desktop monitors. Developers build flexible grids and use CSS to rearrange elements as the screen shrinks. This provides a seamless experience for all users.",
    example: {
      language: "css",
      code: `/* responsive image trick */\nimg {\n  max-width: 100%;\n  height: auto;\n}`
    },
    keyPoints: [
      "Mobile traffic requires responsive layouts.",
      "Fluid grids use percentages instead of pixels.",
      "Flexible images shrink to fit their containers.",
      "The viewport meta tag is mandatory in the HTML."
    ]
  },
  "media-queries": {
    title: "CSS Media Queries",
    description: "CSS media queries apply styling rules based on screen size.",
    intro: "CSS media queries detect the user's screen width and apply specific styles accordingly. Developers use them to stack side-by-side columns on mobile phones or hide complex navigation bars on small screens.",
    syntax: {
      language: "css",
      code: `/* media query syntax */\n@media (max-width: 768px) {\n  .sidebar {\n    display: none;\n  }\n}`
    },
    example: {
      language: "css",
      code: `/* this changes color on small screens */\nbody {\n  background-color: lightgreen;\n}\n\n@media (max-width: 600px) {\n  body {\n    background-color: lightblue;\n  }\n}`
    },
    keyPoints: [
      "The \`@media\` rule wraps the conditional CSS.",
      "The \`max-width\` targets screens smaller than the value.",
      "The \`min-width\` targets screens larger than the value.",
      "Media queries drive all modern responsive design."
    ]
  },
  variables: {
    title: "CSS Variables",
    description: "CSS variables store reusable values throughout a stylesheet.",
    intro: "CSS custom properties act as variables holding colors, fonts, or sizes. Instead of typing the same exact color code fifty times, developers store it in a variable. Changing the variable updates the color everywhere instantly.",
    syntax: {
      language: "css",
      code: `/* variable syntax */\n:root {\n  --main-color: red;\n}\np {\n  color: var(--main-color);\n}`
    },
    example: {
      language: "css",
      code: `/* this sets a theme color */\n:root {\n  --primary: #3498db;\n}\n\nbutton {\n  background-color: var(--primary);\n  border: 2px solid var(--primary);\n}`
    },
    keyPoints: [
      "The \`:root\` selector creates global variables.",
      "Variable names must begin with two dashes.",
      "The \`var()\` function accesses the stored value.",
      "JavaScript can update these variables live."
    ]
  },
  animations: {
    title: "CSS Animations",
    description: "CSS animations move and change elements over time.",
    intro: "CSS creates smooth, complex animations without needing JavaScript. Developers define a sequence of styles inside keyframes. The browser then automatically calculates the frames needed to transition the element from start to finish.",
    example: {
      language: "css",
      code: `/* this spins an element */\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n\n.loader {\n  animation: spin 2s linear infinite;\n}`
    },
    keyPoints: [
      "The \`@keyframes\` rule defines the animation stages.",
      "The \`animation-name\` links the element to the keyframes.",
      "The \`animation-duration\` sets the total runtime.",
      "The \`animation-iteration-count\` makes it loop."
    ]
  },
  transitions: {
    title: "CSS Transitions",
    description: "CSS transitions smoothly animate single property changes.",
    intro: "CSS transitions create simple animations when an element changes state, like hovering over a button. Instead of instantly changing colors, the transition tells the browser to slowly blend the old color into the new one.",
    syntax: {
      language: "css",
      code: `/* transition syntax */\n.btn {\n  transition: background-color 0.3s ease;\n}`
    },
    example: {
      language: "css",
      code: `/* this fades a hover effect */\ndiv {\n  background: blue;\n  transition: background 0.5s;\n}\n\ndiv:hover {\n  background: red;\n}`
    },
    keyPoints: [
      "Transitions only fire when a property value changes.",
      "You must specify the property to transition.",
      "You must specify the duration of the effect.",
      "The \`ease\` timing function creates a natural slow-down effect."
    ]
  },
  transforms: {
    title: "CSS Transforms",
    description: "CSS transforms rotate, scale, and move elements visually.",
    intro: "CSS transforms manipulate the geometry of an element. Developers use them to spin icons, zoom into images on hover, or slightly nudge an element without disrupting the surrounding layout. The browser renders transforms efficiently using hardware acceleration.",
    example: {
      language: "css",
      code: `/* this scales an element */\ndiv {\n  transform: rotate(45deg);\n}\n\n.zoom:hover {\n  transform: scale(1.2);\n}`
    },
    keyPoints: [
      "The \`rotate()\` function spins the element.",
      "The \`scale()\` function shrinks or enlarges the element.",
      "The \`translate()\` function pushes the element horizontally or vertically.",
      "The \`skew()\` function tilts the element on its axes."
    ]
  }
};
