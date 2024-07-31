const express = require('express'); // Import the Express library
const app = express(); // Create an instance of an Express application
const port = 3000; // Define the port number on which the server will listen
// Middleware to log request details
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route handler
};
// Middleware to add a custom header to the response
const addHeaderMiddleware = (req, res, next) => {
  res.setHeader('X-Custom-Header', 'Hello, this is a custom header!');
  next(); // Pass control to the next middleware or route handler
};

// Register middleware functions
app.use(loggerMiddleware); // Apply loggerMiddleware to all incoming requests
app.use(addHeaderMiddleware); // Apply addHeaderMiddleware to all incoming requests

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, world!'); // Send a text response to the client
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

