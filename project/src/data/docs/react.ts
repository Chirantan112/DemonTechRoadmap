import { TopicContent } from './contentMap';

export const reactData: Record<string, TopicContent> = {
  introduction: {
    title: "React Introduction",
    description: "React is a JavaScript library for building fast user interfaces.",
    intro: "React lets developers build dynamic single-page applications. Instead of building one giant HTML file, developers use React to create small, reusable chunks of code called components. Facebook created and maintains React.",
    keyPoints: [
      "React builds interactive user interfaces.",
      "It uses reusable UI components.",
      "It is maintained by Facebook.",
      "It updates the screen incredibly fast."
    ]
  },
  setup: {
    title: "React Setup",
    description: "React requires a quick project setup to get started.",
    intro: "Developers do not usually write React directly in a standard HTML file. Instead, they use a tool like Vite or Next.js to generate a complete React project folder automatically. This sets up all the necessary files instantly.",
    syntax: {
      language: "bash",
      code: `/* terminal commands */\nnpm create vite@latest my-app -- --template react\ncd my-app\nnpm install\nnpm run dev`
    },
    keyPoints: [
      "Vite is the modern, fast way to build React apps.",
      "Next.js is the popular choice for full-stack React.",
      "Create React App is no longer recommended.",
      "The \`npm run dev\` command starts a local server."
    ]
  },
  jsx: {
    title: "React JSX",
    description: "JSX allows developers to write HTML directly inside JavaScript.",
    intro: "JSX stands for JavaScript XML. It looks exactly like HTML, but it lives completely inside a JavaScript file. React takes this JSX code and converts it into real HTML elements that the browser can understand.",
    example: {
      language: "jsx",
      code: `/* this creates JSX */\nconst title = <h1>Hello React!</h1>;\nconst page = (\n  <div>\n    {title}\n    <p>This is JSX.</p>\n  </div>\n);`
    },
    keyPoints: [
      "JSX blends HTML and JavaScript together.",
      "It requires wrapping multiple elements in a single parent.",
      "You can inject JavaScript variables using curly braces \`{}\`.",
      "Browsers cannot read JSX without a compiler like Babel."
    ]
  },
  components: {
    title: "React Components",
    description: "Components act like custom HTML tags in React.",
    intro: "Components are independent, reusable pieces of a website, like a navigation bar or a button. Developers write a component once and use it everywhere. Modern React relies heavily on functional components.",
    example: {
      language: "jsx",
      code: `/* this creates a component */\nfunction Greeting() {\n  return <h2>Welcome to the website!</h2>;\n}\n\n// Usage: <Greeting />`
    },
    keyPoints: [
      "Components always start with a capital letter.",
      "They return JSX code to render on the screen.",
      "Functional components are the standard approach.",
      "Class components are the older, outdated method."
    ]
  },
  props: {
    title: "React Props",
    description: "Props pass data from a parent component to a child component.",
    intro: "Props are custom HTML attributes for React components. If you build a Profile component, you can use props to pass different names to it. Props are strictly read-only; the child component cannot change them.",
    example: {
      language: "jsx",
      code: `/* this uses props */\nfunction User(props) {\n  return <h2>Hello, {props.name}!</h2>;\n}\n\n// Usage: <User name="Alice" />`
    },
    keyPoints: [
      "\"Props\" stands for properties.",
      "They pass data downwards through the component tree.",
      "They act just like function arguments.",
      "A component must never modify its own props."
    ]
  },
  state: {
    title: "React State",
    description: "React state stores data that changes over time.",
    intro: "State acts as the memory of a React component. While props are passed in from the outside, state is managed entirely on the inside. When state data changes, React automatically refreshes the component to show the new data.",
    keyPoints: [
      "State tracks data like user input or score.",
      "Updating state forces the component to re-render.",
      "State is completely private to the component.",
      "Functional components manage state using Hooks."
    ]
  },
  "use-state": {
    title: "React useState Hook",
    description: "The useState Hook creates state variables in functional components.",
    intro: "Developers use the `useState` Hook to add memory to a component. It returns two things: the current value of the state, and a function specifically designed to update that value safely.",
    example: {
      language: "jsx",
      code: `/* this uses state */\nimport { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>Count is {count}</button>;\n}`
    },
    keyPoints: [
      "Import \`useState\` from the \`react\` library.",
      "The Hook returns an array with a variable and a setter function.",
      "Never modify the state variable directly.",
      "Always use the setter function (like \`setCount\`) to update it."
    ]
  },
  "use-effect": {
    title: "React useEffect Hook",
    description: "The useEffect Hook handles side effects like fetching data.",
    intro: "React components should ideally just take data and render UI. The `useEffect` Hook handles everything else, known as \"side effects.\" Developers use it to fetch API data, set up timers, or manipulate the DOM directly.",
    example: {
      language: "jsx",
      code: `/* this fetches data */\nimport { useEffect, useState } from "react";\n\nfunction DataLoader() {\n  useEffect(() => {\n    console.log("Component loaded on the screen!");\n  }, []); // Empty array runs once\n}`
    },
    keyPoints: [
      "The first argument is a function that runs the effect.",
      "The second argument is a dependency array.",
      "An empty array \`[]\` makes the effect run only once.",
      "Missing dependencies can cause infinite rendering loops."
    ]
  },
  "use-context": {
    title: "React useContext Hook",
    description: "The useContext Hook reads global data without passing props.",
    intro: "Passing props down through ten levels of components is annoying, known as \"prop drilling.\" The `useContext` Hook creates a global data portal. Any component, no matter how deep, can tap into this portal to read the data instantly.",
    example: {
      language: "jsx",
      code: `/* this reads context */\nimport { useContext } from "react";\nimport { ThemeContext } from "./ThemeContext";\n\nfunction Button() {\n  const theme = useContext(ThemeContext);\n  return <button className={theme}>Click Me</button>;\n}`
    },
    keyPoints: [
      "It solves the problem of \"prop drilling.\"",
      "The \`createContext()\` function builds the portal.",
      "The \`Provider\` wraps the parent component to supply the data.",
      "The \`useContext\` Hook reads the data inside the child component."
    ]
  },
  "use-ref": {
    title: "React useRef Hook",
    description: "The useRef Hook holds data that doesn't trigger re-renders.",
    intro: "The `useRef` Hook is like a secret pocket. It stores data that persists between renders, but unlike `useState`, updating it does not force the component to redraw. Developers also use it to grab direct references to HTML elements.",
    example: {
      language: "jsx",
      code: `/* this references an input */\nimport { useRef } from "react";\n\nfunction FocusApp() {\n  const inputRef = useRef();\n  return (\n    <>\n      <input ref={inputRef} />\n      <button onClick={() => inputRef.current.focus()}>Focus!</button>\n    </>\n  );\n}`
    },
    keyPoints: [
      "It returns an object with a \`.current\` property.",
      "Changing \`.current\` does not re-render the component.",
      "It provides direct access to HTML DOM nodes.",
      "It is perfect for managing timers or focusing inputs."
    ]
  },
  "use-memo": {
    title: "React useMemo Hook",
    description: "The useMemo Hook caches expensive calculations to improve performance.",
    intro: "Sometimes a component runs a slow, heavy math calculation every time it renders. The `useMemo` Hook fixes this by remembering the answer from the last render. It only recalculates the math if the input data actually changes.",
    example: {
      language: "jsx",
      code: `/* this caches a calculation */\nimport { useMemo } from "react";\n\nfunction MathApp({ number }) {\n  const doubled = useMemo(() => {\n    return slowMathCalculation(number);\n  }, [number]); // Only re-runs if 'number' changes\n}`
    },
    keyPoints: [
      "\"Memoization\" means caching a result.",
      "It stops slow functions from running needlessly.",
      "The first argument is the calculation function.",
      "The second argument is the dependency array."
    ]
  },
  "use-callback": {
    title: "React useCallback Hook",
    description: "The useCallback Hook caches function definitions to improve performance.",
    intro: "React recreates every function inside a component every time the component renders. If you pass these functions to child components, it causes unnecessary re-renders. The `useCallback` Hook caches the actual function itself so it doesn't get recreated.",
    example: {
      language: "jsx",
      code: `/* this caches a function */\nimport { useCallback } from "react";\n\nfunction Parent({ data }) {\n  const handleClick = useCallback(() => {\n    console.log("Clicked!");\n  }, []); // Caches the function forever\n}`
    },
    keyPoints: [
      "It is almost identical to \`useMemo\`.",
      "\`useMemo\` caches the *result* of a function.",
      "\`useCallback\` caches the *function itself*.",
      "It prevents unnecessary child component renders."
    ]
  },
  "custom-hooks": {
    title: "React Custom Hooks",
    description: "Custom Hooks bundle complex logic into reusable functions.",
    intro: "If you find yourself writing the exact same `useState` and `useEffect` logic in three different components, you can combine them into a Custom Hook. This cleans up your code and makes your logic completely reusable.",
    example: {
      language: "jsx",
      code: `/* this creates a custom hook */\nimport { useState } from "react";\n\nfunction useToggle(initial) {\n  const [value, setValue] = useState(initial);\n  const toggle = () => setValue(!value);\n  return [value, toggle];\n}`
    },
    keyPoints: [
      "Custom Hooks must always start with the word \"use\".",
      "They can call other React Hooks inside them.",
      "They are just regular JavaScript functions.",
      "They help keep components clean and strictly focused on UI."
    ]
  },
  "event-handling": {
    title: "React Event Handling",
    description: "React handles user clicks, typing, and hovering securely.",
    intro: "React handles events very similarly to standard HTML, but with a few syntax changes. Event names are written in camelCase, and developers pass actual JavaScript functions inside curly braces instead of passing string names.",
    example: {
      language: "jsx",
      code: `/* this handles a click event */\nfunction SubmitButton() {\n  function handleClick(event) {\n    event.preventDefault();\n    console.log("Form submitted!");\n  }\n  return <button onClick={handleClick}>Submit</button>;\n}`
    },
    keyPoints: [
      "Use camelCase for events (e.g., \`onClick\`, \`onChange\`).",
      "Pass the function directly: \`onClick={handleClick}\`.",
      "Do not add parentheses \`()\` when passing the function.",
      "React automatically passes the \`event\` object to the function."
    ]
  },
  "conditional-rendering": {
    title: "React Conditional Rendering",
    description: "React conditional rendering shows different components based on state.",
    intro: "React lets developers show completely different UI elements depending on a specific condition. For example, if a user is logged in, show the dashboard. If they are not logged in, show the login screen.",
    example: {
      language: "jsx",
      code: `/* this renders conditionally */\nfunction Greeting({ isLoggedIn }) {\n  if (isLoggedIn) {\n    return <h2>Welcome back!</h2>;\n  }\n  return <h2>Please log in.</h2>;\n}`
    },
    keyPoints: [
      "You can use standard JavaScript \`if\` statements.",
      "The \`&&\` operator renders an element if true.",
      "The ternary operator \`? :\` acts as an inline if-else statement.",
      "Returning \`null\` hides the component completely."
    ]
  },
  "lists-keys": {
    title: "React Lists and Keys",
    description: "React renders lists of data dynamically using arrays.",
    intro: "When developers have an array of data, like ten different blog posts, they don't write the HTML ten times. Instead, they use the JavaScript `map()` method to loop through the array and render a component for every single item automatically.",
    example: {
      language: "jsx",
      code: `/* this renders a list */\nfunction CarList({ cars }) {\n  return (\n    <ul>\n      {cars.map((car) => (\n        <li key={car.id}>{car.name}</li>\n      ))}\n    </ul>\n  );\n}`
    },
    keyPoints: [
      "The \`map()\` method loops over an array of data.",
      "Every item in a list must have a unique \`key\` prop.",
      "The \`key\` helps React update the list efficiently.",
      "Do not use the array index as a key if the list can change."
    ]
  },
  forms: {
    title: "React Forms",
    description: "React handles form inputs by syncing them with state.",
    intro: "In standard HTML, input boxes store their own data. In React, developers use state to store the input data securely. This concept is called a \"Controlled Component,\" where React completely controls what the user types.",
    example: {
      language: "jsx",
      code: `/* this handles a form input */\nfunction MyForm() {\n  const [name, setName] = useState("");\n  return (\n    <input \n      value={name} \n      onChange={(e) => setName(e.target.value)} \n    />\n  );\n}`
    },
    keyPoints: [
      "The \`value\` prop links the input directly to a state variable.",
      "The \`onChange\` event updates the state whenever the user types.",
      "A controlled component prevents invalid data submission.",
      "The \`onSubmit\` event handles the final form submission."
    ]
  },
  "context-api": {
    title: "React Context API",
    description: "The React Context API manages global application state.",
    intro: "While the `useContext` Hook reads global data, the Context API provides the actual structure to build it. Developers use it to store themes, user login information, or language preferences that the entire application needs to access.",
    example: {
      language: "jsx",
      code: `/* this sets up Context */\nimport { createContext } from "react";\n\nexport const ThemeContext = createContext("light");\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value="dark">\n      <MainPage />\n    </ThemeContext.Provider>\n  );\n}`
    },
    keyPoints: [
      "\`createContext()\` initializes the empty portal.",
      "The \`Provider\` component wraps around child components.",
      "The \`value\` prop passes the actual data into the portal.",
      "All children inside the Provider can read the global data."
    ]
  },
  router: {
    title: "React Router",
    description: "React Router handles navigation across different pages.",
    intro: "React naturally builds \"single-page\" applications that do not load new HTML files. To create the illusion of multiple pages, developers use React Router. It swaps out different components depending on the URL the user clicks.",
    example: {
      language: "jsx",
      code: `/* this sets up routing */\nimport { BrowserRouter, Routes, Route } from "react-router-dom";\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}`
    },
    keyPoints: [
      "It requires installing the \`react-router-dom\` package.",
      "\`BrowserRouter\` wraps the entire application.",
      "\`Routes\` groups all the individual paths together.",
      "\`Route\` links a specific URL path to a specific component."
    ]
  },
  "code-splitting": {
    title: "React Code Splitting",
    description: "Code splitting breaks large React apps into smaller, faster chunks.",
    intro: "When developers build a massive application, downloading the entire website at once makes it load very slowly. Code splitting tells React to only download the code for the specific page the user is currently viewing, speeding up load times significantly.",
    syntax: {
      language: "jsx",
      code: `/* this delays loading a component */\nimport { lazy, Suspense } from 'react';\nconst HeavyChart = lazy(() => import('./HeavyChart'));\n\n<Suspense fallback={<div>Loading chart...</div>}>\n  <HeavyChart />\n</Suspense>`
    },
    keyPoints: [
      "It uses the \`lazy()\` function to delay loading.",
      "The \`Suspense\` component wraps the delayed code.",
      "The \`fallback\` prop shows a loading spinner while it downloads.",
      "It drastically improves website performance."
    ]
  },
  "error-boundaries": {
    title: "React Error Boundaries",
    description: "Error Boundaries stop the entire application from crashing.",
    intro: "If a single React component crashes due to a JavaScript error, it usually takes down the whole website, leaving a blank white screen. Error Boundaries catch these crashes locally and show a friendly error message instead of breaking everything.",
    example: {
      language: "jsx",
      code: `/* this uses an error boundary */\n<ErrorBoundary fallback={<p>Something went wrong!</p>}>\n  <ChatWidget />\n</ErrorBoundary>`
    },
    keyPoints: [
      "They act like a safety net for your components.",
      "They catch errors anywhere in their child components.",
      "Currently, developers must use Class Components to build them from scratch.",
      "Libraries like \`react-error-boundary\` provide easier functional alternatives."
    ]
  },
  performance: {
    title: "React Performance",
    description: "React performance optimization keeps the website running smoothly.",
    intro: "While React is naturally fast, a poorly written application will still feel slow and laggy. Developers use specific techniques and Hooks to prevent React from redrawing the screen when it doesn't need to.",
    keyPoints: [
      "Use \`React.memo\` to skip re-rendering unchanged components.",
      "Use \`useMemo\` to cache heavy math calculations.",
      "Use \`useCallback\` to cache functions passed to children.",
      "Always add unique \`key\` props to lists to help React update them."
    ]
  },
  "testing-basics": {
    title: "React Testing Basics",
    description: "React testing ensures your components work before users see them.",
    intro: "Developers write automated tests that click buttons and read text on the screen to make sure the app isn't broken. The React Testing Library is the industry standard tool because it tests the app exactly the way a real human would use it.",
    example: {
      language: "jsx",
      code: `/* this tests a button */\nimport { render, screen } from '@testing-library/react';\nimport App from './App';\n\ntest('renders the submit button', () => {\n  render(<App />);\n  const button = screen.getByText('Submit');\n  expect(button).toBeInTheDocument();\n});`
    },
    keyPoints: [
      "React Testing Library is built into Create React App and Vite templates.",
      "It tests what the user sees, not how the code works internally.",
      "Use \`screen.getByText()\` to find elements.",
      "Testing prevents bugs from reaching production servers."
    ]
  }
};
