import { TopicContent } from './contentMap';

export const cssData: Record<string, TopicContent> = {
  introduction: {
    title: "CSS Introduction",
    description: "CSS is the language we use to style an HTML document.",
    intro: "CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced.",
    keyPoints: [
      "CSS stands for Cascading Style Sheets.",
      "CSS saves a lot of work. It can control the layout of multiple web pages all at once.",
      "External stylesheets are stored in CSS files."
    ]
  },
  syntax: {
    title: "CSS Syntax",
    description: "A CSS rule consists of a selector and a declaration block.",
    intro: "The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.",
    syntax: {
      language: "css",
      code: `h1 {\n  color: blue;\n  font-size: 12px;\n}`
    },
    tryItYourself: {
      html: `<h1>Hello World!</h1>\n<p>This paragraph is styled with CSS.</p>`,
      css: `h1 {\n  color: white;\n  text-align: center;\n}\np {\n  font-family: verdana;\n  font-size: 20px;\n}`
    }
  },
  selectors: {
    title: "CSS Selectors",
    description: "CSS selectors are used to find (or select) the HTML elements you want to style.",
    intro: "We can divide CSS selectors into five categories: Simple selectors, Combinator selectors, Pseudo-class selectors, Pseudo-elements selectors, and Attribute selectors.",
    example: {
      language: "css",
      code: `/* Element Selector */\np {\n  text-align: center;\n  color: red;\n}\n\n/* ID Selector */\n#para1 {\n  text-align: center;\n  color: red;\n}\n\n/* Class Selector */\n.center {\n  text-align: center;\n  color: red;\n}`
    }
  },
  "how-to": {
    title: "CSS How To",
    description: "How to add CSS to your HTML.",
    intro: "There are three ways of inserting a style sheet: External CSS, Internal CSS, and Inline CSS.",
    keyPoints: [
      "External CSS is ideal for styling multiple pages.",
      "Internal CSS is used for styling a single page.",
      "Inline CSS is used for styling a single element."
    ]
  },
  comments: {
    title: "CSS Comments",
    description: "Comments are used to explain the code.",
    intro: "Comments are used to explain the code, and may help when you edit the source code at a later date. Comments are ignored by browsers.",
    syntax: {
      language: "css",
      code: `/* This is a single-line comment */\np {\n  color: red;\n}\n/* This is\na multi-line\ncomment */`
    }
  },
  colors: {
    title: "CSS Colors",
    description: "Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.",
    intro: "You can set the background color, text color, and border color for HTML elements.",
    example: {
      language: "css",
      code: `body {\n  background-color: lightblue;\n}\n\nh1 {\n  color: white;\n  text-align: center;\n}\n\np {\n  font-family: verdana;\n  font-size: 20px;\n}`
    }
  },
  backgrounds: {
    title: "CSS Backgrounds",
    description: "The CSS background properties are used to add background effects for elements.",
    intro: "CSS background properties include `background-color`, `background-image`, `background-repeat`, `background-attachment`, and `background-position`.",
    example: {
      language: "css",
      code: `body {\n  background-color: lightblue;\n  background-image: url("paper.gif");\n  background-repeat: repeat-x;\n}`
    }
  },
  borders: {
    title: "CSS Borders",
    description: "The CSS border properties allow you to specify the style, width, and color of an element's border.",
    intro: "The `border-style` property specifies what kind of border to display. Values include dotted, dashed, solid, double, groove, ridge, inset, outset, none, and hidden.",
    syntax: {
      language: "css",
      code: `p.dotted {border-style: dotted;}\np.dashed {border-style: dashed;}\np.solid {border-style: solid;}`
    }
  },
  margins: {
    title: "CSS Margins",
    description: "Margins are used to create space around elements, outside of any defined borders.",
    intro: "The CSS `margin` properties are used to create space around elements, outside of any defined borders. You can specify margins for each side of an element: top, right, bottom, and left.",
    example: {
      language: "css",
      code: `p {\n  margin-top: 100px;\n  margin-bottom: 100px;\n  margin-right: 150px;\n  margin-left: 80px;\n}`
    }
  },
  padding: {
    title: "CSS Padding",
    description: "Padding is used to create space around an element's content, inside of any defined borders.",
    intro: "The CSS `padding` properties are used to generate space around an element's content, inside of any defined borders. You can specify padding for each side of an element.",
    syntax: {
      language: "css",
      code: `div {\n  padding: 70px;\n  border: 1px solid #4CAF50;\n}`
    }
  },
  "height-width": {
    title: "CSS Height and Width",
    description: "The height and width properties are used to set the height and width of an element.",
    intro: "The `height` and `width` properties do not include padding, borders, or margins. It sets the height/width of the area inside the padding, border, and margin of the element.",
    example: {
      language: "css",
      code: `div {\n  height: 200px;\n  width: 50%;\n  background-color: powderblue;\n}`
    }
  },
  "box-model": {
    title: "CSS Box Model",
    description: "All HTML elements can be considered as boxes.",
    intro: "The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.",
    keyPoints: [
      "Content - The content of the box, where text and images appear",
      "Padding - Clears an area around the content. The padding is transparent",
      "Border - A border that goes around the padding and content",
      "Margin - Clears an area outside the border. The margin is transparent"
    ]
  },
  outline: {
    title: "CSS Outline",
    description: "An outline is a line drawn outside the element's border.",
    intro: "An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element \"stand out\".",
    syntax: {
      language: "css",
      code: `p {\n  border: 1px solid black;\n  outline: 2px solid red;\n  outline-offset: 15px;\n}`
    }
  },
  text: {
    title: "CSS Text",
    description: "CSS has a lot of properties for formatting text.",
    intro: "You can format text color, alignment, decoration, transformation, spacing, and more.",
    example: {
      language: "css",
      code: `h1 {\n  color: blue;\n  text-align: center;\n  text-decoration: underline;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n}`
    }
  },
  fonts: {
    title: "CSS Fonts",
    description: "Choosing the right font for your website is important.",
    intro: "The CSS font properties define the font family, boldness, size, and the style of a text.",
    example: {
      language: "css",
      code: `p.serif {\n  font-family: "Times New Roman", Times, serif;\n}\n\np.sansserif {\n  font-family: Arial, Helvetica, sans-serif;\n}`
    }
  },
  icons: {
    title: "CSS Icons",
    description: "How to add icons to your HTML page.",
    intro: "The simplest way to add an icon to your HTML page, is with an icon library, such as Font Awesome. Add the name of the specified icon class to any inline HTML element.",
    syntax: {
      language: "html",
      code: `<!-- Example using Font Awesome -->\n<i class="fas fa-cloud"></i>\n<i class="fas fa-heart"></i>\n<i class="fas fa-car"></i>\n<i class="fas fa-file"></i>\n<i class="fas fa-bars"></i>`
    }
  },
  links: {
    title: "CSS Links",
    description: "Links can be styled in different ways.",
    intro: "Links can be styled with any CSS property (e.g. color, font-family, background, etc.). In addition, links can be styled differently depending on what state they are in.",
    example: {
      language: "css",
      code: `/* unvisited link */\na:link {\n  color: red;\n}\n\n/* visited link */\na:visited {\n  color: green;\n}\n\n/* mouse over link */\na:hover {\n  color: hotpink;\n}\n\n/* selected link */\na:active {\n  color: blue;\n}`
    }
  },
  lists: {
    title: "CSS Lists",
    description: "The CSS list properties allow you to set list item markers, images, etc.",
    intro: "The CSS list properties allow you to set different list item markers for ordered lists, unordered lists, set an image as the list item marker, or add background colors to lists.",
    example: {
      language: "css",
      code: `ul.a {\n  list-style-type: circle;\n}\n\nul.b {\n  list-style-type: square;\n}\n\nol.c {\n  list-style-type: upper-roman;\n}`
    }
  },
  tables: {
    title: "CSS Tables",
    description: "The look of an HTML table can be greatly improved with CSS.",
    intro: "To specify table borders in CSS, use the `border` property. You can also collapse borders, set width/height, align text, add padding, set horizontal dividers, hoverable tables, striped tables, and more.",
    example: {
      language: "css",
      code: `table, th, td {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\nth, td {\n  padding: 15px;\n  text-align: left;\n}`
    }
  },
  display: {
    title: "CSS Display",
    description: "The display property is the most important CSS property for controlling layout.",
    intro: "The `display` property specifies if/how an element is displayed. Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.",
    example: {
      language: "css",
      code: `li {\n  display: inline;\n}\n\nspan {\n  display: block;\n}`
    }
  },
  position: {
    title: "CSS Position",
    description: "The position property specifies the type of positioning method used for an element.",
    intro: "There are five different position values: `static`, `relative`, `fixed`, `absolute`, and `sticky`.",
    keyPoints: [
      "`static`: Default. Rendered in order, as they appear in the document flow.",
      "`relative`: Positioned relative to its normal position.",
      "`fixed`: Positioned relative to the viewport.",
      "`absolute`: Positioned relative to the nearest positioned ancestor.",
      "`sticky`: Toggles between relative and fixed, depending on the scroll position."
    ]
  },
  "z-index": {
    title: "CSS Z-index",
    description: "The z-index property specifies the stack order of an element.",
    intro: "An element can have a positive or negative stack order. An element with greater stack order is always in front of an element with a lower stack order.",
    syntax: {
      language: "css",
      code: `img {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  z-index: -1;\n}`
    }
  },
  overflow: {
    title: "CSS Overflow",
    description: "The overflow property specifies what happens if content overflows an element's box.",
    intro: "The `overflow` property controls what happens to content that is too big to fit into an area. The values are: `visible`, `hidden`, `scroll`, and `auto`.",
    example: {
      language: "css",
      code: `div {\n  width: 200px;\n  height: 50px;\n  background-color: #eee;\n  overflow: scroll;\n}`
    }
  },
  float: {
    title: "CSS Float",
    description: "The float property specifies how an element should float.",
    intro: "The `float` property is used for positioning and formatting content e.g. let an image float left to the text in a container. The `clear` property is used to control behavior after floating elements.",
    syntax: {
      language: "css",
      code: `img {\n  float: right;\n}`
    }
  },
  "inline-block": {
    title: "CSS Inline-block",
    description: "Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.",
    intro: "Also, with `display: inline-block`, the top and bottom margins/paddings are respected, but with `display: inline` they are not.",
    example: {
      language: "css",
      code: `.nav-item {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n  border: 1px solid blue;\n}`
    }
  },
  align: {
    title: "CSS Align",
    description: "How to align elements horizontally and vertically.",
    intro: "To center text, use `text-align: center`. To center an image, use `margin: auto` and make it a `block` element. To center a block element, use `margin: auto`.",
    syntax: {
      language: "css",
      code: `.center {\n  margin: auto;\n  width: 50%;\n  border: 3px solid green;\n  padding: 10px;\n}`
    }
  },
  combinators: {
    title: "CSS Combinators",
    description: "A combinator is something that explains the relationship between the selectors.",
    intro: "A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.",
    referenceTable: {
      headers: ["Combinator", "Example", "Description"],
      rows: [
        ["Space", "div p", "Descendant selector (matches all p inside div)"],
        [">", "div > p", "Child selector (matches all p that are direct children of div)"],
        ["+", "div + p", "Adjacent sibling selector (matches the first p immediately after div)"],
        ["~", "div ~ p", "General sibling selector (matches all p that follow div)"]
      ]
    }
  },
  "pseudo-classes": {
    title: "CSS Pseudo-classes",
    description: "A pseudo-class is used to define a special state of an element.",
    intro: "For example, it can be used to style an element when a user mouses over it, style visited and unvisited links differently, or style an element when it gets focus.",
    syntax: {
      language: "css",
      code: `selector:pseudo-class {\n  property: value;\n}`
    },
    example: {
      language: "css",
      code: `/* Mouse over link */\na:hover {\n  color: #FF00FF;\n}`
    }
  },
  "pseudo-elements": {
    title: "CSS Pseudo-elements",
    description: "A CSS pseudo-element is used to style specified parts of an element.",
    intro: "For example, it can be used to style the first letter, or line, of an element, or insert content before, or after, the content of an element.",
    syntax: {
      language: "css",
      code: `selector::pseudo-element {\n  property: value;\n}`
    },
    example: {
      language: "css",
      code: `p::first-line {\n  color: #ff0000;\n  font-variant: small-caps;\n}`
    }
  },
  opacity: {
    title: "CSS Opacity",
    description: "The opacity property specifies the opacity/transparency of an element.",
    intro: "The `opacity` property can take a value from 0.0 - 1.0. The lower value, the more transparent.",
    example: {
      language: "css",
      code: `img {\n  opacity: 0.5;\n}\n\nimg:hover {\n  opacity: 1.0;\n}`
    }
  },
  "attribute-selectors": {
    title: "CSS Attribute Selectors",
    description: "Style elements with specific attributes or attribute values.",
    intro: "The `[attribute]` selector is used to select elements with a specified attribute.",
    example: {
      language: "css",
      code: `/* Selects all <a> elements with a target attribute */\na[target] {\n  background-color: yellow;\n}\n\n/* Selects all <a> elements with target="_blank" */\na[target="_blank"] {\n  background-color: yellow;\n}`
    }
  },
  flexbox: {
    title: "CSS Flexbox",
    description: "A Flexible Box Layout makes it easier to design flexible responsive layout structure without using float or positioning.",
    intro: "To start using the Flexbox model, you need to first define a flex container.",
    syntax: {
      language: "css",
      code: `.flex-container {\n  display: flex;\n}`
    },
    keyPoints: [
      "`flex-direction` defines in which direction the container wants to stack the flex items.",
      "`justify-content` aligns the flexible container's items horizontally.",
      "`align-items` aligns the flexible container's items vertically."
    ]
  },
  grid: {
    title: "CSS Grid Layout",
    description: "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns.",
    intro: "A grid layout consists of a parent element, with one or more child elements. An HTML element becomes a grid container when its display property is set to grid or inline-grid.",
    syntax: {
      language: "css",
      code: `.grid-container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  padding: 10px;\n}`
    }
  },
  responsive: {
    title: "CSS Responsive Web Design",
    description: "Responsive Web Design makes your web page look good on all devices.",
    intro: "Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones).",
    keyPoints: [
      "Use the Viewport `<meta>` tag.",
      "Use responsive images (`max-width: 100%`).",
      "Use fluid grids.",
      "Use CSS media queries."
    ]
  },
  "media-queries": {
    title: "CSS Media Queries",
    description: "Media queries can modify the appearance of a website depending on the device's general type or specific characteristics.",
    intro: "Media queries look at the capability of the device, and can be used to check many things, such as width and height of the viewport.",
    syntax: {
      language: "css",
      code: `@media only screen and (max-width: 600px) {\n  body {\n    background-color: lightblue;\n  }\n}`
    }
  },
  variables: {
    title: "CSS Variables",
    description: "The var() function is used to insert the value of a CSS variable.",
    intro: "CSS variables have access to the DOM, which means that you can create variables with local or global scope, change the variables with JavaScript, and change the variables based on media queries.",
    syntax: {
      language: "css",
      code: `:root {\n  --blue: #1e90ff;\n  --white: #ffffff;\n}\n\nbody {\n  background-color: var(--blue);\n}`
    }
  },
  animations: {
    title: "CSS Animations",
    description: "CSS allows animation of most HTML elements without using JavaScript or Flash!",
    intro: "An animation lets an element gradually change from one style to another. You can change as many CSS properties you want, as many times you want. To use CSS animation, you must first specify some keyframes.",
    example: {
      language: "css",
      code: `/* The animation code */\n@keyframes example {\n  from {background-color: red;}\n  to {background-color: yellow;}\n}\n\n/* The element to apply the animation to */\ndiv {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  animation-name: example;\n  animation-duration: 4s;\n}`
    }
  },
  transitions: {
    title: "CSS Transitions",
    description: "CSS transitions allows you to change property values smoothly, over a given duration.",
    intro: "To create a transition effect, you must specify two things: the CSS property you want to add an effect to, and the duration of the effect.",
    syntax: {
      language: "css",
      code: `div {\n  width: 100px;\n  height: 100px;\n  background: red;\n  transition: width 2s;\n}\n\ndiv:hover {\n  width: 300px;\n}`
    }
  },
  transforms: {
    title: "CSS 2D and 3D Transforms",
    description: "CSS transforms allow you to move, rotate, scale, and skew elements.",
    intro: "The `transform` property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.",
    example: {
      language: "css",
      code: `div {\n  transform: rotate(20deg);\n}\n\ndiv#scale {\n  transform: scale(2, 3);\n}`
    }
  }
};
