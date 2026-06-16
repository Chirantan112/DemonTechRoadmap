import { TopicContent } from './contentMap';

export const javascriptData: Record<string, TopicContent> = {
  introduction: {
    title: "JavaScript Introduction",
    description: "JavaScript makes static HTML pages interactive.",
    intro: "JavaScript acts as the programming language of the web. It is the third layer of web design, following HTML and CSS. Developers use JavaScript to update content dynamically, control multimedia, and animate images.",
    keyPoints: [
      "JavaScript alters HTML content instantly.",
      "JavaScript changes CSS styles without reloading.",
      "JavaScript hides and shows elements.",
      "JavaScript reacts to user clicks and inputs."
    ]
  },
  "where-to": {
    title: "JavaScript Where To",
    description: "JavaScript connects to HTML files using script tags.",
    intro: "HTML uses the `<script>` tag to run JavaScript directly in the browser. Developers place these tags inside the `<head>` or at the very bottom of the `<body>`. Putting scripts at the bottom ensures the HTML loads fully before the code runs.",
    example: {
      language: "html",
      code: `<!-- this runs javascript -->\n<!DOCTYPE html>\n<html lang="en">\n  <body>\n    <p id="demo"></p>\n    <script>\n      document.getElementById("demo").innerHTML = "Hello!";\n    </script>\n  </body>\n</html>`
    },
    keyPoints: [
      "JavaScript lives inside `<script>` tags.",
      "Scripts can go in the `<head>` or `<body>`.",
      "External files use the `src` attribute.",
      "External files end with a `.js` extension."
    ]
  },
  output: {
    title: "JavaScript Output",
    description: "JavaScript outputs data in four different ways.",
    intro: "JavaScript does not have built-in print functions. Instead, developers output data by altering HTML elements, writing directly to the document, popping up alert boxes, or logging messages to the browser console.",
    syntax: {
      language: "javascript",
      code: `/* output syntax */\nconsole.log("Hello World");\nalert("Hello World");`
    },
    keyPoints: [
      "`innerHTML` writes into HTML elements.",
      "`document.write()` writes to the HTML document.",
      "`window.alert()` creates a pop-up box.",
      "`console.log()` sends data to the developer tools."
    ]
  },
  statements: {
    title: "JavaScript Statements",
    description: "JavaScript statements give the computer direct instructions.",
    intro: "A computer program consists of a list of instructions called statements. JavaScript executes these statements one by one in the exact order they are written. Each statement usually performs one specific action.",
    example: {
      language: "javascript",
      code: `/* this runs four statements */\nlet x;\nx = 5;\nlet y = 6;\nlet z = x + y;`
    },
    keyPoints: [
      "Statements form the program instructions.",
      "Semicolons separate multiple statements.",
      "JavaScript runs them sequentially.",
      "Code blocks group multiple statements together."
    ]
  },
  syntax: {
    title: "JavaScript Syntax",
    description: "JavaScript syntax defines the rules for writing code.",
    intro: "JavaScript syntax tells the computer how to read the program. The language defines fixed values known as literals and variable values known as variables. Developers must follow these exact rules, or the browser will throw errors.",
    keyPoints: [
      "Numbers do not require quotes.",
      "Strings require single or double quotes.",
      "Variable names are case-sensitive.",
      "Hyphens are not allowed in names."
    ]
  },
  comments: {
    title: "JavaScript Comments",
    description: "JavaScript comments leave hidden notes inside the code.",
    intro: "JavaScript comments explain code logic to other developers. The browser completely ignores these comments when executing the program. Developers use them to organize complex files or temporarily disable code while testing.",
    syntax: {
      language: "javascript",
      code: `/* comment syntax */\n// Single line comment\n/* Multi-line \ncomment */`
    },
    keyPoints: [
      "Two slashes \`//\` create a single-line comment.",
      "A slash-asterisk \`/*\` starts a multi-line comment.",
      "An asterisk-slash \`*/\` ends a multi-line comment.",
      "Comments prevent code execution."
    ]
  },
  variables: {
    title: "JavaScript Variables",
    description: "JavaScript variables store data values for later use.",
    intro: "JavaScript uses variables as named containers to hold data. Developers declare these variables using specific keywords before assigning them a value. Modern JavaScript strongly encourages using `let` and `const` instead of the older `var` keyword.",
    example: {
      language: "javascript",
      code: `/* this creates variables */\nlet score = 100;\nconst playerName = "John";\nlet isWinner = true;`
    },
    keyPoints: [
      "Variables store reusable data.",
      "The \`let\` keyword creates changeable variables.",
      "The \`const\` keyword creates unchangeable variables.",
      "The \`var\` keyword is an older way to declare variables."
    ]
  },
  let: {
    title: "JavaScript Let",
    description: "The let keyword declares block-scoped variables that can change.",
    intro: "JavaScript introduced `let` in 2015 to solve problems with older variable types. Variables declared with `let` only exist inside the specific block of code where they were created. Developers can update their values later.",
    example: {
      language: "javascript",
      code: `/* this uses let */\nlet points = 50;\npoints = 100; // Value changed successfully`
    },
    keyPoints: [
      "\`let\` variables cannot be redeclared.",
      "\`let\` variables can be reassigned.",
      "\`let\` variables have block scope.",
      "\`let\` prevents accidental global variables."
    ]
  },
  const: {
    title: "JavaScript Const",
    description: "The const keyword declares variables that never change.",
    intro: "JavaScript uses `const` for values that must remain exactly the same throughout the entire program. Developers use this for configuration values, arrays, and objects. You must assign a value immediately when declaring a `const`.",
    keyPoints: [
      "\`const\` variables cannot be redeclared.",
      "\`const\` variables cannot be reassigned.",
      "\`const\` requires a starting value.",
      "Changing properties inside a \`const\` object is allowed."
    ]
  },
  operators: {
    title: "JavaScript Operators",
    description: "JavaScript operators perform mathematical and logical tasks.",
    intro: "JavaScript uses different operators to assign values, compare data, and perform math. Developers combine variables and operators to create complex logic and calculations. The language supports many different operator types.",
    example: {
      language: "javascript",
      code: `/* this uses operators */\nlet x = 5;\nlet y = 2;\nlet total = (x * y) + 10;`
    },
    keyPoints: [
      "Arithmetic operators perform math.",
      "Assignment operators update variable values.",
      "Comparison operators check if values match.",
      "Logical operators combine multiple conditions."
    ]
  },
  arithmetic: {
    title: "JavaScript Arithmetic",
    description: "JavaScript arithmetic operators perform math on numbers.",
    intro: "JavaScript acts as a calculator directly in the browser. Developers use arithmetic operators to add scores, calculate discounts, or determine screen coordinates. These operators work exactly like standard algebra.",
    example: {
      language: "javascript",
      code: `/* this calculates a value */\nlet price = 100;\nlet tax = 5;\nlet total = price + tax;`
    },
    keyPoints: [
      "The \`+\` operator adds numbers together.",
      "The \`-\` operator subtracts one number from another.",
      "The \`*\` operator multiplies numbers.",
      "The \`/\` operator divides numbers."
    ]
  },
  assignment: {
    title: "JavaScript Assignment",
    description: "JavaScript assignment operators save values into variables.",
    intro: "JavaScript uses assignment operators to store data inside a variable. The most common assignment operator is the equals sign, but JavaScript provides shortcuts to perform math and assignment simultaneously.",
    example: {
      language: "javascript",
      code: `/* this assigns and updates values */\nlet score = 10;\nscore += 5; // score is now 15\nscore -= 2; // score is now 13`
    },
    keyPoints: [
      "The \`=\` operator assigns the exact right-side value.",
      "The \`+=\` operator adds a value to the current variable.",
      "The \`-=\` operator subtracts a value from the current variable.",
      "Assignment always reads from right to left."
    ]
  },
  "data-types": {
    title: "JavaScript Data Types",
    description: "JavaScript variables hold different types of data formats.",
    intro: "JavaScript categorizes data into different types so the computer knows how to handle it. You can do math with Number types, but you cannot do math with String types. JavaScript figures out the data type automatically based on the value.",
    example: {
      language: "javascript",
      code: `/* this shows different data types */\nlet age = 25; // Number\nlet name = "Alice"; // String\nlet isReady = true; // Boolean`
    },
    keyPoints: [
      "String types hold text inside quotes.",
      "Number types hold integers or decimals.",
      "Boolean types hold true or false values.",
      "Object types hold complex data structures."
    ]
  },
  functions: {
    title: "JavaScript Functions",
    description: "JavaScript functions bundle reusable blocks of code.",
    intro: "JavaScript functions store instructions that you want to use multiple times. Instead of copying and pasting the same ten lines of code, developers wrap them inside a function and call its name whenever needed.",
    syntax: {
      language: "javascript",
      code: `/* function syntax */\nfunction myFunc(param) {\n  // Code runs here\n}`
    },
    example: {
      language: "javascript",
      code: `/* this creates a function */\nfunction multiply(a, b) {\n  return a * b;\n}\n\nlet result = multiply(4, 3);`
    },
    keyPoints: [
      "The \`function\` keyword creates the block.",
      "Parentheses hold incoming variables called parameters.",
      "Curly braces contain the actual code to execute.",
      "The \`return\` keyword sends data back."
    ]
  },
  objects: {
    title: "JavaScript Objects",
    description: "JavaScript objects group related data into a single structure.",
    intro: "JavaScript objects store multiple values together like a digital filing cabinet. Instead of making separate variables for a car's color, weight, and model, developers create one car object that holds all those details.",
    example: {
      language: "javascript",
      code: `/* this creates an object */\nconst car = {\n  type: "Fiat",\n  model: "500",\n  color: "white"\n};\n\nlet carColor = car.color;`
    },
    keyPoints: [
      "Objects use curly braces to hold data.",
      "Data lives in name-value pairs called properties.",
      "A colon separates the name from the value.",
      "A dot or brackets access the object properties."
    ]
  },
  events: {
    title: "JavaScript Events",
    description: "JavaScript events trigger code when users interact with the page.",
    intro: "JavaScript listens for specific actions happening on the HTML page. Developers write code that waits for a user to click a button, type in an input field, or scroll down the page, and then reacts instantly.",
    example: {
      language: "html",
      code: `/* this triggers an event */\n<button onclick="alert('Clicked!')">Click Me</button>`
    },
    keyPoints: [
      "Events detect user interaction.",
      "The \`onclick\` event triggers when the user clicks an element.",
      "The \`onmouseover\` event triggers when the mouse hovers over.",
      "The \`onkeydown\` event triggers when typing."
    ]
  },
  strings: {
    title: "JavaScript Strings",
    description: "JavaScript strings store and manipulate text data.",
    intro: "JavaScript uses strings to hold text like names, paragraphs, or passwords. Strings always sit inside quotes so the computer doesn't confuse them with code commands. You can measure, cut, or combine strings easily.",
    syntax: {
      language: "javascript",
      code: `/* string syntax */\nlet name = "John";\nlet greeting = 'Hello';`
    },
    keyPoints: [
      "Strings require single or double quotes.",
      "The \`length\` property counts the characters.",
      "Backslashes escape special characters inside strings.",
      "Template literals use backticks to inject variables."
    ]
  },
  "string-methods": {
    title: "JavaScript String Methods",
    description: "JavaScript string methods alter text automatically.",
    intro: "JavaScript provides built-in tools called methods to manipulate strings. Developers use these methods to change text to uppercase, replace specific words, or extract a small section of a larger paragraph.",
    example: {
      language: "javascript",
      code: `/* this uses string methods */\nlet text = "Apple, Banana";\nlet part = text.slice(7, 13); // part is "Banana"\nlet loud = text.toUpperCase();`
    },
    keyPoints: [
      "The \`toUpperCase()\` method capitalizes every letter.",
      "The \`slice()\` method extracts a section of text.",
      "The \`replace()\` method swaps one word for another.",
      "The \`trim()\` method removes extra spaces at the ends."
    ]
  },
  arrays: {
    title: "JavaScript Arrays",
    description: "JavaScript arrays store multiple values inside a single variable.",
    intro: "JavaScript uses arrays to hold lists of data, like a shopping list or a catalog of products. Instead of creating ten different variables for ten cars, developers put all ten cars inside one array.",
    example: {
      language: "javascript",
      code: `/* this creates an array */\nconst cars = ["Saab", "Volvo", "BMW"];\nlet firstCar = cars[0];`
    },
    keyPoints: [
      "Arrays use square brackets to hold data.",
      "Commas separate each item in the array.",
      "The first item sits at index 0.",
      "Developers typically declare arrays with \`const\`."
    ]
  },
  "array-methods": {
    title: "JavaScript Array Methods",
    description: "JavaScript array methods manipulate items inside an array.",
    intro: "JavaScript provides built-in tools called methods to manage array data. Developers use these methods to add new items to the end of a list, remove the first item, or sort everything alphabetically.",
    example: {
      language: "javascript",
      code: `/* this uses array methods */\nconst fruits = ["Banana", "Orange"];\nfruits.push("Apple"); // Adds Apple to the end\nfruits.pop(); // Removes Apple`
    },
    keyPoints: [
      "The \`push()\` method adds items to the end.",
      "The \`pop()\` method removes the last item.",
      "The \`length\` property counts the total items.",
      "The \`join()\` method converts the array into a string."
    ]
  },
  conditions: {
    title: "JavaScript If...Else",
    description: "JavaScript if statements run code only when conditions are true.",
    intro: "JavaScript uses conditional statements to make decisions. Developers tell the computer to check a condition, like if a user is logged in. If true, the code shows the dashboard; if false, it shows the login screen.",
    example: {
      language: "javascript",
      code: `/* this checks a condition */\nif (score > 50) {\n  result = "You pass!";\n} else {\n  result = "You fail.";\n}`
    },
    keyPoints: [
      "The \`if\` block runs when the condition is true.",
      "The \`else\` block runs when the condition is false.",
      "The \`else if\` block tests a new condition.",
      "Conditions go inside parentheses."
    ]
  },
  switch: {
    title: "JavaScript Switch",
    description: "JavaScript switch statements check a value against many cases.",
    intro: "JavaScript uses the switch statement as a cleaner alternative to writing many `if...else` statements. Developers pass a single value into the switch, and the computer jumps directly to the matching case.",
    example: {
      language: "javascript",
      code: `/* this uses a switch */\nswitch(day) {\n  case 1:\n    text = "Monday";\n    break;\n  case 2:\n    text = "Tuesday";\n    break;\n}`
    },
    keyPoints: [
      "The \`switch\` statement evaluates one expression.",
      "The \`case\` keyword defines a possible match.",
      "The \`break\` keyword stops the switch from running further.",
      "The \`default\` keyword runs if no cases match."
    ]
  },
  "for-loop": {
    title: "JavaScript For Loop",
    description: "JavaScript for loops repeat a block of code a specific number of times.",
    intro: "JavaScript uses loops to run the same code over and over again without copying and pasting. The `for` loop is perfect when developers know exactly how many times the code needs to run.",
    example: {
      language: "javascript",
      code: `/* this loops 5 times */\nfor (let i = 0; i < 5; i++) {\n  console.log("Number: " + i);\n}`
    },
    keyPoints: [
      "Statement 1 runs once before the loop starts.",
      "Statement 2 defines the condition to keep looping.",
      "Statement 3 runs at the end of every loop.",
      "Loops are commonly used to read through arrays."
    ]
  },
  "while-loop": {
    title: "JavaScript While Loop",
    description: "JavaScript while loops repeat code as long as a condition remains true.",
    intro: "JavaScript uses the `while` loop when developers don't know exactly how many times the loop should run. It simply checks a condition, runs the code, and checks the condition again.",
    example: {
      language: "javascript",
      code: `/* this loops until i is 10 */\nlet i = 0;\nwhile (i < 10) {\n  console.log(i);\n  i++;\n}`
    },
    keyPoints: [
      "The loop runs continuously while the condition is true.",
      "The loop stops instantly when the condition becomes false.",
      "You must update the condition inside the loop.",
      "Forgetting to update the condition causes an infinite loop."
    ]
  },
  break: {
    title: "JavaScript Break",
    description: "JavaScript break statements jump out of a loop early.",
    intro: "JavaScript uses the `break` statement to stop a loop immediately, even if the condition is still true. Developers use this when searching for a specific item; once they find it, there is no need to keep searching.",
    example: {
      language: "javascript",
      code: `/* this stops the loop at 3 */\nfor (let i = 0; i < 10; i++) {\n  if (i === 3) { break; }\n  console.log(i);\n}`
    },
    keyPoints: [
      "The \`break\` statement kills the loop entirely.",
      "The \`continue\` statement skips only the current iteration.",
      "Switch statements also rely on \`break\`.",
      "Using \`break\` makes code run faster by stopping unnecessary work."
    ]
  },
  "type-conversion": {
    title: "JavaScript Type Conversion",
    description: "JavaScript type conversion changes data from one format to another.",
    intro: "JavaScript often needs to convert data types to perform calculations. If a user types the number \"5\" into a text box, JavaScript sees it as a string. Developers must convert it to a real number before doing math.",
    example: {
      language: "javascript",
      code: `/* this converts data types */\nlet str = "3.14";\nlet num = Number(str);\nlet backToStr = String(num);`
    },
    keyPoints: [
      "The \`Number()\` function converts strings to numbers.",
      "The \`String()\` function converts numbers to strings.",
      "JavaScript sometimes converts types automatically.",
      "Automatic conversion can lead to unexpected bugs."
    ]
  },
  typeof: {
    title: "JavaScript typeof",
    description: "JavaScript typeof identifies the data type of a variable.",
    intro: "JavaScript uses the `typeof` operator to figure out what kind of data a variable holds. Because JavaScript variables can hold anything, developers use this tool to check the data type before running specific functions.",
    example: {
      language: "javascript",
      code: `/* this checks data types */\ntypeof "John"; // Returns "string"\ntypeof 3.14; // Returns "number"\ntypeof true; // Returns "boolean"`
    },
    keyPoints: [
      "\`typeof\` returns the data type as a lowercase string.",
      "It identifies strings, numbers, booleans, and objects.",
      "Arrays return as \"object\" because they are a special object type.",
      "Undefined variables return as \"undefined\"."
    ]
  },
  scope: {
    title: "JavaScript Scope",
    description: "JavaScript scope controls where variables can be accessed.",
    intro: "JavaScript uses scope to secure variables and prevent naming conflicts. If you create a variable inside a function, nothing outside that function can see or use it. This allows developers to use the same variable names in different places safely.",
    example: {
      language: "javascript",
      code: `/* this demonstrates scope */\nfunction myScope() {\n  let localScore = 50;\n  console.log(localScore); // Works\n}\n// console.log(localScore); // Error!`
    },
    keyPoints: [
      "Global scope variables are visible everywhere.",
      "Function scope variables are hidden outside the function.",
      "Block scope (\`let\` and \`const\`) hides variables outside curly braces.",
      "Variables declared without keywords become global automatically."
    ]
  },
  hoisting: {
    title: "JavaScript Hoisting",
    description: "JavaScript hoisting moves variable and function declarations to the top.",
    intro: "JavaScript secretly moves all variable and function declarations to the very top of the script before running the code. Because of this strange behavior, developers can call a function on line 1 even if the function isn't written until line 50.",
    example: {
      language: "javascript",
      code: `/* this shows hoisting */\nx = 5;\nconsole.log(x);\nvar x; // Declaration is hoisted`
    },
    keyPoints: [
      "Hoisting moves declarations, not assignments.",
      "\`var\` declarations hoist and initialize as undefined.",
      "\`let\` and \`const\` declarations hoist but do not initialize.",
      "Calling functions before they are written works perfectly."
    ]
  },
  closures: {
    title: "JavaScript Closures",
    description: "JavaScript closures allow functions to remember their outer variables.",
    intro: "JavaScript closures happen when a function inside another function remembers the variables from its parent. Even after the parent function finishes running, the inner function still has access to those original variables. Developers use this to create private data.",
    example: {
      language: "javascript",
      code: `/* this creates a closure */\nfunction makeCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  }\n}\nlet counter = makeCounter();`
    },
    keyPoints: [
      "Closures remember variables from parent functions.",
      "They allow for data privacy and encapsulation.",
      "They are created automatically when functions are nested.",
      "Memory leaks can occur if closures are misused."
    ]
  },
  callbacks: {
    title: "JavaScript Callbacks",
    description: "JavaScript callbacks pass functions into other functions as arguments.",
    intro: "JavaScript functions act like regular data, meaning you can pass one function into another. The receiving function will run the callback function later. Developers use this for actions that take time, like waiting for a file to load.",
    example: {
      language: "javascript",
      code: `/* this uses a callback */\nfunction sayHello() {\n  console.log("Hello!");\n}\n\nsetTimeout(sayHello, 3000); // Runs after 3 seconds`
    },
    keyPoints: [
      "A callback is a function passed as an argument.",
      "Callbacks control the execution order of asynchronous code.",
      "Using too many nested callbacks creates \"callback hell\".",
      "Modern JavaScript prefers Promises over callbacks."
    ]
  },
  promises: {
    title: "JavaScript Promises",
    description: "JavaScript promises handle asynchronous operations gracefully.",
    intro: "JavaScript promises act like real-life promises. The code says \"I promise to get this data,\" and while it fetches the data in the background, the rest of the program keeps running. The promise eventually finishes and returns either the data or an error.",
    example: {
      language: "javascript",
      code: `/* this creates a promise */\nlet myPromise = new Promise(function(resolve, reject) {\n  resolve("Data fetched!");\n});\n\nmyPromise.then(result => console.log(result));`
    },
    keyPoints: [
      "A promise has three states: pending, fulfilled, or rejected.",
      "The \`then()\` method handles successful results.",
      "The \`catch()\` method handles errors and failures.",
      "Promises solve the callback hell problem."
    ]
  },
  "async-await": {
    title: "JavaScript Async/Await",
    description: "JavaScript async/await makes promises easier to read and write.",
    intro: "JavaScript added `async` and `await` to make asynchronous code look exactly like normal, synchronous code. Instead of chaining multiple `.then()` methods together, developers simply tell the code to pause and wait for the promise to finish.",
    example: {
      language: "javascript",
      code: `/* this uses async/await */\nasync function getData() {\n  let response = await fetch("data.json");\n  let data = await response.json();\n  console.log(data);\n}`
    },
    keyPoints: [
      "The \`async\` keyword turns a function into a promise.",
      "The \`await\` keyword pauses execution until the promise finishes.",
      "You can only use \`await\` inside an \`async\` function.",
      "It provides much cleaner error handling using \`try/catch\`."
    ]
  },
  dom: {
    title: "JavaScript HTML DOM",
    description: "JavaScript HTML DOM represents the page as a structured tree.",
    intro: "The Document Object Model (DOM) is an exact structural copy of the HTML page that the browser builds when the page loads. JavaScript uses this map to find elements, change text, and update CSS styles dynamically.",
    keyPoints: [
      "The DOM represents HTML as a tree of objects.",
      "JavaScript uses the DOM to manipulate the live page.",
      "The \`document\` object represents the entire HTML page.",
      "Changing the DOM updates the user's screen instantly."
    ]
  },
  "dom-methods": {
    title: "JavaScript HTML DOM Methods",
    description: "JavaScript DOM methods target and manipulate HTML elements.",
    intro: "JavaScript provides built-in methods to interact with the DOM tree. Developers use these methods to grab specific HTML tags by their ID or class name, and then change their content or styling without needing to reload the page.",
    example: {
      language: "javascript",
      code: `/* this uses DOM methods */\nlet title = document.getElementById("header");\ntitle.innerHTML = "New Welcome Message";\ntitle.style.color = "blue";`
    },
    keyPoints: [
      "\`getElementById()\` finds a single unique element.",
      "\`querySelector()\` finds elements using CSS selectors.",
      "The \`innerHTML\` property changes the HTML content inside.",
      "The \`style\` property applies inline CSS changes."
    ]
  },
  "dom-events": {
    title: "JavaScript HTML DOM Events",
    description: "JavaScript DOM events trigger code when users interact with the DOM.",
    intro: "JavaScript attaches event listeners directly to the DOM elements. Instead of using `onclick` in the HTML file, developers use JavaScript to listen for clicks behind the scenes. This keeps the HTML file clean and strictly focused on structure.",
    example: {
      language: "javascript",
      code: `/* this attaches an event listener */\nlet btn = document.getElementById("myBtn");\nbtn.addEventListener("click", function() {\n  alert("Button was clicked!");\n});`
    },
    keyPoints: [
      "\`addEventListener()\` attaches an event to an element.",
      "You can attach multiple events to the same element.",
      "It keeps JavaScript completely separate from HTML.",
      "\`removeEventListener()\` removes the event listener later."
    ]
  },
  "fetch-api": {
    title: "JavaScript Fetch API",
    description: "JavaScript Fetch API requests data from a web server.",
    intro: "JavaScript uses the Fetch API to ask a server for data behind the scenes. Without reloading the page, developers can pull in fresh weather data, stock prices, or new social media posts. The Fetch API relies entirely on Promises.",
    example: {
      language: "javascript",
      code: `/* this fetches data */\nfetch("https://api.example.com/data")\n  .then(response => response.json())\n  .then(data => console.log(data));`
    },
    keyPoints: [
      "The \`fetch()\` function starts the network request.",
      "It returns a Promise that resolves to a Response object.",
      "You must convert the response to JSON or text.",
      "Fetch replaces the older \`XMLHttpRequest\` method."
    ]
  },
  json: {
    title: "JavaScript JSON",
    description: "JSON securely transports text data across the internet.",
    intro: "JSON stands for JavaScript Object Notation. It looks exactly like a JavaScript object, but it is just plain text. Because it is plain text, any programming language can read it, making it the perfect format for sending data between a server and a web page.",
    example: {
      language: "javascript",
      code: `/* this parses JSON */\nlet jsonText = '{"name":"John", "age":30}';\nlet userObj = JSON.parse(jsonText);\nconsole.log(userObj.name);`
    },
    keyPoints: [
      "\`JSON.parse()\` converts a JSON string into a JavaScript object.",
      "\`JSON.stringify()\` converts a JavaScript object into a JSON string.",
      "JSON data requires double quotes around names and values.",
      "It cannot store functions or date objects directly."
    ]
  },
  "error-handling": {
    title: "JavaScript Error Handling",
    description: "JavaScript error handling prevents broken code from crashing the app.",
    intro: "JavaScript programs stop working completely if they hit an error. Developers use `try/catch` blocks to gracefully handle these errors. Instead of crashing, the code catches the mistake and runs a backup plan.",
    example: {
      language: "javascript",
      code: `/* this handles errors */\ntry {\n  fakeFunction();\n} catch (err) {\n  console.log("An error happened: " + err.message);\n} finally {\n  console.log("This runs no matter what.");\n}`
    },
    keyPoints: [
      "The \`try\` block holds code that might fail.",
      "The \`catch\` block runs only if an error occurs.",
      "The \`finally\` block runs regardless of success or failure.",
      "The \`throw\` statement creates custom errors."
    ]
  },
  classes: {
    title: "JavaScript Classes",
    description: "JavaScript classes provide blueprints for creating multiple objects.",
    intro: "JavaScript uses classes as templates to create objects that share the same structure. If a developer needs to build 50 different enemies for a game, they build one Enemy class and reuse it 50 times to save effort.",
    syntax: {
      language: "javascript",
      code: `/* class syntax */\nclass ClassName {\n  constructor() { ... }\n}`
    },
    example: {
      language: "javascript",
      code: `/* this creates a class */\nclass Car {\n  constructor(brand) {\n    this.carname = brand;\n  }\n}\nlet myCar = new Car("Ford");`
    },
    keyPoints: [
      "The \`class\` keyword defines the template.",
      "The \`constructor()\` method runs automatically when creating a new object.",
      "The \`new\` keyword creates an object from the class.",
      "Classes act as a cleaner syntax for older prototype patterns."
    ]
  },
  modules: {
    title: "JavaScript Modules",
    description: "JavaScript modules split large codebases into smaller files.",
    intro: "JavaScript files can quickly become too large to read or manage. Developers split the code into smaller, separate files called modules. They then export specific variables or functions from one file and import them into another.",
    example: {
      language: "javascript",
      code: `/* this exports and imports code */\n// inside person.js\nexport const name = "Jesse";\n\n// inside main.js\nimport { name } from "./person.js";`
    },
    keyPoints: [
      "The \`export\` keyword makes code available to other files.",
      "The \`import\` keyword pulls code in from other files.",
      "Modules strict mode automatically.",
      "HTML script tags require \`type=\"module\"\` to use them."
    ]
  },
  "es6-features": {
    title: "JavaScript ES6+ Features",
    description: "JavaScript ES6 introduced modern features to the language.",
    intro: "In 2015, JavaScript received a massive update known as ES6 (ECMAScript 2015). This update completely modernized the language by introducing new tools that made writing code faster, cleaner, and less prone to errors.",
    example: {
      language: "javascript",
      code: `/* this shows ES6 features */\n// Arrow Function\nconst multiply = (x, y) => x * y;\n\n// Template Literals\nlet name = "John";\nlet greeting = \`Welcome \${name}\`;`
    },
    keyPoints: [
      "ES6 added \`let\` and \`const\` for variable declarations.",
      "Arrow functions provided a shorter way to write functions.",
      "Template literals allowed easy variable injection into strings.",
      "Destructuring allowed quick extraction of array and object data."
    ]
  }
};
