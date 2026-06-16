import { TopicContent } from './contentMap';

export const typescriptData: Record<string, TopicContent> = {
  introduction: {
    title: "TypeScript Introduction",
    description: "TypeScript is JavaScript with strict rules for data types.",
    intro: "TypeScript catches silly mistakes before your code even runs. It is completely based on JavaScript, but it forces developers to define exactly what kind of data (like numbers or text) they are using. Browsers cannot read TypeScript, so it automatically converts itself into standard JavaScript.",
    keyPoints: [
      "Microsoft created and maintains TypeScript.",
      "It catches errors instantly while you type.",
      "TypeScript code converts perfectly into JavaScript.",
      "Large companies use it to prevent bugs."
    ]
  },
  setup: {
    title: "TypeScript Setup",
    description: "TypeScript installs globally using NPM.",
    intro: "Before writing TypeScript, developers must install the compiler tool on their computer. The compiler reads the special `.ts` files and translates them into normal `.js` files that web browsers can finally understand.",
    syntax: {
      language: "bash",
      code: `/* terminal commands */\nnpm install -g typescript\ntsc --init\ntsc filename.ts`
    },
    keyPoints: [
      "The \`tsc\` command stands for TypeScript Compiler.",
      "Running \`tsc filename.ts\` generates a JavaScript file.",
      "The \`--init\` flag creates a configuration file.",
      "Most modern frameworks like React setup TypeScript automatically."
    ]
  },
  types: {
    title: "TypeScript Simple Types",
    description: "TypeScript locks variables into specific data types.",
    intro: "In normal JavaScript, a variable can be a number on line one, and suddenly change to a text string on line two. TypeScript strictly forbids this. Developers use simple primitive types to lock down variables permanently.",
    example: {
      language: "typescript",
      code: `/* this sets primitive types */\nlet isDone: boolean = false;\nlet score: number = 100;\nlet playerName: string = "Alice";`
    },
    keyPoints: [
      "Use \`boolean\` for true or false values.",
      "Use \`number\` for decimals or whole numbers.",
      "Use \`string\` for text characters.",
      "Add the colon \`:\` to specify the type."
    ]
  },
  "type-inference": {
    title: "TypeScript Type Inference",
    description: "TypeScript guesses the correct data type automatically.",
    intro: "You don't always have to write out the data types manually. If you assign a value to a variable immediately, TypeScript acts like a detective and figures out the correct type behind the scenes.",
    example: {
      language: "typescript",
      code: `/* this uses inference */\nlet greeting = "Hello World"; // TypeScript knows this is a string\n\n// greeting = 42; // This causes a massive error!`
    },
    keyPoints: [
      "\"Inference\" means guessing automatically.",
      "It saves time and keeps the code clean.",
      "It still locks the type permanently after guessing.",
      "You only explicitly write types when you don't assign an initial value."
    ]
  },
  interfaces: {
    title: "TypeScript Interfaces",
    description: "Interfaces define the strict shape of a JavaScript object.",
    intro: "JavaScript objects hold multiple pieces of data. An Interface acts like a strict blueprint for an object. It guarantees that the object has exactly the right properties, and that each property holds the correct type of data.",
    example: {
      language: "typescript",
      code: `/* this creates an interface */\ninterface User {\n  name: string;\n  age: number;\n}\n\nconst player: User = {\n  name: "Bob",\n  age: 25\n};`
    },
    keyPoints: [
      "Interfaces start with a capital letter.",
      "They define the names and types of object properties.",
      "They prevent typos in property names.",
      "They do not compile into the final JavaScript code."
    ]
  },
  "type-aliases": {
    title: "TypeScript Type Aliases",
    description: "Type Aliases create custom names for any data type.",
    intro: "Sometimes writing out complex types gets repetitive and messy. A Type Alias lets developers create a brand new custom name for a specific type or combination of types. It works exactly like a variable, but for types instead of data.",
    example: {
      language: "typescript",
      code: `/* this creates a custom type */\ntype Score = number;\n\nlet currentScore: Score = 50;\nlet topScore: Score = 100;`
    },
    keyPoints: [
      "Use the \`type\` keyword to create an alias.",
      "They work for primitives, arrays, and objects.",
      "They keep code highly readable.",
      "They are very similar to Interfaces, but more flexible."
    ]
  },
  "union-types": {
    title: "TypeScript Union Types",
    description: "Union types allow a variable to hold multiple specific types.",
    intro: "Sometimes a variable legitimately needs to handle two different types of data. For example, a phone number might be a number (\`5551234\`) or a formatted text string (\`\"555-1234\"\`). Union types solve this problem.",
    example: {
      language: "typescript",
      code: `/* this uses a union type */\nfunction printID(id: number | string) {\n  console.log("The ID is: " + id);\n}\n\nprintID(101);\nprintID("A-101");`
    },
    keyPoints: [
      "Use the pipe symbol \`|\` to create a union.",
      "It means \"either this OR that\".",
      "It gives flexibility without losing strict safety.",
      "You often have to check the type before using the data."
    ]
  },
  "intersection-types": {
    title: "TypeScript Intersection Types",
    description: "Intersection types smash multiple custom types into a single type.",
    intro: "While a Union type is an \"OR\" statement, an Intersection type is an \"AND\" statement. It combines two completely separate interfaces or types together. The final variable must contain every single property from both original types.",
    example: {
      language: "typescript",
      code: `/* this combines types */\ninterface ErrorHandling {\n  success: boolean;\n  error?: string;\n}\n\ninterface ArtworksData {\n  artworks: { title: string }[];\n}\n\ntype ArtworksResponse = ArtworksData & ErrorHandling;`
    },
    keyPoints: [
      "Use the ampersand symbol \`&\` to create an intersection.",
      "It means \"this AND that\".",
      "It is commonly used when combining data from multiple API responses.",
      "If a property is missing, TypeScript throws an error."
    ]
  },
  generics: {
    title: "TypeScript Generics",
    description: "Generics act like variables for data types.",
    intro: "Sometimes developers write functions that should work with numbers, strings, or arrays, but they still want strict safety. Generics allow you to pass a type into a function as an argument, just like you pass normal data into a function.",
    example: {
      language: "typescript",
      code: `/* this uses a generic type */\nfunction identity<T>(arg: T): T {\n  return arg;\n}\n\nlet output1 = identity<string>("myString");\nlet output2 = identity<number>(100);`
    },
    keyPoints: [
      "Generics use angle brackets like \`<T>\`.",
      "The letter \`T\` stands for \"Type\".",
      "They make functions highly reusable without using the dangerous \`any\` type.",
      "TypeScript can usually infer the generic type automatically."
    ]
  },
  enums: {
    title: "TypeScript Enums",
    description: "Enums group related constant values together.",
    intro: "An Enum (short for Enumeration) is a special feature that creates a collection of related, unchangeable values. Developers use them for things that have a specific set of options, like the days of the week, or user permission levels.",
    example: {
      language: "typescript",
      code: `/* this creates an enum */\nenum UserRole {\n  Admin = "ADMIN",\n  Editor = "EDITOR",\n  Viewer = "VIEWER"\n}\n\nconst myRole: UserRole = UserRole.Admin;`
    },
    keyPoints: [
      "Enums can be numeric (0, 1, 2) or string-based (\"A\", \"B\", \"C\").",
      "String enums are usually easier to debug.",
      "They prevent spelling mistakes when typing out specific options.",
      "Unlike interfaces, Enums compile into actual JavaScript code."
    ]
  },
  tuples: {
    title: "TypeScript Tuples",
    description: "Tuples are arrays with a fixed length and strict types.",
    intro: "A standard array in TypeScript can hold as many items as you want. A Tuple is a strict array where you define exactly how many items it holds, and exactly what type of data belongs in each specific slot.",
    example: {
      language: "typescript",
      code: `/* this creates a tuple */\nlet myTuple: [number, string, boolean];\n\n// This works perfectly\nmyTuple = [1, "Alice", true];\n\n// myTuple = ["Alice", 1, true]; // Error: Wrong order!`
    },
    keyPoints: [
      "Define a Tuple using square brackets \`[type1, type2]\`.",
      "The order of the data must match the definition exactly.",
      "They are commonly used in React Hooks (like \`useState\`).",
      "You cannot add extra items beyond the defined length."
    ]
  },
  "type-assertions": {
    title: "TypeScript Type Assertions",
    description: "Type Assertions force TypeScript to accept a specific type.",
    intro: "Sometimes developers know more about a specific value than the TypeScript compiler does, especially when reading HTML elements from the DOM. A Type Assertion tells the compiler, \"Trust me, I know exactly what type this is.\"",
    example: {
      language: "typescript",
      code: `/* this forces a type assertion */\nconst myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;\n\n// Now TypeScript knows myCanvas has canvas-specific methods`
    },
    keyPoints: [
      "Use the \`as\` keyword to assert a type.",
      "It overrides TypeScript's internal guessing engine.",
      "It does not actually change or format the data itself.",
      "Only use it when you are absolutely certain of the data type."
    ]
  },
  functions: {
    title: "TypeScript Functions",
    description: "TypeScript strictly types function inputs and outputs.",
    intro: "Functions are the core building blocks of JavaScript. TypeScript allows developers to lock down exactly what type of data goes into a function as arguments, and exactly what type of data the function is allowed to return.",
    syntax: {
      language: "typescript",
      code: `/* this types a function */\nfunction addNumbers(a: number, b: number): number {\n  return a + b;\n}`
    },
    keyPoints: [
      "Define argument types inside the parentheses \`(a: number)\`.",
      "Define the return type after the parentheses \`(): number\`.",
      "Use \`void\` if the function does not return anything.",
      "TypeScript throws an error if you pass the wrong number of arguments."
    ]
  },
  classes: {
    title: "TypeScript Classes",
    description: "TypeScript adds strict types to Object-Oriented classes.",
    intro: "JavaScript uses classes to create blueprints for complex objects, like a Player or an Enemy in a game. TypeScript forces developers to declare every property and its type before the class even starts building the object.",
    example: {
      language: "typescript",
      code: `/* this creates a typed class */\nclass Player {\n  name: string;\n  score: number;\n\n  constructor(playerName: string) {\n    this.name = playerName;\n    this.score = 0;\n  }\n}`
    },
    keyPoints: [
      "You must declare all properties at the top of the class.",
      "The \`constructor\` initializes the actual data.",
      "Methods inside the class also require strict types.",
      "It prevents missing properties when creating new objects."
    ]
  },
  "access-modifiers": {
    title: "TypeScript Access Modifiers",
    description: "Access Modifiers protect class data from being changed accidentally.",
    intro: "In normal JavaScript, anyone can reach inside a class and change its data. TypeScript introduces Access Modifiers, which act like security guards. They decide exactly which parts of the code are allowed to view or modify specific class properties.",
    keyPoints: [
      "\`public\` allows any code anywhere to access the data (this is the default).",
      "\`private\` completely locks the data so only the class itself can see it.",
      "\`protected\` allows the class and any child classes to access the data.",
      "They prevent other developers from breaking the class logic."
    ]
  },
  decorators: {
    title: "TypeScript Decorators",
    description: "Decorators attach special behavior to classes and functions.",
    intro: "A Decorator is a special type of declaration that attaches extra features to a class or a function without changing its internal code. You often see them used heavily in popular frameworks like Angular or NestJS.",
    example: {
      language: "typescript",
      code: `/* this uses a decorator */\n@LogClassCreation\nclass UserProfile {\n  constructor() {\n    console.log("Profile created");\n  }\n}`
    },
    keyPoints: [
      "Decorators always start with the \`@\` symbol.",
      "They are an advanced, experimental TypeScript feature.",
      "You must enable them manually in the \`tsconfig.json\` file.",
      "They are essentially just functions that wrap other functions."
    ]
  },
  modules: {
    title: "TypeScript Modules",
    description: "TypeScript Modules share code securely between different files.",
    intro: "A massive application cannot live in one single file. TypeScript uses the exact same Module system as modern JavaScript, allowing developers to split their code into hundreds of small files and link them together perfectly.",
    example: {
      language: "typescript",
      code: `/* this exports and imports code */\n// file1.ts\nexport const apiKey = "12345";\n\n// file2.ts\nimport { apiKey } from './file1';\nconsole.log(apiKey);`
    },
    keyPoints: [
      "Use \`export\` to make a variable or function available to other files.",
      "Use \`import\` to bring that code into a new file.",
      "Every file containing an import or export is considered a Module.",
      "It keeps large codebases organized and maintainable."
    ]
  },
  "utility-types": {
    title: "TypeScript Utility Types",
    description: "Utility Types transform existing types into new shapes instantly.",
    intro: "Sometimes you have a strict Interface, but you only need a few properties from it, or you want to make all the properties optional temporarily. TypeScript provides built-in Utility Types to transform your data structures without writing brand new ones from scratch.",
    example: {
      language: "typescript",
      code: `/* this makes an interface optional */\ninterface User {\n  name: string;\n  age: number;\n}\n\n// Partial makes name and age optional\ntype OptionalUser = Partial<User>;`
    },
    keyPoints: [
      "\`Partial<T>\` makes all properties optional.",
      "\`Required<T>\` makes all properties required.",
      "\`Pick<T, K>\` grabs specific properties from a type.",
      "\`Omit<T, K>\` deletes specific properties from a type."
    ]
  },
  tsconfig: {
    title: "TypeScript tsconfig.json",
    description: "The tsconfig.json file configures the entire TypeScript compiler.",
    intro: "The TypeScript compiler (\`tsc\`) needs instructions on exactly how strict to be and what kind of JavaScript file to spit out at the end. The \`tsconfig.json\` file sits at the root of your project and holds all of these critical settings.",
    syntax: {
      language: "json",
      code: `/* this is a configuration file */\n{\n  "compilerOptions": {\n    "target": "es2022",\n    "module": "commonjs",\n    "strict": true\n  }\n}`
    },
    keyPoints: [
      "It is created automatically by running \`tsc --init\`.",
      "The \`target\` specifies the output JavaScript version (like ES5 or ES2022).",
      "The \`strict\` flag turns on maximum safety features.",
      "It controls where the final compiled files are saved."
    ]
  },
  "strict-mode": {
    title: "TypeScript Strict Mode",
    description: "Strict Mode forces developers to write the safest code possible.",
    intro: "By default, TypeScript lets a few sloppy coding habits slide. Activating Strict Mode in the configuration file turns on the maximum level of type checking. It prevents developers from taking shortcuts, resulting in virtually bug-free code.",
    keyPoints: [
      "Enable it by setting \`\"strict\": true\` in \`tsconfig.json\`.",
      "It blocks the dangerous \`any\` type when the compiler can't guess the type.",
      "It prevents errors where variables might accidentally be \`null\` or \`undefined\`.",
      "Professional teams always keep Strict Mode turned on."
    ]
  }
};
