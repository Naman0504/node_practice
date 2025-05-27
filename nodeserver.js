// server.js

const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
   // Routing
   if (req.url === "/") {
    res.end("Welcome to the Home Page!");
  } else if (req.url === "/about") {
    res.end("This is the About Page.");
  } else if (req.url === "/contact") {
    res.end("Contact us at: contact@example.com");
  } else {
    res.writeHead(404);
    res.end("404 - Page Not Found");
  }
});

// Server will listen on port 3000
const PORT = 2000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
