import { TopicContent } from './contentMap';

export const nodejsData: Record<string, TopicContent> = {
  introduction: {
    title: "Node.js Introduction",
    description: "Node.js is an open source server environment.",
    intro: "Node.js is free, runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.), and uses JavaScript on the server.",
    keyPoints: [
      "Node.js uses asynchronous programming.",
      "Node.js eliminates the waiting, and simply continues with the next request.",
      "Node.js runs single-threaded, non-blocking, asynchronous programming."
    ]
  },
  setup: {
    title: "Node.js Setup",
    description: "How to get started with Node.js.",
    intro: "Download Node.js from the official website and run the installer. After installation, you can run Node.js from the command line.",
    syntax: {
      language: "bash",
      code: `node -v\nnpm -v`
    }
  },
  modules: {
    title: "Node.js Modules",
    description: "Consider modules to be the same as JavaScript libraries.",
    intro: "A set of functions you want to include in your application. Node.js has a set of built-in modules which you can use without any further installation.",
    example: {
      language: "javascript",
      code: `var http = require('http');\n\nhttp.createServer(function (req, res) {\n  res.writeHead(200, {'Content-Type': 'text/html'});\n  res.end('Hello World!');\n}).listen(8080);`
    }
  },
  "file-system": {
    title: "Node.js File System Module",
    description: "The Node.js file system module allows you to work with the file system on your computer.",
    intro: "To include the File System module, use the `require()` method: `var fs = require('fs');`. Common uses: Read files, Create files, Update files, Delete files, Rename files.",
    example: {
      language: "javascript",
      code: `var fs = require('fs');\n\nfs.readFile('demofile1.html', function(err, data) {\n  if (err) throw err;\n  console.log(data);\n});`
    }
  },
  "http-module": {
    title: "Node.js HTTP Module",
    description: "Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).",
    intro: "To include the HTTP module, use the `require()` method: `var http = require('http');`. The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.",
    example: {
      language: "javascript",
      code: `var http = require('http');\n\nhttp.createServer(function (req, res) {\n  res.write('Hello World!'); // write a response to the client\n  res.end(); // end the response\n}).listen(8080); // the server object listens on port 8080`
    }
  },
  "url-module": {
    title: "Node.js URL Module",
    description: "The URL module splits up a web address into readable parts.",
    intro: "To include the URL module, use the `require()` method. You can parse an address with the `url.parse()` method, and it will return a URL object with each part of the address as properties.",
    example: {
      language: "javascript",
      code: `var url = require('url');\nvar adr = 'http://localhost:8080/default.htm?year=2017&month=february';\nvar q = url.parse(adr, true);\n\nconsole.log(q.host); // returns 'localhost:8080'\nconsole.log(q.pathname); // returns '/default.htm'\nconsole.log(q.search); // returns '?year=2017&month=february'\n\nvar qdata = q.query; // returns an object: { year: 2017, month: 'february' }\nconsole.log(qdata.month); // returns 'february'`
    }
  },
  npm: {
    title: "Node.js NPM",
    description: "NPM is a package manager for Node.js packages, or modules.",
    intro: "NPM is the world's largest Software Registry. The registry contains over 800,000 code packages. Open-source developers use npm to share software.",
    syntax: {
      language: "bash",
      code: `npm init\nnpm install <package_name>\nnpm install <package_name> --save-dev`
    }
  },
  events: {
    title: "Node.js Events",
    description: "Node.js is perfect for event-driven applications.",
    intro: "Every action on a computer is an event. Like when a connection is made or a file is opened. Node.js has a built-in module, called \"Events\", where you can create-, fire-, and listen for- your own events.",
    example: {
      language: "javascript",
      code: `var events = require('events');\nvar eventEmitter = new events.EventEmitter();\n\n// Create an event handler:\nvar myEventHandler = function () {\n  console.log('I hear a scream!');\n}\n\n// Assign the event handler to an event:\neventEmitter.on('scream', myEventHandler);\n\n// Fire the 'scream' event:\neventEmitter.emit('scream');`
    }
  },
  streams: {
    title: "Node.js Streams",
    description: "Streams are objects that let you read data from a source or write data to a destination in continuous fashion.",
    intro: "In Node.js, there are four types of streams: Readable, Writable, Duplex, and Transform.",
    example: {
      language: "javascript",
      code: `var fs = require("fs");\nvar data = '';\n\n// Create a readable stream\nvar readerStream = fs.createReadStream('input.txt');\n\n// Set the encoding to be utf8. \nreaderStream.setEncoding('UTF8');\n\n// Handle stream events --> data, end, and error\nreaderStream.on('data', function(chunk) {\n   data += chunk;\n});`
    }
  },
  "express-intro": {
    title: "Express.js Introduction",
    description: "Express is a minimal and flexible Node.js web application framework.",
    intro: "It provides a robust set of features for web and mobile applications. It is the de facto standard server framework for Node.js.",
    example: {
      language: "javascript",
      code: `const express = require('express')\nconst app = express()\nconst port = 3000\n\napp.get('/', (req, res) => {\n  res.send('Hello World!')\n})\n\napp.listen(port, () => {\n  console.log(\`Example app listening on port \${port}\`)\n})`
    }
  },
  "express-routing": {
    title: "Express Routing",
    description: "Routing refers to how an application's endpoints (URIs) respond to client requests.",
    intro: "You define routing using methods of the Express app object that correspond to HTTP methods; for example, `app.get()` to handle GET requests and `app.post` to handle POST requests.",
    example: {
      language: "javascript",
      code: `// Respond to POST request on the root route (/), the application's home page:\napp.post('/', (req, res) => {\n  res.send('Got a POST request')\n})\n\n// Respond to a PUT request to the /user route:\napp.put('/user', (req, res) => {\n  res.send('Got a PUT request at /user')\n})`
    }
  },
  "express-middleware": {
    title: "Express Middleware",
    description: "Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function.",
    intro: "Middleware functions can execute any code, make changes to the request and the response objects, end the request-response cycle, call the next middleware function in the stack.",
    example: {
      language: "javascript",
      code: `var myLogger = function (req, res, next) {\n  console.log('LOGGED')\n  next()\n}\n\napp.use(myLogger)`
    }
  },
  "rest-apis": {
    title: "REST APIs with Node.js",
    description: "Representational State Transfer (REST) is an architectural style for providing standards between computer systems on the web.",
    intro: "Using Express, you can easily build RESTful APIs that serve JSON data.",
    example: {
      language: "javascript",
      code: `app.get('/api/users', (req, res) => {\n  const users = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}];\n  res.json(users);\n});`
    }
  },
  mongodb: {
    title: "MongoDB with Node.js",
    description: "MongoDB is a NoSQL database that works very well with Node.js.",
    intro: "You can use the official MongoDB driver or an Object Data Modeling (ODM) library like Mongoose to interact with MongoDB.",
    example: {
      language: "javascript",
      code: `const mongoose = require('mongoose');\n\nmongoose.connect('mongodb://localhost/my_database');\n\nconst Schema = mongoose.Schema;\nconst SomeModelSchema = new Schema({\n  a_string: String,\n  a_date: Date\n});\n\nconst SomeModel = mongoose.model('SomeModel', SomeModelSchema);`
    }
  },
  "env-vars": {
    title: "Environment Variables in Node.js",
    description: "Environment variables are used to store sensitive data like API keys and database credentials.",
    intro: "You can access environment variables using `process.env`. It is common to use the `dotenv` package to load variables from a `.env` file into `process.env`.",
    syntax: {
      language: "javascript",
      code: `require('dotenv').config();\nconst port = process.env.PORT || 3000;\nconst dbUser = process.env.DB_USER;`
    }
  },
  "auth-basics": {
    title: "Authentication Basics in Node.js",
    description: "Securing routes and authenticating users.",
    intro: "JSON Web Tokens (JWT) are commonly used for stateless authentication in Node.js APIs.",
    example: {
      language: "javascript",
      code: `const jwt = require('jsonwebtoken');\n\n// Create a token\nconst token = jwt.sign({ userId: 123 }, process.env.JWT_SECRET, { expiresIn: '1h' });\n\n// Verify a token\njwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {\n  if (err) throw err;\n  console.log(decoded.userId) // bar\n});`
    }
  },
  "error-handling": {
    title: "Error Handling in Node.js/Express",
    description: "Handling errors gracefully is critical.",
    intro: "In Express, you define error-handling middleware functions in the same way as other middleware functions, except error-handling functions have four arguments instead of three: `(err, req, res, next)`.",
    example: {
      language: "javascript",
      code: `app.use((err, req, res, next) => {\n  console.error(err.stack)\n  res.status(500).send('Something broke!')\n})`
    }
  },
  deployment: {
    title: "Node.js Deployment",
    description: "Getting your Node.js app live on the internet.",
    intro: "Popular options for deploying Node.js applications include Heroku, Vercel, Render, AWS, and DigitalOcean.",
    keyPoints: [
      "Always set `NODE_ENV` to `production`.",
      "Ensure you are using `process.env.PORT` instead of hardcoding the port.",
      "Consider using a process manager like PM2 if deploying to a VPS."
    ]
  }
};
