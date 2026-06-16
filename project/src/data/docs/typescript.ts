import { TopicContent } from './contentMap';

export const typescriptData: Record<string, TopicContent> = {
  introduction: {
    title: "TypeScript Introduction",
    description: "TypeScript is a syntactic superset of JavaScript which adds static typing.",
    intro: "TypeScript is JavaScript with added syntax for types. This means that TypeScript is a strictly typed superset of JavaScript, which compiles to plain JavaScript.",
    keyPoints: [
      "TypeScript catches errors at compile time rather than runtime.",
      "TypeScript provides better developer tooling and IDE support.",
      "TypeScript files use the `.ts` extension (or `.tsx` for React components)."
    ]
  },
  setup: {
    title: "TypeScript Setup",
    description: "How to set up TypeScript in a project.",
    intro: "To use TypeScript, you typically need to install it via npm, and then configure it using a `tsconfig.json` file.",
    syntax: {
      language: "bash",
      code: `npm install -g typescript\ntsc --init`
    }
  },
  types: {
    title: "TypeScript Simple Types",
    description: "TypeScript supports some simple types (primitives) you may know.",
    intro: "There are three main primitives in JavaScript and TypeScript: `boolean`, `number`, and `string`. TypeScript also has `any`, `unknown`, `never`, etc.",
    example: {
      language: "typescript",
      code: `let isDone: boolean = false;\nlet lines: number = 42;\nlet name: string = "Anders";`
    }
  },
  "type-inference": {
    title: "TypeScript Type Inference",
    description: "TypeScript can infer the type of a variable when you don't provide an explicit type.",
    intro: "If a variable is initialized with a value, TypeScript will guess the type based on the initial value.",
    example: {
      language: "typescript",
      code: `let myName = "Alice"; // Inferred as string\n// myName = 42; // Error: Type 'number' is not assignable to type 'string'.`
    }
  },
  interfaces: {
    title: "TypeScript Interfaces",
    description: "Interfaces are used to define the structure of an object.",
    intro: "Interfaces define properties and their types, which an object must have to be considered of that interface type.",
    syntax: {
      language: "typescript",
      code: `interface Point {\n  x: number;\n  y: number;\n}\n\nfunction printCoord(pt: Point) {\n  console.log("The coordinate's x value is " + pt.x);\n  console.log("The coordinate's y value is " + pt.y);\n}`
    }
  },
  "type-aliases": {
    title: "TypeScript Type Aliases",
    description: "Type Aliases allow defining types with a custom name.",
    intro: "Type Aliases can be used for primitives like string or more complex types such as objects and arrays.",
    example: {
      language: "typescript",
      code: `type ID = number | string;\n\nfunction printId(id: ID) {\n  console.log("Your ID is: " + id);\n}`
    }
  },
  "union-types": {
    title: "TypeScript Union Types",
    description: "Union types are used when a value can be more than a single type.",
    intro: "Such as when a property would be string or number. You separate the types with a pipe `|`.",
    example: {
      language: "typescript",
      code: `function printStatusCode(code: string | number) {\n  console.log(\`My status code is \${code}.\`);\n}`
    }
  },
  "intersection-types": {
    title: "TypeScript Intersection Types",
    description: "Intersection types are closely related to union types, but they are used very differently.",
    intro: "An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need.",
    example: {
      language: "typescript",
      code: `interface BusinessPartner {\n  name: string;\n  credit: number;\n}\n\ninterface Identity {\n  id: number;\n  name: string;\n}\n\ntype Employee = BusinessPartner & Identity;`
    }
  },
  generics: {
    title: "TypeScript Generics",
    description: "Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.",
    intro: "Generics make it easier to write reusable code.",
    example: {
      language: "typescript",
      code: `function identity<Type>(arg: Type): Type {\n  return arg;\n}\n\nlet output = identity<string>("myString");`
    }
  },
  enums: {
    title: "TypeScript Enums",
    description: "An enum is a special class that represents a group of constants (unchangeable variables).",
    intro: "Enums come in two flavors string and numeric.",
    example: {
      language: "typescript",
      code: `enum Direction {\n  Up = 1,\n  Down,\n  Left,\n  Right,\n}`
    }
  },
  tuples: {
    title: "TypeScript Tuples",
    description: "A tuple is a typed array with a pre-defined length and types for each index.",
    intro: "Tuples are great because they allow each element in the array to be a known type of value.",
    example: {
      language: "typescript",
      code: `let ourTuple: [number, boolean, string];\n\n// initialize correctly\nourTuple = [5, false, 'Coding God was here'];`
    }
  },
  "type-assertions": {
    title: "TypeScript Type Assertions",
    description: "Sometimes you will have information about the type of a value that TypeScript can't know about.",
    intro: "In this situation, you can use a type assertion to specify a more specific type.",
    example: {
      language: "typescript",
      code: `const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;`
    }
  },
  functions: {
    title: "TypeScript Functions",
    description: "TypeScript has specific syntax for typing function parameters and return values.",
    intro: "You can add types to each of the parameters and then to the function itself to add a return type.",
    syntax: {
      language: "typescript",
      code: `function multiply(a: number, b: number): number {\n  return a * b;\n}`
    }
  },
  classes: {
    title: "TypeScript Classes",
    description: "TypeScript adds types and visibility modifiers to JavaScript classes.",
    intro: "Members of a class (properties & methods) are typed using type annotations, similar to variables.",
    example: {
      language: "typescript",
      code: `class Person {\n  name: string;\n  constructor(name: string) {\n    this.name = name;\n  }\n  getName(): string {\n    return this.name;\n  }\n}`
    }
  },
  "access-modifiers": {
    title: "TypeScript Access Modifiers",
    description: "Class members can be given special modifiers which affect visibility.",
    intro: "There are three main access modifiers in TypeScript: `public`, `private`, and `protected`.",
    keyPoints: [
      "`public` - (default) allows access to the class member from anywhere",
      "`private` - only allows access to the class member from within the class",
      "`protected` - allows access to the class member from itself and any classes that inherit it"
    ]
  },
  decorators: {
    title: "TypeScript Decorators",
    description: "Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members.",
    intro: "Decorators are a stage 2 proposal for JavaScript and are available as an experimental feature of TypeScript.",
    example: {
      language: "typescript",
      code: `function sealed(constructor: Function) {\n  Object.seal(constructor);\n  Object.seal(constructor.prototype);\n}`
    }
  },
  modules: {
    title: "TypeScript Modules",
    description: "TypeScript shares the same module concept as JavaScript.",
    intro: "You can use `import` and `export` to share code between files.",
    example: {
      language: "typescript",
      code: `// math.ts\nexport function add(x: number, y: number): number {\n  return x + y;\n}\n\n// app.ts\nimport { add } from './math';\nconsole.log(add(10, 20));`
    }
  },
  "utility-types": {
    title: "TypeScript Utility Types",
    description: "TypeScript comes with a large number of types that can help with some common type manipulation.",
    intro: "Common utility types include `Partial<T>`, `Required<T>`, `Readonly<T>`, `Record<K, T>`, `Pick<T, K>`, and `Omit<T, K>`.",
    example: {
      language: "typescript",
      code: `interface Point {\n  x: number;\n  y: number;\n}\n\nlet pt: Partial<Point> = {}; // Valid`
    }
  },
  tsconfig: {
    title: "TypeScript tsconfig.json",
    description: "The tsconfig.json file specifies the root files and the compiler options required to compile the project.",
    intro: "When you run `tsc --init` it creates a `tsconfig.json` file in your directory.",
    syntax: {
      language: "json",
      code: `{\n  "compilerOptions": {\n    "target": "es5",\n    "module": "commonjs",\n    "strict": true\n  }\n}`
    }
  },
  "strict-mode": {
    title: "TypeScript Strict Mode",
    description: "Strict Mode enforces stricter type checking.",
    intro: "Enabling the `strict` flag enables a wide range of type checking behavior that results in stronger guarantees of program correctness.",
    keyPoints: [
      "`noImplicitAny` raises an error on expressions and declarations with an implied `any` type.",
      "`strictNullChecks` prevents `null` and `undefined` from being assigned to other types."
    ]
  }
};
