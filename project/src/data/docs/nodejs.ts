import { TopicContent } from './contentMap';

export const nodejsData: Record<string, TopicContent> = {
  introduction: {
    title: "Node.js Introduction",
    description: "Node.js runs JavaScript code outside of the web browser.",
    intro: "Node.js allows developers to run JavaScript directly on a computer or server instead of just inside a web browser. It is completely free, open-source, and runs on Windows, Mac, and Linux. This means you can build full websites using only JavaScript.",
    keyPoints: [
      "Node.js runs on the server, not the browser.",
      "It handles tasks asynchronously without waiting.",
      "It uses a fast, single-threaded architecture.",
      "Developers use it to build fast, scalable applications."
    ]
  },
  setup: {
    title: "Node.js Setup",
    description: "Node.js requires a quick installation to get started.",
    intro: "To start using Node.js, developers download the installer from the official Node.js website. Once installed, you can open your computer's terminal and run JavaScript files instantly using simple text commands.",
    syntax: {
      language: "bash",
      code: `/* terminal commands */\nnode -v\nnpm -v`
    },
    keyPoints: [
      "Download the installer from nodejs.org.",
      "Run \`node -v\` to check the installed version.",
      "Run \`node filename.js\` to execute a script.",
      "The installation includes NPM automatically."
    ]
  },
  modules: {
    title: "Node.js Modules",
    description: "Node.js modules act like pre-built JavaScript libraries.",
    intro: "Node.js uses modules to organize code into smaller, reusable pieces. Modules work exactly like JavaScript libraries. Node.js comes with several built-in modules that let you create servers or read files without downloading anything extra.",
    example: {
      language: "javascript",
      code: `/* this includes a module */\nvar http = require('http');\n\nhttp.createServer(function (req, res) {\n  res.writeHead(200, {'Content-Type': 'text/plain'});\n  res.end('Hello!');\n}).listen(8080);`
    },
    keyPoints: [
      "Modules are sets of reusable functions.",
      "The \`require()\` function imports a module.",
      "Built-in modules require zero installation.",
      "You can create and export your own modules."
    ]
  },
  "file-system": {
    title: "Node.js File System Module",
    description: "Node.js interacts directly with your computer's files.",
    intro: "The Node.js File System module lets your JavaScript code read, create, update, and delete files on your actual computer. The browser cannot do this for security reasons, making Node.js incredibly powerful.",
    example: {
      language: "javascript",
      code: `/* this reads a file */\nvar fs = require('fs');\n\nfs.readFile('demofile.txt', 'utf8', function(err, data) {\n  if (err) throw err;\n  console.log(data);\n});`
    },
    keyPoints: [
      "Import the module using \`require('fs')\`.",
      "The \`readFile()\` method reads file contents.",
      "The \`writeFile()\` method creates new files.",
      "The \`unlink()\` method deletes existing files."
    ]
  },
  "http-module": {
    title: "Node.js HTTP Module",
    description: "Node.js creates web servers that listen for requests.",
    intro: "Node.js has a built-in HTTP module that transforms your computer into a live web server. The server listens on a specific port and sends text or HTML data back whenever a user tries to load the web page.",
    example: {
      language: "javascript",
      code: `/* this creates a server */\nvar http = require('http');\n\nhttp.createServer(function (req, res) {\n  res.write('Welcome to my server!');\n  res.end();\n}).listen(8080);`
    },
    keyPoints: [
      "Import the module using \`require('http')\`.",
      "The \`createServer()\` method builds the server.",
      "The \`listen()\` method chooses the network port.",
      "The server responds to incoming client requests."
    ]
  },
  "url-module": {
    title: "Node.js URL Module",
    description: "Node.js splits web addresses into readable parts.",
    intro: "The Node.js URL module takes a long, messy web address and breaks it down into pieces. Developers use this to read specific search terms or understand exactly which page the user is trying to visit.",
    example: {
      language: "javascript",
      code: `/* this parses a URL */\nvar url = require('url');\nvar adr = 'http://localhost:8080/default.htm?year=2017&month=february';\nvar q = url.parse(adr, true);\n\nconsole.log(q.pathname); // returns '/default.htm'\nconsole.log(q.query.year); // returns 2017`
    },
    keyPoints: [
      "Import the module using \`require('url')\`.",
      "The \`parse()\` method splits the address.",
      "It extracts the host, pathname, and query strings.",
      "It returns an easy-to-read JavaScript object."
    ]
  },
  npm: {
    title: "Node.js NPM",
    description: "NPM manages millions of free code packages for Node.js.",
    intro: "NPM stands for Node Package Manager. It is the largest software registry in the world. When developers need a tool, like a way to connect to a database or create a login system, they download a free package from NPM instead of writing it from scratch.",
    syntax: {
      language: "bash",
      code: `/* terminal commands */\nnpm init -y\nnpm install express\nnpm install nodemon --save-dev`
    },
    keyPoints: [
      "NPM installs automatically with Node.js.",
      "The registry holds over a million code packages.",
      "The \`package.json\` file tracks installed packages.",
      "Packages install into a \`node_modules\` folder."
    ]
  },
  events: {
    title: "Node.js Events",
    description: "Node.js triggers and listens for custom events.",
    intro: "Node.js operates on an event-driven architecture. This means the server spends most of its time waiting for specific events to happen, like a file opening or a user logging in. Developers can create their own custom events using the built-in Events module.",
    example: {
      language: "javascript",
      code: `/* this handles an event */\nvar events = require('events');\nvar eventEmitter = new events.EventEmitter();\n\neventEmitter.on('login', function () {\n  console.log('User logged in!');\n});\n\neventEmitter.emit('login');`
    },
    keyPoints: [
      "The Events module is built into Node.js.",
      "The \`on()\` method listens for an event to happen.",
      "The \`emit()\` method triggers the event manually.",
      "Events make handling asynchronous data much easier."
    ]
  },
  streams: {
    title: "Node.js Streams",
    description: "Node.js streams process large amounts of data in small chunks.",
    intro: "Streams allow Node.js to read or write data piece by piece instead of loading an entire massive file into memory all at once. This is exactly how video streaming services like Netflix send movies to your browser without crashing your computer.",
    example: {
      language: "javascript",
      code: `/* this reads a stream */\nvar fs = require('fs');\nvar readerStream = fs.createReadStream('large_video.mp4');\n\nreaderStream.on('data', function(chunk) {\n   console.log("Received a chunk of data");\n});`
    },
    keyPoints: [
      "Readable streams let you read data.",
      "Writable streams let you write data.",
      "Duplex streams let you read and write simultaneously.",
      "Streams prevent memory overloads on the server."
    ]
  },
  "express-intro": {
    title: "Express.js Introduction",
    description: "Express is a fast and simple web framework for Node.js.",
    intro: "Writing a full web server using pure Node.js takes a lot of complicated code. Express.js is a free package that simplifies the process drastically. It is the most popular framework for building APIs and websites in Node.js.",
    example: {
      language: "javascript",
      code: `/* this starts an express server */\nconst express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello from Express!');\n});\n\napp.listen(3000);`
    },
    keyPoints: [
      "Express makes setting up a server extremely easy.",
      "It handles complex routing automatically.",
      "It uses middleware to process incoming requests.",
      "It is the \"E\" in the popular MERN stack."
    ]
  },
  "express-routing": {
    title: "Express Routing",
    description: "Express routing handles different URL paths and HTTP methods.",
    intro: "When a user visits your website, they request a specific URL path, like `/about` or `/contact`. Express routing acts like a traffic cop, directing the user's request to the correct block of code based on the URL they typed.",
    example: {
      language: "javascript",
      code: `/* this creates routes */\napp.get('/users', (req, res) => {\n  res.send('Show all users');\n});\n\napp.post('/users', (req, res) => {\n  res.send('Create a new user');\n});`
    },
    keyPoints: [
      "Routes use HTTP methods like GET, POST, PUT, and DELETE.",
      "\`app.get()\` retrieves data from the server.",
      "\`app.post()\` sends new data to the server.",
      "The \`req\` object holds the user's data."
    ]
  },
  "express-middleware": {
    title: "Express Middleware",
    description: "Express middleware modifies requests before they reach the route.",
    intro: "Middleware functions sit in the middle, between the user's incoming request and the final route response. Developers use middleware to log visitors, check if a user is logged in, or format data before the main code runs.",
    example: {
      language: "javascript",
      code: `/* this uses middleware */\nconst myLogger = function (req, res, next) {\n  console.log('User visited the site');\n  next(); // Pass control to the next function\n}\n\napp.use(myLogger);`
    },
    keyPoints: [
      "Middleware functions run in order.",
      "The \`next()\` function moves to the next middleware.",
      "\`app.use()\` applies the middleware to all routes.",
      "If you forget \`next()\`, the server gets stuck loading forever."
    ]
  },
  "rest-apis": {
    title: "REST APIs with Node.js",
    description: "Node.js builds fast RESTful APIs to serve data.",
    intro: "A REST API is a standard way for a server to send raw data to a frontend application like a React website or an iOS app. Instead of sending full HTML pages, the Node.js server sends simple JSON data.",
    example: {
      language: "javascript",
      code: `/* this sends a JSON API response */\napp.get('/api/cars', (req, res) => {\n  const cars = [{brand: 'Ford'}, {brand: 'BMW'}];\n  res.json(cars);\n});`
    },
    keyPoints: [
      "REST APIs communicate using JSON.",
      "Frontend apps fetch this data to build the UI.",
      "APIs use standard HTTP status codes (like 404 for Not Found).",
      "CRUD operations (Create, Read, Update, Delete) map to HTTP methods."
    ]
  },
  mongodb: {
    title: "MongoDB with Node.js",
    description: "MongoDB pairs perfectly with Node.js to store database records.",
    intro: "Node.js applications need a place to save data permanently. MongoDB is a NoSQL database that stores data exactly like JavaScript objects, making it the perfect match for Node.js developers.",
    example: {
      language: "javascript",
      code: `/* this connects to MongoDB */\nconst mongoose = require('mongoose');\n\nmongoose.connect('mongodb://localhost/my_db');\n\nconst UserSchema = new mongoose.Schema({\n  name: String,\n  age: Number\n});`
    },
    keyPoints: [
      "MongoDB is a NoSQL, document-based database.",
      "It stores data in flexible JSON-like documents.",
      "Mongoose is the most popular library to connect Node.js and MongoDB.",
      "It is the \"M\" in the popular MERN stack."
    ]
  },
  "env-vars": {
    title: "Node.js Environment Variables",
    description: "Node.js environment variables hide sensitive passwords and API keys.",
    intro: "Hardcoding passwords into your JavaScript files is dangerous because anyone viewing the code can see them. Developers use environment variables to store sensitive data securely on the server. The code reads these variables invisibly behind the scenes.",
    syntax: {
      language: "javascript",
      code: `/* this uses environment variables */\nrequire('dotenv').config();\nconst dbPassword = process.env.DB_PASSWORD;`
    },
    keyPoints: [
      "The \`process.env\` object holds the variables.",
      "The \`dotenv\` package loads variables from a \`.env\` file.",
      "Never commit your \`.env\` file to GitHub.",
      "They are essential for production server deployments."
    ]
  },
  "auth-basics": {
    title: "Node.js Authentication Basics",
    description: "Node.js authentication ensures only approved users access data.",
    intro: "Websites need to know exactly who is requesting data to keep accounts secure. Node.js typically uses JSON Web Tokens (JWT) to lock down routes. When a user logs in, they get a secure token that they must show every time they request private data.",
    example: {
      language: "javascript",
      code: `/* this creates a secure token */\nconst jwt = require('jsonwebtoken');\nconst token = jwt.sign({ userId: 123 }, 'secret_key', { expiresIn: '1h' });`
    },
    keyPoints: [
      "Authentication verifies user identity.",
      "Authorization checks what data the user is allowed to see.",
      "JWTs securely pass information between client and server.",
      "Tokens eventually expire for security reasons."
    ]
  },
  "error-handling": {
    title: "Node.js Error Handling",
    description: "Node.js/Express error handling prevents server crashes.",
    intro: "Express provides a simple way to catch any errors that happen anywhere on the server. Developers write a special middleware function that catches bad requests, missing files, or broken code, and sends a polite error message to the user instead of crashing.",
    example: {
      language: "javascript",
      code: `/* this catches errors */\napp.use((err, req, res, next) => {\n  console.error(err.message);\n  res.status(500).send('Something broke on the server!');\n});`
    },
    keyPoints: [
      "Error handling middleware takes four arguments instead of three.",
      "The arguments are \`(err, req, res, next)\`.",
      "It belongs at the very bottom of the file, after all other routes.",
      "Sending a 500 status code tells the browser the server failed."
    ]
  },
  deployment: {
    title: "Node.js Deployment",
    description: "Node.js deployment puts the app live on the internet.",
    intro: "When development is finished, the Node.js application must move from a personal computer to a live web server. Developers use cloud platforms to host their code so anyone in the world can access the website or API 24/7.",
    keyPoints: [
      "Always set the environment variable \`NODE_ENV\` to \`production\`.",
      "Let the hosting service choose the port using \`process.env.PORT\`.",
      "Popular hosts include Render, Heroku, Vercel, and DigitalOcean.",
      "Process managers like PM2 keep the server running after crashes."
    ]
  }
};
