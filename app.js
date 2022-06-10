const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history page");
  }

  res.end(`
        <h1>Ooops</h1>
        <p> We are unable to find the page you are looking for </p>
        <a href='/'>Go back Home </a>  
  `);
});

server.listen(5000);
