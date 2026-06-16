import { TopicContent } from './contentMap';

export const javascriptData: Record<string, TopicContent> = {
  introduction: {
    title: "JavaScript Introduction",
    description: "JavaScript is the world's most popular programming language.",
    intro: "JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.",
    keyPoints: [
      "JavaScript can change HTML content.",
      "JavaScript can change HTML attribute values.",
      "JavaScript can change HTML styles (CSS).",
      "JavaScript can hide HTML elements."
    ]
  },
  "where-to": {
    title: "JavaScript Where To",
    description: "Where to place JavaScript in an HTML document.",
    intro: "In HTML, JavaScript code is inserted between `<script>` and `</script>` tags. Scripts can be placed in the `<body>`, or in the `<head>` section of an HTML page, or in both.",
    example: {
      language: "html",
      code: `<body>\n  <h2>JavaScript in Body</h2>\n  <p id="demo"></p>\n  <script>\n    document.getElementById("demo").innerHTML = "My First JavaScript";\n  </script>\n</body>`
    }
  },
  output: {
    title: "JavaScript Output",
    description: "JavaScript can display data in different ways.",
    intro: "JavaScript can \"display\" data in different ways: writing into an HTML element (using `innerHTML`), writing into the HTML output using `document.write()`, writing into an alert box using `window.alert()`, or writing into the browser console using `console.log()`.",
    syntax: {
      language: "javascript",
      code: `console.log("Hello World");\nalert("Hello World");`
    }
  },
  statements: {
    title: "JavaScript Statements",
    description: "A computer program is a list of instructions to be executed by a computer.",
    intro: "In a programming language, these programming instructions are called statements. A JavaScript program is a list of programming statements.",
    example: {
      language: "javascript",
      code: `let x, y, z;  // Statement 1\nx = 5;        // Statement 2\ny = 6;        // Statement 3\nz = x + y;    // Statement 4`
    }
  },
  syntax: {
    title: "JavaScript Syntax",
    description: "JavaScript syntax is the set of rules, how JavaScript programs are constructed.",
    intro: "JavaScript syntax defines two types of values: Fixed values (Literals) and Variable values (Variables).",
    keyPoints: [
      "Numbers are written with or without decimals.",
      "Strings are text, written within double or single quotes.",
      "Variables are used to store data values.",
      "JavaScript is case sensitive."
    ]
  },
  comments: {
    title: "JavaScript Comments",
    description: "JavaScript comments can be used to explain JavaScript code, and to make it more readable.",
    intro: "Single line comments start with `//`. Multi-line comments start with `/*` and end with `*/`.",
    syntax: {
      language: "javascript",
      code: `// Change heading:\ndocument.getElementById("myH").innerHTML = "My First Page";\n\n/*\nThe code below will change\nthe heading with id = "myH"\n*/\ndocument.getElementById("myH").innerHTML = "My First Page";`
    }
  },
  variables: {
    title: "JavaScript Variables",
    description: "Variables are containers for storing data values.",
    intro: "In JavaScript, variables can be declared using `var`, `let`, or `const`. It is recommended to use `let` and `const` in modern JavaScript.",
    example: {
      language: "javascript",
      code: `let x = 5;\nlet y = 6;\nlet z = x + y;`
    }
  },
  let: {
    title: "JavaScript Let",
    description: "The let keyword was introduced in ES6 (2015).",
    intro: "Variables defined with `let` cannot be Redeclared. Variables defined with `let` must be Declared before use. Variables defined with `let` have Block Scope.",
    example: {
      language: "javascript",
      code: `{
  let x = 2;
}
// x can NOT be used here`
    }
  },
  const: {
    title: "JavaScript Const",
    description: "The const keyword was introduced in ES6 (2015).",
    intro: "Variables defined with `const` cannot be Redeclared. Variables defined with `const` cannot be Reassigned. Variables defined with `const` have Block Scope.",
    keyPoints: [
      "Always declare a variable with const when you know that the value should not be changed.",
      "Use const when you declare a new Array, Object, Function, or RegExp."
    ]
  },
  operators: {
    title: "JavaScript Operators",
    description: "JavaScript operators are used to perform different types of mathematical and logical computations.",
    intro: "JavaScript operators include Arithmetic Operators, Assignment Operators, Comparison Operators, String Operators, Logical Operators, Bitwise Operators, Ternary Operators, and Type Operators.",
    example: {
      language: "javascript",
      code: `let x = 5;\nlet y = 2;\nlet z = x * y; // z will be 10`
    }
  },
  arithmetic: {
    title: "JavaScript Arithmetic",
    description: "Arithmetic operators perform arithmetic on numbers (literals or variables).",
    intro: "Common arithmetic operators are `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulus/remainder), `**` (exponentiation), `++` (increment), and `--` (decrement).",
    example: {
      language: "javascript",
      code: `let x = 100 + 50;\nlet y = x * 2;`
    }
  },
  assignment: {
    title: "JavaScript Assignment",
    description: "Assignment operators assign values to JavaScript variables.",
    intro: "The simple assignment operator (`=`) assigns a value to a variable. The addition assignment operator (`+=`) adds a value to a variable.",
    referenceTable: {
      headers: ["Operator", "Example", "Same As"],
      rows: [
        ["=", "x = y", "x = y"],
        ["+=", "x += y", "x = x + y"],
        ["-=", "x -= y", "x = x - y"],
        ["*=", "x *= y", "x = x * y"]
      ]
    }
  },
  "data-types": {
    title: "JavaScript Data Types",
    description: "JavaScript variables can hold many data types.",
    intro: "JavaScript has 8 Datatypes: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object.",
    keyPoints: [
      "The Object Datatype can contain: An object, An array, A date."
    ],
    example: {
      language: "javascript",
      code: `let length = 16;                               // Number\nlet lastName = "Johnson";                      // String\nlet x = {firstName:"John", lastName:"Doe"};    // Object`
    }
  },
  functions: {
    title: "JavaScript Functions",
    description: "A JavaScript function is a block of code designed to perform a particular task.",
    intro: "A JavaScript function is executed when \"something\" invokes it (calls it).",
    syntax: {
      language: "javascript",
      code: `function name(parameter1, parameter2, parameter3) {\n  // code to be executed\n}`
    },
    example: {
      language: "javascript",
      code: `function myFunction(p1, p2) {\n  return p1 * p2;   // The function returns the product of p1 and p2\n}\n\nlet result = myFunction(4, 3); // result will be 12`
    }
  },
  objects: {
    title: "JavaScript Objects",
    description: "Objects are variables too. But objects can contain many values.",
    intro: "You define (and create) a JavaScript object with an object literal.",
    example: {
      language: "javascript",
      code: `const car = {type:"Fiat", model:"500", color:"white"};\n\n// Accessing object properties\nconsole.log(car.type);\nconsole.log(car["model"]);`
    }
  },
  events: {
    title: "JavaScript Events",
    description: "HTML events are \"things\" that happen to HTML elements.",
    intro: "When JavaScript is used in HTML pages, JavaScript can \"react\" on these events. Here are some examples of HTML events: an HTML web page has finished loading, an HTML input field was changed, an HTML button was clicked.",
    example: {
      language: "html",
      code: `<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>\n<p id="demo"></p>`
    }
  },
  strings: {
    title: "JavaScript Strings",
    description: "JavaScript strings are for storing and manipulating text.",
    intro: "A JavaScript string is zero or more characters written inside quotes. You can use single or double quotes.",
    syntax: {
      language: "javascript",
      code: `let text = "John Doe";\nlet carName1 = "Volvo XC60";  // Double quotes\nlet carName2 = 'Volvo XC60';  // Single quotes`
    }
  },
  "string-methods": {
    title: "JavaScript String Methods",
    description: "String methods help you to work with strings.",
    intro: "Common string methods include `length`, `slice()`, `substring()`, `substr()`, `replace()`, `replaceAll()`, `toUpperCase()`, `toLowerCase()`, `concat()`, `trim()`, `trimStart()`, `trimEnd()`, `padStart()`, `padEnd()`, `charAt()`, `charCodeAt()`, `split()`.",
    example: {
      language: "javascript",
      code: `let text = "Apple, Banana, Kiwi";\nlet part = text.slice(7, 13); // part will be "Banana"`
    }
  },
  arrays: {
    title: "JavaScript Arrays",
    description: "JavaScript arrays are used to store multiple values in a single variable.",
    intro: "It is a common practice to declare arrays with the `const` keyword.",
    example: {
      language: "javascript",
      code: `const cars = ["Saab", "Volvo", "BMW"];\nlet car = cars[0]; // Accessing the first element`
    }
  },
  "array-methods": {
    title: "JavaScript Array Methods",
    description: "Array methods help you to work with arrays.",
    intro: "Common array methods include `length`, `toString()`, `pop()`, `push()`, `shift()`, `unshift()`, `join()`, `delete`, `concat()`, `flat()`, `splice()`, and `slice()`.",
    example: {
      language: "javascript",
      code: `const fruits = ["Banana", "Orange", "Apple", "Mango"];\nfruits.push("Kiwi"); // Adds a new element ("Kiwi") to fruits`
    }
  },
  conditions: {
    title: "JavaScript if...else",
    description: "Conditional statements are used to perform different actions based on different conditions.",
    intro: "In JavaScript we have the following conditional statements: `if` to specify a block of code to be executed, if a specified condition is true, `else` to specify a block of code to be executed, if the same condition is false, `else if` to specify a new condition to test, if the first condition is false, `switch` to specify many alternative blocks of code to be executed.",
    example: {
      language: "javascript",
      code: `if (time < 10) {\n  greeting = "Good morning";\n} else if (time < 20) {\n  greeting = "Good day";\n} else {\n  greeting = "Good evening";\n}`
    }
  },
  switch: {
    title: "JavaScript Switch",
    description: "The switch statement is used to perform different actions based on different conditions.",
    intro: "Use the `switch` statement to select one of many code blocks to be executed.",
    example: {
      language: "javascript",
      code: `switch(new Date().getDay()) {\n  case 6:\n    text = "Today is Saturday";\n    break;\n  case 0:\n    text = "Today is Sunday";\n    break;\n  default:\n    text = "Looking forward to the Weekend";\n}`
    }
  },
  "for-loop": {
    title: "JavaScript For Loop",
    description: "Loops can execute a block of code a number of times.",
    intro: "The `for` statement creates a loop with 3 optional expressions: Statement 1 is executed (one time) before the execution of the code block. Statement 2 defines the condition for executing the code block. Statement 3 is executed (every time) after the code block has been executed.",
    example: {
      language: "javascript",
      code: `for (let i = 0; i < 5; i++) {\n  text += "The number is " + i + "<br>";\n}`
    }
  },
  "while-loop": {
    title: "JavaScript While Loop",
    description: "The while loop loops through a block of code as long as a specified condition is true.",
    intro: "The `while` loop loops through a block of code as long as a specified condition is true.",
    example: {
      language: "javascript",
      code: `let i = 0;\nwhile (i < 10) {\n  text += "The number is " + i;\n  i++;\n}`
    }
  },
  break: {
    title: "JavaScript Break and Continue",
    description: "The break statement \"jumps out\" of a loop.",
    intro: "The `break` statement jumps out of a loop. The `continue` statement jumps over one iteration in the loop.",
    example: {
      language: "javascript",
      code: `for (let i = 0; i < 10; i++) {\n  if (i === 3) { break; }\n  text += "The number is " + i + "<br>";\n}`
    }
  },
  "type-conversion": {
    title: "JavaScript Type Conversion",
    description: "JavaScript variables can be converted to a new variable and another data type.",
    intro: "JavaScript variables can be converted to a new variable and another data type by the use of a JavaScript function or automatically by JavaScript itself.",
    example: {
      language: "javascript",
      code: `Number("3.14")    // Returns 3.14\nString(123)       // Returns "123"\nString(100 + 23)  // Returns "123"`
    }
  },
  typeof: {
    title: "JavaScript typeof",
    description: "You can use the typeof operator to find the data type of a JavaScript variable.",
    intro: "In JavaScript there are 5 different data types that can contain values: string, number, boolean, object, function. There are 6 types of objects: Object, Date, Array, String, Number, Boolean. And 2 data types that cannot contain values: null, undefined.",
    example: {
      language: "javascript",
      code: `typeof "John"         // Returns "string"\ntypeof 3.14           // Returns "number"\ntypeof false          // Returns "boolean"\ntypeof {name:'John'}  // Returns "object"`
    }
  },
  scope: {
    title: "JavaScript Scope",
    description: "Scope determines the accessibility (visibility) of variables.",
    intro: "JavaScript has 3 types of scope: Block scope, Function scope, and Global scope.",
    keyPoints: [
      "Variables declared inside a { } block cannot be accessed from outside the block.",
      "Variables defined inside a function are not accessible (visible) from outside the function."
    ]
  },
  hoisting: {
    title: "JavaScript Hoisting",
    description: "Hoisting is JavaScript's default behavior of moving declarations to the top.",
    intro: "In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.",
    keyPoints: [
      "JavaScript only hoists declarations, not initializations.",
      "Variables defined with `let` and `const` are hoisted to the top of the block, but not initialized. Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared."
    ]
  },
  closures: {
    title: "JavaScript Closures",
    description: "JavaScript variables can belong to the local or global scope. Global variables can be made local (private) with closures.",
    intro: "A closure is a function having access to the parent scope, even after the parent function has closed.",
    example: {
      language: "javascript",
      code: `const add = (function () {\n  let counter = 0;\n  return function () {counter += 1; return counter}\n})();\n\nadd();\nadd();\nadd();\n// the counter is now 3`
    }
  },
  callbacks: {
    title: "JavaScript Callbacks",
    description: "A callback is a function passed as an argument to another function.",
    intro: "This technique allows a function to call another function. A callback function can run after another function has finished.",
    example: {
      language: "javascript",
      code: `setTimeout(myFunction, 3000);\n\nfunction myFunction() {\n  document.getElementById("demo").innerHTML = "I love You !!";\n}`
    }
  },
  promises: {
    title: "JavaScript Promises",
    description: "A Promise is a JavaScript object that links producing code and consuming code.",
    intro: "A JavaScript Promise object contains both the producing code and calls to the consuming code.",
    example: {
      language: "javascript",
      code: `let myPromise = new Promise(function(myResolve, myReject) {\n// "Producing Code" (May take some time)\n\n  myResolve(); // when successful\n  myReject();  // when error\n});\n\n// "Consuming Code" (Must wait for a fulfilled Promise)\nmyPromise.then(\n  function(value) { /* code if successful */ },\n  function(error) { /* code if some error */ }\n);`
    }
  },
  "async-await": {
    title: "JavaScript Async/Await",
    description: "Async and Await make promises easier to write.",
    intro: "The keyword `async` before a function makes the function return a promise. The keyword `await` before a function makes the function wait for a promise.",
    example: {
      language: "javascript",
      code: `async function myDisplay() {\n  let myPromise = new Promise(function(resolve, reject) {\n    resolve("I love You !!");\n  });\n  document.getElementById("demo").innerHTML = await myPromise;\n}`
    }
  },
  dom: {
    title: "JavaScript HTML DOM",
    description: "With the HTML DOM, JavaScript can access and change all the elements of an HTML document.",
    intro: "When a web page is loaded, the browser creates a Document Object Model of the page. The HTML DOM model is constructed as a tree of Objects.",
    keyPoints: [
      "JavaScript can change all the HTML elements in the page.",
      "JavaScript can change all the HTML attributes in the page.",
      "JavaScript can change all the CSS styles in the page."
    ]
  },
  "dom-methods": {
    title: "JavaScript HTML DOM Methods",
    description: "HTML DOM methods are actions you can perform (on HTML Elements).",
    intro: "HTML DOM properties are values (of HTML Elements) that you can set or change. The most common way to access an HTML element is to use the id of the element.",
    example: {
      language: "javascript",
      code: `document.getElementById("demo").innerHTML = "Hello World!";`
    }
  },
  "dom-events": {
    title: "JavaScript HTML DOM Events",
    description: "HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.",
    intro: "Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).",
    example: {
      language: "javascript",
      code: `document.getElementById("myBtn").onclick = displayDate;`
    }
  },
  "fetch-api": {
    title: "JavaScript Fetch API",
    description: "The Fetch API interface allows web browser to make HTTP requests to web servers.",
    intro: "No need for XMLHttpRequest anymore. The Fetch API is Promise-based.",
    example: {
      language: "javascript",
      code: `let file = "fetch_info.txt";\nfetch (file)\n.then(x => x.text())\n.then(y => document.getElementById("demo").innerHTML = y);`
    }
  },
  json: {
    title: "JavaScript JSON",
    description: "JSON is a format for storing and transporting data.",
    intro: "JSON stands for JavaScript Object Notation. It is often used when data is sent from a server to a web page.",
    example: {
      language: "javascript",
      code: `let text = '{ "employees" : [' +\n'{ "firstName":"John" , "lastName":"Doe" },' +\n'{ "firstName":"Anna" , "lastName":"Smith" },' +\n'{ "firstName":"Peter" , "lastName":"Jones" } ]}';\n\nconst obj = JSON.parse(text);`
    }
  },
  "error-handling": {
    title: "JavaScript Errors",
    description: "Throw, and Try...Catch...Finally",
    intro: "The `try` statement defines a code block to run (to try). The `catch` statement defines a code block to handle any error. The `finally` statement defines a code block to run regardless of the result. The `throw` statement defines a custom error.",
    example: {
      language: "javascript",
      code: `try {\n  Block of code to try\n}\ncatch(err) {\n  Block of code to handle errors\n}`
    }
  },
  classes: {
    title: "JavaScript Classes",
    description: "JavaScript Classes are templates for JavaScript Objects.",
    intro: "Use the keyword `class` to create a class. Always add a method named `constructor()`.",
    syntax: {
      language: "javascript",
      code: `class ClassName {\n  constructor() { ... }\n}`
    },
    example: {
      language: "javascript",
      code: `class Car {\n  constructor(name, year) {\n    this.name = name;\n    this.year = year;\n  }\n}\n\nconst myCar1 = new Car("Ford", 2014);`
    }
  },
  modules: {
    title: "JavaScript Modules",
    description: "JavaScript modules allow you to break up your code into separate files.",
    intro: "This makes it easier to maintain the code-base. Modules are imported from external files with the `import` statement. Modules also rely on `type=\"module\"` in the `<script>` tag.",
    example: {
      language: "javascript",
      code: `// person.js\nexport const name = "Jesse";\nexport const age = 40;\n\n// message.js\nimport { name, age } from "./person.js";`
    }
  },
  "es6-features": {
    title: "JavaScript ES6+ Features",
    description: "ECMAScript 2015, also known as ES6, introduced several new features.",
    intro: "Features like `let`, `const`, Arrow Functions, For/of loop, Map Objects, Set Objects, Classes, Promises, Symbol, and Default Parameters were introduced.",
    example: {
      language: "javascript",
      code: `// Arrow Functions\nconst x = (x, y) => x * y;\n\n// Template Literals\nlet name = "John";\nlet text = \`Welcome \${name}\`;`
    }
  }
};
