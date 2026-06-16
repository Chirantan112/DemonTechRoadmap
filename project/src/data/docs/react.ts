import { TopicContent } from './contentMap';

export const reactData: Record<string, TopicContent> = {
  introduction: {
    title: "React Introduction",
    description: "React is a JavaScript library for building user interfaces.",
    intro: "React is used to build single-page applications. React allows us to create reusable UI components.",
    keyPoints: [
      "React was created by Facebook.",
      "React is a tool for building UI components."
    ]
  },
  setup: {
    title: "React Setup",
    description: "How to set up React in a project.",
    intro: "The easiest way to start learning React is to use Create React App or a framework like Next.js or Vite.",
    syntax: {
      language: "bash",
      code: `npx create-next-app@latest my-app\n# OR\nnpm create vite@latest my-react-app -- --template react`
    }
  },
  jsx: {
    title: "React JSX",
    description: "JSX allows us to write HTML in React.",
    intro: "JSX makes it easier to write and add HTML in React. JSX converts HTML tags into react elements.",
    example: {
      language: "jsx",
      code: `const myElement = <h1>I Love JSX!</h1>;`
    }
  },
  components: {
    title: "React Components",
    description: "Components are independent and reusable bits of code.",
    intro: "They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components. We will focus on Function components.",
    example: {
      language: "jsx",
      code: `function Car() {\n  return <h2>Hi, I am a Car!</h2>;\n}`
    }
  },
  props: {
    title: "React Props",
    description: "Props are arguments passed into React components.",
    intro: "Props are passed to components via HTML attributes. React Props are read-only! You will get an error if you try to change their value.",
    example: {
      language: "jsx",
      code: `function Car(props) {\n  return <h2>I am a {props.brand}!</h2>;\n}\n\nconst myElement = <Car brand="Ford" />;`
    }
  },
  state: {
    title: "React State",
    description: "React components has a built-in state object.",
    intro: "The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders. In functional components, we use the `useState` Hook.",
    keyPoints: [
      "State is mutable (can be changed).",
      "Props are immutable (cannot be changed)."
    ]
  },
  "use-state": {
    title: "React useState Hook",
    description: "The React useState Hook allows us to track state in a function component.",
    intro: "State generally refers to data or properties that need to be tracking in an application.",
    example: {
      language: "jsx",
      code: `import { useState } from "react";\n\nfunction FavoriteColor() {\n  const [color, setColor] = useState("red");\n\n  return (\n    <>\n      <h1>My favorite color is {color}!</h1>\n      <button onClick={() => setColor("blue")}>Blue</button>\n    </>\n  );\n}`
    }
  },
  "use-effect": {
    title: "React useEffect Hook",
    description: "The useEffect Hook allows you to perform side effects in your components.",
    intro: "Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.",
    example: {
      language: "jsx",
      code: `import { useState, useEffect } from "react";\n\nfunction Timer() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    setTimeout(() => {\n      setCount((count) => count + 1);\n    }, 1000);\n  }, []); // <- add empty brackets here\n\n  return <h1>I've rendered {count} times!</h1>;\n}`
    }
  },
  "use-context": {
    title: "React useContext Hook",
    description: "React Context is a way to manage state globally.",
    intro: "It can be used together with the `useState` Hook to share state between deeply nested components more easily than with `useState` alone.",
    syntax: {
      language: "jsx",
      code: `import { useState, createContext, useContext } from "react";\n\nconst UserContext = createContext();`
    }
  },
  "use-ref": {
    title: "React useRef Hook",
    description: "The useRef Hook allows you to persist values between renders.",
    intro: "It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.",
    example: {
      language: "jsx",
      code: `import { useRef } from "react";\n\nfunction App() {\n  const inputElement = useRef();\n\n  const focusInput = () => {\n    inputElement.current.focus();\n  };\n\n  return (\n    <>\n      <input type="text" ref={inputElement} />\n      <button onClick={focusInput}>Focus Input</button>\n    </>\n  );\n}`
    }
  },
  "use-memo": {
    title: "React useMemo Hook",
    description: "The React useMemo Hook returns a memoized value.",
    intro: "Think of memoization as caching a value so that it does not need to be recalculated. The useMemo Hook only runs when one of its dependencies update.",
    example: {
      language: "jsx",
      code: `const calculation = useMemo(() => expensiveCalculation(count), [count]);`
    }
  },
  "use-callback": {
    title: "React useCallback Hook",
    description: "The React useCallback Hook returns a memoized callback function.",
    intro: "Think of memoization as caching a value so that it does not need to be recalculated. The useCallback Hook only runs when one of its dependencies update. It's useful to prevent child components from re-rendering needlessly.",
    example: {
      language: "jsx",
      code: `const addTodo = useCallback(() => {\n  setTodos((t) => [...t, "New Todo"]);\n}, [todos]);`
    }
  },
  "custom-hooks": {
    title: "React Custom Hooks",
    description: "Hooks are reusable functions.",
    intro: "When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with \"use\". Example: `useFetch`.",
    example: {
      language: "jsx",
      code: `import { useState, useEffect } from "react";\n\nconst useFetch = (url) => {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch(url)\n      .then((res) => res.json())\n      .then((data) => setData(data));\n  }, [url]);\n\n  return [data];\n};\nexport default useFetch;`
    }
  },
  "event-handling": {
    title: "React Events",
    description: "Just like HTML DOM events, React can perform actions based on user events.",
    intro: "React events are written in camelCase syntax: `onClick` instead of `onclick`. React event handlers are written inside curly braces: `onClick={shoot}` instead of `onclick=\"shoot()\"`.",
    example: {
      language: "jsx",
      code: `function Football() {\n  const shoot = () => {\n    alert("Great Shot!");\n  }\n\n  return (\n    <button onClick={shoot}>Take the shot!</button>\n  );\n}`
    }
  },
  "conditional-rendering": {
    title: "React Conditional Rendering",
    description: "In React, you can conditionally render components.",
    intro: "There are several ways to do this: `if` statements, logical `&&` operator, or ternary operators.",
    example: {
      language: "jsx",
      code: `function Goal(props) {\n  const isGoal = props.isGoal;\n  return (\n    <>\n      { isGoal ? <MadeGoal/> : <MissedGoal/> }\n    </>\n  );\n}`
    }
  },
  "lists-keys": {
    title: "React Lists and Keys",
    description: "In React, you will render lists with some type of loop.",
    intro: "The JavaScript `map()` array method is generally the preferred method. Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.",
    example: {
      language: "jsx",
      code: `function CarList(props) {\n  const cars = props.cars;\n  return (\n    <ul>\n      {cars.map((car) => <li key={car.id}>{car.brand}</li>)}\n    </ul>\n  );\n}`
    }
  },
  forms: {
    title: "React Forms",
    description: "Just like in HTML, React uses forms to allow users to interact with the web page.",
    intro: "Handling forms is about how you handle the data when it changes value or gets submitted. In React, form data is usually handled by the components with state.",
    example: {
      language: "jsx",
      code: `function MyForm() {\n  const [name, setName] = useState("");\n\n  return (\n    <form>\n      <label>Enter your name:\n        <input\n          type="text" \n          value={name}\n          onChange={(e) => setName(e.target.value)}\n        />\n      </label>\n    </form>\n  )\n}`
    }
  },
  "context-api": {
    title: "React Context API",
    description: "React Context is a way to manage state globally.",
    intro: "See the useContext hook for details. It allows passing data down without having to manually pass props at every level (Prop Drilling).",
    keyPoints: [
      "Use `createContext()` to create a context.",
      "Wrap components in `<Context.Provider value={...}>` to provide value.",
      "Use `useContext(Context)` to consume the value."
    ]
  },
  router: {
    title: "React Router",
    description: "React Router is the standard routing library for React.",
    intro: "It allows navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.",
    example: {
      language: "jsx",
      code: `import { BrowserRouter, Routes, Route } from "react-router-dom";\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}`
    }
  },
  "code-splitting": {
    title: "React Code Splitting",
    description: "Code-Splitting allows you to split your code into various bundles.",
    intro: "This can greatly improve the performance of your app. You can use `React.lazy` and `Suspense`.",
    syntax: {
      language: "jsx",
      code: `import React, { Suspense } from 'react';\n\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\n\nfunction MyComponent() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <OtherComponent />\n      </Suspense>\n    </div>\n  );\n}`
    }
  },
  "error-boundaries": {
    title: "React Error Boundaries",
    description: "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree.",
    intro: "They log those errors, and display a fallback UI instead of the component tree that crashed.",
    keyPoints: [
      "Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.",
      "Currently, you must use a class component to create an error boundary."
    ]
  },
  performance: {
    title: "React Performance",
    description: "Optimizing Performance in React applications.",
    intro: "Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI.",
    keyPoints: [
      "Use React.memo to prevent unnecessary re-renders of components.",
      "Use useMemo to cache expensive calculations.",
      "Use useCallback to cache function references."
    ]
  },
  "testing-basics": {
    title: "React Testing Basics",
    description: "Testing React components.",
    intro: "React Testing Library is a set of helpers that let you test React components without relying on their implementation details.",
    example: {
      language: "jsx",
      code: `import { render, screen } from '@testing-library/react';\nimport App from './App';\n\ntest('renders learn react link', () => {\n  render(<App />);\n  const linkElement = screen.getByText(/learn react/i);\n  expect(linkElement).toBeInTheDocument();\n});`
    }
  }
};
